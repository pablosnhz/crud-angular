import { Component } from '@angular/core';

import { empleado } from './models/empleado/empleado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoArray: empleado[] = [
    {id: 1, name: 'Morty', country: 'USA'},
    {id: 2, name: 'Rick', country: 'Colombia'},
    {id: 3, name: 'Summer', country: 'Madagascar'}


  ]
}
