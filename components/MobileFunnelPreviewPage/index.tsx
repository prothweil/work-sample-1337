import { currentJsonDataState } from "@hooks/useJsonData";
import { usePages } from "@hooks/usePages";
import { useRecoilValue } from "recoil";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { List } from "@components/List";

export const MobileFunnelPreviewPage = () => {
  const { currentPage } = usePages();
  const currentJsonData = useRecoilValue(currentJsonDataState);
  const blocks = currentJsonData?.pages[currentPage].blocks;

  return (
    <div>
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
            return <img key={b.id} src={b.src as string} alt="" />;
          case "list":
            return <List items={b.items} />;
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
  );
};
