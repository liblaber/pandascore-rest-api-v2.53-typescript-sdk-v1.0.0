# IncidentsService

A list of all methods in the `IncidentsService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description                                                                                                                                                   |
| :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [get_additions](#get_additions) | Get the latest additions. <br/> <br/>This endpoint only shows unchanged objects.                                                                              |
| [get_changes](#get_changes)     | Get the latest updates. <br/> <br/>This endpoint only provides the latest change for an object. It does not keep track of previous changes.                   |
| [get_deletions](#get_deletions) | Get the latest deleted documents                                                                                                                              |
| [get_incidents](#get_incidents) | Get the latest updates and additions. <br/> <br/>This endpoint only provides the latest incident for an object. It does not keep track of previous incidents. |

## get_additions

Get the latest additions. <br/> <br/>This endpoint only shows unchanged objects.

- HTTP Method: `GET`
- Endpoint: `/additions`

**Parameters**

| Name      | Type                                                                    | Required | Description                                                                                                                                         |
| :-------- | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter    | [FilterOverAdditionIncidents](../models/FilterOverAdditionIncidents.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range     | [RangeOverAdditionIncidents](../models/RangeOverAdditionIncidents.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort      | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| page      | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage   | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |
| type      | any[]                                                                   | ❌       | Filter by result type(s)                                                                                                                            |
| since     | string                                                                  | ❌       | Filter out older results                                                                                                                            |
| videogame | [VideogameIdOrSlug[]](../models/VideogameIdOrSlug.md)                   | ❌       | Filter by videogame(s)                                                                                                                              |

**Return Type**

`NonDeletionIncident[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverAdditionIncidents, Page, PandascoreClient, RangeOverAdditionIncidents } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const incidentId = 9;

  const filterOverAdditionIncidents: FilterOverAdditionIncidents = {
    id: [incidentId],
    modifiedAt: ['labore nul'],
    opponentsFilled: true,
  };
  const incidentId1 = 9;

  const rangeOverAdditionIncidents: RangeOverAdditionIncidents = {
    id: [incidentId1],
    modifiedAt: ['id a'],
  };
  const page = 1;

  const { data } = await pandascoreClient.incidents.getAdditions({
    filter: filterOverAdditionIncidents,
    range: rangeOverAdditionIncidents,
    sort: [[]],
    page: page,
    perPage: 50,
    type: [[]],
    since: 'mollit magna no',
    videogame: [videogameIdOrSlug],
  });

  console.log(data);
})();
```

## get_changes

Get the latest updates. <br/> <br/>This endpoint only provides the latest change for an object. It does not keep track of previous changes.

- HTTP Method: `GET`
- Endpoint: `/changes`

**Parameters**

| Name      | Type                                                                | Required | Description                                                                                                                                         |
| :-------- | :------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter    | [FilterOverChangeIncidents](../models/FilterOverChangeIncidents.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range     | [RangeOverChangeIncidents](../models/RangeOverChangeIncidents.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort      | any[]                                                               | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| page      | [Page](../models/Page.md)                                           | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage   | number                                                              | ❌       | Equivalent to `page[size]`                                                                                                                          |
| type      | any[]                                                               | ❌       | Filter by result type(s)                                                                                                                            |
| since     | string                                                              | ❌       | Filter out older results                                                                                                                            |
| videogame | [VideogameIdOrSlug[]](../models/VideogameIdOrSlug.md)               | ❌       | Filter by videogame(s)                                                                                                                              |

**Return Type**

`Incident[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverChangeIncidents, Page, PandascoreClient, RangeOverChangeIncidents } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const incidentId = 9;

  const filterOverChangeIncidents: FilterOverChangeIncidents = {
    id: [incidentId],
    modifiedAt: ['id eiusmod'],
    opponentsFilled: true,
  };
  const incidentId1 = 9;

  const rangeOverChangeIncidents: RangeOverChangeIncidents = {
    id: [incidentId1],
    modifiedAt: ['adipisici'],
  };
  const page = 1;

  const { data } = await pandascoreClient.incidents.getChanges({
    filter: filterOverChangeIncidents,
    range: rangeOverChangeIncidents,
    sort: [[]],
    page: page,
    perPage: 50,
    type: [[]],
    since: 'labori',
    videogame: [videogameIdOrSlug],
  });

  console.log(data);
})();
```

## get_deletions

Get the latest deleted documents

- HTTP Method: `GET`
- Endpoint: `/deletions`

**Parameters**

| Name      | Type                                                                    | Required | Description                                                                                                                                         |
| :-------- | :---------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter    | [FilterOverDeletionIncidents](../models/FilterOverDeletionIncidents.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range     | [RangeOverDeletionIncidents](../models/RangeOverDeletionIncidents.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort      | any[]                                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| page      | [Page](../models/Page.md)                                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage   | number                                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |
| type      | any[]                                                                   | ❌       | Filter by result type(s)                                                                                                                            |
| since     | string                                                                  | ❌       | Filter out older results                                                                                                                            |
| videogame | [VideogameIdOrSlug[]](../models/VideogameIdOrSlug.md)                   | ❌       | Filter by videogame(s)                                                                                                                              |

**Return Type**

`DeletionIncident[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverDeletionIncidents, Page, PandascoreClient, RangeOverDeletionIncidents } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const incidentId = 9;

  const filterOverDeletionIncidents: FilterOverDeletionIncidents = {
    id: [incidentId],
    modifiedAt: ['voluptate cu'],
  };
  const incidentId1 = 9;

  const rangeOverDeletionIncidents: RangeOverDeletionIncidents = {
    id: [incidentId1],
    modifiedAt: ['reprehenderit o'],
  };
  const page = 1;

  const { data } = await pandascoreClient.incidents.getDeletions({
    filter: filterOverDeletionIncidents,
    range: rangeOverDeletionIncidents,
    sort: [[]],
    page: page,
    perPage: 50,
    type: [[]],
    since: 'voluptat',
    videogame: [videogameIdOrSlug],
  });

  console.log(data);
})();
```

## get_incidents

Get the latest updates and additions. <br/> <br/>This endpoint only provides the latest incident for an object. It does not keep track of previous incidents.

- HTTP Method: `GET`
- Endpoint: `/incidents`

**Parameters**

| Name      | Type                                                    | Required | Description                                                                                                                                         |
| :-------- | :------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter    | [FilterOverIncidents](../models/FilterOverIncidents.md) | ❌       | Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter). |
| range     | [RangeOverIncidents](../models/RangeOverIncidents.md)   | ❌       | Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range).                         |
| sort      | any[]                                                   | ❌       | Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort).                                         |
| page      | [Page](../models/Page.md)                               | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2`                                                                                |
| perPage   | number                                                  | ❌       | Equivalent to `page[size]`                                                                                                                          |
| type      | any[]                                                   | ❌       | Filter by result type(s)                                                                                                                            |
| since     | string                                                  | ❌       | Filter out older results                                                                                                                            |
| videogame | [VideogameIdOrSlug[]](../models/VideogameIdOrSlug.md)   | ❌       | Filter by videogame(s)                                                                                                                              |

**Return Type**

`Incident[]`

**Example Usage Code Snippet**

```typescript
import { FilterOverIncidents, Page, PandascoreClient, RangeOverIncidents } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const incidentId = 9;

  const filterOverIncidents: FilterOverIncidents = {
    id: [incidentId],
    modifiedAt: ['eu'],
    opponentsFilled: true,
  };
  const incidentId1 = 9;

  const rangeOverIncidents: RangeOverIncidents = {
    id: [incidentId1],
    modifiedAt: ['id offici'],
  };
  const page = 1;

  const { data } = await pandascoreClient.incidents.getIncidents({
    filter: filterOverIncidents,
    range: rangeOverIncidents,
    sort: [[]],
    page: page,
    perPage: 50,
    type: [[]],
    since: 'dolore adip',
    videogame: [videogameIdOrSlug],
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
