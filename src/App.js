import React, {Component} from "react";
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';
import data from './components/data.json'

// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

class App extends React.Component{
  constructor(){
    super();
    this.state={
      items:0,
        }
    this.agregarProducto = this.agregarProducto.bind(this);
  }
  agregarProducto(){
    this.setState({
      items:this.state.items += 1,
    });
   console.log('Hola');
  }
  render(){
   return (
    
    <div className="App">
      <Cabecera
      productos={this.state.items} />
      <Listado
      data={data}
      manejarClick={this.agregarProducto}
       />
    </div>
  );
}
}
export default App;
