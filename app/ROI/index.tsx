import { ROITable } from "./ROITable";
import TableDescription from "./TableDescription";
import { columns } from "./Columns";
import { sampleData } from "./SampleData";

export default function ROI() {
  const individualAmounts = sampleData.map((data) => data.amount);
  const totalSum = individualAmounts.reduce((sum, amount) => sum + amount, 0);

  return (
    <main className="flex min-h-screen items-center justify-between px-40 py-20 bg-[#E8FCFF]">
      <ROITable columns={columns} data={sampleData} />
      <TableDescription totalSum={totalSum} />
    </main>
  );
}
