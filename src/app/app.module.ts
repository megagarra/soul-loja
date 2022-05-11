import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TesteDataBindingComponent } from './components/teste-data-binding/teste-data-binding.component';
import { ServicoComponent } from './components/servico/servico.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { EllipsisPipe } from './shared/pipes/ellipsis/ellipsis.pipe';
import { PowerPipe } from './shared/pipes/power/power.pipe';
import { SumPipe } from './shared/pipes/sum/sum.pipe';
import { ProductArrayPipe } from './shared/pipes/product-array/product-array.pipe';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FeedbackUsuarioComponent } from './components/feedback-usuario/feedback-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProdutosComponent,
    ProdutoComponent,
    TesteDataBindingComponent,
    ServicoComponent,
    ServicosComponent,
    EllipsisPipe,
    PowerPipe,
    SumPipe,
    ProductArrayPipe,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    FeedbackUsuarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
