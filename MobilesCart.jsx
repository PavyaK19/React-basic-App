import React from "react";
import "./App.css";
function Mobile1() {
  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/214488/pexels-photo-214488.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="mobile"
                height="200px"
                width="200px"
              />
            </td>
          </tr>
          <tr>
            <div className="shopping-container">
              {" "}
              <td>Samsung</td>
            </div>
          </tr>
          <tr>
            <div>
              <center>
                {" "}
                <td>Price:31000/-</td>
              </center>
            </div>
          </tr>
        </table>
      </center>
    </div>
  );
}
function Mobile2() {
  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <img
                src="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/l/5/t/nord-ce-3-lite-5g-cph2467-oneplus-original-imah4ehbdfbfwrkr.jpeg?q=90&crop=false"
                alt="mobile"
                height="200px"
                width="200px"
              />
            </td>
          </tr>
          <tr>
            <div className="shopping-container">
              {" "}
              <td>Oneplus</td>
            </div>
          </tr>
          <tr>
            <div>
              <center>
                {" "}
                <td>Price:19000/-</td>
              </center>
            </div>
          </tr>
        </table>
      </center>
    </div>
  );
}
function Mobile3() {
  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXMmdkn7-aSAOxivnSANKmamP_gPSxkPiOA&s"
                alt="mobile"
                height="200px"
                width="200px"
              />
            </td>
          </tr>
          <tr>
            <div className="shopping-container">
              {" "}
              <td>Moto</td>
            </div>
          </tr>
          <tr>
            <div>
              <center>
                {" "}
                <td>Price:15000/-</td>
              </center>
            </div>
          </tr>
        </table>
      </center>
    </div>
  );
}

export default function MobilesCart() {
  return (
    <div className="image-container">
      <Mobile1 />
      <Mobile2 />
      <Mobile3 />
    </div>
  );
}
