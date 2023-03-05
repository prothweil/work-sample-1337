import { usePages } from "@hooks/usePages";
import { useRecoilValue } from "recoil";
import { MobileFunnelPreviewPage } from "@components/MobileFunnelPreviewPage";
import { currentJsonDataState } from "@hooks/useJsonData";

export const MobileFunnelPreview = () => {
  const currentJsonData = useRecoilValue(currentJsonDataState);
  const { currentPage, setCurrentPage } = usePages();

  const decrementPage = () => setCurrentPage((p) => p - 1);
  const incrementPage = () => setCurrentPage((p) => p + 1);

  const showNextButton =
    currentJsonData?.pages && currentJsonData?.pages.length - 1 > currentPage;
  const showPrevButton = currentPage > 0;

  return (
    <div>
      <div>
        {currentJsonData ? (
          <MobileFunnelPreviewPage />
        ) : (
          <h2>Please select a JSON with funnel data</h2>
        )}
      </div>
      <div>
        {showPrevButton && <button onClick={decrementPage}>Prev</button>}
        {currentJsonData && currentPage + 1}
        {showNextButton && <button onClick={incrementPage}>Next</button>}
      </div>
    </div>
  );
};
