const NutritionistCard = ({ nutritionistData }) => {
  const {first_name, last_name, email, phone_number, avatar} = nutritionistData;

  return (
    <div className="nutritionist-card">
      <div className="img-box">
        <img className="card-img-top" src={avatar} alt="Card image cap" />
      </div>
      <div className="card-body">
          <h3>{first_name} {last_name}</h3>
          <p>Email : {email}</p>
          <p>Tel : {phone_number}</p>
      </div>
    </div>
  );
};

export default NutritionistCard;