"use client";

import { useRef, useState } from "react";

export default function UploadFile({ fileType }) {
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleUpload = async ($event) => {
    const file = $event.target.files[0];

    setFile(file);

    const formData = new FormData();
    formData.append('type', fileType)
    formData.append('file', file)

    const response = await fetch("/api/upload", {
      method: 'POST',
      body: formData
    })

    const result = await response.json()
    console.log(result)
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
              <span className="font-semibold"> 
                {file ? file.name : 'Click to upload'} 
              </span>
            </p>

            <p className="text-xs text-white group-hover:text-sky-500">
              { file ? '' : 'XLS, XLSX'}
            </p>
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
