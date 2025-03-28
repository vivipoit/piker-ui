import { Title, Space } from "@mantine/core"
import { Stats } from "../components/Stats.tsx"
import { Charts } from "../components/Charts.tsx"

export const Dashboard: React.FC = () => {
  return(
    <>
      <Title order={2}>Dashboard</Title>
      <Space h="xl" />
      <Stats />
      <Charts />
    </>
  )
}