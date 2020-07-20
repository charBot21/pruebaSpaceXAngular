import { Component } from '@angular/core';

/* Importación de traducción */ 
import { TranslateService } from '@ngx-translate/core';

// Constants
import * as General from '../app/constants/general';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebaAngular';
  public activeLang = 'es';

  public logoIcon = General.LOGO;

  constructor( private translate: TranslateService ) {
    this.translate.setDefaultLang(this.activeLang);
  }

}
