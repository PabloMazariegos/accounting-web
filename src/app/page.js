import Stepper from "./components/stepper/Stepper";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <div className="mb-5 flex h-20 items-center border-b border-gray-700">
        <h1 className="text-3xl font-bold">Accounting web</h1>
      </div>

      <div className="mb-4 flex flex-wrap gap-0 md:gap-3">
        <div className="mb-4 w-full md:mb-0 md:w-1/4">
          <Stepper />
        </div>

        <div className="mb-4 w-full md:mb-0 md:w-1/2">Content</div>
      </div>

      <div className="mb-4 flex flex-wrap justify-between">
        <div className="mb-4 w-1/3 md:mb-0 md:w-1/6">
          <button
            type="button"
            className="w-full rounded-lg border border-solid border-gray-200 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-300 hover:text-black"
          >
            Previous
          </button>
        </div>

        <div className="mb-4 w-1/3 md:mb-0 md:w-1/6">
          <button
            type="button"
            className="w-full rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
