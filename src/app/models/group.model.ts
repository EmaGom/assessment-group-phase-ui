import { Match } from "./match.model";
import { Player } from "./player.model";
import { TeamStataics } from "./team-statics.model";
import { Team } from "./team.model";

export class Group {
    public id: number;
    public teamStatics :TeamStataics[];
    public matches: Match[];
    public scorers: Player[];
    public assistants: Player[];

    constructor(){
        this.teamStatics = [];
        this.matches = [];
        this.scorers = [];
        this.assistants = [];
    }
}
