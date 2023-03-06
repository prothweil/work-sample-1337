import { atom, useRecoilState } from "recoil";
import { usePageCount } from "@hooks/usePageCount";
import { JsonData } from "./types";

export const currentJsonDataState = atom<JsonData | null>({
  key: "currentJsonDataState",
  default: null,
});

/**
 * useJsonData hook that handles setting the data state.
 */
export const useJsonData = () => {
  const [, setCurrentJsonData] = useRecoilState(currentJsonDataState);
  const { resetPageCount } = usePageCount();

  const setJsonData = (d: JsonData) => {
    // since we want to start at the first page when loading new data,
    // reset the page count to the initial value.
    resetPageCount();
    setCurrentJsonData(d);
  };

  return { setJsonData };
};
