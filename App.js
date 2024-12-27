import React from "react";
import { useState } from "react";
import Fruits from "./Fruits";
import Furnitures from "./Furnitures";
import Mobiles from "./Mobiles";
import Newlogin from "./Newlogin";
import "./App.css";
export default function App() {
  const [isLogged, setLogged] = useState("");
  const checkLogin = (username, password) => {
    console.log(`Received Username: ${username}, Password: ${password}`);
    if (username.trim() === "pavi" && password.trim() === 123) {
      setLogged("true");
    } else {
      setLogged("false");
    }
  };
  const [activeComponent, setactiveComponent] = useState("");
  return (
    <div>
      <div>
        <h1>
          <center>E-Shopping</center>
        </h1>
      </div>
      <hr />
      <center>
        <div className="shopping-container">
          {!isLogged ? (
            <Newlogin onLogin={checkLogin} />
          ) : (
            <>
              {activeComponent === "" && (
                <>
                  <Fruits onActivate={() => setactiveComponent("Fruits")} />
                  <Furnitures
                    onActivate={() => setactiveComponent("Furnitures")}
                  />
                  <Mobiles onActivate={() => setactiveComponent("Mobiles")} />
                </>
              )}
              {activeComponent === "Fruits" && (
                <Fruits
                  isActivate={true}
                  onActivate={() => setactiveComponent("")}
                />
              )}
              {activeComponent === "Furnitures" && (
                <Furnitures
                  isActivate={true}
                  onActivate={() => setactiveComponent("")}
                />
              )}
              {activeComponent === "Mobiles" && (
                <Mobiles
                  isActivate={true}
                  onActivate={() => setactiveComponent("")}
                />
              )}
            </>
          )}
        </div>
      </center>
    </div>
  );
  
}
