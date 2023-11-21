# crud-angular
Creando un CRUD donde se le dio estilo y se le dio funcionamiento con Typescript
Primero cree un diseño interactivo con bootstrap donde la pantalla fue de medidas de seis columnas, donde en la primera genere la lista de empleados que iban a ser proporcionados por los eventos click para traer el id, nombre y el pais, aunque el id iba incrementando por defecto en el caso de agregar un nuevo empleado. Tambien se agrego la class.active para que cada vez que yo seleccione un empleado sera el que va a ser referencia en consola para ser manipulado.

surgio el error de no haber importado el FormsModule al principio, luego cree el boton con un evento de click addOrEdit que nos agrega un nuevo empleado, tambien para asi luego limpiar el formulario se creo un nuevo this que al un nuevo empleado se limpia el formulario. 

para crear el boton de editar los datos al seleccionar un empleado se agrego la clase active para saber que esta seleccionado pero al querer cambiar los datos se agregaba un duplicado asi que creamos el IF para saber si el id era igual a cero, entonces seguido aumentando los id sin repetir registros.

para finalizar el buttom de eliminar un empleado, se genero el ngIf para que una vez seleccionado un empleado, aparezca el bottom para poder eliminar al empleado  y con el confirm damos la pauta de que si esta seguro de que si quiere eliminar al empleado, se define con el metodo filter para borrar el array que contiene los datos del empleado.
