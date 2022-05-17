import { Repository } from 'src/app/models/repositoryangular';
import { Component, OnInit } from '@angular/core';
import { AngularrepoService } from 'src/app/shared/services/angularrepo/angularrepo.service';

@Component({
  selector: 'app-angularrepo',
  templateUrl: './angularrepo.component.html',
  styleUrls: ['./angularrepo.component.css']
})
export class AngularrepoComponent implements OnInit {

  username: string = '';
  resultados: Repository [] = [];
  loading = false;

  constructor(private angularService: AngularrepoService) {}

  onBuscar() {
    this.loading = true;
    this.angularService.getUserRepositories(this.username).subscribe({
      next: (repositorios) => {
        this.resultados = repositorios;
        this.loading = false;
        this.username = '';
      },
      error: (erro) => {
        this.loading = false;
        this.resultados ;
        alert("Usuário não encontrado");
      }
    });
  }

  ngOnInit(): void {
  }

}
