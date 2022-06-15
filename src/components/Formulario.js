import React, { useState } from "react";
import './Formulario.css';
import { CajaForm, ContenedordeBoton, Boton, MenajeError, MensajeExito } from './ElementForm';
import ComponentInput from './input';

const Formulario = () => {
    const [usuario, cambiarUsuario] = useState({ campo: '', valido: null });
    const [dni, cambiarDni] = useState({ campo: '', valido: null });
    const [razonSoc, cambiarRazonSoc] = useState({ campo: '', valido: null });
    const [telefono, cambiarTelef] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [descrip, cambiarDescrip] = useState({ campo: '', valido: null });
    const [cambiarFormularioValido] = useState(null);

    const expresiones = {
        usuario: /^[a-zA-ZA-ÿ\s]{1,40}$/, // Letrasyespacios,pueden llevar acentos.
        dni: /^.{4,11}$/, // 4 a 11 digitos.       
        RazonS: /^[a-zA-ZA-ÿ\s]{1,50}$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        descripcion: /^[a-zA-Z0-9-ÿ\s\_\-]{1,500}$/, // Letras, numeros, guion y guion_bajo
    }
     
    const onSubmit = (e) => {
        e.preventDefault();

        if (
            usuario.valido === 'true' &&
            dni.valido === 'true' &&
            razonSoc.valido === 'true' &&
            telefono.valido === 'true' &&
            correo.valido === 'true' &&
            descrip.valido === 'true' 
           ){
            cambiarFormularioValido(true);            
        }else{
            cambiarFormularioValido(false);
        }

    }

    return (
        <div className="ContForm">
            <main>
                <CajaForm action="" onSubmit={onSubmit}>
                    <ComponentInput
                        estado={usuario}
                        cambiarEstado={cambiarUsuario}
                        tipo="text"
                        label="Nombre y Apellido"
                        placeholder="Nombres Completos"
                        name="usuario"
                        leyendaError="Formato de Nombres Inválidos"
                        expresionRegular={expresiones.usuario}
                    />
                    <ComponentInput
                        estado={dni}
                        cambiarEstado={cambiarDni}
                        tipo="number"
                        label="DNI/CE/RUC"
                        placeholder="Doc. de Identidad"
                        name="dni"
                        leyendaError="Número de Identidad Inválido"
                        expresionRegular={expresiones.dni}
                    />
                    <ComponentInput
                        estado={razonSoc}
                        cambiarEstado={cambiarRazonSoc}
                        tipo="text"
                        label="Razón Social de la Empresa"
                        placeholder="Ruc Empresarial"
                        name="ruc"
                        leyendaError="Formato Inválido"
                        expresionRegular={expresiones.RazonS}
                    />
                    <ComponentInput
                        estado={telefono}
                        cambiarEstado={cambiarTelef}
                        tipo="number"
                        label="Teléfono"
                        placeholder="999-999-999"
                        name="telefono"
                        leyendaError="Número de Teléfono Inválido"
                        expresionRegular={expresiones.telefono}
                    />
                    <ComponentInput
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        tipo="email"
                        label="Correo Electrónico"
                        placeholder="ejemplo@gmail.com"
                        name="correo"
                        leyendaError="Correo Inválido"
                        expresionRegular={expresiones.correo}
                    />
                    <ComponentInput 
                        estado={descrip}
                        cambiarEstado={cambiarDescrip}
                        tipo="text"
                        label="Descripción"
                        placeholder="Mensaje..."
                        name="descrip"
                        leyendaError="Se requiere datos"
                        expresionRegular={expresiones.descripcion}
                    />

                    {false && <MenajeError>
                        <p>
                            <b className="fas fa-exclamation-triangle"> ERROR: </b> Por favor rellenar el formulario correctamente.</p>
                    </MenajeError>}
                    
                    <ContenedordeBoton>
                        <Boton type="submit">Enviar Mensaje</Boton>
                        <MensajeExito>El formulario se envio correctamente</MensajeExito>
                    </ContenedordeBoton>
                </CajaForm>
            </main>
        </div>
    );
}

export default Formulario;