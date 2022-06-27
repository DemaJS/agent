import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login } from "./BLL/Actions/auth-actions";
/* import { getContacts } from "./BLL/Actions/contacts-actions"; */
import { AppDispatch, RootState } from "./BLL/configurate-store";
import { Footer } from "./Layout/Footer/footer";
import { Content } from "./Layout/Main/content";
import { Sidebar } from "./Layout/Sidebar/sidebar";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((store: RootState) => store.auth.isLoading);
  const loadInfo = async () => {
    await dispatch(login());
    /* await dispatch(getContacts()); */
  };

  useEffect(() => {
    loadInfo();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
