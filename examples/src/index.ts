import { PandascoreClient } from 'pandascore_client';

(async () => {
  const pandascoreClient = new PandascoreClient({
    token: 'YOUR_TOKEN',
  });

  const incidentId = 9;

  const filter: FilterOverAdditionIncidents = {
    id: [incidentId],
    modifiedAt: ['labore nul'],
    opponentsFilled: true,
  };
  const incidentId = 9;

  const range: RangeOverAdditionIncidents = {
    id: [incidentId],
    modifiedAt: ['id a'],
  };
  const page = 1;

  const { data } = await pandascoreClient.incidents.getAdditions({
    filter: filter,
    range: range,
    sort: [[]],
    page: page,
    perPage: 50,
    type: [[]],
    since: 'mollit magna no',
    videogame: [videogameIdOrSlug],
  });

  console.log(data);
})();