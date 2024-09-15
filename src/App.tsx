import { createTheme, MantineProvider, AppShell, Title } from "@mantine/core"
import "@mantine/core/styles.css"
import { Stats } from "./components/Stats.tsx"

const theme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
})

function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Title order={1}>Piker</Title>
        </AppShell.Header>
        <AppShell.Main>
          <Stats />
          
          <div className="row chart-row">
            <div>
              <h2>Yearly Total Investment</h2>
              <ul>
                <li>2019: $ 1,000,000.00</li>
                <li>2020: $ 2,000,000.00</li>
                <li>2021: $ 3,000,000.00</li>
                <li>2022: $ 4,000,000.00</li>
                <li>2023: $ 5,000,000.00</li>
                <li>2024: $ 6,000,000.00</li>
              </ul>
            </div>
            <div>
              <h2>Total Investment by Sector</h2>
              <ul>
                <li>IT: $ 1,000,000.00</li>
                <li>Healthcare: $ 1,000,000.00</li>
                <li>Energy: $ 500,000.00</li>
                <li>Utilities: $ 500,000.00</li>
                <li>Finance: $ 1,000,000.00</li>
                <li>Industrials: $ 1,000,000.00</li>
                <li>Consumer Staples: $ 500,000.00</li>
                <li>Consumer Discretionary: $ 500,000.00</li>
              </ul>
            </div>
            <div>
              <h2>Total Investment by Country</h2>
              <ul>
                <li>USA: $ 1,000,000.00</li>
                <li>England: $ 1,000,000.00</li>
                <li>Australia: $ 500,000.00</li>
                <li>France: $ 500,000.00</li>
                <li>Germany: $ 1,000,000.00</li>
                <li>India: $ 1,000,000.00</li>
                <li>Brazil: $ 500,000.00</li>
                <li>China: $ 500,000.00</li>
              </ul>
            </div>
            <div>
              <h2>Top Investments</h2>
              <ul>
                <li>GOOGL: $ 1,000,000.00</li>
                <li>DIS: $ 1,000,000.00</li>
                <li>MCD: $ 500,000.00</li>
                <li>NKE: $ 500,000.00</li>
                <li>WMT: $ 1,000,000.00</li>
                <li>PEP: $ 1,000,000.00</li>
                <li>BRK.B: $ 500,000.00</li>
                <li>BAC: $ 500,000.00</li>
              </ul>
            </div>
          </div>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}

export default App
