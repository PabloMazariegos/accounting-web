import Table from "./components/Table";
import UploadFile from "./components/UploadFile";

const purchasesHeaders = [
  { title: 'Purchase', key: 'purchase' },
  { title: 'Amount', key: 'amount' }
]

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen py-5 px-6">
      <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-6 mb-10 lg:mb-5">
          <div>
            <span className="block text-2xl font-bold mb-3">Sales</span>
            <UploadFile />
          </div>

          <div>
            <Table headers={purchasesHeaders} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <span className="block text-2xl font-bold mb-3">Purchases</span>
            <UploadFile />
          </div>

          <div>
            <Table headers={purchasesHeaders} />
          </div>
        </div>
      </div>
    </main>
  );
}
