import { Paper, Title } from '@mantine/core'
import { SortableTable } from './SortableTable/SortableTable';

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
      <SortableTable data={assets} defaultSortColumn='ticker' defaultSortOrder='asc' />
    </Paper>
  )
}