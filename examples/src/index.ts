import { Pandascore } from 'pandascore';

(async () => {
  const pandascore = new Pandascore({
    token: 'YOUR_TOKEN',
  });

  const incidentId = 5;

  const filter: FilterOverAdditionIncidents = {
    id: [incidentId],
    modifiedAt: ['nostrud '],
    opponentsFilled: true,
  };
  const incidentId = 5;

  const range: RangeOverAdditionIncidents = {
    id: [incidentId],
    modifiedAt: ['Lo'],
  };
  const page = 1;

  const { data } = await pandascore.incidents.getAdditions({
    filter: filter,
    range: range,
    sort: [[]],
    page: page,
    perPage: 50,
    type_: [[]],
    since: 'nisi ea',
    videogame: [videogameIdOrSlug],
  });

  console.log(data);
})();
