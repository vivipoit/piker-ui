import { MantineProvider, AppShell, Title } from "@mantine/core"
import "@mantine/core/styles.css"

function App() {
  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Title order={1}>Piker</Title>
        </AppShell.Header>
        <AppShell.Main>
          <div className="row top-row">
            <div>
              <h2>Total Invested Amount</h2>
              <p>$ 6,000,000.00</p>
            </div>
            <div>
              <h2>Number of Investments</h2>
              <p>784</p>
            </div>
            <div>
              <h2>Rate of Return</h2>
              <p>38%</p>
            </div>
          </div>
          
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
