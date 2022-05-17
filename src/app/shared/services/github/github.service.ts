import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner, Repository } from 'src/app/models/repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUserRepositories(nome: string): Observable<Owner> {
    return this.http.get<Owner>(
      `https://api.github.com/users/${nome}`
    );

  }

  getUserRepositoriesD(nome: string): Observable<Owner[]> {
    return this.http.get<Owner[]>(
      `https://api.github.com/users/${nome}/repos`
    );

  }


}
