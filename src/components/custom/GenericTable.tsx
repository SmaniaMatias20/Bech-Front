import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table';

const GenericTable = <T extends {}>({ columns, data }: { columns: { header: string; accessor: keyof T }[]; data: T[] }) => {
    return (
        <div className="w-full max-w-4xl mx-auto overflow-x-auto shadow-lg rounded-xl">
            <Table className="w-full table-fixed bg-white">
                <TableHeader className="bg-gray-200">
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableCell
                                key={column.header}
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
                            {columns.map((column, index) => (
                                <TableCell
                                    key={String(column.accessor)}
                                    className={`px-4 py-2 text-left text-gray-800 ${index === 0 ? 'w-1/2' : 'w-1/6'}`}
                                >
                                    {String(row[column.accessor])}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default GenericTable;
