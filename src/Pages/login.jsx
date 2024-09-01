import { useState } from "react";
import InputForm from "../Components/Element/Input/Index";
import Button from "../Components/Element/Button/Index";

const LoginPage = () => {
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();

  function handleLogin() {
    if (userName == undefined && password == undefined) {
      alert("ops our form is empty");
    } else {
      window.location.href = "/dashboard";
    }
  }

  return (
    <div className="">
      <h1>halaman Login</h1>
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
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginPage;
