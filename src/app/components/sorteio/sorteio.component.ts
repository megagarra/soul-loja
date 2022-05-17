import { SorteioService } from './../../shared/services/sorteio/sorteio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})
export class SorteioComponent implements OnInit {

  valores: string = '';
  sorteado: string = '';

  constructor(private sorteioService: SorteioService) { }

  loading = false;

  onSorteio (){
    const nomes = (this.valores.trim().split("\n"));
    this.sorteado = '';
    this.loading = true;

    this.sorteioService.sortear(nomes).subscribe({
      next: (sorteado) =>{
        this.loading = false;
        alert(sorteado);
      },
      error:(erro) => {
        this.loading = false;
        alert(erro);
      }
    });
  }


  ngOnInit(): void {
  }

}
