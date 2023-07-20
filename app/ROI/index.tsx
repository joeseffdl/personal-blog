import sampleData from "@/data/sample.json";
import ROITable from "./ROITable";

export default function ROI() {
  const individualAmounts = sampleData.map((data) => data.amount)
  const totalSum = individualAmounts.reduce((sum, amount) => sum + amount, 0)

  return (
    <main className="flex h-screen items-center justify-between p-24 bg-[#E8FCFF]">
      <div className="w-full">
        <ROITable />
        
      </div>
      <div className="w-full flex items-center justify-center">
        {((totalSum / 16250) * 100).toFixed(2)}%
      </div>
    </main>
  )
}
