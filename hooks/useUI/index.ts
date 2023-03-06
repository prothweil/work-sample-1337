import { atom, useRecoilState } from "recoil";

interface previewDimensions {
  height: number;
  width: number;
}

export const previewDimensionsState = atom<previewDimensions>({
  key: "previewDimensionsState",
  default: {
    height: 600,
    width: 375,
  },
});

export const useUI = () => {
  const [previewDimensions, setPreviewDimensions] = useRecoilState(
    previewDimensionsState
  );

  return { previewDimensions, setPreviewDimensions };
};
