import React from "react";
import "./App.css";
function Fruit1() {
  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="fruit"
                height="200px"
                width="200px"
              />
            </td>
          </tr>
          <tr>
            <div className="shopping-container">
              {" "}
              <td>Apple</td>
            </div>
          </tr>
          <tr>
            <div>
              <center>
                {" "}
                <td>Price:140/-</td>
              </center>
            </div>
          </tr>
        </table>
      </center>
    </div>
  );
}
function Fruit2() {
  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="fruit"
                height="200px"
                width="200px"
              />
            </td>
          </tr>
          <tr>
            <div className="shopping-container">
              {" "}
              <td>Grapes</td>
            </div>
          </tr>
          <tr>
            <div>
              <center>
                {" "}
                <td>Price:220/-</td>
              </center>
            </div>
          </tr>
        </table>
      </center>
    </div>
  );
}
function Fruit3() {
  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="fruit"
                height="200px"
                width="200px"
              />
            </td>
          </tr>
          <tr>
            <div className="shopping-container">
              <td>Strawberries</td>
            </div>
          </tr>
          <tr>
            <div>
              <center>
                {" "}
                <td>Price:190/-</td>
              </center>
            </div>
          </tr>
        </table>
      </center>
    </div>
  );
}

export default function FruitsCart() {
  return (
    <div className="image-container">
      <Fruit1 />
      <Fruit2 />
      <Fruit3 />
    </div>
  );
}
