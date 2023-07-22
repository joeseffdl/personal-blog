import sampleData from "@/data/sample.json";
import ROITable from "./ROITable";
import TableDescription from "./TableDescription";

export default function ROI() {
  const individualAmounts = sampleData.map((data) => data.amount)
  const totalSum = individualAmounts.reduce((sum, amount) => sum + amount, 0)

  return (
    <main className="flex h-screen items-center justify-between p-24 bg-[#E8FCFF]">
      <ROITable />
      <TableDescription totalSum={totalSum} />
    </main>
  )
}
