# This file was generated by liblab | https://liblab.com/

from __future__ import annotations
from typing import Union
from typing import List
from .utils.json_map import JsonMap
from .base import BaseModel
from .base import OneOfBaseModel
from .match_live import MatchLive
from .match_type import MatchType
from .match_status import MatchStatus
from .stream import Stream
from .match_winner_type import MatchWinnerType


class BaseMatchWinnerIdGuard(OneOfBaseModel):
    class_list = {"int": int, "int": int}


BaseMatchWinnerId = Union[int, int]


@JsonMap({"id_": "id"})
class BaseMatch(BaseModel):
    """BaseMatch

    :param begin_at: begin_at
    :type begin_at: str
    :param detailed_stats: Whether the match offers full stats
    :type detailed_stats: bool
    :param draw: Whether result of the match is a draw
    :type draw: bool
    :param end_at: end_at
    :type end_at: str
    :param forfeit: Whether match was forfeited
    :type forfeit: bool
    :param game_advantage: ID of the opponent with a game advantage
    :type game_advantage: int
    :param id_: id_
    :type id_: int
    :param live: live
    :type live: MatchLive
    :param match_type: match_type
    :type match_type: MatchType
    :param modified_at: modified_at
    :type modified_at: str
    :param name: name
    :type name: str
    :param number_of_games: Number of games
    :type number_of_games: int
    :param original_scheduled_at: original_scheduled_at
    :type original_scheduled_at: str
    :param rescheduled: Whether match has been rescheduled
    :type rescheduled: bool
    :param scheduled_at: scheduled_at
    :type scheduled_at: str
    :param slug: slug
    :type slug: str
    :param status: status
    :type status: MatchStatus
    :param streams_list: streams_list
    :type streams_list: List[Stream]
    :param tournament_id: tournament_id
    :type tournament_id: int
    :param winner_id: winner_id
    :type winner_id: BaseMatchWinnerId
    :param winner_type: winner_type
    :type winner_type: MatchWinnerType
    """

    def __init__(
        self,
        begin_at: str,
        detailed_stats: bool,
        draw: bool,
        end_at: str,
        forfeit: bool,
        game_advantage: int,
        id_: int,
        live: MatchLive,
        match_type: MatchType,
        modified_at: str,
        name: str,
        number_of_games: int,
        original_scheduled_at: str,
        rescheduled: bool,
        scheduled_at: str,
        slug: str,
        status: MatchStatus,
        streams_list: List[Stream],
        tournament_id: int,
        winner_id: BaseMatchWinnerId,
        winner_type: MatchWinnerType,
    ):
        self.begin_at = begin_at
        self.detailed_stats = detailed_stats
        self.draw = draw
        self.end_at = end_at
        self.forfeit = forfeit
        self.game_advantage = game_advantage
        self.id_ = id_
        self.live = self._define_object(live, MatchLive)
        self.match_type = self._enum_matching(
            match_type, MatchType.list(), "match_type"
        )
        self.modified_at = modified_at
        self.name = name
        self.number_of_games = number_of_games
        self.original_scheduled_at = original_scheduled_at
        self.rescheduled = rescheduled
        self.scheduled_at = scheduled_at
        self.slug = self._pattern_matching(slug, "^[ a-zA-Z0-9_-]+$", "slug")
        self.status = self._enum_matching(status, MatchStatus.list(), "status")
        self.streams_list = self._define_list(streams_list, Stream)
        self.tournament_id = tournament_id
        self.winner_id = BaseMatchWinnerIdGuard.return_one_of(winner_id)
        self.winner_type = self._enum_matching(
            winner_type, MatchWinnerType.list(), "winner_type"
        )