import { currentJsonDataState } from "@hooks/useJsonData";
import { usePages } from "@hooks/usePages";
import { useRecoilValue } from "recoil";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { List } from "@components/List";
import { useUI } from "@hooks/useUI";

export const Page = () => {
  const { currentPage } = usePages();
  const { previewDimensions } = useUI();
  const currentJsonData = useRecoilValue(currentJsonDataState);
  const blocks = currentJsonData?.pages[currentPage].blocks;

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
