# OwHeroesService

A list of all methods in the `OwHeroesService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                        |
| :------------------------------------------------------------ | :--------------------------------- |
| [get_ow_heroes](#get_ow_heroes)                               | List heroes                        |
| [get_ow_heroes_owHeroIdOrSlug](#get_ow_heroes_owheroidorslug) | Get a single hero by ID or by slug |

## get_ow_heroes

List heroes

- HTTP Method: `GET`
- Endpoint: `/ow/heroes`

**Parameters**

| Name    | Type                                                  | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverOwHeroes](../models/FilterOverOwHeroes.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverOwHeroes](../models/RangeOverOwHeroes.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                 | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverOwHeroes](../models/SearchOverOwHeroes.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                             | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`OwHero[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const owHeroRole = OwHeroRole.damage;

  const filter: FilterOverOwHeroes = {
    difficulty: [7],
    id: [10],
    name: ['do proide'],
    realName: ['sunt consequa'],
    role: [owHeroRole],
    slug: ['dts88'],
  };
  const owHeroRole = OwHeroRole.damage;

  const range: RangeOverOwHeroes = {
    difficulty: [10],
    id: [8],
    name: ['Duis adipisicin'],
    realName: ['dolor ut Du'],
    role: [owHeroRole],
    slug: ['0ok3fxasut4'],
  };
  const owHeroRole = OwHeroRole.damage;

  const search: SearchOverOwHeroes = {
    name: 'eu sit',
    realName: 'tempo',
    role: owHeroRole,
    slug: 'de1',
  };
  const page = 1;

  const { data } = await pandascore.owHeroes.getOwHeroes({
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

## get_ow_heroes_owHeroIdOrSlug

Get a single hero by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/ow/heroes/{ow_hero_id_or_slug}`

**Parameters**

| Name           | Type                                          | Required | Description       |
| :------------- | :-------------------------------------------- | :------- | :---------------- |
| owHeroIdOrSlug | [OwHeroIdOrSlug](../models/OwHeroIdOrSlug.md) | ✅       | A hero ID or slug |

**Return Type**

`OwHero`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const owHeroIdOrSlug = 7;

  const { data } = await pandascore.owHeroes.getOwHeroesOwHeroIdOrSlug();

  console.log(data);
})();
```
