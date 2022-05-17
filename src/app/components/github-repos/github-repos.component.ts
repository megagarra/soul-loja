import { Owner, Repository } from './../../models/repository';
import { GithubService } from './../../shared/services/github/github.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  username: string = '';
  resultados!: Owner ;
  loading = false;

  constructor(private githubService: GithubService) {}

  onBuscar() {
    this.loading = true;
    this.githubService.getUserRepositories(this.username).subscribe({
      next: (repositorios) => {
        this.resultados = repositorios;
        this.loading = false;
        this.username = '';
      },
      error: (erro) => {
        this.loading = false;
        this.resultados;
        alert("Usuário não encontrado");
      }
    });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

}
