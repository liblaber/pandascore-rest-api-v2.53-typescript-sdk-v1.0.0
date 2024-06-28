# This file was generated by liblab | https://liblab.com/

from __future__ import annotations
from enum import Enum
from .utils.json_map import JsonMap
from .base import BaseModel
from .lo_l_event_tower_object import LoLEventTowerObject


class LoLEventTowerType(Enum):
    """An enumeration representing different categories.

    :cvar TOWER: "tower"
    :vartype TOWER: str
    """

    TOWER = "tower"

    def list():
        """Lists all category values.

        :return: A list of all category values.
        :rtype: list
        """
        return list(map(lambda x: x.value, LoLEventTowerType._member_map_.values()))


@JsonMap({"type_": "type"})
class LoLEventTower(BaseModel):
    """LoLEventTower

    :param object: object
    :type object: LoLEventTowerObject
    :param type_: type_
    :type type_: LoLEventTowerType
    """

    def __init__(self, object: LoLEventTowerObject, type_: LoLEventTowerType):
        self.object = self._define_object(object, LoLEventTowerObject)
        self.type_ = self._enum_matching(type_, LoLEventTowerType.list(), "type_")