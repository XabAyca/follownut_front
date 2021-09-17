import ErrorsModal from 'components/ErrorsModal';
import NutritionistSignupForm from 'components/Forms/NutritionistSignupForm';
import { useSelector } from 'react-redux';

const SignupNutritionist = () => {

  const errors = useSelector((state) => state.nutritionists.error.errors);

  return (
    <div className="signup-nutritionist">
      <ErrorsModal errors={errors}/>
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
