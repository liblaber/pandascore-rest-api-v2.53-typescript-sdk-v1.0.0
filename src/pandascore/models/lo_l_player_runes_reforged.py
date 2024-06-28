# This file was generated by liblab | https://liblab.com/

from __future__ import annotations
from typing import List
from .utils.json_map import JsonMap
from .base import BaseModel
from .lo_l_player_rune_shards import LoLPlayerRuneShards
from .lo_l_rune_reforged import LoLRuneReforged
from .lo_l_rune_reforged_type import LoLRuneReforgedType


@JsonMap({"id_": "id", "type_": "type"})
class PrimaryPath(BaseModel):
    """PrimaryPath

    :param id_: ID of the rune
    :type id_: int
    :param image_url: URL to an image of the rune
    :type image_url: str
    :param keystone: keystone
    :type keystone: LoLRuneReforged
    :param lesser_runes: lesser_runes
    :type lesser_runes: List[LoLRuneReforged]
    :param name: Name of the rune path
    :type name: str
    :param type_: type_
    :type type_: LoLRuneReforgedType
    """

    def __init__(
        self,
        id_: int,
        image_url: str,
        keystone: LoLRuneReforged,
        lesser_runes: List[LoLRuneReforged],
        name: str,
        type_: LoLRuneReforgedType,
    ):
        self.id_ = id_
        self.image_url = image_url
        self.keystone = self._define_object(keystone, LoLRuneReforged)
        self.lesser_runes = self._define_list(lesser_runes, LoLRuneReforged)
        self.name = name
        self.type_ = self._enum_matching(type_, LoLRuneReforgedType.list(), "type_")


@JsonMap({"id_": "id", "type_": "type"})
class SecondaryPath(BaseModel):
    """SecondaryPath

    :param id_: ID of the rune
    :type id_: int
    :param image_url: URL to an image of the rune
    :type image_url: str
    :param lesser_runes: lesser_runes
    :type lesser_runes: List[LoLRuneReforged]
    :param name: Name of the rune path
    :type name: str
    :param type_: type_
    :type type_: LoLRuneReforgedType
    """

    def __init__(
        self,
        id_: int,
        image_url: str,
        lesser_runes: List[LoLRuneReforged],
        name: str,
        type_: LoLRuneReforgedType,
    ):
        self.id_ = id_
        self.image_url = image_url
        self.lesser_runes = self._define_list(lesser_runes, LoLRuneReforged)
        self.name = name
        self.type_ = self._enum_matching(type_, LoLRuneReforgedType.list(), "type_")


@JsonMap({})
class LoLPlayerRunesReforged(BaseModel):
    """LoLPlayerRunesReforged

    :param primary_path: primary_path
    :type primary_path: PrimaryPath
    :param secondary_path: secondary_path
    :type secondary_path: SecondaryPath
    :param shards: shards
    :type shards: LoLPlayerRuneShards
    """

    def __init__(
        self,
        primary_path: PrimaryPath,
        secondary_path: SecondaryPath,
        shards: LoLPlayerRuneShards,
    ):
        self.primary_path = self._define_object(primary_path, PrimaryPath)
        self.secondary_path = self._define_object(secondary_path, SecondaryPath)
        self.shards = self._define_object(shards, LoLPlayerRuneShards)