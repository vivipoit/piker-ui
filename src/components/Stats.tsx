import { Grid } from "@mantine/core"
import { StatTile } from "./StatTile.tsx"

export const Stats: React.FC = () => {
  let tiles = [
    { uniqueKey: "amount", description: "Total Invested Amount", stat: "$ 6,000,000.00" },
    { uniqueKey: "number", description: "Number of Investments", stat: "784" },
    { uniqueKey: "return", description: "Rate of Return", stat: "38%" }
  ]

  return(
    <Grid>
      {tiles.map((tile) => (
        <Grid.Col span={{ base: 12, md: 4 }} key={tile.uniqueKey} >
          <StatTile description={tile.description} stat={tile.stat} />
        </Grid.Col>
      ))}
    </Grid>
  )
}