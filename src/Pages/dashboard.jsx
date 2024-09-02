import Button from "../Components/Element/Button/Index";
const Dashboard = () => {
  const getUsername = localStorage.getItem("username");

  function handleLogout() {
    localStorage.removeItem("username");
    window.location.href = "/";
  }

  return (
    <div className="">
      <h1>haii👋{getUsername}</h1>
      <Button onClick={handleLogout}>Log Out</Button>
    </div>
  );
};

export default Dashboard;
