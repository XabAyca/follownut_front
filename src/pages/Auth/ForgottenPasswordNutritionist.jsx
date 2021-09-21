import NutritionistForgottenForm from 'components/Forms/NutritionistForgottenForm';

const ForgottenPasswordNutritionist = () => {
  return (
    <div className="forgotten-password-nutritionist">
      <div className="jumbotron jb-forgotten d-flex align-items-center py-5">
        <div className="d-flex justify-content-center col-12 my-5 row">
          <h1 className="d-flex justify-content-center text-white my-4">Un petit oubli, ça arrive à tout le monde ...</h1>
          <NutritionistForgottenForm />
        </div>
      </div>
    </div>
  );
};

export default ForgottenPasswordNutritionist;