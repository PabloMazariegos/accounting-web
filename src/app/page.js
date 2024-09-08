import Table from "./components/Table";
import UploadFile from "./components/UploadFile";
import constants from "@/constants";

const purchasesHeaders = [
  { title: "Purchase", key: "purchase" },
  { title: "Amount", key: "amount" },
];

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen px-6 py-5">
      <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2">
        <div className="mb-10 flex flex-col gap-6 lg:mb-5">
          <div>
            <span className="mb-3 block text-2xl font-bold">Sales</span>
            <UploadFile fileType={constants.SALES_FILE} />
          </div>

          <div>
            <Table headers={purchasesHeaders} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <span className="mb-3 block text-2xl font-bold">Purchases</span>
            <UploadFile fileType="TEST" />
          </div>

          <div>
            <Table headers={purchasesHeaders} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <span className="mb-3 block text-2xl font-bold">Summary</span>
          </div>
        </div>
      </div>
    </main>
  );
}
