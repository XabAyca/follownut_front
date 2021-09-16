import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useState } from 'react';

import Weight from "components/Charts/Weight";
import BMI from "components/Charts/BMI";

const PatientCharts = () => {

  const [key, setKey] = useState("appointments");

  return (
    <div className="patient-charts col-lg-6 col-sm-12">
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="weight" title="Poids">
            <div className="m-5">
              <Weight />
            </div>
          </Tab>
          <Tab eventKey="muscle-mass" title="IMC">
            <div className="m-5">
              <BMI />
            </div>
          </Tab>
        </Tabs>
    </div>
  );
};

export default PatientCharts;