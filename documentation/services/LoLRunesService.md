# LoLRunesService

A list of all methods in the `LoLRunesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                   | Description                                                                       |
| :---------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| [get_lol_runes_reforged](#get_lol_runes_reforged)                                         | List the latest version of League of Legends (reforged) runes                     |
| [get_lol_runes_reforged_paths](#get_lol_runes_reforged_paths)                             | List the latest version of League of Legends (reforged) rune paths                |
| [get_lol_runes_reforged_paths_lolRunePathId](#get_lol_runes_reforged_paths_lolrunepathid) | Retrieve the latest version of a League of Legends (reforged) rune path by its ID |
| [get_lol_runes_reforged_lolRuneReforgedId](#get_lol_runes_reforged_lolrunereforgedid)     | Retrieve the latest version of a League of Legends (reforged) rune by its ID      |

## get_lol_runes_reforged

List the latest version of League of Legends (reforged) runes

- HTTP Method: `GET`
- Endpoint: `/lol/runes-reforged`

**Parameters**

| Name    | Type                                                                  | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLRunesReforged](../models/FilterOverLoLRunesReforged.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLRunesReforged](../models/RangeOverLoLRunesReforged.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLRunesReforged](../models/SearchOverLoLRunesReforged.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`LoLRuneReforged[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverLoLRunesReforged = {
    id: [9],
    name: ['cillum sint'],
  };

  const range: RangeOverLoLRunesReforged = {
    id: [6],
    name: ['cillum do'],
  };

  const search: SearchOverLoLRunesReforged = {
    name: 'do irure ',
  };
  const page = 1;

  const { data } = await pandascoreClient.loLRunes.getLolRunesReforged({
    filter: filter,
    range: range,
    sort: [[]],
    search: search,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_lol_runes_reforged_paths

List the latest version of League of Legends (reforged) rune paths

- HTTP Method: `GET`
- Endpoint: `/lol/runes-reforged-paths`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLRunePaths](../models/FilterOverLoLRunePaths.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLRunePaths](../models/RangeOverLoLRunePaths.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLRunePaths](../models/SearchOverLoLRunePaths.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`LoLRunePath[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverLoLRunePaths = {
    id: [5],
    name: ['occaecat esse'],
    videogameVersion: [],
  };

  const range: RangeOverLoLRunePaths = {
    id: [6],
    name: ['ipsum nul'],
  };

  const search: SearchOverLoLRunePaths = {
    name: 'tempor eli',
  };
  const page = 1;

  const { data } = await pandascoreClient.loLRunes.getLolRunesReforgedPaths({
    filter: filter,
    range: range,
    sort: [[]],
    search: search,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_lol_runes_reforged_paths_lolRunePathId

Retrieve the latest version of a League of Legends (reforged) rune path by its ID

- HTTP Method: `GET`
- Endpoint: `/lol/runes-reforged-paths/{lol_rune_path_id}`

**Parameters**

| Name          | Type   | Required | Description             |
| :------------ | :----- | :------- | :---------------------- |
| lolRunePathId | number | ✅       | ID of the LoL rune path |

**Return Type**

`LoLRunePath`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascoreClient.loLRunes.getLolRunesReforgedPathsLolRunePathId(5);

  console.log(data);
})();
```

## get_lol_runes_reforged_lolRuneReforgedId

Retrieve the latest version of a League of Legends (reforged) rune by its ID

- HTTP Method: `GET`
- Endpoint: `/lol/runes-reforged/{lol_rune_reforged_id}`

**Parameters**

| Name              | Type   | Required | Description        |
| :---------------- | :----- | :------- | :----------------- |
| lolRuneReforgedId | number | ✅       | ID of the LoL rune |

**Return Type**

`LoLRuneReforged`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascoreClient.loLRunes.getLolRunesReforgedLolRuneReforgedId(7);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
