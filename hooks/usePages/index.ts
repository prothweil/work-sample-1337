import { atom, useRecoilState } from "recoil";

export const currentPageState = atom<number>({
  key: "currentPageState",
  default: 0,
});

export const usePages = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const resetPages = () => setCurrentPage(0);

  return { currentPage, resetPages, setCurrentPage };
};
