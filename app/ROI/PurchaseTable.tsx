import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PurchaseTable() {
  return (
    <Table>
      <TableCaption>A list of my cycling accesories purchased.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Item</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Cycling Shorts</TableCell>
          <TableCell>P250.00</TableCell>
          <TableCell className="text-right">July 01,2023</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
