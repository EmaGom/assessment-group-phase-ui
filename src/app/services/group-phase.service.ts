import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, retry, timeout } from "rxjs";
import { Match } from "../models/match.model";
import { Group } from "../models/group.model";

@Injectable({
  providedIn: 'root'
})
export class GroupPhaseService {
    private url = 'https://localhost:5001/groupSimulator/';
    private httpHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) {
      this.httpHeaders = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    })};

  public getGroup(): Observable<Group> {
    const name = 'GetGroup';
    return this.httpClient.get<Group>(`${this.url}${name}`, { headers: this.httpHeaders }).pipe(
        timeout(15000),
        map(data =>
        {
          data.teamStats.map(t =>  t.position = data.teamStats.indexOf(t) + 1)
          data.teamStats.map(t =>  t.name = t.team.name)
          data.teamStats.map(t =>  t.team = t.team)
          data.matches.map(m => {
            m.awayTeamStats.name = m.awayTeamStats.team.name;
            m.homeTeamStats.name = m.homeTeamStats.team.name;
          } )
          data.scorers.map(s => s.position = data.scorers.indexOf(s) + 1),
          data.assistants.map(a =>  a.position = data.assistants.indexOf(a) + 1)
          return data as Group;
        })
    );
  }

  public getMatches(): Observable<Match[]> {
    const name = 'GetMatches';
    return this.httpClient.get<Match[]>(`${this.url}${name}`, { headers: this.httpHeaders }).pipe(
        timeout(15000),
        map(data => data as Match[])
    );
  }

  public saveSimulation(group :Group): Observable<number> {
    const name = 'SaveGroup';
    return this.httpClient.post<number>(`${this.url}${name}`, group, { headers: this.httpHeaders }).pipe(
      timeout(15000),
      map(data => data as number)
    );
  }

  public getSimulationHistory(): Observable<Group[]> {
    const name = 'GetGroupsHistory';
    return this.httpClient.get<Group[]>(`${this.url}${name}`, { headers: this.httpHeaders }).pipe(
        timeout(15000),
        map(data => {
          data.map(g => g.teamStats.map(t => t.name = t.team.name))
          return data as Group[]
        })
    );
  }
}
