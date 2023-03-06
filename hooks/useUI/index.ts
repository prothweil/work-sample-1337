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

/**
 * useUI hook that handles setting and sharing UI states
 * (in this case specifically the preview container dimensions).
 */
export const useUI = () => {
  const [previewDimensions, setPreviewDimensions] = useRecoilState(
    previewDimensionsState
  );

  return { previewDimensions, setPreviewDimensions };
};
