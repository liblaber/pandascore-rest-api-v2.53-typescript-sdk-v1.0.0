# This file was generated by liblab | https://liblab.com/

from typing import List
from .utils.validator import Validator
from .utils.base_service import BaseService
from ..net.transport.serializer import Serializer
from ..models.utils.cast_models import cast_models
from ..models.short_tournament import ShortTournament
from ..models.serie_id_or_slug import SerieIdOrSlug
from ..models.serie import Serie
from ..models.search_over_short_tournaments import SearchOverShortTournaments
from ..models.search_over_series import SearchOverSeries
from ..models.search_over_matches import SearchOverMatches
from ..models.range_over_short_tournaments import RangeOverShortTournaments
from ..models.range_over_series import RangeOverSeries
from ..models.range_over_matches import RangeOverMatches
from ..models.match import Match
from ..models.get_series_upcoming_page import GetSeriesUpcomingPage
from ..models.get_series_serie_id_or_slug_tournaments_page import (
    GetSeriesSerieIdOrSlugTournamentsPage,
)
from ..models.get_series_serie_id_or_slug_matches_upcoming_page import (
    GetSeriesSerieIdOrSlugMatchesUpcomingPage,
)
from ..models.get_series_serie_id_or_slug_matches_running_page import (
    GetSeriesSerieIdOrSlugMatchesRunningPage,
)
from ..models.get_series_serie_id_or_slug_matches_past_page import (
    GetSeriesSerieIdOrSlugMatchesPastPage,
)
from ..models.get_series_serie_id_or_slug_matches_page import (
    GetSeriesSerieIdOrSlugMatchesPage,
)
from ..models.get_series_running_page import GetSeriesRunningPage
from ..models.get_series_past_page import GetSeriesPastPage
from ..models.get_series_page import GetSeriesPage
from ..models.filter_over_short_tournaments import FilterOverShortTournaments
from ..models.filter_over_series import FilterOverSeries
from ..models.filter_over_matches import FilterOverMatches


class SeriesService(BaseService):

    @cast_models
    def get_series(
        self,
        filter: FilterOverSeries = None,
        range: RangeOverSeries = None,
        sort: List[any] = None,
        search: SearchOverSeries = None,
        page: GetSeriesPage = None,
        per_page: int = None,
    ) -> List[Serie]:
        """List series

        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverSeries, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverSeries, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverSeries, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetSeriesPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of series
        :rtype: List[Serie]
        """

        Validator(FilterOverSeries).is_optional().validate(filter)
        Validator(RangeOverSeries).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverSeries).is_optional().validate(search)
        Validator(GetSeriesPage).is_optional().validate(page)
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(f"{self.base_url}/series", self.get_default_headers())
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

        return [Serie._unmap(item) for item in response]

    @cast_models
    def get_series_past(
        self,
        filter: FilterOverSeries = None,
        range: RangeOverSeries = None,
        sort: List[any] = None,
        search: SearchOverSeries = None,
        page: GetSeriesPastPage = None,
        per_page: int = None,
    ) -> List[Serie]:
        """List past series

        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverSeries, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverSeries, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverSeries, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetSeriesPastPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of series
        :rtype: List[Serie]
        """

        Validator(FilterOverSeries).is_optional().validate(filter)
        Validator(RangeOverSeries).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverSeries).is_optional().validate(search)
        Validator(GetSeriesPastPage).is_optional().validate(page)
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(f"{self.base_url}/series/past", self.get_default_headers())
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

        return [Serie._unmap(item) for item in response]

    @cast_models
    def get_series_running(
        self,
        filter: FilterOverSeries = None,
        range: RangeOverSeries = None,
        sort: List[any] = None,
        search: SearchOverSeries = None,
        page: GetSeriesRunningPage = None,
        per_page: int = None,
    ) -> List[Serie]:
        """List currently running series

        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverSeries, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverSeries, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverSeries, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetSeriesRunningPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of series
        :rtype: List[Serie]
        """

        Validator(FilterOverSeries).is_optional().validate(filter)
        Validator(RangeOverSeries).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverSeries).is_optional().validate(search)
        Validator(GetSeriesRunningPage).is_optional().validate(page)
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(f"{self.base_url}/series/running", self.get_default_headers())
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

        return [Serie._unmap(item) for item in response]

    @cast_models
    def get_series_upcoming(
        self,
        filter: FilterOverSeries = None,
        range: RangeOverSeries = None,
        sort: List[any] = None,
        search: SearchOverSeries = None,
        page: GetSeriesUpcomingPage = None,
        per_page: int = None,
    ) -> List[Serie]:
        """List upcoming series

        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverSeries, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverSeries, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverSeries, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetSeriesUpcomingPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of series
        :rtype: List[Serie]
        """

        Validator(FilterOverSeries).is_optional().validate(filter)
        Validator(RangeOverSeries).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverSeries).is_optional().validate(search)
        Validator(GetSeriesUpcomingPage).is_optional().validate(page)
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(f"{self.base_url}/series/upcoming", self.get_default_headers())
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

        return [Serie._unmap(item) for item in response]

    @cast_models
    def get_series_serie_id_or_slug(self, serie_id_or_slug: SerieIdOrSlug) -> Serie:
        """Get a single serie by ID or by slug

        :param serie_id_or_slug: A serie ID or slug
        :type serie_id_or_slug: SerieIdOrSlug
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A serie
        :rtype: Serie
        """

        Validator(SerieIdOrSlug).validate(serie_id_or_slug)

        serialized_request = (
            Serializer(
                f"{self.base_url}/series/{{serie_id_or_slug}}",
                self.get_default_headers(),
            )
            .add_path("serie_id_or_slug", serie_id_or_slug)
            .serialize()
            .set_method("GET")
        )

        response = self.send_request(serialized_request)

        return Serie._unmap(response)

    @cast_models
    def get_series_serie_id_or_slug_matches(
        self,
        serie_id_or_slug: SerieIdOrSlug,
        filter: FilterOverMatches = None,
        range: RangeOverMatches = None,
        sort: List[any] = None,
        search: SearchOverMatches = None,
        page: GetSeriesSerieIdOrSlugMatchesPage = None,
        per_page: int = None,
    ) -> List[Match]:
        """List matches of the given serie

        :param serie_id_or_slug: A serie ID or slug
        :type serie_id_or_slug: SerieIdOrSlug
        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverMatches, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverMatches, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverMatches, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetSeriesSerieIdOrSlugMatchesPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of matches of any e-sport
        :rtype: List[Match]
        """

        Validator(SerieIdOrSlug).validate(serie_id_or_slug)
        Validator(FilterOverMatches).is_optional().validate(filter)
        Validator(RangeOverMatches).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverMatches).is_optional().validate(search)
        Validator(GetSeriesSerieIdOrSlugMatchesPage).is_optional().validate(page)
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(
                f"{self.base_url}/series/{{serie_id_or_slug}}/matches",
                self.get_default_headers(),
            )
            .add_path("serie_id_or_slug", serie_id_or_slug)
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

        return [Match._unmap(item) for item in response]

    @cast_models
    def get_series_serie_id_or_slug_matches_past(
        self,
        serie_id_or_slug: SerieIdOrSlug,
        filter: FilterOverMatches = None,
        range: RangeOverMatches = None,
        sort: List[any] = None,
        search: SearchOverMatches = None,
        page: GetSeriesSerieIdOrSlugMatchesPastPage = None,
        per_page: int = None,
    ) -> List[Match]:
        """List past matches for the given serie

        :param serie_id_or_slug: A serie ID or slug
        :type serie_id_or_slug: SerieIdOrSlug
        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverMatches, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverMatches, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverMatches, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetSeriesSerieIdOrSlugMatchesPastPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of matches of any e-sport
        :rtype: List[Match]
        """

        Validator(SerieIdOrSlug).validate(serie_id_or_slug)
        Validator(FilterOverMatches).is_optional().validate(filter)
        Validator(RangeOverMatches).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverMatches).is_optional().validate(search)
        Validator(GetSeriesSerieIdOrSlugMatchesPastPage).is_optional().validate(page)
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(
                f"{self.base_url}/series/{{serie_id_or_slug}}/matches/past",
                self.get_default_headers(),
            )
            .add_path("serie_id_or_slug", serie_id_or_slug)
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

        return [Match._unmap(item) for item in response]

    @cast_models
    def get_series_serie_id_or_slug_matches_running(
        self,
        serie_id_or_slug: SerieIdOrSlug,
        filter: FilterOverMatches = None,
        range: RangeOverMatches = None,
        sort: List[any] = None,
        search: SearchOverMatches = None,
        page: GetSeriesSerieIdOrSlugMatchesRunningPage = None,
        per_page: int = None,
    ) -> List[Match]:
        """List currently running matches for the given serie

        :param serie_id_or_slug: A serie ID or slug
        :type serie_id_or_slug: SerieIdOrSlug
        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverMatches, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverMatches, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverMatches, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetSeriesSerieIdOrSlugMatchesRunningPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of matches of any e-sport
        :rtype: List[Match]
        """

        Validator(SerieIdOrSlug).validate(serie_id_or_slug)
        Validator(FilterOverMatches).is_optional().validate(filter)
        Validator(RangeOverMatches).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverMatches).is_optional().validate(search)
        Validator(GetSeriesSerieIdOrSlugMatchesRunningPage).is_optional().validate(page)
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(
                f"{self.base_url}/series/{{serie_id_or_slug}}/matches/running",
                self.get_default_headers(),
            )
            .add_path("serie_id_or_slug", serie_id_or_slug)
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

        return [Match._unmap(item) for item in response]

    @cast_models
    def get_series_serie_id_or_slug_matches_upcoming(
        self,
        serie_id_or_slug: SerieIdOrSlug,
        filter: FilterOverMatches = None,
        range: RangeOverMatches = None,
        sort: List[any] = None,
        search: SearchOverMatches = None,
        page: GetSeriesSerieIdOrSlugMatchesUpcomingPage = None,
        per_page: int = None,
    ) -> List[Match]:
        """List upcoming matches for the given serie

        :param serie_id_or_slug: A serie ID or slug
        :type serie_id_or_slug: SerieIdOrSlug
        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverMatches, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverMatches, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverMatches, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetSeriesSerieIdOrSlugMatchesUpcomingPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of matches of any e-sport
        :rtype: List[Match]
        """

        Validator(SerieIdOrSlug).validate(serie_id_or_slug)
        Validator(FilterOverMatches).is_optional().validate(filter)
        Validator(RangeOverMatches).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverMatches).is_optional().validate(search)
        Validator(GetSeriesSerieIdOrSlugMatchesUpcomingPage).is_optional().validate(
            page
        )
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(
                f"{self.base_url}/series/{{serie_id_or_slug}}/matches/upcoming",
                self.get_default_headers(),
            )
            .add_path("serie_id_or_slug", serie_id_or_slug)
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

        return [Match._unmap(item) for item in response]

    @cast_models
    def get_series_serie_id_or_slug_tournaments(
        self,
        serie_id_or_slug: SerieIdOrSlug,
        filter: FilterOverShortTournaments = None,
        range: RangeOverShortTournaments = None,
        sort: List[any] = None,
        search: SearchOverShortTournaments = None,
        page: GetSeriesSerieIdOrSlugTournamentsPage = None,
        per_page: int = None,
    ) -> List[ShortTournament]:
        """List tournaments of the given serie

        :param serie_id_or_slug: A serie ID or slug
        :type serie_id_or_slug: SerieIdOrSlug
        :param filter: Options to filter results. String fields are case sensitive <br/>For more information on filtering, see [docs](/docs/filtering-and-sorting#filter)., defaults to None
        :type filter: FilterOverShortTournaments, optional
        :param range: Options to select results within ranges <br/>For more information on ranges, see [docs](/docs/filtering-and-sorting#range)., defaults to None
        :type range: RangeOverShortTournaments, optional
        :param sort: Options to sort results <br/>For more information on sorting, see [docs](/docs/filtering-and-sorting#sort)., defaults to None
        :type sort: List[any], optional
        :param search: Options to search results <br/>For more information on searching, see [docs](/docs/filtering-and-sorting#search)., defaults to None
        :type search: SearchOverShortTournaments, optional
        :param page: Pagination in the form of `page=2` or `page[size]=30&page[number]=2`, defaults to None
        :type page: GetSeriesSerieIdOrSlugTournamentsPage, optional
        :param per_page: Equivalent to `page[size]`, defaults to None
        :type per_page: int, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: A list of tournaments
        :rtype: List[ShortTournament]
        """

        Validator(SerieIdOrSlug).validate(serie_id_or_slug)
        Validator(FilterOverShortTournaments).is_optional().validate(filter)
        Validator(RangeOverShortTournaments).is_optional().validate(range)
        Validator(any).is_array().is_optional().validate(sort)
        Validator(SearchOverShortTournaments).is_optional().validate(search)
        Validator(GetSeriesSerieIdOrSlugTournamentsPage).is_optional().validate(page)
        Validator(int).is_optional().min(1).max(100).validate(per_page)

        serialized_request = (
            Serializer(
                f"{self.base_url}/series/{{serie_id_or_slug}}/tournaments",
                self.get_default_headers(),
            )
            .add_path("serie_id_or_slug", serie_id_or_slug)
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

        return [ShortTournament._unmap(item) for item in response]