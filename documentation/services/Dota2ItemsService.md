# Dota2ItemsService

A list of all methods in the `Dota2ItemsService` service. Click on the method name to view detailed information about that method.

| Methods                                                                 | Description                        |
| :---------------------------------------------------------------------- | :--------------------------------- |
| [get_dota2_items](#get_dota2_items)                                     | List items                         |
| [get_dota2_items_dota2ItemIdOrSlug](#get_dota2_items_dota2itemidorslug) | Get a single item by ID or by slug |

## get_dota2_items

List items

- HTTP Method: `GET`
- Endpoint: `/dota2/items`

**Parameters**

| Name    | Type                                                      | Required | Description                                                                                                                                         |
| :------ | :-------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter  | [FilterOverDota2Items](../models/FilterOverDota2Items.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range   | [RangeOverDota2Items](../models/RangeOverDota2Items.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort    | any[]                                                     | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| search  | [SearchOverDota2Items](../models/SearchOverDota2Items.md) | ❌       | Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search).                                   |
| page    | [Page](../models/Page.md)                                 | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage | number                                                    | ❌       | Equivalent to `page[size]`                                                                                                                          |

**Return Type**

`Dota2Item[]`

**Example Usage Code Snippet**

```typescript
import {
  FilterOverDota2Items,
  Page,
  PandascoreClient,
  RangeOverDota2Items,
  SearchOverDota2Items,
} from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const filterOverDota2Items: FilterOverDota2Items = {
    id: [3],
    name: ['8cd5x'],
  };

  const rangeOverDota2Items: RangeOverDota2Items = {
    id: [4],
    name: ['mmypoz-ntw9'],
  };

  const searchOverDota2Items: SearchOverDota2Items = {
    name: 'grbfwr',
  };
  const page = 1;

  const { data } = await pandascoreClient.dota2Items.getDota2Items({
    filter: filterOverDota2Items,
    range: rangeOverDota2Items,
    sort: [[]],
    search: searchOverDota2Items,
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```

## get_dota2_items_dota2ItemIdOrSlug

Get a single item by ID or by slug

- HTTP Method: `GET`
- Endpoint: `/dota2/items/{dota2_item_id_or_slug}`

**Parameters**

| Name              | Type                                                | Required | Description        |
| :---------------- | :-------------------------------------------------- | :------- | :----------------- |
| dota2ItemIdOrSlug | [Dota2ItemIdOrSlug](../models/Dota2ItemIdOrSlug.md) | ✅       | An item ID or slug |

**Return Type**

`Dota2Item`

**Example Usage Code Snippet**

```typescript
import { Dota2ItemIdOrSlug, PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const dota2ItemIdOrSlug = 6;

  const { data } = await pandascoreClient.dota2Items.getDota2ItemsDota2ItemIdOrSlug();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
