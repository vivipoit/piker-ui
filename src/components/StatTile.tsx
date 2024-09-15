import { Paper, Text, Title, Center  } from '@mantine/core';

interface StatTileProps {
  description: String
  stat: String
}

export const StatTile: React.FC<StatTileProps> = ({ description, stat }) => {
  return(
    <Paper shadow="sm" radius="md" withBorder p="xl">
      <Text>
        <Center>{ description }</Center>
      </Text>
      <Title order={2}>
        <Center>{ stat }</Center>
      </Title>
    </Paper>
  )
}