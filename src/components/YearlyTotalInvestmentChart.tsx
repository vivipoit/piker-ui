import { Paper, Title, Center  } from '@mantine/core'
import { LineChart } from '@mantine/charts'

export const YearlyTotalInvestmentChart: React.FC = () => {
  const title = "Yearly Total Investment"
  const data = [
    { year: 2017, totalInvestment: 1100 },
    { year: 2018, totalInvestment: 1200 },
    { year: 2019, totalInvestment: 1700 },
    { year: 2020, totalInvestment: 400 },
    { year: 2021, totalInvestment: 1900 },
    { year: 2022, totalInvestment: 2000 },
    { year: 2023, totalInvestment: 2600 },
    { year: 2024, totalInvestment: 2888 },
  ]
  
  return(
    <Paper shadow="sm" radius="md" withBorder p="xl">
      <Title order={2}>
        <Center>{ title }</Center>
      </Title>
      <LineChart
        h={300}
        data={data}
        dataKey="year"
        series={[
          { name: 'totalInvestment', color: 'indigo' }
        ]}
        curveType="linear"
      />
    </Paper>
  )
}