import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { WheatherWidgetMainComponent } from './components/wheather-widget-main/wheather-widget-main.component';
import { SorteioComponent } from './components/sorteio/sorteio.component';
import { RatingComponent } from './components/rating/rating.component';
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
  { path: 'feedback', component: FeedbackUsuarioComponent},
  { path: 'star', component: RatingComponent},
  { path: 'sorteio', component: SorteioComponent },
  { path: 'climaTempo', component: WheatherWidgetMainComponent},
  // { path: '**', component: NotFoundComponent},
  { path: 'github/repos', component: GithubReposComponent},
  { path: 'financeiro', component: FinanceiroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
