import React from "react";
import MobilesCart from "./MobilesCart";
export default function Mobiles({isActivate, onActivate}) {
  /*const [data, setData] = useState(false);
  const showMobiles = () => {
    setData(true);
  };*/
  if (isActivate) {
    return <MobilesCart />;
  }
  return (
    <div className="image-container">
      <table>
        <tr>
          <td>
            <center>
              <img
                src="https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mobiles"
                width="200px"
                height="200px"
                onClick={onActivate}
              />
            </center>
          </td>
        </tr>
        <tr>
          <td>Mobiles</td>
        </tr>
      </table>
    </div>
  );
}
