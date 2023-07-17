import { Match } from "./match.model";
import { Player } from "./player.model";
import { TeamStats } from "./team-stats.model";
import { Team } from "./team.model";

export class Group {
    public id: number;
    public teamStats :TeamStats[];
    public matches: Match[];
    public scorers: Player[];
    public assistants: Player[];

    constructor(){
        this.teamStats = [];
        this.matches = [];
        this.scorers = [];
        this.assistants = [];
    }
}
