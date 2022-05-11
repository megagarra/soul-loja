import { FeedbackUsuarioComponent } from './components/feedback-usuario/feedback-usuario.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { TesteDataBindingComponent } from './components/teste-data-binding/teste-data-binding.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'teste-data-binding', component: TesteDataBindingComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'feedback', component: FeedbackUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
