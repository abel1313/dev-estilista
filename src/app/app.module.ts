import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/component/footer/footer.component';
import { HeaderComponent } from './layout/component/header/header.component';
import { ContainerComponent } from './layout/component/container/container.component';
import { PaginaNoDisponibleComponent } from './layout/component/pagina-no-disponible/pagina-no-disponible.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContainerComponent,
    PaginaNoDisponibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
