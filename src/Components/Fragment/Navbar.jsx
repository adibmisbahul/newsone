import "./Navbar.css";
import Button from "../Element/Button/Index";
import InputForm from "../Element/Input/Index";
import morningIcon from "../../assets/Image/morning-icon.png";
import avatar from "../../assets/Image/Avatar.png";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState();

  const getUsername = localStorage.getItem("username");
  function handleLogout() {
    localStorage.removeItem("username");
    window.location.href = "/";
  }

  return (
    <div className="container-Navbar">
      <img src={avatar} alt="" width={60} height={60} />
      <div className="morningIcon">
        <img src={morningIcon} width={40} height={40} />
        <h1>Good Moring,{getUsername}</h1>
      </div>
      <div className="navbarRight">
        <InputForm
          placeholder={"Search"}
          type={"text"}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleLogout} classname={"buttonLogout"}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
