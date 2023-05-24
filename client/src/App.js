import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import styles from './app.css'
import UserLogin from "./components/UserLogin";
import FolderShow from "./components/FolderShow";
import PasswordShow from "./components/PasswordShow";
import FolderEdit from "./components/FolderEdit";
import PasswordEdit from "./components/PasswordEdit";

function App() {
  // only returning routes so that the components can do whatever they need to do
  return (
    <div className="">
      <Routes>
      <Route element={<UserLogin/>} path="/login"/>
      <Route element={<FolderShow/>} path="/folders/:folder"/>
      <Route element={<FolderEdit/>} path="/folders/:folder/edit"/>
      <Route element={<PasswordShow/>} path="/password/:id"/>
      <Route element={<PasswordEdit/>} path="/password/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
