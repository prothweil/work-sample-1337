import { atom, useRecoilState } from "recoil";

export const currentPageCountState = atom<number>({
  key: "currentPageCountState",
  default: 0,
});

/**
 * usePageCount hook that handles setting and sharing the page count state.
 */
export const usePageCount = () => {
  const [currentPageCount, setCurrentPageCount] = useRecoilState(
    currentPageCountState
  );

  const resetPageCount = () => setCurrentPageCount(0);

  return { currentPageCount, resetPageCount, setCurrentPageCount };
};
