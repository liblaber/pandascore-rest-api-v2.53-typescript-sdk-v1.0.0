# ValorantAbility

**Properties**

| Name              | Type        | Required | Description                                                     |
| :---------------- | :---------- | :------- | :-------------------------------------------------------------- |
| abilityType       | AbilityType | ✅       | Ability type                                                    |
| creds             | number      | ✅       | Credit cost of the ability                                      |
| id                | number      | ✅       | ID of the ability                                               |
| imageUrl          | string      | ✅       | URL to an image of the ability                                  |
| name              | string      | ✅       | Name of the ability                                             |
| videogameVersions | string[]    | ✅       | Array of of video game versions (ie. patches) for this resource |

# AbilityType

Ability type

**Properties**

| Name            | Type   | Required | Description        |
| :-------------- | :----- | :------- | :----------------- |
| ABILITYONE      | string | ✅       | "ability_one"      |
| ABILITYTWO      | string | ✅       | "ability_two"      |
| GRENADEABILITY  | string | ✅       | "grenade_ability"  |
| ULTIMATEABILITY | string | ✅       | "ultimate_ability" |

<!-- This file was generated by liblab | https://liblab.com/ -->
