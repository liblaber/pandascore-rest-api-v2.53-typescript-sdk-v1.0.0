# This file was generated by liblab | https://liblab.com/

from typing import List
from .utils.validator import Validator
from .utils.base_service import BaseService
from ..net.transport.serializer import Serializer
from ..models.valorant_agent import ValorantAgent
from ..models.utils.cast_models import cast_models
from ..models.search_over_valorant_agents import SearchOverValorantAgents
from ..models.range_over_valorant_agents import RangeOverValorantAgents
from ..models.get_valorant_versions_valorant_version_name_agents_page import (
    GetValorantVersionsValorantVersionNameAgentsPage,
)
from ..models.get_valorant_versions_all_agents_page import (
    GetValorantVersionsAllAgentsPage,
)
from ..models.get_valorant_agents_page import GetValorantAgentsPage
from ..models.filter_over_valorant_agents import FilterOverValorantAgents


class ValorantAgentsService(BaseService):

    @cast_models
    def get_valorant_agents(
        self,
        filter: FilterOverValorantAgents = None,
        range: RangeOverValorantAgents = None,
        sort: List[any] = None,
        search: SearchOverValorantAgents = None,
        page: GetValorantAgentsPage = None,
        per_page: int = None,
    ) -> List[ValorantAgent]:
        """List agents

        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverValorantAgents, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverValorantAgents, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverValorantAgents, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetValorantAgentsPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of Valorant agents
        :rtype: List[ValorantAgent]
        """

        Validator(FilterOverValorantAgents).is_optional().validate(filter)
        Validator(RangeOverValorantAgents).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverValorantAgents).is_optional().validate(search)
        Validator(GetValorantAgentsPage).is_optional().validate(page)
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(f"{self.base_url}/valorant/agents", self.get_default_headers())
            .add_query("filter", filter, style="deepObject")
            .add_query("range", range, style="deepObject")
            .add_query("sort", sort)
            .add_query("search", search, style="deepObject")
            .add_query("page", page)
            .add_query("per_page", per_page)
            .serialize()
            .set_method("GET")
        )

        response = self.send_request(serialized_request)

        return [ValorantAgent._unmap(item) for item in response]

    @cast_models
    def get_valorant_agents_valorant_agent_id(
        self, valorant_agent_id: int
    ) -> ValorantAgent:
        """Get a Valorant agent by its ID

        :param valorant_agent_id: ID of the Valorant agent
        :type valorant_agent_id: int
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A Valorant agent
        :rtype: ValorantAgent
        """

        Validator(int).min(1).validate(valorant_agent_id)

        serialized_request = (
            Serializer(
                f"{self.base_url}/valorant/agents/{{valorant_agent_id}}",
                self.get_default_headers(),
            )
            .add_path("valorant_agent_id", valorant_agent_id)
            .serialize()
            .set_method("GET")
        )

        response = self.send_request(serialized_request)

        return ValorantAgent._unmap(response)

    @cast_models
    def get_valorant_versions_all_agents(
        self,
        filter: FilterOverValorantAgents = None,
        range: RangeOverValorantAgents = None,
        sort: List[any] = None,
        search: SearchOverValorantAgents = None,
        page: GetValorantVersionsAllAgentsPage = None,
        per_page: int = None,
    ) -> List[ValorantAgent]:
        """Deprecated. Equivalent route: [/valorant/agents?filter[videogame_version]=all](/reference/get_valorant_agents)

        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverValorantAgents, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverValorantAgents, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverValorantAgents, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetValorantVersionsAllAgentsPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of Valorant agents
        :rtype: List[ValorantAgent]
        """

        Validator(FilterOverValorantAgents).is_optional().validate(filter)
        Validator(RangeOverValorantAgents).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverValorantAgents).is_optional().validate(search)
        Validator(GetValorantVersionsAllAgentsPage).is_optional().validate(page)
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(
                f"{self.base_url}/valorant/versions/all/agents",
                self.get_default_headers(),
            )
            .add_query("filter", filter, style="deepObject")
            .add_query("range", range, style="deepObject")
            .add_query("sort", sort)
            .add_query("search", search, style="deepObject")
            .add_query("page", page)
            .add_query("per_page", per_page)
            .serialize()
            .set_method("GET")
        )

        response = self.send_request(serialized_request)

        return [ValorantAgent._unmap(item) for item in response]

    @cast_models
    def get_valorant_versions_valorant_version_name_agents(
        self,
        valorant_version_name: str,
        filter: FilterOverValorantAgents = None,
        range: RangeOverValorantAgents = None,
        sort: List[any] = None,
        search: SearchOverValorantAgents = None,
        page: GetValorantVersionsValorantVersionNameAgentsPage = None,
        per_page: int = None,
    ) -> List[ValorantAgent]:
        """Deprecated. Equivalent route: [/valorant/agents?filter[videogame_version]={valorant_version_name}](/reference/get_valorant_agents)

        :param valorant_version_name: A video game version
        :type valorant_version_name: str
        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverValorantAgents, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverValorantAgents, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverValorantAgents, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetValorantVersionsValorantVersionNameAgentsPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of Valorant agents
        :rtype: List[ValorantAgent]
        """

        Validator(str).validate(valorant_version_name)
        Validator(FilterOverValorantAgents).is_optional().validate(filter)
        Validator(RangeOverValorantAgents).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverValorantAgents).is_optional().validate(search)
        Validator(
            GetValorantVersionsValorantVersionNameAgentsPage
        ).is_optional().validate(page)
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(
                f"{self.base_url}/valorant/versions/{{valorant_version_name}}/agents",
                self.get_default_headers(),
            )
            .add_path("valorant_version_name", valorant_version_name)
            .add_query("filter", filter, style="deepObject")
            .add_query("range", range, style="deepObject")
            .add_query("sort", sort)
            .add_query("search", search, style="deepObject")
            .add_query("page", page)
            .add_query("per_page", per_page)
            .serialize()
            .set_method("GET")
        )

        response = self.send_request(serialized_request)

        return [ValorantAgent._unmap(item) for item in response]