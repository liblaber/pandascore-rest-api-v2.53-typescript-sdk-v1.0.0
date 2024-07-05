# CsgoTeamStatsBySerie

Statistics for a serie

**Properties**

| Name             | Type                      | Required | Description                              |
| :--------------- | :------------------------ | :------- | :--------------------------------------- |
| counts           | CsgoStatsCounts           | ✅       |                                          |
| maps             | CsgoTeamMapStats[]        | ✅       |                                          |
| perGameAverages  | CsgoTeamStatsGameAverages | ✅       |                                          |
| perRoundAverages | CsgoStatsRoundAverages    | ✅       |                                          |
| serie            | Serie                     | ✅       | A serie, an occurrence of a league event |
