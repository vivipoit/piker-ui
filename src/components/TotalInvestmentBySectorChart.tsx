import { Paper, Title, Center  } from '@mantine/core'
import { PieChart } from '@mantine/charts'

export const TotalInvestmentBySectorChart: React.FC = () => {
  const title = "Total Investment by Sector"
  const data = [
    { name: 'IT', value: 890, color: 'indigo.8' },
    { name: 'Finance', value: 810, color: 'indigo.8'},
    { name: 'Healthcare', value: 550, color: 'indigo.5'},
    { name: 'Energy', value: 500, color: 'indigo.5'},
    { name: 'Utilities', value: 400, color: 'indigo.4'},
    { name: 'Industrials', value: 375, color: 'indigo.3'},
    { name: 'Consumer Staples', value: 320, color: 'indigo.3'},
    { name: 'Consumer Discretionary', value: 100, color: 'indigo.1'},
  ]
  
  return(
    <Paper shadow="sm" radius="md" withBorder p="xl">
      <Title order={2}>
        <Center>{ title }</Center>
      </Title>
      <PieChart
        withTooltip
        size={300}
        mx="auto"
        strokeWidth={1}
        data={data}
      />
    </Paper>
  )
}