# Dota2LeaguesService

A list of all methods in the `Dota2LeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description        |
| :-------------------------------------- | :----------------- |
| [get_dota2_leagues](#get_dota2_leagues) | List Dota2 leagues |

## get_dota2_leagues

List Dota2 leagues

- HTTP Method: `GET`
- Endpoint: `/dota2/leagues`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Leagues](../models/FilterOverDota2Leagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Leagues](../models/RangeOverDota2Leagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Leagues](../models/SearchOverDota2Leagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2Leagues,
  Page,
  PandascoreClient,
  RangeOverDota2Leagues,
  SearchOverDota2Leagues,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverDota2Leagues: FilterOverDota2Leagues = {
    id: [3],
    modifiedAt: ['proident labo'],
    name: ['dolor proid'],
    slug: ['_lxx'],
    url: ['anim ea est U'],
  };

  const rangeOverDota2Leagues: RangeOverDota2Leagues = {
    id: [8],
    modifiedAt: ['aliqua aute'],
    name: ['aliqua ea '],
    slug: ['uic'],
    url: ['in aute elit'],
  };

  const searchOverDota2Leagues: SearchOverDota2Leagues = {
    name: 'Excepteur ip',
    slug: 'pu97glcez',
    url: 'dolore ipsum d',
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Leagues.getDota2Leagues({
    filter: filterOverDota2Leagues,
    range: rangeOverDota2Leagues,
    sort: [[]],
    search: searchOverDota2Leagues,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
