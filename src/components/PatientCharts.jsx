import React, { useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useState } from 'react';

import Weight from "components/Charts/Weight";
import BMI from "components/Charts/BMI";
import FatnMuscle from "components/Charts/FatnMuscle";

const PatientCharts = ({appointments}) => {
  const [key, setKey] = useState("weight");
  const [weights,setWeights]=useState([])
  const [dates,setDates]=useState([])
  const [bmi,setBmi]=useState([])
  const [bodyFat,setBodyFat]=useState([])
  const [muscle,setMuscle]=useState([])
  const [visceral,setVisceral]=useState([])

  const createData = () => {
    let tempWeights=[]
    let tempDates=[]
    let tempBmi=[]
    let tempBodyFat=[]
    let tempMuscle=[]
    let tempVisceral=[]
    appointments.map((appointment) => {
      tempWeights.push(appointment.weight)
      tempDates.push(createDate(appointment.date))
      tempBmi.push(appointment.BMI)
      tempBodyFat.push(appointment.body_fat)
      tempMuscle.push(appointment.muscle_mass)
      tempVisceral.push(appointment.visceral_fat)
    })
    setWeights(tempWeights)
    setDates(tempDates)
    setBmi(tempBmi)
    setBodyFat(tempBodyFat)
    setMuscle(tempMuscle)
    setVisceral(tempVisceral)
  }

  const createDate = (el) => {
    let date = new Date(el)
    return date.toLocaleDateString("fr", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour12: false,
    });
  }

  useEffect(() => {
    createData()
  },[])

  return (
    <div className="patient-charts mx-3 p-3 col-lg-6 col-sm-12">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="weight" title="Poids">
          <div>{weights && <Weight weights={weights} date={dates} />}</div>
        </Tab>
        <Tab eventKey="bmi" title="IMC">
          <div>{bmi && <BMI bmi={bmi} date={dates} />}</div>
        </Tab>
        <Tab eventKey="fat-n-muscle" title="Muscle / Graisse">
          <div>
            {bodyFat && muscle && visceral && (
              <FatnMuscle
                bodyFat={bodyFat}
                muscle={muscle}
                visceral={visceral}
                date={dates}
              />
            )}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PatientCharts;