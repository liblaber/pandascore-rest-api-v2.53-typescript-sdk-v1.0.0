import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { IncidentsService } from './services/incidents';
import { CodmwLeaguesService } from './services/codmw-leagues';
import { CodmwMatchesService } from './services/codmw-matches';
import { CodmwPlayersService } from './services/codmw-players';
import { CodmwSeriesService } from './services/codmw-series';
import { CodmwTeamsService } from './services/codmw-teams';
import { CodmwTournamentsService } from './services/codmw-tournaments';
import { CounterStrikeGamesService } from './services/counter-strike-games';
import { CounterStrikeLeaguesService } from './services/counter-strike-leagues';
import { CounterStrikeMapsService } from './services/counter-strike-maps';
import { CounterStrikeMatchesService } from './services/counter-strike-matches';
import { CounterStrikeStatsService } from './services/counter-strike-stats';
import { CounterStrikePlayersService } from './services/counter-strike-players';
import { CounterStrikeSeriesService } from './services/counter-strike-series';
import { CounterStrikeTeamsService } from './services/counter-strike-teams';
import { CounterStrikeTournamentsService } from './services/counter-strike-tournaments';
import { CounterStrikeWeaponsService } from './services/counter-strike-weapons';
import { Dota2AbilitiesService } from './services/dota2-abilities';
import { Dota2GamesService } from './services/dota2-games';
import { Dota2HeroesService } from './services/dota2-heroes';
import { Dota2ItemsService } from './services/dota2-items';
import { Dota2LeaguesService } from './services/dota2-leagues';
import { Dota2MatchesService } from './services/dota2-matches';
import { Dota2StatsService } from './services/dota2-stats';
import { Dota2PlayersService } from './services/dota2-players';
import { Dota2SeriesService } from './services/dota2-series';
import { Dota2TeamsService } from './services/dota2-teams';
import { Dota2TournamentsService } from './services/dota2-tournaments';
import { EaSportsFcLeaguesService } from './services/ea-sports-fc-leagues';
import { EaSportsFcMatchesService } from './services/ea-sports-fc-matches';
import { EaSportsFcPlayersService } from './services/ea-sports-fc-players';
import { EaSportsFcSeriesService } from './services/ea-sports-fc-series';
import { EaSportsFcTeamsService } from './services/ea-sports-fc-teams';
import { EaSportsFcTournamentsService } from './services/ea-sports-fc-tournaments';
import { KogLeaguesService } from './services/kog-leagues';
import { KogMatchesService } from './services/kog-matches';
import { KogPlayersService } from './services/kog-players';
import { KogSeriesService } from './services/kog-series';
import { KogTeamsService } from './services/kog-teams';
import { KogTournamentsService } from './services/kog-tournaments';
import { LeaguesService } from './services/leagues';
import { LivesService } from './services/lives';
import { LoLWildRiftLeaguesService } from './services/lo-l-wild-rift-leagues';
import { LoLWildRiftMatchesService } from './services/lo-l-wild-rift-matches';
import { LoLWildRiftPlayersService } from './services/lo-l-wild-rift-players';
import { LoLWildRiftSeriesService } from './services/lo-l-wild-rift-series';
import { LoLWildRiftTeamsService } from './services/lo-l-wild-rift-teams';
import { LoLWildRiftTournamentsService } from './services/lo-l-wild-rift-tournaments';
import { LoLChampionsService } from './services/lo-l-champions';
import { LoLGamesService } from './services/lo-l-games';
import { LoLItemsService } from './services/lo-l-items';
import { LoLLeaguesService } from './services/lo-l-leagues';
import { LoLMasteriesService } from './services/lo-l-masteries';
import { LoLMatchesService } from './services/lo-l-matches';
import { LoLStatsService } from './services/lo-l-stats';
import { LoLPlayersService } from './services/lo-l-players';
import { LoLRunesService } from './services/lo-l-runes';
import { LoLSeriesService } from './services/lo-l-series';
import { LoLTeamsService } from './services/lo-l-teams';
import { LoLSpellsService } from './services/lo-l-spells';
import { LoLTournamentsService } from './services/lo-l-tournaments';
import { MatchesService } from './services/matches';
import { OwGamesService } from './services/ow-games';
import { OwStatsService } from './services/ow-stats';
import { OwHeroesService } from './services/ow-heroes';
import { OwLeaguesService } from './services/ow-leagues';
import { OwMapsService } from './services/ow-maps';
import { OwMatchesService } from './services/ow-matches';
import { OwPlayersService } from './services/ow-players';
import { OwSeriesService } from './services/ow-series';
import { OwTeamsService } from './services/ow-teams';
import { OwTournamentsService } from './services/ow-tournaments';
import { PlayersService } from './services/players';
import { PubgLeaguesService } from './services/pubg-leagues';
import { PubgMatchesService } from './services/pubg-matches';
import { PubgPlayersService } from './services/pubg-players';
import { PubgSeriesService } from './services/pubg-series';
import { PubgTeamsService } from './services/pubg-teams';
import { PubgTournamentsService } from './services/pubg-tournaments';
import { R6SiegeLeaguesService } from './services/r6-siege-leagues';
import { R6SiegeMatchesService } from './services/r6-siege-matches';
import { R6SiegePlayersService } from './services/r6-siege-players';
import { R6SiegeSeriesService } from './services/r6-siege-series';
import { R6SiegeTeamsService } from './services/r6-siege-teams';
import { R6SiegeTournamentsService } from './services/r6-siege-tournaments';
import { RlLeaguesService } from './services/rl-leagues';
import { RlMatchesService } from './services/rl-matches';
import { RlPlayersService } from './services/rl-players';
import { RlSeriesService } from './services/rl-series';
import { RlTeamsService } from './services/rl-teams';
import { RlTournamentsService } from './services/rl-tournaments';
import { SeriesService } from './services/series';
import { StarCraft2LeaguesService } from './services/star-craft-2-leagues';
import { StarCraft2MatchesService } from './services/star-craft-2-matches';
import { StarCraft2PlayersService } from './services/star-craft-2-players';
import { StarCraft2SeriesService } from './services/star-craft-2-series';
import { StarCraft2TeamsService } from './services/star-craft-2-teams';
import { StarCraft2TournamentsService } from './services/star-craft-2-tournaments';
import { StarCraftBroodWarLeaguesService } from './services/star-craft-brood-war-leagues';
import { StarCraftBroodWarMatchesService } from './services/star-craft-brood-war-matches';
import { StarCraftBroodWarPlayersService } from './services/star-craft-brood-war-players';
import { StarCraftBroodWarSeriesService } from './services/star-craft-brood-war-series';
import { StarCraftBroodWarTeamsService } from './services/star-craft-brood-war-teams';
import { StarCraftBroodWarTournamentsService } from './services/star-craft-brood-war-tournaments';
import { TeamsService } from './services/teams';
import { TournamentsService } from './services/tournaments';
import { ValorantAbilitiesService } from './services/valorant-abilities';
import { ValorantAgentsService } from './services/valorant-agents';
import { ValorantGamesService } from './services/valorant-games';
import { ValorantLeaguesService } from './services/valorant-leagues';
import { ValorantMapsService } from './services/valorant-maps';
import { ValorantMatchesService } from './services/valorant-matches';
import { ValorantStatsService } from './services/valorant-stats';
import { ValorantPlayersService } from './services/valorant-players';
import { ValorantSeriesService } from './services/valorant-series';
import { ValorantTeamsService } from './services/valorant-teams';
import { ValorantTournamentsService } from './services/valorant-tournaments';
import { ValorantWeaponsService } from './services/valorant-weapons';
import { VideogamesService } from './services/videogames';

export class PandascoreClient {
  public readonly incidents: IncidentsService;

  public readonly codmwLeagues: CodmwLeaguesService;

  public readonly codmwMatches: CodmwMatchesService;

  public readonly codmwPlayers: CodmwPlayersService;

  public readonly codmwSeries: CodmwSeriesService;

  public readonly codmwTeams: CodmwTeamsService;

  public readonly codmwTournaments: CodmwTournamentsService;

  public readonly counterStrikeGames: CounterStrikeGamesService;

  public readonly counterStrikeLeagues: CounterStrikeLeaguesService;

  public readonly counterStrikeMaps: CounterStrikeMapsService;

  public readonly counterStrikeMatches: CounterStrikeMatchesService;

  public readonly counterStrikeStats: CounterStrikeStatsService;

  public readonly counterStrikePlayers: CounterStrikePlayersService;

  public readonly counterStrikeSeries: CounterStrikeSeriesService;

  public readonly counterStrikeTeams: CounterStrikeTeamsService;

  public readonly counterStrikeTournaments: CounterStrikeTournamentsService;

  public readonly counterStrikeWeapons: CounterStrikeWeaponsService;

  public readonly dota2Abilities: Dota2AbilitiesService;

  public readonly dota2Games: Dota2GamesService;

  public readonly dota2Heroes: Dota2HeroesService;

  public readonly dota2Items: Dota2ItemsService;

  public readonly dota2Leagues: Dota2LeaguesService;

  public readonly dota2Matches: Dota2MatchesService;

  public readonly dota2Stats: Dota2StatsService;

  public readonly dota2Players: Dota2PlayersService;

  public readonly dota2Series: Dota2SeriesService;

  public readonly dota2Teams: Dota2TeamsService;

  public readonly dota2Tournaments: Dota2TournamentsService;

  public readonly eaSportsFcLeagues: EaSportsFcLeaguesService;

  public readonly eaSportsFcMatches: EaSportsFcMatchesService;

  public readonly eaSportsFcPlayers: EaSportsFcPlayersService;

  public readonly eaSportsFcSeries: EaSportsFcSeriesService;

  public readonly eaSportsFcTeams: EaSportsFcTeamsService;

  public readonly eaSportsFcTournaments: EaSportsFcTournamentsService;

  public readonly kogLeagues: KogLeaguesService;

  public readonly kogMatches: KogMatchesService;

  public readonly kogPlayers: KogPlayersService;

  public readonly kogSeries: KogSeriesService;

  public readonly kogTeams: KogTeamsService;

  public readonly kogTournaments: KogTournamentsService;

  public readonly leagues: LeaguesService;

  public readonly lives: LivesService;

  public readonly loLWildRiftLeagues: LoLWildRiftLeaguesService;

  public readonly loLWildRiftMatches: LoLWildRiftMatchesService;

  public readonly loLWildRiftPlayers: LoLWildRiftPlayersService;

  public readonly loLWildRiftSeries: LoLWildRiftSeriesService;

  public readonly loLWildRiftTeams: LoLWildRiftTeamsService;

  public readonly loLWildRiftTournaments: LoLWildRiftTournamentsService;

  public readonly loLChampions: LoLChampionsService;

  public readonly loLGames: LoLGamesService;

  public readonly loLItems: LoLItemsService;

  public readonly loLLeagues: LoLLeaguesService;

  public readonly loLMasteries: LoLMasteriesService;

  public readonly loLMatches: LoLMatchesService;

  public readonly loLStats: LoLStatsService;

  public readonly loLPlayers: LoLPlayersService;

  public readonly loLRunes: LoLRunesService;

  public readonly loLSeries: LoLSeriesService;

  public readonly loLTeams: LoLTeamsService;

  public readonly loLSpells: LoLSpellsService;

  public readonly loLTournaments: LoLTournamentsService;

  public readonly matches: MatchesService;

  public readonly owGames: OwGamesService;

  public readonly owStats: OwStatsService;

  public readonly owHeroes: OwHeroesService;

  public readonly owLeagues: OwLeaguesService;

  public readonly owMaps: OwMapsService;

  public readonly owMatches: OwMatchesService;

  public readonly owPlayers: OwPlayersService;

  public readonly owSeries: OwSeriesService;

  public readonly owTeams: OwTeamsService;

  public readonly owTournaments: OwTournamentsService;

  public readonly players: PlayersService;

  public readonly pubgLeagues: PubgLeaguesService;

  public readonly pubgMatches: PubgMatchesService;

  public readonly pubgPlayers: PubgPlayersService;

  public readonly pubgSeries: PubgSeriesService;

  public readonly pubgTeams: PubgTeamsService;

  public readonly pubgTournaments: PubgTournamentsService;

  public readonly r6SiegeLeagues: R6SiegeLeaguesService;

  public readonly r6SiegeMatches: R6SiegeMatchesService;

  public readonly r6SiegePlayers: R6SiegePlayersService;

  public readonly r6SiegeSeries: R6SiegeSeriesService;

  public readonly r6SiegeTeams: R6SiegeTeamsService;

  public readonly r6SiegeTournaments: R6SiegeTournamentsService;

  public readonly rlLeagues: RlLeaguesService;

  public readonly rlMatches: RlMatchesService;

  public readonly rlPlayers: RlPlayersService;

  public readonly rlSeries: RlSeriesService;

  public readonly rlTeams: RlTeamsService;

  public readonly rlTournaments: RlTournamentsService;

  public readonly series: SeriesService;

  public readonly starCraft2Leagues: StarCraft2LeaguesService;

  public readonly starCraft2Matches: StarCraft2MatchesService;

  public readonly starCraft2Players: StarCraft2PlayersService;

  public readonly starCraft2Series: StarCraft2SeriesService;

  public readonly starCraft2Teams: StarCraft2TeamsService;

  public readonly starCraft2Tournaments: StarCraft2TournamentsService;

  public readonly starCraftBroodWarLeagues: StarCraftBroodWarLeaguesService;

  public readonly starCraftBroodWarMatches: StarCraftBroodWarMatchesService;

  public readonly starCraftBroodWarPlayers: StarCraftBroodWarPlayersService;

  public readonly starCraftBroodWarSeries: StarCraftBroodWarSeriesService;

  public readonly starCraftBroodWarTeams: StarCraftBroodWarTeamsService;

  public readonly starCraftBroodWarTournaments: StarCraftBroodWarTournamentsService;

  public readonly teams: TeamsService;

  public readonly tournaments: TournamentsService;

  public readonly valorantAbilities: ValorantAbilitiesService;

  public readonly valorantAgents: ValorantAgentsService;

  public readonly valorantGames: ValorantGamesService;

  public readonly valorantLeagues: ValorantLeaguesService;

  public readonly valorantMaps: ValorantMapsService;

  public readonly valorantMatches: ValorantMatchesService;

  public readonly valorantStats: ValorantStatsService;

  public readonly valorantPlayers: ValorantPlayersService;

  public readonly valorantSeries: ValorantSeriesService;

  public readonly valorantTeams: ValorantTeamsService;

  public readonly valorantTournaments: ValorantTournamentsService;

  public readonly valorantWeapons: ValorantWeaponsService;

  public readonly videogames: VideogamesService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.incidents = new IncidentsService(this.config);

    this.codmwLeagues = new CodmwLeaguesService(this.config);

    this.codmwMatches = new CodmwMatchesService(this.config);

    this.codmwPlayers = new CodmwPlayersService(this.config);

    this.codmwSeries = new CodmwSeriesService(this.config);

    this.codmwTeams = new CodmwTeamsService(this.config);

    this.codmwTournaments = new CodmwTournamentsService(this.config);

    this.counterStrikeGames = new CounterStrikeGamesService(this.config);

    this.counterStrikeLeagues = new CounterStrikeLeaguesService(this.config);

    this.counterStrikeMaps = new CounterStrikeMapsService(this.config);

    this.counterStrikeMatches = new CounterStrikeMatchesService(this.config);

    this.counterStrikeStats = new CounterStrikeStatsService(this.config);

    this.counterStrikePlayers = new CounterStrikePlayersService(this.config);

    this.counterStrikeSeries = new CounterStrikeSeriesService(this.config);

    this.counterStrikeTeams = new CounterStrikeTeamsService(this.config);

    this.counterStrikeTournaments = new CounterStrikeTournamentsService(this.config);

    this.counterStrikeWeapons = new CounterStrikeWeaponsService(this.config);

    this.dota2Abilities = new Dota2AbilitiesService(this.config);

    this.dota2Games = new Dota2GamesService(this.config);

    this.dota2Heroes = new Dota2HeroesService(this.config);

    this.dota2Items = new Dota2ItemsService(this.config);

    this.dota2Leagues = new Dota2LeaguesService(this.config);

    this.dota2Matches = new Dota2MatchesService(this.config);

    this.dota2Stats = new Dota2StatsService(this.config);

    this.dota2Players = new Dota2PlayersService(this.config);

    this.dota2Series = new Dota2SeriesService(this.config);

    this.dota2Teams = new Dota2TeamsService(this.config);

    this.dota2Tournaments = new Dota2TournamentsService(this.config);

    this.eaSportsFcLeagues = new EaSportsFcLeaguesService(this.config);

    this.eaSportsFcMatches = new EaSportsFcMatchesService(this.config);

    this.eaSportsFcPlayers = new EaSportsFcPlayersService(this.config);

    this.eaSportsFcSeries = new EaSportsFcSeriesService(this.config);

    this.eaSportsFcTeams = new EaSportsFcTeamsService(this.config);

    this.eaSportsFcTournaments = new EaSportsFcTournamentsService(this.config);

    this.kogLeagues = new KogLeaguesService(this.config);

    this.kogMatches = new KogMatchesService(this.config);

    this.kogPlayers = new KogPlayersService(this.config);

    this.kogSeries = new KogSeriesService(this.config);

    this.kogTeams = new KogTeamsService(this.config);

    this.kogTournaments = new KogTournamentsService(this.config);

    this.leagues = new LeaguesService(this.config);

    this.lives = new LivesService(this.config);

    this.loLWildRiftLeagues = new LoLWildRiftLeaguesService(this.config);

    this.loLWildRiftMatches = new LoLWildRiftMatchesService(this.config);

    this.loLWildRiftPlayers = new LoLWildRiftPlayersService(this.config);

    this.loLWildRiftSeries = new LoLWildRiftSeriesService(this.config);

    this.loLWildRiftTeams = new LoLWildRiftTeamsService(this.config);

    this.loLWildRiftTournaments = new LoLWildRiftTournamentsService(this.config);

    this.loLChampions = new LoLChampionsService(this.config);

    this.loLGames = new LoLGamesService(this.config);

    this.loLItems = new LoLItemsService(this.config);

    this.loLLeagues = new LoLLeaguesService(this.config);

    this.loLMasteries = new LoLMasteriesService(this.config);

    this.loLMatches = new LoLMatchesService(this.config);

    this.loLStats = new LoLStatsService(this.config);

    this.loLPlayers = new LoLPlayersService(this.config);

    this.loLRunes = new LoLRunesService(this.config);

    this.loLSeries = new LoLSeriesService(this.config);

    this.loLTeams = new LoLTeamsService(this.config);

    this.loLSpells = new LoLSpellsService(this.config);

    this.loLTournaments = new LoLTournamentsService(this.config);

    this.matches = new MatchesService(this.config);

    this.owGames = new OwGamesService(this.config);

    this.owStats = new OwStatsService(this.config);

    this.owHeroes = new OwHeroesService(this.config);

    this.owLeagues = new OwLeaguesService(this.config);

    this.owMaps = new OwMapsService(this.config);

    this.owMatches = new OwMatchesService(this.config);

    this.owPlayers = new OwPlayersService(this.config);

    this.owSeries = new OwSeriesService(this.config);

    this.owTeams = new OwTeamsService(this.config);

    this.owTournaments = new OwTournamentsService(this.config);

    this.players = new PlayersService(this.config);

    this.pubgLeagues = new PubgLeaguesService(this.config);

    this.pubgMatches = new PubgMatchesService(this.config);

    this.pubgPlayers = new PubgPlayersService(this.config);

    this.pubgSeries = new PubgSeriesService(this.config);

    this.pubgTeams = new PubgTeamsService(this.config);

    this.pubgTournaments = new PubgTournamentsService(this.config);

    this.r6SiegeLeagues = new R6SiegeLeaguesService(this.config);

    this.r6SiegeMatches = new R6SiegeMatchesService(this.config);

    this.r6SiegePlayers = new R6SiegePlayersService(this.config);

    this.r6SiegeSeries = new R6SiegeSeriesService(this.config);

    this.r6SiegeTeams = new R6SiegeTeamsService(this.config);

    this.r6SiegeTournaments = new R6SiegeTournamentsService(this.config);

    this.rlLeagues = new RlLeaguesService(this.config);

    this.rlMatches = new RlMatchesService(this.config);

    this.rlPlayers = new RlPlayersService(this.config);

    this.rlSeries = new RlSeriesService(this.config);

    this.rlTeams = new RlTeamsService(this.config);

    this.rlTournaments = new RlTournamentsService(this.config);

    this.series = new SeriesService(this.config);

    this.starCraft2Leagues = new StarCraft2LeaguesService(this.config);

    this.starCraft2Matches = new StarCraft2MatchesService(this.config);

    this.starCraft2Players = new StarCraft2PlayersService(this.config);

    this.starCraft2Series = new StarCraft2SeriesService(this.config);

    this.starCraft2Teams = new StarCraft2TeamsService(this.config);

    this.starCraft2Tournaments = new StarCraft2TournamentsService(this.config);

    this.starCraftBroodWarLeagues = new StarCraftBroodWarLeaguesService(this.config);

    this.starCraftBroodWarMatches = new StarCraftBroodWarMatchesService(this.config);

    this.starCraftBroodWarPlayers = new StarCraftBroodWarPlayersService(this.config);

    this.starCraftBroodWarSeries = new StarCraftBroodWarSeriesService(this.config);

    this.starCraftBroodWarTeams = new StarCraftBroodWarTeamsService(this.config);

    this.starCraftBroodWarTournaments = new StarCraftBroodWarTournamentsService(this.config);

    this.teams = new TeamsService(this.config);

    this.tournaments = new TournamentsService(this.config);

    this.valorantAbilities = new ValorantAbilitiesService(this.config);

    this.valorantAgents = new ValorantAgentsService(this.config);

    this.valorantGames = new ValorantGamesService(this.config);

    this.valorantLeagues = new ValorantLeaguesService(this.config);

    this.valorantMaps = new ValorantMapsService(this.config);

    this.valorantMatches = new ValorantMatchesService(this.config);

    this.valorantStats = new ValorantStatsService(this.config);

    this.valorantPlayers = new ValorantPlayersService(this.config);

    this.valorantSeries = new ValorantSeriesService(this.config);

    this.valorantTeams = new ValorantTeamsService(this.config);

    this.valorantTournaments = new ValorantTournamentsService(this.config);

    this.valorantWeapons = new ValorantWeaponsService(this.config);

    this.videogames = new VideogamesService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.incidents.baseUrl = baseUrl;
    this.codmwLeagues.baseUrl = baseUrl;
    this.codmwMatches.baseUrl = baseUrl;
    this.codmwPlayers.baseUrl = baseUrl;
    this.codmwSeries.baseUrl = baseUrl;
    this.codmwTeams.baseUrl = baseUrl;
    this.codmwTournaments.baseUrl = baseUrl;
    this.counterStrikeGames.baseUrl = baseUrl;
    this.counterStrikeLeagues.baseUrl = baseUrl;
    this.counterStrikeMaps.baseUrl = baseUrl;
    this.counterStrikeMatches.baseUrl = baseUrl;
    this.counterStrikeStats.baseUrl = baseUrl;
    this.counterStrikePlayers.baseUrl = baseUrl;
    this.counterStrikeSeries.baseUrl = baseUrl;
    this.counterStrikeTeams.baseUrl = baseUrl;
    this.counterStrikeTournaments.baseUrl = baseUrl;
    this.counterStrikeWeapons.baseUrl = baseUrl;
    this.dota2Abilities.baseUrl = baseUrl;
    this.dota2Games.baseUrl = baseUrl;
    this.dota2Heroes.baseUrl = baseUrl;
    this.dota2Items.baseUrl = baseUrl;
    this.dota2Leagues.baseUrl = baseUrl;
    this.dota2Matches.baseUrl = baseUrl;
    this.dota2Stats.baseUrl = baseUrl;
    this.dota2Players.baseUrl = baseUrl;
    this.dota2Series.baseUrl = baseUrl;
    this.dota2Teams.baseUrl = baseUrl;
    this.dota2Tournaments.baseUrl = baseUrl;
    this.eaSportsFcLeagues.baseUrl = baseUrl;
    this.eaSportsFcMatches.baseUrl = baseUrl;
    this.eaSportsFcPlayers.baseUrl = baseUrl;
    this.eaSportsFcSeries.baseUrl = baseUrl;
    this.eaSportsFcTeams.baseUrl = baseUrl;
    this.eaSportsFcTournaments.baseUrl = baseUrl;
    this.kogLeagues.baseUrl = baseUrl;
    this.kogMatches.baseUrl = baseUrl;
    this.kogPlayers.baseUrl = baseUrl;
    this.kogSeries.baseUrl = baseUrl;
    this.kogTeams.baseUrl = baseUrl;
    this.kogTournaments.baseUrl = baseUrl;
    this.leagues.baseUrl = baseUrl;
    this.lives.baseUrl = baseUrl;
    this.loLWildRiftLeagues.baseUrl = baseUrl;
    this.loLWildRiftMatches.baseUrl = baseUrl;
    this.loLWildRiftPlayers.baseUrl = baseUrl;
    this.loLWildRiftSeries.baseUrl = baseUrl;
    this.loLWildRiftTeams.baseUrl = baseUrl;
    this.loLWildRiftTournaments.baseUrl = baseUrl;
    this.loLChampions.baseUrl = baseUrl;
    this.loLGames.baseUrl = baseUrl;
    this.loLItems.baseUrl = baseUrl;
    this.loLLeagues.baseUrl = baseUrl;
    this.loLMasteries.baseUrl = baseUrl;
    this.loLMatches.baseUrl = baseUrl;
    this.loLStats.baseUrl = baseUrl;
    this.loLPlayers.baseUrl = baseUrl;
    this.loLRunes.baseUrl = baseUrl;
    this.loLSeries.baseUrl = baseUrl;
    this.loLTeams.baseUrl = baseUrl;
    this.loLSpells.baseUrl = baseUrl;
    this.loLTournaments.baseUrl = baseUrl;
    this.matches.baseUrl = baseUrl;
    this.owGames.baseUrl = baseUrl;
    this.owStats.baseUrl = baseUrl;
    this.owHeroes.baseUrl = baseUrl;
    this.owLeagues.baseUrl = baseUrl;
    this.owMaps.baseUrl = baseUrl;
    this.owMatches.baseUrl = baseUrl;
    this.owPlayers.baseUrl = baseUrl;
    this.owSeries.baseUrl = baseUrl;
    this.owTeams.baseUrl = baseUrl;
    this.owTournaments.baseUrl = baseUrl;
    this.players.baseUrl = baseUrl;
    this.pubgLeagues.baseUrl = baseUrl;
    this.pubgMatches.baseUrl = baseUrl;
    this.pubgPlayers.baseUrl = baseUrl;
    this.pubgSeries.baseUrl = baseUrl;
    this.pubgTeams.baseUrl = baseUrl;
    this.pubgTournaments.baseUrl = baseUrl;
    this.r6SiegeLeagues.baseUrl = baseUrl;
    this.r6SiegeMatches.baseUrl = baseUrl;
    this.r6SiegePlayers.baseUrl = baseUrl;
    this.r6SiegeSeries.baseUrl = baseUrl;
    this.r6SiegeTeams.baseUrl = baseUrl;
    this.r6SiegeTournaments.baseUrl = baseUrl;
    this.rlLeagues.baseUrl = baseUrl;
    this.rlMatches.baseUrl = baseUrl;
    this.rlPlayers.baseUrl = baseUrl;
    this.rlSeries.baseUrl = baseUrl;
    this.rlTeams.baseUrl = baseUrl;
    this.rlTournaments.baseUrl = baseUrl;
    this.series.baseUrl = baseUrl;
    this.starCraft2Leagues.baseUrl = baseUrl;
    this.starCraft2Matches.baseUrl = baseUrl;
    this.starCraft2Players.baseUrl = baseUrl;
    this.starCraft2Series.baseUrl = baseUrl;
    this.starCraft2Teams.baseUrl = baseUrl;
    this.starCraft2Tournaments.baseUrl = baseUrl;
    this.starCraftBroodWarLeagues.baseUrl = baseUrl;
    this.starCraftBroodWarMatches.baseUrl = baseUrl;
    this.starCraftBroodWarPlayers.baseUrl = baseUrl;
    this.starCraftBroodWarSeries.baseUrl = baseUrl;
    this.starCraftBroodWarTeams.baseUrl = baseUrl;
    this.starCraftBroodWarTournaments.baseUrl = baseUrl;
    this.teams.baseUrl = baseUrl;
    this.tournaments.baseUrl = baseUrl;
    this.valorantAbilities.baseUrl = baseUrl;
    this.valorantAgents.baseUrl = baseUrl;
    this.valorantGames.baseUrl = baseUrl;
    this.valorantLeagues.baseUrl = baseUrl;
    this.valorantMaps.baseUrl = baseUrl;
    this.valorantMatches.baseUrl = baseUrl;
    this.valorantStats.baseUrl = baseUrl;
    this.valorantPlayers.baseUrl = baseUrl;
    this.valorantSeries.baseUrl = baseUrl;
    this.valorantTeams.baseUrl = baseUrl;
    this.valorantTournaments.baseUrl = baseUrl;
    this.valorantWeapons.baseUrl = baseUrl;
    this.videogames.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.incidents.baseUrl = environment;
    this.codmwLeagues.baseUrl = environment;
    this.codmwMatches.baseUrl = environment;
    this.codmwPlayers.baseUrl = environment;
    this.codmwSeries.baseUrl = environment;
    this.codmwTeams.baseUrl = environment;
    this.codmwTournaments.baseUrl = environment;
    this.counterStrikeGames.baseUrl = environment;
    this.counterStrikeLeagues.baseUrl = environment;
    this.counterStrikeMaps.baseUrl = environment;
    this.counterStrikeMatches.baseUrl = environment;
    this.counterStrikeStats.baseUrl = environment;
    this.counterStrikePlayers.baseUrl = environment;
    this.counterStrikeSeries.baseUrl = environment;
    this.counterStrikeTeams.baseUrl = environment;
    this.counterStrikeTournaments.baseUrl = environment;
    this.counterStrikeWeapons.baseUrl = environment;
    this.dota2Abilities.baseUrl = environment;
    this.dota2Games.baseUrl = environment;
    this.dota2Heroes.baseUrl = environment;
    this.dota2Items.baseUrl = environment;
    this.dota2Leagues.baseUrl = environment;
    this.dota2Matches.baseUrl = environment;
    this.dota2Stats.baseUrl = environment;
    this.dota2Players.baseUrl = environment;
    this.dota2Series.baseUrl = environment;
    this.dota2Teams.baseUrl = environment;
    this.dota2Tournaments.baseUrl = environment;
    this.eaSportsFcLeagues.baseUrl = environment;
    this.eaSportsFcMatches.baseUrl = environment;
    this.eaSportsFcPlayers.baseUrl = environment;
    this.eaSportsFcSeries.baseUrl = environment;
    this.eaSportsFcTeams.baseUrl = environment;
    this.eaSportsFcTournaments.baseUrl = environment;
    this.kogLeagues.baseUrl = environment;
    this.kogMatches.baseUrl = environment;
    this.kogPlayers.baseUrl = environment;
    this.kogSeries.baseUrl = environment;
    this.kogTeams.baseUrl = environment;
    this.kogTournaments.baseUrl = environment;
    this.leagues.baseUrl = environment;
    this.lives.baseUrl = environment;
    this.loLWildRiftLeagues.baseUrl = environment;
    this.loLWildRiftMatches.baseUrl = environment;
    this.loLWildRiftPlayers.baseUrl = environment;
    this.loLWildRiftSeries.baseUrl = environment;
    this.loLWildRiftTeams.baseUrl = environment;
    this.loLWildRiftTournaments.baseUrl = environment;
    this.loLChampions.baseUrl = environment;
    this.loLGames.baseUrl = environment;
    this.loLItems.baseUrl = environment;
    this.loLLeagues.baseUrl = environment;
    this.loLMasteries.baseUrl = environment;
    this.loLMatches.baseUrl = environment;
    this.loLStats.baseUrl = environment;
    this.loLPlayers.baseUrl = environment;
    this.loLRunes.baseUrl = environment;
    this.loLSeries.baseUrl = environment;
    this.loLTeams.baseUrl = environment;
    this.loLSpells.baseUrl = environment;
    this.loLTournaments.baseUrl = environment;
    this.matches.baseUrl = environment;
    this.owGames.baseUrl = environment;
    this.owStats.baseUrl = environment;
    this.owHeroes.baseUrl = environment;
    this.owLeagues.baseUrl = environment;
    this.owMaps.baseUrl = environment;
    this.owMatches.baseUrl = environment;
    this.owPlayers.baseUrl = environment;
    this.owSeries.baseUrl = environment;
    this.owTeams.baseUrl = environment;
    this.owTournaments.baseUrl = environment;
    this.players.baseUrl = environment;
    this.pubgLeagues.baseUrl = environment;
    this.pubgMatches.baseUrl = environment;
    this.pubgPlayers.baseUrl = environment;
    this.pubgSeries.baseUrl = environment;
    this.pubgTeams.baseUrl = environment;
    this.pubgTournaments.baseUrl = environment;
    this.r6SiegeLeagues.baseUrl = environment;
    this.r6SiegeMatches.baseUrl = environment;
    this.r6SiegePlayers.baseUrl = environment;
    this.r6SiegeSeries.baseUrl = environment;
    this.r6SiegeTeams.baseUrl = environment;
    this.r6SiegeTournaments.baseUrl = environment;
    this.rlLeagues.baseUrl = environment;
    this.rlMatches.baseUrl = environment;
    this.rlPlayers.baseUrl = environment;
    this.rlSeries.baseUrl = environment;
    this.rlTeams.baseUrl = environment;
    this.rlTournaments.baseUrl = environment;
    this.series.baseUrl = environment;
    this.starCraft2Leagues.baseUrl = environment;
    this.starCraft2Matches.baseUrl = environment;
    this.starCraft2Players.baseUrl = environment;
    this.starCraft2Series.baseUrl = environment;
    this.starCraft2Teams.baseUrl = environment;
    this.starCraft2Tournaments.baseUrl = environment;
    this.starCraftBroodWarLeagues.baseUrl = environment;
    this.starCraftBroodWarMatches.baseUrl = environment;
    this.starCraftBroodWarPlayers.baseUrl = environment;
    this.starCraftBroodWarSeries.baseUrl = environment;
    this.starCraftBroodWarTeams.baseUrl = environment;
    this.starCraftBroodWarTournaments.baseUrl = environment;
    this.teams.baseUrl = environment;
    this.tournaments.baseUrl = environment;
    this.valorantAbilities.baseUrl = environment;
    this.valorantAgents.baseUrl = environment;
    this.valorantGames.baseUrl = environment;
    this.valorantLeagues.baseUrl = environment;
    this.valorantMaps.baseUrl = environment;
    this.valorantMatches.baseUrl = environment;
    this.valorantStats.baseUrl = environment;
    this.valorantPlayers.baseUrl = environment;
    this.valorantSeries.baseUrl = environment;
    this.valorantTeams.baseUrl = environment;
    this.valorantTournaments.baseUrl = environment;
    this.valorantWeapons.baseUrl = environment;
    this.videogames.baseUrl = environment;
  }

  set timeout(timeout: number) {
    this.incidents.timeout = timeout;
    this.codmwLeagues.timeout = timeout;
    this.codmwMatches.timeout = timeout;
    this.codmwPlayers.timeout = timeout;
    this.codmwSeries.timeout = timeout;
    this.codmwTeams.timeout = timeout;
    this.codmwTournaments.timeout = timeout;
    this.counterStrikeGames.timeout = timeout;
    this.counterStrikeLeagues.timeout = timeout;
    this.counterStrikeMaps.timeout = timeout;
    this.counterStrikeMatches.timeout = timeout;
    this.counterStrikeStats.timeout = timeout;
    this.counterStrikePlayers.timeout = timeout;
    this.counterStrikeSeries.timeout = timeout;
    this.counterStrikeTeams.timeout = timeout;
    this.counterStrikeTournaments.timeout = timeout;
    this.counterStrikeWeapons.timeout = timeout;
    this.dota2Abilities.timeout = timeout;
    this.dota2Games.timeout = timeout;
    this.dota2Heroes.timeout = timeout;
    this.dota2Items.timeout = timeout;
    this.dota2Leagues.timeout = timeout;
    this.dota2Matches.timeout = timeout;
    this.dota2Stats.timeout = timeout;
    this.dota2Players.timeout = timeout;
    this.dota2Series.timeout = timeout;
    this.dota2Teams.timeout = timeout;
    this.dota2Tournaments.timeout = timeout;
    this.eaSportsFcLeagues.timeout = timeout;
    this.eaSportsFcMatches.timeout = timeout;
    this.eaSportsFcPlayers.timeout = timeout;
    this.eaSportsFcSeries.timeout = timeout;
    this.eaSportsFcTeams.timeout = timeout;
    this.eaSportsFcTournaments.timeout = timeout;
    this.kogLeagues.timeout = timeout;
    this.kogMatches.timeout = timeout;
    this.kogPlayers.timeout = timeout;
    this.kogSeries.timeout = timeout;
    this.kogTeams.timeout = timeout;
    this.kogTournaments.timeout = timeout;
    this.leagues.timeout = timeout;
    this.lives.timeout = timeout;
    this.loLWildRiftLeagues.timeout = timeout;
    this.loLWildRiftMatches.timeout = timeout;
    this.loLWildRiftPlayers.timeout = timeout;
    this.loLWildRiftSeries.timeout = timeout;
    this.loLWildRiftTeams.timeout = timeout;
    this.loLWildRiftTournaments.timeout = timeout;
    this.loLChampions.timeout = timeout;
    this.loLGames.timeout = timeout;
    this.loLItems.timeout = timeout;
    this.loLLeagues.timeout = timeout;
    this.loLMasteries.timeout = timeout;
    this.loLMatches.timeout = timeout;
    this.loLStats.timeout = timeout;
    this.loLPlayers.timeout = timeout;
    this.loLRunes.timeout = timeout;
    this.loLSeries.timeout = timeout;
    this.loLTeams.timeout = timeout;
    this.loLSpells.timeout = timeout;
    this.loLTournaments.timeout = timeout;
    this.matches.timeout = timeout;
    this.owGames.timeout = timeout;
    this.owStats.timeout = timeout;
    this.owHeroes.timeout = timeout;
    this.owLeagues.timeout = timeout;
    this.owMaps.timeout = timeout;
    this.owMatches.timeout = timeout;
    this.owPlayers.timeout = timeout;
    this.owSeries.timeout = timeout;
    this.owTeams.timeout = timeout;
    this.owTournaments.timeout = timeout;
    this.players.timeout = timeout;
    this.pubgLeagues.timeout = timeout;
    this.pubgMatches.timeout = timeout;
    this.pubgPlayers.timeout = timeout;
    this.pubgSeries.timeout = timeout;
    this.pubgTeams.timeout = timeout;
    this.pubgTournaments.timeout = timeout;
    this.r6SiegeLeagues.timeout = timeout;
    this.r6SiegeMatches.timeout = timeout;
    this.r6SiegePlayers.timeout = timeout;
    this.r6SiegeSeries.timeout = timeout;
    this.r6SiegeTeams.timeout = timeout;
    this.r6SiegeTournaments.timeout = timeout;
    this.rlLeagues.timeout = timeout;
    this.rlMatches.timeout = timeout;
    this.rlPlayers.timeout = timeout;
    this.rlSeries.timeout = timeout;
    this.rlTeams.timeout = timeout;
    this.rlTournaments.timeout = timeout;
    this.series.timeout = timeout;
    this.starCraft2Leagues.timeout = timeout;
    this.starCraft2Matches.timeout = timeout;
    this.starCraft2Players.timeout = timeout;
    this.starCraft2Series.timeout = timeout;
    this.starCraft2Teams.timeout = timeout;
    this.starCraft2Tournaments.timeout = timeout;
    this.starCraftBroodWarLeagues.timeout = timeout;
    this.starCraftBroodWarMatches.timeout = timeout;
    this.starCraftBroodWarPlayers.timeout = timeout;
    this.starCraftBroodWarSeries.timeout = timeout;
    this.starCraftBroodWarTeams.timeout = timeout;
    this.starCraftBroodWarTournaments.timeout = timeout;
    this.teams.timeout = timeout;
    this.tournaments.timeout = timeout;
    this.valorantAbilities.timeout = timeout;
    this.valorantAgents.timeout = timeout;
    this.valorantGames.timeout = timeout;
    this.valorantLeagues.timeout = timeout;
    this.valorantMaps.timeout = timeout;
    this.valorantMatches.timeout = timeout;
    this.valorantStats.timeout = timeout;
    this.valorantPlayers.timeout = timeout;
    this.valorantSeries.timeout = timeout;
    this.valorantTeams.timeout = timeout;
    this.valorantTournaments.timeout = timeout;
    this.valorantWeapons.timeout = timeout;
    this.videogames.timeout = timeout;
  }

  set token(token: string) {
    this.incidents.token = token;
    this.codmwLeagues.token = token;
    this.codmwMatches.token = token;
    this.codmwPlayers.token = token;
    this.codmwSeries.token = token;
    this.codmwTeams.token = token;
    this.codmwTournaments.token = token;
    this.counterStrikeGames.token = token;
    this.counterStrikeLeagues.token = token;
    this.counterStrikeMaps.token = token;
    this.counterStrikeMatches.token = token;
    this.counterStrikeStats.token = token;
    this.counterStrikePlayers.token = token;
    this.counterStrikeSeries.token = token;
    this.counterStrikeTeams.token = token;
    this.counterStrikeTournaments.token = token;
    this.counterStrikeWeapons.token = token;
    this.dota2Abilities.token = token;
    this.dota2Games.token = token;
    this.dota2Heroes.token = token;
    this.dota2Items.token = token;
    this.dota2Leagues.token = token;
    this.dota2Matches.token = token;
    this.dota2Stats.token = token;
    this.dota2Players.token = token;
    this.dota2Series.token = token;
    this.dota2Teams.token = token;
    this.dota2Tournaments.token = token;
    this.eaSportsFcLeagues.token = token;
    this.eaSportsFcMatches.token = token;
    this.eaSportsFcPlayers.token = token;
    this.eaSportsFcSeries.token = token;
    this.eaSportsFcTeams.token = token;
    this.eaSportsFcTournaments.token = token;
    this.kogLeagues.token = token;
    this.kogMatches.token = token;
    this.kogPlayers.token = token;
    this.kogSeries.token = token;
    this.kogTeams.token = token;
    this.kogTournaments.token = token;
    this.leagues.token = token;
    this.lives.token = token;
    this.loLWildRiftLeagues.token = token;
    this.loLWildRiftMatches.token = token;
    this.loLWildRiftPlayers.token = token;
    this.loLWildRiftSeries.token = token;
    this.loLWildRiftTeams.token = token;
    this.loLWildRiftTournaments.token = token;
    this.loLChampions.token = token;
    this.loLGames.token = token;
    this.loLItems.token = token;
    this.loLLeagues.token = token;
    this.loLMasteries.token = token;
    this.loLMatches.token = token;
    this.loLStats.token = token;
    this.loLPlayers.token = token;
    this.loLRunes.token = token;
    this.loLSeries.token = token;
    this.loLTeams.token = token;
    this.loLSpells.token = token;
    this.loLTournaments.token = token;
    this.matches.token = token;
    this.owGames.token = token;
    this.owStats.token = token;
    this.owHeroes.token = token;
    this.owLeagues.token = token;
    this.owMaps.token = token;
    this.owMatches.token = token;
    this.owPlayers.token = token;
    this.owSeries.token = token;
    this.owTeams.token = token;
    this.owTournaments.token = token;
    this.players.token = token;
    this.pubgLeagues.token = token;
    this.pubgMatches.token = token;
    this.pubgPlayers.token = token;
    this.pubgSeries.token = token;
    this.pubgTeams.token = token;
    this.pubgTournaments.token = token;
    this.r6SiegeLeagues.token = token;
    this.r6SiegeMatches.token = token;
    this.r6SiegePlayers.token = token;
    this.r6SiegeSeries.token = token;
    this.r6SiegeTeams.token = token;
    this.r6SiegeTournaments.token = token;
    this.rlLeagues.token = token;
    this.rlMatches.token = token;
    this.rlPlayers.token = token;
    this.rlSeries.token = token;
    this.rlTeams.token = token;
    this.rlTournaments.token = token;
    this.series.token = token;
    this.starCraft2Leagues.token = token;
    this.starCraft2Matches.token = token;
    this.starCraft2Players.token = token;
    this.starCraft2Series.token = token;
    this.starCraft2Teams.token = token;
    this.starCraft2Tournaments.token = token;
    this.starCraftBroodWarLeagues.token = token;
    this.starCraftBroodWarMatches.token = token;
    this.starCraftBroodWarPlayers.token = token;
    this.starCraftBroodWarSeries.token = token;
    this.starCraftBroodWarTeams.token = token;
    this.starCraftBroodWarTournaments.token = token;
    this.teams.token = token;
    this.tournaments.token = token;
    this.valorantAbilities.token = token;
    this.valorantAgents.token = token;
    this.valorantGames.token = token;
    this.valorantLeagues.token = token;
    this.valorantMaps.token = token;
    this.valorantMatches.token = token;
    this.valorantStats.token = token;
    this.valorantPlayers.token = token;
    this.valorantSeries.token = token;
    this.valorantTeams.token = token;
    this.valorantTournaments.token = token;
    this.valorantWeapons.token = token;
    this.videogames.token = token;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c