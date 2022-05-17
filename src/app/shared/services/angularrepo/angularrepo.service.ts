import { Repository } from 'src/app/models/repositoryangular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AngularrepoService {

  constructor(private http: HttpClient) { }

  getUserRepositories(nome: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(
      `https://api.github.com/users/${nome}/repos`
    );

    }
  }
