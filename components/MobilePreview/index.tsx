import { currentJsonDataState } from "@hooks/useJsonData";
import { useRecoilValue } from "recoil";

export const MobilePreview = () => {
  const currentJsonData = useRecoilValue(currentJsonDataState);

  return (
    <>
      <h1>Json Data</h1>
      {currentJsonData ? (
        currentJsonData.name
      ) : (
        <h2>Please select a JSON with funnel data</h2>
      )}
    </>
  );
};
