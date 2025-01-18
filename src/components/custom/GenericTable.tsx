import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table';

interface Column {
    header: string;
    accessor: string;
}

interface GenericTableProps<T> {
    columns: Column[];
    data: T[];
}

const GenericTable = <T,>({ columns, data }: GenericTableProps<T>) => {
    return (
        <div className="w-full max-w-4xl mx-auto overflow-x-auto shadow-lg rounded-xl">
            <div className="overflow-x-auto">
                <Table className="min-w-full table-auto bg-white">
                    <TableHeader className="bg-gray-300">
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell
                                    key={column.accessor}
                                    className={`px-4 py-2 font-medium text-gray-600 ${index === 0 ? 'w-1/2' : 'w-1/6'}`}
                                >
                                    {column.header}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow key={rowIndex} className="border-t">
                                {columns.map((column, columnIndex) => (
                                    <TableCell
                                        key={column.accessor}
                                        className={`px-4 py-2 text-left text-gray-800 ${columnIndex === 0 ? 'w-1/2' : 'w-1/6'}`}
                                    >
                                        {String((row as any)[column.accessor])}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default GenericTable;
