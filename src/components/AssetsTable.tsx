import { Paper, Title } from '@mantine/core'
import { SortableTable } from './SortableTable/SortableTable';

export const AssetsTable: React.FC = () => {
  const title = "Assets"
  const assets = [
    { ticker: 'GOOGL', sector: 'Communication Services', country: 'USA', averagePrice: 123.40, latestPrice: 123.45 },
    { ticker: 'BRK.B', sector: 'Financials', country: 'USA', averagePrice: 1123.45, latestPrice: 1546.78 },
    { ticker: 'DIS', sector: 'Communication Services', country: 'USA', averagePrice: 13.45, latestPrice: 23.21 },
    { ticker: 'MCD', sector: 'Consumer Discretionary', country: 'USA', averagePrice: 103.44, latestPrice: 74.32 },
    { ticker: 'NKE', sector: 'Consumer Discretionary', country: 'USA', averagePrice: 123.38, latestPrice: 143.67 },
    { ticker: 'WMT', sector: 'Consumer Staples', country: 'USA', averagePrice: 209.88, latestPrice: 233.98 },
    { ticker: 'PEP', sector: 'Consumer Staples', country: 'USA', averagePrice: 3.97, latestPrice: 11.23 },
    { ticker: 'BAC', sector: 'Financials', country: 'USA', averagePrice: 6.56, latestPrice: 7.48 },
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