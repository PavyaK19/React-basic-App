import React from "react";
import FruitsCart from "./FruitsCart";
import "./App.css";
export default function Fruits({isActivate,onActivate}) {
 /* const [data, setData] = useState(false);
  const showFruits = () => {
    setData(true);
  };*/
  if(isActivate){
    return <FruitsCart/>
  }
  return (
    <div className="image-container">
        <table>
          <tr>
            <td>
                <img
                  src="https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Fruits"
                  width="200px"
                  height="200px"
                  onClick={onActivate}
                />
            </td>
          </tr>
          <tr>
            <td>Fruits</td>
          </tr>
        </table>
    </div>
  );
}
