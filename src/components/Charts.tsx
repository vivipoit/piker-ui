import { Grid } from "@mantine/core"
import { YearlyTotalInvestmentChart } from "./YearlyTotalInvestmentChart.tsx"
import { TotalInvestmentBySectorChart } from "./TotalInvestmentBySectorChart.tsx"
import { TotalInvestmentByCountryChart } from "./TotalInvestmentByCountryChart.tsx"
import { TopInvestmentsChart } from "./TopInvestmentsChart.tsx"

export const Charts: React.FC = () => {
  return(
    <Grid>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <YearlyTotalInvestmentChart />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <TotalInvestmentBySectorChart />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <TotalInvestmentByCountryChart />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <TopInvestmentsChart />
      </Grid.Col>
    </Grid>
  )
}