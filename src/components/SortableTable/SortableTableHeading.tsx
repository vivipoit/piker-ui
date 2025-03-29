import { Table, Anchor, Box } from '@mantine/core'
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react';

const UNSORTED_COLUMN_ICON_COLOR = 'gray.3'

interface SortableTableHeadingProps {
    keyName: string;
    sortFunction: (newSortColumn: string, newSortOrder: string) => void;
    sortColumn: string;
    sortOrder: string;
}

export const SortableTableHeading: React.FC<SortableTableHeadingProps> = ({ keyName, sortFunction, sortColumn, sortOrder }) => {
    const resolveIconColor = (iconColumn: string, iconOrder: string) => {
        if (iconColumn !== sortColumn) return UNSORTED_COLUMN_ICON_COLOR
        if (iconOrder !== sortOrder) return UNSORTED_COLUMN_ICON_COLOR

        return ''
    }

    const columnTitle = () => {
        return keyName.replace(/([A-Z])/g, ' $1').replace(/^./, (match) => match.toUpperCase());
    }
    
    return(
        <Table.Th style={{ position: "relative", textAlign: "center" }}>
            {columnTitle()}
            <Box style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>
                <Anchor ms="sm" component="button" c={resolveIconColor(keyName, 'asc')} onClick={() => sortFunction(keyName, 'asc')}>
                    <IconArrowUp />
                </Anchor>
                <Anchor component="button" c={resolveIconColor(keyName, 'desc')} onClick={() => sortFunction(keyName, 'desc')}>
                    <IconArrowDown />
                </Anchor>
            </Box>
        </Table.Th>
    )
}