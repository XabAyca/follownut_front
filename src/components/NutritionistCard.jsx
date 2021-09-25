import Cookies from "js-cookie";
import { useHistory } from "react-router";

const NutritionistCard = ({ nutritionistData }) => {
  const {first_name, last_name, email, phone_number, avatar} = nutritionistData;
  const defaultAvatar = "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png";
  const history = useHistory()
  const isPatient = Cookies.get("patient_token_cookie");

  return (
    <div className="basic-card">
      <div className="img-box">
        <img
          className="card-img-top"
          src={avatar ? avatar : defaultAvatar}
          alt="Card image cap"
        />
      </div>
      <div className="card-body">
        <h3>
          {first_name} {last_name}
        </h3>
        <p>Email : {email}</p>
        <p>Tel : {phone_number}</p>
      </div>
      <p
        className="take-appointment btn  third-button"
        onClick={()=>history.push(isPatient? "/patient-dashboard":"/signup-patient")}
      >
        Prendre rendez-vous
      </p>
    </div>
  );
};

export default NutritionistCard;