import { Paper, Title, Center  } from '@mantine/core'
import { BarChart } from '@mantine/charts'

export const TotalInvestmentByCountryChart: React.FC = () => {
  const title = "Total Investment by Country"
  const data = [
    { country: 'USA', value: 1800 },
    { country: 'England', value: 1400 },
    { country: 'Australia', value: 1300 },
    { country: 'France', value: 900 },
    { country: 'Germany', value: 800 },
    { country: 'India', value: 800 },
    { country: 'Brazil', value: 700 },
    { country: 'China', value: 500 },
  ]
  
  return(
    <Paper shadow="sm" radius="md" withBorder p="xl">
      <Title order={2}>
        <Center>{ title }</Center>
      </Title>
      <BarChart
        h={300}
        data={data}
        dataKey="country"
        orientation="vertical"
        series={[
          { name: 'value', color: 'teal' },
        ]}
        tickLine="y"
      />
    </Paper>
  )
}