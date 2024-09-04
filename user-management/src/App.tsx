import React from "react";
import UserTable from "./components/userTable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/UserTable.css";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <UserTable />
      </main>
      <Footer />
    </div>
  );
}

export default App;
