import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante ,actualizarPregunta}) => {

//definir el State
const [cantidad, guardarCantidad] = useState(0);
const[error, guardarError] = useState(false);


//Funcion que lee el presupuesto
const definirPresupuesto = e =>{
    guardarCantidad( parseInt(e.target.value, 10))
}
   
//submit para definir el presupuesto
const agregarPresupuesto = e =>{
    e.preventDefault(); //<---- para que no envie el queriString en la parte superior del navegador ni reacrgue pagina

    //validar
    if(cantidad < 1 || isNaN( cantidad ) ) {
        guardarError(true);
        return;
    }

    //si pasa la validacion
    guardarError(false);

    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);

   //una vez validado el formulario actualizarPregunta lo pasamos a false sera switch que oculte el formulario 
    actualizarPregunta(false);
}

   return (
<Fragment>
    <h2>Coloca tu presupuesto</h2>
    
    { error ? <Error mensaje="El presupuesto es Incorrecto" /> : null }

    <form
        onSubmit={agregarPresupuesto}
    >
        <input
        type="numbre"
        className="u-full-width"
        placeholder="Coloca tu presupuesto"
        onChange={definirPresupuesto}
        />

        <input 
        type="submit"
        className="button-primary u-full-width"
        value="Definir Presupuesto"
        />
    </form>
</Fragment>

      );
}
 


Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired

 }


export default Pregunta;