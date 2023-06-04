import { TeamStataics } from "./team-statics.model";

export class Match {
    public homeTeamStatics :TeamStataics;
    public awayTeamStatics :TeamStataics;
    public matchDay :number;
    public homeScore: number;
    public awayScore: number;
}
