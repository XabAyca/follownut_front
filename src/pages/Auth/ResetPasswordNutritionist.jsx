import NutritionistPasswordResetForm from "components/Forms/NutritionistPasswordResetForm";

const ResetPasswordNutritionist = () => {
  return (
    <div className="forgotten-password-nutritionist">
      <div className="jumbotron-auth d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5">
          <NutritionistPasswordResetForm/>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordNutritionist;