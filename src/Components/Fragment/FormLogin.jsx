import { useState } from "react";
import Button from "../Element/Button/Index";
import InputForm from "../Element/Input/Index";
import "./FormLogin.css";

const FormLogin = () => {
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();

  function handleLogin() {
    if (userName == undefined && password == undefined) {
      alert("ops our form is empty");
    } else {
      localStorage.setItem("username", userName);
      window.location.href = "/dashboard";
    }
  }

  return (
    <div className="formLogin">
      <h1>Login</h1>
      <InputForm
        text={"Username"}
        placeholder={"Username"}
        type={"text"}
        onChange={(e) => setUserName(e.target.value)}
      />
      <InputForm
        text={"Password"}
        placeholder={"Password"}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} classname={"button"}>
        Login
      </Button>
    </div>
  );
};

export default FormLogin;
