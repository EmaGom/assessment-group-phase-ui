import { TeamStats } from "./team-stats.model";

export class Match {
    public homeTeamStats :TeamStats;
    public awayTeamStats :TeamStats;
    public matchDay :number;
    public homeScore: number;
    public awayScore: number;
}
