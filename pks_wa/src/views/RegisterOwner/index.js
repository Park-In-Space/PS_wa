import React, { useState } from 'react';
import TextField from '../../components/FormTextField';
import { useMutation } from "@apollo/client";
import { SIGN_UP_MUTATION_OWNER } from '../../GraphQL/Mutations';
import {
  Link,
  useHistory
} from 'react-router-dom'




const RegisterOwner = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const history = useHistory();
  const sendClientOnClick = () => history.push('/');

  const nameCallbackFunction = (childData) => {
    setName(childData)
  }
  const emailCallbackFunction = (childData) => {
    setEmail(childData)
    setUsername(childData)
  }
  const phoneCallbackFunction = (childData) => {
    setPhoneNumber(childData)
  }
  const passwordCallbackFunction = (childData) => {
    setPassword(childData)
  }
  const password2CallbackFunction = (childData) => {
    setPassword2(childData)
  }

  const [signUpOwner, {data }] = useMutation(SIGN_UP_MUTATION_OWNER, {
    onCompleted: (data) => {
      alert("Registro exitoso")
      sendClientOnClick()
    },
    onError: (data) => {
      alert("error registro")
    }
  });

  const signUpMutationOwner = () => {
    

    signUpOwner({
      variables: {
        username: username,
        name: name,
        email: email,
        password: password,
        phone: phone,
      }
    });
    

    
  }



  return (
    <div>
      <div className="container">
        <h1 className="col-6 py-2">RegisterOwner View</h1>
        <div className="row">
          <div className="col-sm">
            <form>
              <TextField className="row " parentCallback={nameCallbackFunction} name="Nombre" placeholder="Escriba su nombre" type="text" />
              <TextField className="row " parentCallback={emailCallbackFunction} name="Correo" placeholder="Escriba su correo" type="text" />
              <TextField className="row " parentCallback={phoneCallbackFunction} name="Teléfono" placeholder="Escriba su teléfono" type="text" />
              <TextField className="row " parentCallback={passwordCallbackFunction} name="Contraseña" placeholder="Escriba su contraseña" type="password" />
              <TextField className="row " parentCallback={password2CallbackFunction} name="Repetir Contraseña" placeholder="Repita su contraseña" type="password" />
            </form>
            <button className="btn btn-outline-success col-4  py-2 offset-4" type="button" onClick={signUpMutationOwner}>Registrarse</button>
          </div>
        </div>

      </div>
    </div>

  );

}

export default RegisterOwner;