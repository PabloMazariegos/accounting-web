export default function UploadFile() {
  return (
    <div className="space-y-6">
      <div>
        <span className="text-sm font-light">Upload file</span>
        <div className="flex w-full items-center justify-center">
          <label
            htmlFor="file"
            className="flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-gray-700 hover:border-gray-500 hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                XLS, XLSX
              </p>
            </div>
            <input id="sales-file" type="file" className="hidden" accept=".xls, .xlsx" />
          </label>
        </div>
      </div>
    </div>
  );
}
