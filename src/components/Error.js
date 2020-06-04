import React from 'react';
import PropTypes from 'prop-types';

//extraemos el prop mensaje creado en el ternario del componente Pregunta
const Error = ({mensaje}) => ( 
<p className="alert alert-danger error"> {mensaje} </p>
 );

 Error.propTypes = {
    mensaje: PropTypes.string.isRequired,
    
 }


export default Error;