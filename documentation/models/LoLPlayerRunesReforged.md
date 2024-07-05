# LoLPlayerRunesReforged

**Properties**

| Name          | Type                | Required | Description |
| :------------ | :------------------ | :------- | :---------- |
| primaryPath   | PrimaryPath         | ✅       |             |
| secondaryPath | SecondaryPath       | ✅       |             |
| shards        | LoLPlayerRuneShards | ✅       |             |

# PrimaryPath

**Properties**

| Name        | Type                | Required | Description                 |
| :---------- | :------------------ | :------- | :-------------------------- |
| id          | number              | ✅       | ID of the rune              |
| imageUrl    | string              | ✅       | URL to an image of the rune |
| keystone    | LoLRuneReforged     | ✅       |                             |
| lesserRunes | LoLRuneReforged[]   | ✅       |                             |
| name        | string              | ✅       | Name of the rune path       |
| type\_      | LoLRuneReforgedType | ✅       |                             |

# SecondaryPath

**Properties**

| Name        | Type                | Required | Description                 |
| :---------- | :------------------ | :------- | :-------------------------- |
| id          | number              | ✅       | ID of the rune              |
| imageUrl    | string              | ✅       | URL to an image of the rune |
| lesserRunes | LoLRuneReforged[]   | ✅       |                             |
| name        | string              | ✅       | Name of the rune path       |
| type\_      | LoLRuneReforgedType | ✅       |                             |
