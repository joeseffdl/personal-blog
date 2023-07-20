import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import sampleData from "@/data/sample.json"

export default function ROITable() {
    return (
      <Table>
        <TableCaption>A list of my cycling journey.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Kilometers</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((data) => (
            <TableRow>
              <TableCell className="font-medium">{data.name}</TableCell>
              <TableCell>{data.location}</TableCell>
              <TableCell>{data.kilometers} km</TableCell>
              <TableCell>{data.date}</TableCell>
              <TableCell className="text-right">P{data.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
};
