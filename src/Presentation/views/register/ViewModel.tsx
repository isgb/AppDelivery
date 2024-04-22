import React, { useState } from 'react'
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {

    const [values, setValues] = useState({
        name: '',
        lastname:'',
        phone: '',
        email:'',
        password:'',
        confirmPassword: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const register = async () => {
      const { result, error } = await RegisterAuthUseCase(values);
      console.log("RESULT: " + JSON.stringify(result));
      console.log("ERROR: " + error);
      
      // try {

      //   const response = await ApiDelivery.post('/users/create',values);
      //   console.log("RESPONSE " + JSON.stringify(response));

      // } catch (error) {
      //   console.log("ERROR: " + error);
        
      // }
      // console.log(JSON.stringify(values))
    }

  return {
    ...values,
    onChange,
    register
  }
}


export default RegisterViewModel