import { Title, Space } from "@mantine/core"
import { AssetsTable } from "../components/AssetsTable"

export const Manage: React.FC = () => {
  return(
    <>
      <Title order={2}>Manage</Title>
      <Space h="xl" />
      <AssetsTable />
    </>
  )
}