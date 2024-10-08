# PubgTeamsService

A list of all methods in the `PubgTeamsService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description                       |
| :-------------------------------- | :-------------------------------- |
| [get_pubg_teams](#get_pubg_teams) | List teams for the PUBG videogame |

## get_pubg_teams

List teams for the PUBG videogame

- HTTP Method: `GET`
- Endpoint: `/pubg/teams`

**Parameters**

| Name    | Type                                                    | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverPubgTeams](../models/FilterOverPubgTeams.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverPubgTeams](../models/RangeOverPubgTeams.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverPubgTeams](../models/SearchOverPubgTeams.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Team[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverPubgTeams,
  Page,
  PandascoreClient,
  RangeOverPubgTeams,
  SearchOverPubgTeams,
  VideogameId,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const videogameId = VideogameId._1;

  const filterOverPubgTeams: FilterOverPubgTeams = {
    acronym: ['dolore cillum'],
    id: [2],
    location: ['nulla temp'],
    modifiedAt: ['voluptate ven'],
    name: ['irure'],
    slug: ['1vxgxb'],
    videogameId: [videogameId],
  };

  const rangeOverPubgTeams: RangeOverPubgTeams = {
    acronym: ['sit do'],
    id: [10],
    location: ['Lorem nos'],
    modifiedAt: ['sed la'],
    name: ['incididunt aute'],
    slug: ['_py'],
  };

  const searchOverPubgTeams: SearchOverPubgTeams = {
    acronym: 'qui f',
    location: 'voluptate com',
    name: 'dolore incidid',
    slug: 'l5j_lafab',
  };
  const page = 1;

  const { data } = await pandascoreClient.pubgTeams.getPubgTeams({
    filter: filterOverPubgTeams,
    range: rangeOverPubgTeams,
    sort: [[]],
    search: searchOverPubgTeams,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
