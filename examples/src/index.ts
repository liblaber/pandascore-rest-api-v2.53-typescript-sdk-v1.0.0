import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const incidentId = 2;

  const filter: FilterOverAdditionIncidents = {
    id: [incidentId],
    modifiedAt: ['non officia'],
    opponentsFilled: true,
  };
  const incidentId = 2;

  const range: RangeOverAdditionIncidents = {
    id: [incidentId],
    modifiedAt: ['et officia'],
  };
  const page = 1;

  const { data } = await pandascoreClient.incidents.getAdditions({
    filter: filter,
    range: range,
    sort: [[]],
    page: page,
    perPage: 50,
    type: [[]],
    since: 'aliquip',
    videogame: [videogameIdOrSlug],
  });

  console.log(data);
})();
