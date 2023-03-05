import { atom, useRecoilState } from "recoil";
import { usePages } from "@hooks/usePages";
import { JsonData } from "./types";

export const currentJsonDataState = atom<JsonData | null>({
  key: "currentJsonDataState",
  default: null,
});

export const useJsonData = () => {
  const [, setCurrentJsonData] = useRecoilState(currentJsonDataState);
  const { resetPages } = usePages();

  const setJsonData = (d: JsonData) => {
    resetPages();
    setCurrentJsonData(d);
  };

  return { setJsonData };
};
