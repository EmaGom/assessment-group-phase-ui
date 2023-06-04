import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, map, retry, timeout } from "rxjs";
import { Team } from "../models/team.model";
import { Match } from "../models/match.model";
import { Group } from "../models/group.model";

@Injectable({
  providedIn: 'root'
})
export class GroupPhaseService {

    private httpHeaders: HttpHeaders;

    constructor(private httpClient: HttpClient) {
        this.httpHeaders = new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
      })};

  public get(): Observable<Group> {
    return this.httpClient.get<Group>(`https://localhost:5001/groupSimulator/GetGroup`, { headers: this.httpHeaders }).pipe(
        timeout(15000),
        map(data =>
        {
          data.teamStatics.map(t =>  t.position = data.teamStatics.indexOf(t) + 1)
          data.teamStatics.map(t =>  t.name = t.team.name)
          data.teamStatics.map(t =>  t.team = t.team)
          data.matches.map(m => {
            m.awayTeamStatics.name = m.awayTeamStatics.team.name;
            m.homeTeamStatics.name = m.homeTeamStatics.team.name;
          } )
          data.scorers.map(s => s.position = data.scorers.indexOf(s) + 1),
          data.assistants.map(a =>  a.position = data.assistants.indexOf(a) + 1)
          return data as Group;
        })
    );
  }

  public getMatches(): Observable<Match[]> {
    return this.httpClient.get<Match[]>(`https://localhost:5001/groupSimulator/GetMatches`, { headers: this.httpHeaders }).pipe(
        timeout(15000),
        map(data => data as Match[])
    );
  }

  public saveSimulation(group :Group): Observable<number> {
    return this.httpClient.post<number>(`https://localhost:5001/groupSimulator/SaveGroup`, group, { headers: this.httpHeaders }).pipe(
      timeout(15000),
      map(data => data as number)
    );
  }

  public getSimulationHistory(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`https://localhost:5001/groupSimulator/GetGroupsHistory`, { headers: this.httpHeaders }).pipe(
        timeout(15000),
        map(data => {
          data.map(g => g.teamStatics.map(t => t.name = t.team.name))
          return data as Group[]
        })
    );
  }
}
