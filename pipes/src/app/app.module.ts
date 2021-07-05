import { FormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [  
    /*{//constante que faz parte do pacote @angular/core e da API de internacionalização
      provide: LOCALE_ID, //identificador para não haver colisão na aplicação
      useValue: 'pt-BR'
    } //isso é uma espécie de injeção de dependência, através de maping*/
    SettingsService,
    /*{ - Não funciona - 
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: SettingsService) => settingsService.getLocale()
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
