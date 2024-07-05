# StarCraftBroodWarLeaguesService

A list of all methods in the `StarCraftBroodWarLeaguesService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                      |
| :------------------------------------------------------------------ | :------------------------------- |
| [get_starcraft_brood_war_leagues](#get_starcraft_brood_war_leagues) | List StarCraft Brood War leagues |

## get_starcraft_brood_war_leagues

List StarCraft Brood War leagues

- HTTP Method: `GET`
- Endpoint: `/starcraft-brood-war/leagues`

**Parameters**

| Name    | Type                                                                                  | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverStarcraftBroodWarLeagues](../models/FilterOverStarcraftBroodWarLeagues.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverStarcraftBroodWarLeagues](../models/RangeOverStarcraftBroodWarLeagues.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverStarcraftBroodWarLeagues](../models/SearchOverStarcraftBroodWarLeagues.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`League[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverStarcraftBroodWarLeagues = {
    id: [3],
    modifiedAt: ['elit ea '],
    name: ['quis minim '],
    slug: ['o6--4iyam'],
    url: ['est qu'],
  };

  const range: RangeOverStarcraftBroodWarLeagues = {
    id: [9],
    modifiedAt: ['officia '],
    name: ['nisi id quis'],
    slug: ['69vvrgr3m'],
    url: ['anim Ex'],
  };

  const search: SearchOverStarcraftBroodWarLeagues = {
    name: 'culpa ipsum',
    slug: 'e42z_e2hsj5',
    url: 'quis minim de',
  };
  const page = 1;

  const { data } = await pandascore.starCraftBroodWarLeagues.getStarcraftBroodWarLeagues({
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
