# ValorantAbilitiesService

A list of all methods in the `ValorantAbilitiesService` service. Click on the method name to view detailed information about that method.

| Methods                                                                               | Description                      |
| :------------------------------------------------------------------------------------ | :------------------------------- |
| [get_valorant_abilities](#get_valorant_abilities)                                     | List abilities                   |
| [get_valorant_abilities_valorantAbilityId](#get_valorant_abilities_valorantabilityid) | Get a Valorant ability by its ID |

## get_valorant_abilities

List abilities

- HTTP Method: `GET`
- Endpoint: `/valorant/abilities`

**Parameters**

| Name    | Type                                                                    | Required | Description                                                                                                                                         |
| :------ | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverValorantAbilities](../models/FilterOverValorantAbilities.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverValorantAbilities](../models/RangeOverValorantAbilities.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverValorantAbilities](../models/SearchOverValorantAbilities.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`ValorantAbility[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const valorantAbilityType = ValorantAbilityType.ability_one;

  const filter: FilterOverValorantAbilities = {
    abilityType: [valorantAbilityType],
    creds: [2.61],
    id: [8],
    name: ['sit dolore'],
    videogameVersion: [],
  };
  const valorantAbilityType = ValorantAbilityType.ability_one;

  const range: RangeOverValorantAbilities = {
    abilityType: [valorantAbilityType],
    creds: [8.01],
    id: [3],
    name: ['sitminim '],
  };
  const valorantAbilityType = ValorantAbilityType.ability_one;

  const search: SearchOverValorantAbilities = {
    abilityType: valorantAbilityType,
    name: 'et magna',
  };
  const page = 1;

  const { data } = await pandascoreClient.valorantAbilities.getValorantAbilities({
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

## get_valorant_abilities_valorantAbilityId

Get a Valorant ability by its ID

- HTTP Method: `GET`
- Endpoint: `/valorant/abilities/{valorant_ability_id}`

**Parameters**

| Name              | Type   | Required | Description                |
| :---------------- | :----- | :------- | :------------------------- |
| valorantAbilityId | number | ✅       | ID of the Valorant ability |

**Return Type**

`ValorantAbility`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascoreClient.valorantAbilities.getValorantAbilitiesValorantAbilityId(7);

  console.log(data);
})();
```
