import { Table, Flex, NumberFormatter } from '@mantine/core'

interface SortableTableDataProps {
    value: string | number;
}

export const SortableTableData: React.FC<SortableTableDataProps> = ({ value }) => {
    const valueIsString = typeof value === 'string'

    return(
        <Table.Td>
            <Flex justify={valueIsString ? 'Center' : 'Flex-end'}>
                {valueIsString ?
                    value
                :
                    <NumberFormatter prefix="$ " thousandSeparator value={value} />
                }
            </Flex>
        </Table.Td>
    )
}