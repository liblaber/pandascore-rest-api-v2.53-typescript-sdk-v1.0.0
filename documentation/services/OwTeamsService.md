# OwTeamsService

A list of all methods in the `OwTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description                            |
| :---------------------------- | :------------------------------------- |
| [get_ow_teams](#get_ow_teams) | List teams for the Overwatch videogame |

## get_ow_teams

List teams for the Overwatch videogame

- HTTP Method: `GET`
- Endpoint: `/ow/teams`

**Parameters**

| Name    | Type                                                | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwTeams](../models/FilterOverOwTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwTeams](../models/RangeOverOwTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwTeams](../models/SearchOverOwTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverOwTeams,
  Page,
  PandascoreClient,
  RangeOverOwTeams,
  SearchOverOwTeams,
  VideogameId,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const videogameId = VideogameId._1;

  const filterOverOwTeams: FilterOverOwTeams = {
    acronym: ['cupid'],
    id: [1],
    location: ['cupidat'],
    modifiedAt: ['esse nostrud i'],
    name: ['dolore rep'],
    slug: ['q'],
    videogameId: [videogameId],
  };

  const rangeOverOwTeams: RangeOverOwTeams = {
    acronym: ['nulla c'],
    id: [8],
    location: ['quis magn'],
    modifiedAt: ['fu'],
    name: ['cillum'],
    slug: ['t2t8'],
  };

  const searchOverOwTeams: SearchOverOwTeams = {
    acronym: 'aliquip',
    location: 'veniam non i',
    name: 'Lorem',
    slug: '8kr9',
  };
  const page = 1;

  const { data } = await pandascoreClient.owTeams.getOwTeams({
    filter: filterOverOwTeams,
    range: rangeOverOwTeams,
    sort: [[]],
    search: searchOverOwTeams,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
