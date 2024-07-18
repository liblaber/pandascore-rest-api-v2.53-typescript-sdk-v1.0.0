# LivesService

A list of all methods in the `LivesService` service. Click on the method name to view detailed information about that method.

| Methods                 | Description                                                                              |
| :---------------------- | :--------------------------------------------------------------------------------------- |
| [get_lives](#get_lives) | List currently running live matches, available from pandascore with live websocket data. |

## get_lives

List currently running live matches, available from pandascore with live websocket data.

- HTTP Method: `GET`
- Endpoint: `/lives`

**Parameters**

| Name    | Type                      | Required | Description                                                          |
| :------ | :------------------------ | :------- | :------------------------------------------------------------------- |
| page    | [Page](../models/Page.md) | ❌       | Pagination in the form of `page=2` or `page[size]=30&page[number]=2` |
| perPage | number                    | ❌       | Equivalent to `page[size]`                                           |

**Return Type**

`Live[]`

**Example Usage Code Snippet**

```typescript
import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const page = 1;

  const { data } = await pandascoreClient.lives.getLives({
    page: page,
    perPage: 50,
  });

  console.log(data);
})();
```
