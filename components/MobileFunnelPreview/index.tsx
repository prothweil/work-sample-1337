import { usePages } from "@hooks/usePages";
import { useRecoilValue } from "recoil";
import { Page } from "@components/Page";
import { currentJsonDataState } from "@hooks/useJsonData";
import { ArrowUturnUp, ChevronLeft, ChevronRight } from "@components/Icons";

export const MobileFunnelPreview = () => {
  const currentJsonData = useRecoilValue(currentJsonDataState);
  const { currentPage, setCurrentPage } = usePages();
  const pageCount = currentJsonData?.pages.length;

  const decrementPage = () => setCurrentPage((p) => p - 1);
  const incrementPage = () => setCurrentPage((p) => p + 1);

  const showNextButton =
    currentJsonData?.pages &&
    pageCount !== undefined &&
    pageCount - 1 > currentPage;
  const showPrevButton = currentPage > 0;

  return (
    <div>
      {currentJsonData ? (
        <Page />
      ) : (
        <div className="absolute right-10 flex flex-col items-end">
          <ArrowUturnUp />
          <p className="italic">Select a JSON with funnel data!</p>
        </div>
      )}
      <div className="text-slate-500 text-sm mt-2">
        {showPrevButton && (
          <button className="float-left" onClick={decrementPage}>
            <ChevronLeft />
          </button>
        )}
        {currentJsonData && (
          <span className="absolute left-1/2 -translate-x-1/2">
            {`${currentPage + 1} / ${pageCount}`}
          </span>
        )}
        {showNextButton && (
          <button className="float-right" onClick={incrementPage}>
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};
