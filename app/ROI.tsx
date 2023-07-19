import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ROI() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 bg-[#E8FCFF]">
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
          <TableRow>
            <TableCell className="font-medium">CUC001</TableCell>
            <TableCell>Mall of Asia</TableCell>
            <TableCell>32 km</TableCell>
            <TableCell>July 01, 2023</TableCell>
            <TableCell className="text-right">P250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
    </main>
  );
}
