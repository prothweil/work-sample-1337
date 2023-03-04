import { atom, useRecoilState } from "recoil";
import { JsonData } from "./types";

export const currentJsonDataState = atom<JsonData | null>({
  key: "currentJsonDataState",
  default: null,
});

export const useJsonData = () => {
  const [, setCurrentJsonData] = useRecoilState(currentJsonDataState);

  return { setCurrentJsonData };
};
