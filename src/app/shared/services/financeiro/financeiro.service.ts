import { Movimentacao } from './../../../models/movimentacao';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

private movs: Movimentacao[] = [];

getMovs(): Observable<Movimentacao[]> {
  return of(this.movs);
}

addMov(mov: Movimentacao): Observable<Movimentacao[]>{
  this.movs.push(mov);
  return this.getMovs();
}

  constructor() { }
}
