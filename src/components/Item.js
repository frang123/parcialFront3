import React, { useEffect, useState} from "react"
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
function Item(props){
const[stock, setStock]=useState(props.stock)
const restarStock= () => {
  if(stock>0){
  setStock((prevState)=>prevState-=1);
  props.manejarClick();}
}

  return (
    <div className='producto'>
      <h3>
        {props.nombre}
      </h3>
      <img src={props.imagen}/>
      <p>
        {props.descripcion}
      </p>
      {stock===0?
      <> <h5>En stock:<span className="span-sold">AGOTADO</span></h5>
      <button  id="button-sold-out" disabled><span className="span-sold">SIN STOCK</span></button>
      </> : <>
      <h5>En stock:<span>{stock}</span></h5>
      <button id="button-open" onClick={()=>{restarStock();}}>Comprar</button>
       </>}
    </div>
  )
}
export default Item