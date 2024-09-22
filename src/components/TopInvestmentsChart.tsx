import { Paper, Title, Center  } from '@mantine/core'
import { BarChart } from '@mantine/charts'

export const TopInvestmentsChart: React.FC = () => {
  const title = "Top Investments"
  const data = [
    { ticker: 'GOOGL', value: 9000 },
    { ticker: 'BRK.B', value: 8800 },
    { ticker: 'DIS', value: 8500 },
    { ticker: 'MCD', value: 6000 },
    { ticker: 'NKE', value: 5800 },
    { ticker: 'WMT', value: 4000 },
    { ticker: 'PEP', value: 2000 },
    { ticker: 'BAC', value: 1500 },
  ]
  
  return(
    <Paper shadow="sm" radius="md" withBorder p="xl">
      <Title order={2}>
        <Center>{ title }</Center>
      </Title>
      <BarChart
        h={300}
        data={data}
        dataKey="ticker"
        orientation="vertical"
        series={[
          { name: 'value', color: 'cyan' },
        ]}
        tickLine="y"
      />
    </Paper>
  )
}