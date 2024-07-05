# ValorantPlayerMatchStats

**Properties**

| Name                  | Type                     | Required | Description                                               |
| :-------------------- | :----------------------- | :------- | :-------------------------------------------------------- |
| agents                | ValorantAgentStats[]     | ✅       | Agents picks, wins, and losses stats for this map         |
| assists               | number                   | ✅       | Number of player's assists                                |
| averageDamagePerRound | number                   | ✅       | Average damage per round (ADR) of the player              |
| clutchWins            | ValorantPlayerClutchWins | ✅       | Round wins when the player was the last team member alive |
| deaths                | number                   | ✅       | Number of player's death                                  |
| defusedSpikes         | number                   | ✅       | Number of spikes defused by the player                    |
| firstDeaths           | number                   | ✅       | Number of rounds where the player died first              |
| firstKillPercentage   | number                   | ✅       | First kill percentage of the player                       |
| firstKills            | number                   | ✅       | Number of rounds where the player did the first kill      |
| headshotPercentage    | number                   | ✅       | Percentage of headshots within the player's shots         |
| kills                 | number                   | ✅       | Number of player's kills                                  |
| plantedSpikes         | number                   | ✅       | Number of spikes planted by the player                    |
| player                | BasePlayer               | ✅       |                                                           |
| streaks               | ValorantPlayerStreaks    | ✅       | Streaks done by the player (in a given round)             |
| teamId                | number                   | ✅       |                                                           |
| totalGames            | number                   | ✅       | Amount of games played by the player                      |
