import { createTheme, MantineProvider, AppShell, Group, Title, Anchor } from "@mantine/core"
import "@mantine/core/styles.css"
import '@mantine/charts/styles.css';
import BagOfCash from "/bag-of-cash.png"
import Router from "./components/Router.tsx"

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
            <Anchor href="/">Dashboard</Anchor>
            <Anchor href="/manage">Manage</Anchor>
          </Group>
        </AppShell.Header>
        <AppShell.Main>
          <Router />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}

export default App
