// CONFIG IMPORTS
import { PopupWidget } from 'react-calendly';

const CalendlyBtn = ({slug}) => {
    
  return (
    <PopupWidget
      className='calendly'
      color="#8186FE"
      text="Prendre rendez-vous"
      url={slug}
    />
  );
};

export default CalendlyBtn;