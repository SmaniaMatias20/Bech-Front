import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface TableRow {
    element: string;
    values: (string | number)[];
}

interface GenericTableProps {
    title: string;
    dates: string[];
    rows: TableRow[];
}

export function GenericTable({ title, dates, rows }: GenericTableProps) {
    return (
        <Table className="w-full rounded-xl overflow-hidden">
            <TableHeader>
                <TableRow>
                    <TableHead className="bg-gray-200 font-medium text-gray-700 rounded-tl-xl w-1/2">
                        {title}
                    </TableHead>
                    {dates.map((date, index) => (
                        <TableHead
                            key={index}
                            className="bg-gray-200 font-medium text-gray-700 w-1/6"
                        >
                            {date}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium bg-gray-50 w-1/2">
                            {row.element}
                        </TableCell>
                        {row.values.map((value, valueIndex) => (
                            <TableCell key={valueIndex} className="w-1/6">
                                {value}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
