import Navbar from "../Components/Fragment/Navbar";
import { useState, useEffect } from "react";
import CardNews from "../Components/Fragment/CardNews";

const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <CardNews />
      {/* <h1>{JSON.stringify(data, null, 2)}</h1> */}
    </div>
  );
};

export default Dashboard;
