import { Paper, Title, Flex, Table, NumberFormatter, Anchor } from '@mantine/core'
import { IconSortAscendingLetters, IconSortAscendingNumbers } from '@tabler/icons-react';
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
  const [sortedByColumn, setSortedByColumn] = useState('');
  
  const sortAssets = (column: keyof typeof assets[0]) => {
    const sorted = [...sortedAssets].sort((a, b) => {
      const valA = a[column];
      const valB = b[column];

        if (typeof valA === "string" && typeof valB === "string") {
          return valA.localeCompare(valB);
        }

        return (valA as number) - (valB as number);
    });

    setSortedByColumn(column)
    setSortedAssets(sorted)
  }
  
  return(
    <Paper shadow="sm" radius="md" withBorder p="xl">
      <Title order={2}>
        { title }
      </Title>
      <Table striped highlightOnHover withRowBorders={false}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Flex justify="Center">
                Ticker
                <Anchor component="button" c={sortedByColumn !== 'ticker' ? UNSORTED_COLUMN_ICON_COLOR : ''} onClick={() => sortAssets('ticker')}>
                  <IconSortAscendingLetters />
                </Anchor>
              </Flex>
            </Table.Th>
            <Table.Th>
              <Flex justify="Center">
                Sector
                <Anchor component="button" c={sortedByColumn !== 'sector' ? UNSORTED_COLUMN_ICON_COLOR : ''} onClick={() => sortAssets('sector')}>
                  <IconSortAscendingLetters />
                </Anchor>
              </Flex>
            </Table.Th>
            <Table.Th>
              <Flex justify="Center">
                Country
                <Anchor component="button" c={sortedByColumn !== 'country' ? UNSORTED_COLUMN_ICON_COLOR : ''} onClick={() => sortAssets('country')}>
                  <IconSortAscendingLetters />
                </Anchor>
              </Flex>
            </Table.Th>
            <Table.Th>
              <Flex justify="Flex-end">
                Latest Price
                <Anchor component="button" c={sortedByColumn !== 'latestPrice' ? UNSORTED_COLUMN_ICON_COLOR : ''} onClick={() => sortAssets('latestPrice')}>
                  <IconSortAscendingNumbers />
                </Anchor>
              </Flex>
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