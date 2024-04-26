import React, { useState } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';

const HomeViewModel = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const onChange = (property:string, value:any) => {
    setValues({ ...values, [property]: value})
  }

  const login = async () => {

    if(isValidForm()){

      const response = await LoginAuthUseCase(values.email, values.password)
      console.log("RESPONSE: " + JSON.stringify(response));
      
    }
   
  }

  const isValidForm = (): boolean => {
    if(values.email === ''){
      setErrorMessage('Ingresa el correo electronico');
      return false;
    }

    if(values.password === ''){
      setErrorMessage('Ingresa la contraseña');
      return false;
    }

    return true
  }

  return {
    ...values,
    login,
    onChange,
    errorMessage
  }
}


export default HomeViewModel