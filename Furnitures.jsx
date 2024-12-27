import React from "react";
import FurnituresCart from "./FurnituresCart.jsx";
export default function Furnitures({isActivate,onActivate}) {
 /* const [value, setValue] = useState(false);
  const showFurnitures = () => {
    setValue(true);
  };*/
if(isActivate){
  return <FurnituresCart />
}
  return (
    <div className="image-container">
        <table>
          <tr>
            <td>
              <center>
                <img
                  src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Fruits"
                  width="200px"
                  height="200px"
                  onClick={onActivate}
                />
              </center>
            </td>
          </tr>
          <tr>
            <td>Furnitures</td>
          </tr>
        </table>
    </div>
  );
}
