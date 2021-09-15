import NutritionistSignupForm from 'components/Forms/NutritionistSignupForm';

const SignupNutritionist = () => {
  return (
    <div className="signup-nutritionist">
      <div className="jumbotron-auth d-flex align-items-center">
        <div className="d-flex justify-content-center col-12 row">
        <h1 className="d-flex justify-content-center text-white my-2">Bienvenue sur Follownut'</h1>
          <NutritionistSignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupNutritionist;
