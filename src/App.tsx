import { createTheme, MantineProvider, AppShell, Group, Title } from "@mantine/core"
import "@mantine/core/styles.css"
import '@mantine/charts/styles.css';
import BagOfCash from "./../public/bag-of-cash.png"
import { Stats } from "./components/Stats.tsx"
import { Charts } from "./components/Charts.tsx"

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
      <AppShell header={{ height: 75 }} padding="md">
        <AppShell.Header>
          <Group p="md">
            <img src={BagOfCash} alt="Piker" height="50" />
            <Title order={1}>Piker</Title>
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Stats />
          <Charts />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}

export default App
