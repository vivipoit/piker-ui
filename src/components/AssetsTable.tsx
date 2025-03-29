import { Paper, Title, Flex, Table, NumberFormatter, Anchor, Box } from '@mantine/core'
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react';
import { useState } from "react";

const UNSORTED_COLUMN_ICON_COLOR = 'gray.3'

export const AssetsTable: React.FC = () => {
  const title = "Assets"
  const assets = [
    { ticker: 'GOOGL', sector: 'Communication Services', country: 'USA', latestPrice: 123.45 },
    { ticker: 'BRK.B', sector: 'Financials', country: 'USA', latestPrice: 1546.78 },
    { ticker: 'DIS', sector: 'Communication Services', country: 'USA', latestPrice: 23.21 },
    { ticker: 'MCD', sector: 'Consumer Discretionary', country: 'USA', latestPrice: 74.32 },
    { ticker: 'NKE', sector: 'Consumer Discretionary', country: 'USA', latestPrice: 143.67 },
    { ticker: 'WMT', sector: 'Consumer Staples', country: 'USA', latestPrice: 233.98 },
    { ticker: 'PEP', sector: 'Consumer Staples', country: 'USA', latestPrice: 11.23 },
    { ticker: 'BAC', sector: 'Financials', country: 'USA', latestPrice: 7.48 },
  ]
  const [sortedAssets, setSortedAssets] = useState(assets);
  const [sortColumn, setSortColumn] = useState('ticker');
  const [sortOrder, setSortOrder] = useState('asc');
  
  const sortAssets = (newSortColumn: keyof typeof assets[0], newSortOrder: string) => {
    const sorted = [...sortedAssets].sort((a, b) => {
      const valA = a[newSortColumn];
      const valB = b[newSortColumn];

      if (typeof valA === "string" && typeof valB === "string") {
        return newSortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }

      return newSortOrder === "asc" ? (valA as number) - (valB as number) : (valB as number) - (valA as number)
    });

    setSortColumn(newSortColumn)
    setSortOrder(newSortOrder)
    setSortedAssets(sorted)
  }

  const resolveIconColor = (iconColumn: string, iconOrder: string) => {
    if (iconColumn !== sortColumn) return UNSORTED_COLUMN_ICON_COLOR
    if (iconOrder !== sortOrder) return UNSORTED_COLUMN_ICON_COLOR

    return ''
  }
  
  return(
    <Paper shadow="sm" radius="md" withBorder p="xl">
      <Title order={2}>
        { title }
      </Title>
      <Table striped highlightOnHover withRowBorders={false}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ position: "relative", textAlign: "center" }}>
              Ticker
              <Box style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>
                <Anchor ms="sm" component="button" c={resolveIconColor('ticker', 'asc')} onClick={() => sortAssets('ticker', 'asc')}>
                  <IconArrowUp />
                </Anchor>
                <Anchor component="button" c={resolveIconColor('ticker', 'desc')} onClick={() => sortAssets('ticker', 'desc')}>
                  <IconArrowDown />
                </Anchor>
              </Box>
            </Table.Th>
            <Table.Th style={{ position: "relative", textAlign: "center" }}>
              Sector
              <Box style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>
                <Anchor ms="sm" component="button" c={resolveIconColor('sector', 'asc')} onClick={() => sortAssets('sector', 'asc')}>
                  <IconArrowUp />
                </Anchor>
                <Anchor component="button" c={resolveIconColor('sector', 'desc')} onClick={() => sortAssets('sector', 'desc')}>
                  <IconArrowDown />
                </Anchor>
              </Box>
            </Table.Th>
            <Table.Th style={{ position: "relative", textAlign: "center" }}>
              Country
              <Box style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>
                <Anchor ms="sm" component="button" c={resolveIconColor('country', 'asc')} onClick={() => sortAssets('country', 'asc')}>
                  <IconArrowUp />
                </Anchor>
                <Anchor component="button" c={resolveIconColor('country', 'desc')} onClick={() => sortAssets('country', 'desc')}>
                  <IconArrowDown />
                </Anchor>
              </Box>
            </Table.Th>
            <Table.Th style={{ position: "relative", textAlign: "center" }}>
              LatestPrice
              <Box style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>
                <Anchor ms="sm" component="button" c={resolveIconColor('latestPrice', 'asc')} onClick={() => sortAssets('latestPrice', 'asc')}>
                  <IconArrowUp />
                </Anchor>
                <Anchor component="button" c={resolveIconColor('latestPrice', 'desc')} onClick={() => sortAssets('latestPrice', 'desc')}>
                  <IconArrowDown />
                </Anchor>
              </Box>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          { sortedAssets.map((asset) => 
            <Table.Tr key={asset.ticker}>
              <Table.Td><Flex justify="Center">{asset.ticker}</Flex></Table.Td>
              <Table.Td><Flex justify="Center">{asset.sector}</Flex></Table.Td>
              <Table.Td><Flex justify="Center">{asset.country}</Flex></Table.Td>
              <Table.Td><Flex justify="Flex-end"><NumberFormatter prefix="$ " thousandSeparator value={asset.latestPrice} /></Flex></Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </Paper>
  )
}