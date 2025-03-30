import { Table, Anchor, Box } from '@mantine/core'
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react';

const UNSORTED_COLUMN_ICON_COLOR = 'gray.3'

interface SortableTableHeadingProps {
    keyName: string;
    sortColumn: string;
    setSortColumn: (newSortColumn: string) => void;
    sortOrder: string;
    setSortOrder: (newSortOrder: string) => void;
}

export const SortableTableHeading: React.FC<SortableTableHeadingProps> = ({ keyName, sortColumn, setSortColumn, sortOrder, setSortOrder }) => {
    const columnTitle = () => {
        return keyName.replace(/([A-Z])/g, ' $1').replace(/^./, (match) => match.toUpperCase());
    }

    const resolveIconColor = (iconOrder: string) => {
        if (keyName !== sortColumn) return UNSORTED_COLUMN_ICON_COLOR
        if (iconOrder !== sortOrder) return UNSORTED_COLUMN_ICON_COLOR

        return ''
    }
    
    const sortByThisColumn = (newSortOrder: string) => {
        setSortColumn(keyName)
        setSortOrder(newSortOrder)
    }

    return(
        <Table.Th style={{ position: "relative", textAlign: "center" }}>
            {columnTitle()}
            <Box style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>
                <Anchor ms="sm" component="button" c={resolveIconColor('asc')} onClick={() => sortByThisColumn('asc')}>
                    <IconArrowUp />
                </Anchor>
                <Anchor component="button" c={resolveIconColor('desc')} onClick={() => sortByThisColumn('desc')}>
                    <IconArrowDown />
                </Anchor>
            </Box>
        </Table.Th>
    )
}