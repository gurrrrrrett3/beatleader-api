import {
  AchievementsApi,
  AuthenticationApi,
  BackupApi,
  BaseAPI,
  BeatSaverApi,
  ClanApi,
  CurrentUserApi,
  FriendsApi,
  LeaderboardApi,
  MapEvaluationApi,
  MiniRankingApi,
  ModifiersApi,
  PatreonApi,
  PlayerApi,
  PlayerRefreshApi,
  PlayerScoresApi,
  ModApi,
  PlaylistApi,
  PreviewApi,
  RankApi,
  ReplayApi,
  ScoreApi,
  ScoreRefreshApi,
  SocialsApi,
  SongApi,
  StatsApi,
  UnicodeApi,
} from "./api";
import { Configuration } from "./configuration";

export default class BeatLeaderApiClient {
  public acheivements: AchievementsApi;
  public authentication: AuthenticationApi;
  public backup: BackupApi;
  public base: BaseAPI;
  public beatSaver: BeatSaverApi;
  public clan: ClanApi;
  public currentUser: CurrentUserApi;
  public friends: FriendsApi;
  public leaderboard: LeaderboardApi;
  public mapEvaluation: MapEvaluationApi;
  public miniRanking: MiniRankingApi;
  public modifiers: ModifiersApi;
  public patreon: PatreonApi;
  public player: PlayerApi;
  public playerRefresh: PlayerRefreshApi;
  public playerScores: PlayerScoresApi;
  public mod: ModApi;
  public playlist: PlaylistApi;
  public preview: PreviewApi;
  public rank: RankApi;
  public replay: ReplayApi;
  public score: ScoreApi;
  public scoreRefresh: ScoreRefreshApi;
  public socials: SocialsApi;
  public song: SongApi;
  public stats: StatsApi;
  public unicode: UnicodeApi;

  constructor(public configuration?: Configuration) {
    this.acheivements = new AchievementsApi(configuration);
    this.authentication = new AuthenticationApi(configuration);
    this.backup = new BackupApi(configuration);
    this.base = new BaseAPI(configuration);
    this.beatSaver = new BeatSaverApi(configuration);
    this.clan = new ClanApi(configuration);
    this.currentUser = new CurrentUserApi(configuration);
    this.friends = new FriendsApi(configuration);
    this.leaderboard = new LeaderboardApi(configuration);
    this.mapEvaluation = new MapEvaluationApi(configuration);
    this.miniRanking = new MiniRankingApi(configuration);
    this.modifiers = new ModifiersApi(configuration);
    this.patreon = new PatreonApi(configuration);
    this.player = new PlayerApi(configuration);
    this.playerRefresh = new PlayerRefreshApi(configuration);
    this.playerScores = new PlayerScoresApi(configuration);
    this.mod = new ModApi(configuration);
    this.playlist = new PlaylistApi(configuration);
    this.preview = new PreviewApi(configuration);
    this.rank = new RankApi(configuration);
    this.replay = new ReplayApi(configuration);
    this.score = new ScoreApi(configuration);
    this.scoreRefresh = new ScoreRefreshApi(configuration);
    this.socials = new SocialsApi(configuration);
    this.song = new SongApi(configuration);
    this.stats = new StatsApi(configuration);
    this.unicode = new UnicodeApi(configuration);
  }
}

export * from "./configuration";

