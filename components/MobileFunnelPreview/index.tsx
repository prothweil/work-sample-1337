import { usePageCount } from "@hooks/usePageCount";
import { useRecoilValue } from "recoil";
import { Page } from "@components/Page";
import { currentJsonDataState } from "@hooks/useJsonData";
import { ArrowUturnUp, ChevronLeft, ChevronRight } from "@components/Icons";

export const MobileFunnelPreview = () => {
  const currentJsonData = useRecoilValue(currentJsonDataState);
  const { currentPageCount, setCurrentPageCount } = usePageCount();
  const pageCount = currentJsonData?.pages.length;

  const decrementPage = () => setCurrentPageCount((p) => p - 1);
  const incrementPage = () => setCurrentPageCount((p) => p + 1);

  const showNextButton =
    currentJsonData?.pages &&
    pageCount !== undefined &&
    pageCount - 1 > currentPageCount;
  const showPrevButton = currentPageCount > 0;

  return (
    <div className="flex justify-center">
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
              {`${currentPageCount + 1} / ${pageCount}`}
            </span>
          )}
          {showNextButton && (
            <button className="float-right" onClick={incrementPage}>
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
