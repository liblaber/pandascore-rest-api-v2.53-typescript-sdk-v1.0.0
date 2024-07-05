# LoLMasteriesService

A list of all methods in the `LoLMasteriesService` service. Click on the method name to view detailed information about that method.

| Methods                                                           | Description                |
| :---------------------------------------------------------------- | :------------------------- |
| [get_lol_masteries](#get_lol_masteries)                           | List masteries             |
| [get_lol_masteries_lolMasteryId](#get_lol_masteries_lolmasteryid) | Get a single mastery by ID |

## get_lol_masteries

List masteries

- HTTP Method: `GET`
- Endpoint: `/lol/masteries`

**Parameters**

| Name    | Type                                                          | Required | Description                                                                                                                                         |
| :------ | :------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverLoLMasteries](../models/FilterOverLoLMasteries.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverLoLMasteries](../models/RangeOverLoLMasteries.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                         | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverLoLMasteries](../models/SearchOverLoLMasteries.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                     | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                        | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`LoLMastery[]`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const filter: FilterOverLoLMasteries = {
    id: [5],
    name: ['mollit temp'],
  };

  const range: RangeOverLoLMasteries = {
    id: [7],
    name: ['reprehende'],
  };

  const search: SearchOverLoLMasteries = {
    name: 'consequ',
  };
  const page = 1;

  const { data } = await pandascore.loLMasteries.getLolMasteries({
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

## get_lol_masteries_lolMasteryId

Get a single mastery by ID

- HTTP Method: `GET`
- Endpoint: `/lol/masteries/{lol_mastery_id}`

**Parameters**

| Name         | Type   | Required | Description  |
| :----------- | :----- | :------- | :----------- |
| lolMasteryId | number | ✅       | A mastery ID |

**Return Type**

`LoLMastery`

**Example Usage Code Snippet**

```typescript
import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const { data } = await pandascore.loLMasteries.getLolMasteriesLolMasteryId(8);

  console.log(data);
})();
```
