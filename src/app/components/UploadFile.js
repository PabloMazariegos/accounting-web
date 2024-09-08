"use client";

import { useRef, useState } from "react";

export default function UploadFile() {
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleUpload = ($event) => {
    const files = $event.target.files;

    if (files) {
      setFile(files[0]);
    }
  };

  const ItemNameText = () => {
    return file ? (
      <>
        <span className="font-semibold"> {file.name} </span>
      </>
    ) : (
      <>
        <span className="font-semibold"> Click to upload </span> or drag and
        drop
      </>
    );
  };

  const ItemExtensionText = () => {
    return file ? null : (
      <p className="text-xs text-white group-hover:text-sky-500">XLS, XLSX</p>
    );
  };

  return (
    <div className="space-y-6" onClick={handleClick}>
      <div className="flex w-full items-center justify-center">
        <label
          htmlFor="file"
          className="group flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-500 hover:border-sky-800 hover:bg-opacity-10"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-white group-hover:text-sky-500">
              <ItemNameText />
            </p>

            <ItemExtensionText />
          </div>
          <input
            ref={fileInput}
            type="file"
            className="hidden"
            accept=".xls, .xlsx"
            onInput={handleUpload}
          />
        </label>
      </div>
    </div>
  );
}
