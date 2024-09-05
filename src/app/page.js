import UploadFile from "./components/UploadFile";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen py-5">
      <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="block text-2xl font-bold">Sales</span>
          <UploadFile />
        </div>

        <div className="flex flex-col gap-4">
          <span className="block text-2xl font-bold">Purchases</span>
          <UploadFile />
        </div>
      </div>
    </main>
  );
}
