import React from "react";
import { Input,Label,LeyendaError} from "./ElementForm";

const ComponentInput = ({estado,cambiarEstado,tipo,label,placeholder,name,leyendaError,expresionRegular}) => {
    const onChange = (e) =>{
        cambiarEstado({...estado, campo: e.target.value});
    }
    const validacion = () =>{
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'});
            }else{
                cambiarEstado({...estado, valido: 'false'});
            }
        }
    }
    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <Input  
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                     />
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    );
}
export default ComponentInput;