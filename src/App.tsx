import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { login } from "./BLL/Actions/auth";
import { getOrganization } from "./BLL/Actions/organization";
import { AppDispatch } from "./BLL/configurate-store";
import { Footer } from "./Layout/Footer/footer";
import { Content } from "./Layout/Main/content";
import { Sidebar } from "./Layout/Sidebar/sidebar";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(login());
    dispatch(getOrganization());
  }, []);

  return (
    <div className="wrapper">
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
