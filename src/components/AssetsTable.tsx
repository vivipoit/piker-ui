import { Paper, Title, Flex, Table, NumberFormatter } from '@mantine/core'

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
  
  return(
    <Paper shadow="sm" radius="md" withBorder p="xl">
      <Title order={2}>
        { title }
      </Title>
      <Table striped highlightOnHover withRowBorders={false}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th><Flex justify="Center">Ticker</Flex></Table.Th>
            <Table.Th><Flex justify="Center">Sector</Flex></Table.Th>
            <Table.Th><Flex justify="Center">Country</Flex></Table.Th>
            <Table.Th><Flex justify="Flex-end">Latest Price</Flex></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          { assets.map((asset) => 
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