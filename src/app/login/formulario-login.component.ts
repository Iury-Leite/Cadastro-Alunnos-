import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: [ './fomulario-login.component.scss' ]
})
export class FormularioLoginComponent  {
  name = 'Angular ' + VERSION.major;
}
