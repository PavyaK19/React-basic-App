import React from "react";
import "./App.css";
function Furniture1() {
  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="furnitures"
                height="200px"
                width="200px"
              />
            </td>
          </tr>
          <tr>
          <div className="shopping-container"> <td>Bed</td></div>
          </tr>
          <tr>
          <div ><center> <td>Price:21000/-</td></center></div> 
          </tr>
        </table>
      </center>
    </div>
  );
}
function Furniture2() {
  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="furnitures"
                height="200px"
                width="200px"
              />
            </td>
          </tr>
          <tr>
          <div className="shopping-container"><td>Table</td></div>
          </tr>
          <tr>
          <div ><center> <td>Price:9000/-</td></center></div> 
          </tr>
        </table>
      </center>
    </div>
  );
}
function Furniture3() {
  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="furnitures"
                height="200px"
                width="200px"
              />
            </td>
          </tr>
          <tr>
          <div className="shopping-container"> <td>Lamp</td></div>
          </tr>
          <tr>
          <div ><center> <td>Price:2500/-</td></center></div> 
          </tr>
        </table>
      </center>
    </div>
  );
}

export default function FurnituresCart() {
  return (
    <div className="image-container">
      <Furniture1 />
      <Furniture2 />
      <Furniture3 />
    </div>
  );
}
