import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
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
    <div className="w-full">
      <Table>
        <TableCaption>A list of my cycling journey.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">Name</TableHead>
            <TableHead className="text-center">Location</TableHead>
            <TableHead className="text-center">Kilometers</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((data) => (
            <TableRow className="text-center">
              <TableCell className="font-medium">{data.name}</TableCell>
              <TableCell>{data.location}</TableCell>
              <TableCell>{data.kilometers} km</TableCell>
              <TableCell>{data.date}</TableCell>
              <TableCell>P{data.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
