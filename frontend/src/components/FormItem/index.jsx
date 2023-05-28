import React from 'react';
import './index.css';

function FormItem({label,inputType,onChange=()=>{},inputId,accept,children}) {
  return (
    <div className='form'>
        <label htmlFor={inputId}>{label}</label>
        {children?children:<input type={inputType} id={inputId} name={inputId} onChange={onChange} accept={accept}/>}
    </div>
  )
}

export default FormItem