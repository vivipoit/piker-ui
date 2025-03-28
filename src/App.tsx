import { createTheme, MantineProvider, AppShell, Group, Title, Burger } from "@mantine/core"
import "@mantine/core/styles.css"
import '@mantine/charts/styles.css';
import Router from "./components/Router/Router.tsx"
import { useDisclosure } from '@mantine/hooks';

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
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        padding="md"
        header={{ height: 75 }}
        navbar={{ width: 150, breakpoint: 'md', collapsed: { mobile: !opened } }}
      >
        <AppShell.Header>
          <Group p="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
            <Title order={1}>💰 Piker</Title>
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
