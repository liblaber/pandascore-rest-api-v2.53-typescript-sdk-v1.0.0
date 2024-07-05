# LoLPlayersRoleDetail

**Properties**

| Name           | Type            | Required | Description                                                                                                                                                |
| :------------- | :-------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| assists        | number          | ✅       |                                                                                                                                                            |
| champion       | BaseLoLChampion | ✅       |                                                                                                                                                            |
| cs             | number          | ✅       | The player's Creep Score (CS.) <br/> <br/>NB: Creep Score can be different that the number of minions killed because neutral monsters can give more score. |
| deaths         | number          | ✅       |                                                                                                                                                            |
| id             | number          | ✅       | ID of the player                                                                                                                                           |
| kills          | number          | ✅       |                                                                                                                                                            |
| level          | number          | ✅       |                                                                                                                                                            |
| name           | string          | ✅       | Professional name of the player                                                                                                                            |
| summonerSpells | BaseLoLSpell[]  | ✅       |                                                                                                                                                            |
