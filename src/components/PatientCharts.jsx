import React, { useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useState } from 'react';

import Weight from "components/Charts/Weight";
import BMI from "components/Charts/BMI";
import FatnMuscle from "components/Charts/FatnMuscle";
import Height from './Charts/Height';

const PatientCharts = ({appointments}) => {
  const [key, setKey] = useState("weight");
  const [weights,setWeights]=useState([])
  const [dates,setDates]=useState([])
  const [bmi,setBmi]=useState([])
  const [bodyFat,setBodyFat]=useState([])
  const [muscle,setMuscle]=useState([])
  const [visceral,setVisceral]=useState([])
  const [heights,setHeights]=useState([])

  const createData = () => {
    let tempWeights=[]
    let tempDates=[]
    let tempBmi=[]
    let tempBodyFat=[]
    let tempMuscle=[]
    let tempVisceral=[]
    let tempHeights=[]
    appointments.map((appointment) => {
      tempWeights.push(appointment.weight)
      tempDates.push(createDate(appointment.date))
      tempBmi.push(appointment.BMI)
      tempBodyFat.push(appointment.body_fat)
      tempMuscle.push(appointment.muscle_mass)
      tempVisceral.push(appointment.visceral_fat)
      tempHeights.push(appointment.height)
    })
    setWeights(tempWeights)
    setDates(tempDates)
    setBmi(tempBmi)
    setBodyFat(tempBodyFat)
    setMuscle(tempMuscle)
    setVisceral(tempVisceral)
    setHeights(tempHeights)
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
    appointments && createData()
  }, [appointments])
  

  return (
    <div className="patient-charts col-lg-6 col-sm-12">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="weight" title="Poids">
          <div>
            {weights && muscle && (
              <Weight weights={weights} muscle={muscle} date={dates} />
            )}
          </div>
        </Tab>
        <Tab eventKey="bmi" title="IMC">
          <div>{bmi && <BMI bmi={bmi} date={dates} />}</div>
        </Tab>
        <Tab eventKey="fat-n-muscle" title="Graisses">
          <div>
            {bodyFat && muscle && visceral && (
              <FatnMuscle bodyFat={bodyFat} visceral={visceral} date={dates} />
            )}
          </div>
        </Tab>
        <Tab eventKey="height" title="Taille">
          <div>{heights && <Height heights={heights} date={dates} />}</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PatientCharts;