import { Team } from "./team.model";

export class TeamStataics {
    public id: number;
    public team: Team;
    public name: string;
    public position :number;
    public points  :number;
    public played  :number;
    public win  :number;
    public draw  :number;
    public loss  :number;
    public for  :number;
    public against :number; 
    public difference  :number;
}