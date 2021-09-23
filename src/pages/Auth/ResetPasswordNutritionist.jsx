import NutritionistPasswordResetForm from "components/Forms/NutritionistPasswordResetForm";

const ResetPasswordNutritionist = () => {
  return (
    <div className="forgotten-password-nutritionist">
      <div className="jumbotron jb-forgotten d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5 row">
        <h1 className="d-flex justify-content-center text-white-color my-4">Choisissez votre nouveau mot de passe</h1>
          <NutritionistPasswordResetForm/>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordNutritionist;