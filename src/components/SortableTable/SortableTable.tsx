import { Table } from '@mantine/core'
import { useState, useEffect } from "react";
import { SortableTableHeading } from './SortableTableHeading'
import { SortableTableData } from './SortableTableData'

interface SortableTableProps {
    data: Record<string, string | number>[];
    defaultSortColumn: string;
    defaultSortOrder: string;
}

export const SortableTable: React.FC<SortableTableProps> = ({ data, defaultSortColumn, defaultSortOrder }) => {
    const [sortedData, setSortedData] = useState(data);
    const [sortColumn, setSortColumn] = useState(defaultSortColumn);
    const [sortOrder, setSortOrder] = useState(defaultSortOrder);
  
    const sortData = (newSortColumn: keyof typeof data[0], newSortOrder: string) => {
        setSortedData([...sortedData].sort((a, b) => {
            const valA = a[newSortColumn];
            const valB = b[newSortColumn];

            if (typeof valA === "string" && typeof valB === "string") {
                return newSortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
            }

            return newSortOrder === "asc" ? (valA as number) - (valB as number) : (valB as number) - (valA as number)
        }))
    }

    useEffect(() => {
        sortData(sortColumn, sortOrder)
    }, [sortColumn, sortOrder]);
    
    return(
        <Table striped highlightOnHover withRowBorders={false}>
            <Table.Thead>
                <Table.Tr>
                    { Object.keys(data[0]).map((key) =>
                        <SortableTableHeading key={key} keyName={key} sortColumn={sortColumn} setSortColumn={setSortColumn} sortOrder={sortOrder} setSortOrder={setSortOrder}/>
                    ) }
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
            { sortedData.map((asset) => 
                <Table.Tr key={asset.ticker}>
                    { Object.values(asset).map((value) =>
                        <SortableTableData key={value} value={value} />
                    ) }
                </Table.Tr>
            )}
            </Table.Tbody>
        </Table>
    )
}