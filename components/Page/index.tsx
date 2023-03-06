import { currentJsonDataState } from "@hooks/useJsonData";
import { usePageCount } from "@hooks/usePageCount";
import { useRecoilValue } from "recoil";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { List } from "@components/List";
import { useUI } from "@hooks/useUI";

export const Page = () => {
  const { currentPageCount } = usePageCount();
  const { previewDimensions } = useUI();
  const currentJsonData = useRecoilValue(currentJsonDataState);
  const blocks = currentJsonData?.pages[currentPageCount].blocks;

  return (
    <>
      <div className="text-center mb-2">
        <span className="text-slate-400 text-xs">{`${currentJsonData?.name} - ${previewDimensions.width}x${previewDimensions.height}px`}</span>
      </div>
      <div
        className="border-slate-600 border-solid border-8 rounded-2xl drop-shadow-xl mb-3"
        style={{
          backgroundColor: currentJsonData?.bgColor,
        }}
      >
        <div
          className="p-3 overflow-y-scroll"
          style={{
            height: previewDimensions.height,
            width: previewDimensions.width,
          }}
        >
          {blocks?.map((b) => {
            switch (b.type) {
              case "button":
                return (
                  <Button
                    key={b.id}
                    bgColor={b.bgColor}
                    color={b.color}
                    text={b.text}
                  />
                );
              case "image":
                // Let's use <img> instead of <Image> here, since we can't
                // know for sure the exact dimensions of the images
                // from the current set of JSON data.
                // Using the 'fill' prop would work, but then we need to work around that as well.
                return (
                  <img
                    key={b.id}
                    className="rounded-md mb-3"
                    src={b.src as string}
                    alt=""
                  />
                );
              case "list":
                return <List key={b.id} items={b.items} />;
              case "text":
                return (
                  <Text
                    key={b.id}
                    align={b.align as CanvasTextAlign}
                    color={b.color}
                    text={b.text}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </>
  );
};
