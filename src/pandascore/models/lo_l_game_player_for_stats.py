# This file was generated by liblab | https://liblab.com/

from __future__ import annotations
from enum import Enum
from typing import Union
from typing import List
from .utils.json_map import JsonMap
from .base import BaseModel
from .base import OneOfBaseModel
from .lo_l_flags import LoLFlags
from .base_lo_l_item import BaseLoLItem
from .lo_l_kill_counters import LoLKillCounters
from .lo_l_kills_series import LoLKillsSeries
from .lo_l_game_player_damage_for_stats import LoLGamePlayerDamageForStats
from .lo_l_mastery import LoLMastery
from .base_player import BasePlayer
from .lo_l_rune import LoLRune
from .lo_l_player_runes_reforged import LoLPlayerRunesReforged
from .lo_l_spell import LoLSpell
from .base_team import BaseTeam
from .lo_l_wards import LoLWards


@JsonMap({"id_": "id"})
class LoLGamePlayerForStatsChampion(BaseModel):
    """LoLGamePlayerForStatsChampion

    :param id_: id_
    :type id_: int
    :param image_url: image_url
    :type image_url: str
    :param name: name
    :type name: str
    """

    def __init__(self, id_: int, image_url: str, name: str):
        self.id_ = id_
        self.image_url = image_url
        self.name = name


@JsonMap({"id_": "id"})
class Opponent1_4(BaseModel):
    """Opponent1_4

    :param active: Whether player is active
    :type active: bool
    :param age: Age of the player, `null` if unknown. When `birthday` is `null`, `age` is an approxiamation. Read more about [players' age](/docs/about-players-age) <br/>**Note**: This field is only present for users running the Historical plan or above.
    :type age: float
    :param birthday: Birth day of the player, `YYYY-MM-DD` format. `null` if unknown. <br/>**Note**: This field is only present for users running the Historical plan or above.
    :type birthday: str
    :param first_name: First name of the player. `null` if unknown
    :type first_name: str
    :param id_: ID of the player
    :type id_: int
    :param image_url: URL to the photo of the player. `null` if not available.
    :type image_url: str
    :param last_name: Last name of the player. `null` if unknown
    :type last_name: str
    :param modified_at: modified_at
    :type modified_at: str
    :param name: Professional name of the player
    :type name: str
    :param nationality: Country code matching the nationality of the player according to the ISO 3166-1 standard (Alpha-2 code). <br/>In addition to the standard, the `XK` code is used for Kosovo. <br/>`null` if unknown
    :type nationality: str
    :param role: Role/position of the player. Field value varies depending on the video game.`null` if unknown. <br/>**Note**: role is only available for DotA 2, League of Legends, and Overwatch players. <br/>`null` for other video games.
    :type role: str
    :param slug: Unique, human-readable identifier for the player. <br/>`id` and `slug` can be used interchangeably throughout the API.
    :type slug: str
    """

    def __init__(
        self,
        active: bool,
        age: float,
        birthday: str,
        first_name: str,
        id_: int,
        image_url: str,
        last_name: str,
        modified_at: str,
        name: str,
        nationality: str,
        role: str,
        slug: str,
    ):
        self.active = active
        self.age = age
        self.birthday = birthday
        self.first_name = first_name
        self.id_ = id_
        self.image_url = image_url
        self.last_name = last_name
        self.modified_at = modified_at
        self.name = name
        self.nationality = nationality
        self.role = role
        self.slug = self._pattern_matching(slug, "^[a-z0-9_-]+$", "slug")


@JsonMap({"id_": "id"})
class Opponent2_4(BaseModel):
    """Opponent2_4

    :param acronym: acronym
    :type acronym: str
    :param id_: id_
    :type id_: int
    :param image_url: URL of the team logo
    :type image_url: str
    :param location: The team's organization location
    :type location: str
    :param modified_at: modified_at
    :type modified_at: str
    :param name: The name of the team.
    :type name: str
    :param slug: slug
    :type slug: str
    """

    def __init__(
        self,
        acronym: str,
        id_: int,
        image_url: str,
        location: str,
        modified_at: str,
        name: str,
        slug: str,
    ):
        self.acronym = acronym
        self.id_ = id_
        self.image_url = image_url
        self.location = location
        self.modified_at = modified_at
        self.name = name
        self.slug = self._pattern_matching(slug, "^[a-z0-9_-]+$", "slug")


class LoLGamePlayerForStatsOpponentGuard(OneOfBaseModel):
    class_list = {"Opponent1_4": Opponent1_4, "Opponent2_4": Opponent2_4}


LoLGamePlayerForStatsOpponent = Union[Opponent1_4, Opponent2_4]


class LoLGamePlayerForStatsRole(Enum):
    """An enumeration representing different categories.

    :cvar ADC: "adc"
    :vartype ADC: str
    :cvar JUN: "jun"
    :vartype JUN: str
    :cvar MID: "mid"
    :vartype MID: str
    :cvar SUP: "sup"
    :vartype SUP: str
    :cvar TOP: "top"
    :vartype TOP: str
    """

    ADC = "adc"
    JUN = "jun"
    MID = "mid"
    SUP = "sup"
    TOP = "top"

    def list():
        """Lists all category values.

        :return: A list of all category values.
        :rtype: list
        """
        return list(
            map(lambda x: x.value, LoLGamePlayerForStatsRole._member_map_.values())
        )


@JsonMap({})
class LoLGamePlayerForStats(BaseModel):
    """Player's data for a Game

    :param assists: assists
    :type assists: int
    :param champion: champion
    :type champion: LoLGamePlayerForStatsChampion
    :param creep_score: The player's Creep Score (CS.) <br/> <br/>NB: Creep Score can be different that the number of minions killed because neutral monsters can give more score.
    :type creep_score: int
    :param cs_at_14: The player's Creep Score (CS.) at 14minutes
    :type cs_at_14: int
    :param deaths: deaths
    :type deaths: int
    :param flags: flags
    :type flags: LoLFlags
    :param game_id: LoL game ID
    :type game_id: int
    :param gold_earned: gold_earned
    :type gold_earned: int
    :param gold_spent: gold_spent
    :type gold_spent: int
    :param items: items
    :type items: List[BaseLoLItem]
    :param kills: kills
    :type kills: int
    :param kills_counters: kills_counters
    :type kills_counters: LoLKillCounters
    :param kills_series: kills_series
    :type kills_series: LoLKillsSeries
    :param largest_critical_strike: largest_critical_strike
    :type largest_critical_strike: int
    :param largest_killing_spree: largest_killing_spree
    :type largest_killing_spree: int
    :param largest_multi_kill: largest_multi_kill
    :type largest_multi_kill: int
    :param level: level
    :type level: int
    :param magic_damage: magic_damage
    :type magic_damage: LoLGamePlayerDamageForStats
    :param masteries: masteries
    :type masteries: List[LoLMastery]
    :param minions_killed: The player's Creep Score (CS.)
    :type minions_killed: int
    :param opponent: opponent
    :type opponent: LoLGamePlayerForStatsOpponent
    :param physical_damage: physical_damage
    :type physical_damage: LoLGamePlayerDamageForStats
    :param player: player
    :type player: BasePlayer
    :param player_id: ID of the player
    :type player_id: int
    :param role: role
    :type role: LoLGamePlayerForStatsRole
    :param runes: runes
    :type runes: List[LoLRune]
    :param runes_reforged: runes_reforged
    :type runes_reforged: LoLPlayerRunesReforged
    :param spells: spells
    :type spells: List[LoLSpell]
    :param team: team
    :type team: BaseTeam
    :param total_damage: total_damage
    :type total_damage: LoLGamePlayerDamageForStats
    :param total_heal: total_heal
    :type total_heal: int
    :param total_time_crowd_control_dealt: total_time_crowd_control_dealt
    :type total_time_crowd_control_dealt: int
    :param total_units_healed: total_units_healed
    :type total_units_healed: int
    :param true_damage: true_damage
    :type true_damage: LoLGamePlayerDamageForStats
    :param wards: wards
    :type wards: LoLWards
    :param wards_placed: wards_placed
    :type wards_placed: int
    """

    def __init__(
        self,
        assists: int,
        champion: LoLGamePlayerForStatsChampion,
        creep_score: int,
        cs_at_14: int,
        deaths: int,
        flags: LoLFlags,
        game_id: int,
        gold_earned: int,
        gold_spent: int,
        items: List[BaseLoLItem],
        kills: int,
        kills_counters: LoLKillCounters,
        kills_series: LoLKillsSeries,
        largest_critical_strike: int,
        largest_killing_spree: int,
        largest_multi_kill: int,
        level: int,
        magic_damage: LoLGamePlayerDamageForStats,
        masteries: List[LoLMastery],
        minions_killed: int,
        opponent: LoLGamePlayerForStatsOpponent,
        physical_damage: LoLGamePlayerDamageForStats,
        player: BasePlayer,
        player_id: int,
        role: LoLGamePlayerForStatsRole,
        runes: List[LoLRune],
        runes_reforged: LoLPlayerRunesReforged,
        spells: List[LoLSpell],
        team: BaseTeam,
        total_damage: LoLGamePlayerDamageForStats,
        total_heal: int,
        total_time_crowd_control_dealt: int,
        total_units_healed: int,
        true_damage: LoLGamePlayerDamageForStats,
        wards: LoLWards,
        wards_placed: int,
    ):
        self.assists = assists
        self.champion = self._define_object(champion, LoLGamePlayerForStatsChampion)
        self.creep_score = creep_score
        self.cs_at_14 = cs_at_14
        self.deaths = deaths
        self.flags = self._define_object(flags, LoLFlags)
        self.game_id = game_id
        self.gold_earned = gold_earned
        self.gold_spent = gold_spent
        self.items = self._define_list(items, BaseLoLItem)
        self.kills = kills
        self.kills_counters = self._define_object(kills_counters, LoLKillCounters)
        self.kills_series = self._define_object(kills_series, LoLKillsSeries)
        self.largest_critical_strike = largest_critical_strike
        self.largest_killing_spree = largest_killing_spree
        self.largest_multi_kill = largest_multi_kill
        self.level = level
        self.magic_damage = self._define_object(
            magic_damage, LoLGamePlayerDamageForStats
        )
        self.masteries = self._define_list(masteries, LoLMastery)
        self.minions_killed = minions_killed
        self.opponent = LoLGamePlayerForStatsOpponentGuard.return_one_of(opponent)
        self.physical_damage = self._define_object(
            physical_damage, LoLGamePlayerDamageForStats
        )
        self.player = self._define_object(player, BasePlayer)
        self.player_id = player_id
        self.role = self._enum_matching(role, LoLGamePlayerForStatsRole.list(), "role")
        self.runes = self._define_list(runes, LoLRune)
        self.runes_reforged = self._define_object(
            runes_reforged, LoLPlayerRunesReforged
        )
        self.spells = self._define_list(spells, LoLSpell)
        self.team = self._define_object(team, BaseTeam)
        self.total_damage = self._define_object(
            total_damage, LoLGamePlayerDamageForStats
        )
        self.total_heal = total_heal
        self.total_time_crowd_control_dealt = total_time_crowd_control_dealt
        self.total_units_healed = total_units_healed
        self.true_damage = self._define_object(true_damage, LoLGamePlayerDamageForStats)
        self.wards = self._define_object(wards, LoLWards)
        self.wards_placed = wards_placed