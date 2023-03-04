import { useJsonData } from "@hooks/useJsonData";
import { ChangeEvent, useRef } from "react";

export const FilePicker = () => {
  const { setCurrentJsonData } = useJsonData();
  const fileRef = useRef<HTMLInputElement>(null);

  const readFile = (event: ChangeEvent) => {
    const fileReader = new FileReader();
    const { files } = event.target as HTMLInputElement;

    if (!files) return;

    fileReader.readAsText(new Blob([files[0]], { type: "application/json" }));
    fileReader.onload = (e) => {
      const result = e.target?.result;
      if (result) setCurrentJsonData(JSON.parse(result as string));
    };
  };

  return (
    <>
      <input ref={fileRef} type="file" accept=".json" onChange={readFile} />
    </>
  );
};
