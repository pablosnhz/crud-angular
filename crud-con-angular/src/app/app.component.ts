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
    {id: 3, name: 'Summer', country: 'Canada'}
  ]

  selectEmpleado: empleado = new empleado();

  openForEdit(empleado: empleado){
    this.selectEmpleado = empleado;
  }

  addOrEdit(){
    if(this.selectEmpleado.id === 0){
      this.selectEmpleado.id = this.empleadoArray.length + 1;
      this.empleadoArray.push(this.selectEmpleado);
    }

    this.selectEmpleado = new empleado();
  }
    delete(){
      if(confirm('Estas seguro de querer eliminarlo?')){
      this.empleadoArray = this.empleadoArray.filter(x => x != this.selectEmpleado);
      this.selectEmpleado = new empleado();
    }
  }
}
