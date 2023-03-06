import { useJsonData } from "@hooks/useJsonData";
import { ChangeEvent, useRef } from "react";

export const FilePicker = () => {
  const { setJsonData } = useJsonData();
  const fileRef = useRef<HTMLInputElement>(null);

  /**
   * Read raw file from input, parse as JSON and save the data to state.
   */
  const readFile = (event: ChangeEvent) => {
    const fileReader = new FileReader();
    const { files } = event.target as HTMLInputElement;

    if (!files) return;

    fileReader.readAsText(new Blob([files[0]], { type: "application/json" }));
    fileReader.onload = (e) => {
      const result = e.target?.result;
      if (result === "undefined") return;

      setJsonData(JSON.parse(result as string));
    };
  };

  return (
    <>
      <label
        className="block cursor-pointer text-sm py-2 px-4
  rounded-full border-0
   font-semibold
  bg-indigo-50 text-indigo-700
  hover:bg-indigo-100"
        htmlFor="files"
      >
        Select JSON
      </label>
      <input
        id="files"
        className="hidden"
        ref={fileRef}
        type="file"
        accept=".json"
        onChange={readFile}
      />
    </>
  );
};
