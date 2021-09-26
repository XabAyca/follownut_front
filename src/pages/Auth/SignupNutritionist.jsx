// CONFIG IMPORTS
import { useSelector } from 'react-redux';

// COMPONENTS IMPORTS
import ErrorsModal from 'components/ErrorsModal';
import NutritionistSignupForm from 'components/Forms/NutritionistSignupForm';


const SignupNutritionist = () => {

  const errors = useSelector((state) => state.nutritionists.error.errors);

  return (
    <div className="signup-nutritionist">
      <ErrorsModal errors={errors}/>
      <div className="jumbotron jb-signup d-flex align-items-center justify-content-center">
        <div className="d-flex justify-content-center row">
        <h1 className="d-flex justify-content-center text-white-color my-2">Bienvenue sur Follownut'</h1>
          <NutritionistSignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupNutritionist;
