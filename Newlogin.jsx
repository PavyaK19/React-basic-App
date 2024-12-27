import React, { useState } from "react";

export default function Newlogin({ onLogin }) {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const checkLogin = (e) => {
    e.preventDefault();
    console.log(`Input Username: ${uname}, Input Password: ${password}`);
    onLogin(uname, password);
  };
  return (
    <div>
      <center>
        <form onSubmit={checkLogin}>
          <table>
            <tr>
              <td>
                <label>Username</label>
              </td>
              <td>
                <input
                  type="text"
                  value={uname}
                  onChange={(e) => setUname(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password</label>
              </td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <input type="Submit" value="Login" />
            </tr>
          </table>
        </form>
      </center>
    </div>
  );
}
