import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'somosviajeros';
  constructor (
    public translate:TranslateService   //IMPORTAMOS TRANSLATE SERVICE PARA MANEJO DE IDIOMA
  ) {
    this.translate.addLangs(['es','en','pt']);
    this.translate.setDefaultLang('es');
  }

}
