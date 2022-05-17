import { Movimentacao } from './../../models/movimentacao';
import { FormBuilder, Validators } from '@angular/forms';
import { FinanceiroService } from './../../shared/services/financeiro/financeiro.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {
  movs$?: Observable<Movimentacao[]>;

  constructor(private finaceiroService: FinanceiroService, private fb: FormBuilder) { }

  movForm = this.fb.group({
    titulo: ['', [Validators.required, Validators.maxLength(55)]],
    total: [0, [Validators.required, Validators.min(0)]],
    tipo: [0, [Validators.required]],
  });

  onSubmit(){
    this.movs$ = this.finaceiroService.addMov(this.movForm.value);
  }

  ngOnInit(): void {
    this.movs$ = this.finaceiroService.getMovs();
    console.log("done");
  }

}
