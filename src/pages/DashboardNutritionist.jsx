import SidebarNutritionist from 'components/SidebarNutritionist';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { appointmentsFetch } from 'services/apiManager';

const DashboardNutritionist = () => {
  const dispatch = useDispatch()
  const nutritionit_id = 17
  // Cookies.get("nutritionist_id_cookie");
  const appointments = useSelector(state => state.appointments.appointments)
  const [filteredAppointments, setFilteredAppointments] = useState()

  useEffect(() => {
    dispatch(appointmentsFetch())
  }, [])

  const filter = () => {
    setFilteredAppointments(
      appointments
        .filter((el) => el.nutritionist_id === nutritionit_id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  useEffect(() => {
    appointments && filter()
  }, [appointments])

  console.log(filteredAppointments);
  return (
    <div className="dashboard-nutritionist">
      <div className="dashboard-nutritionist-left">
        <SidebarNutritionist />
      </div>
      <div className="dashboard-nutritionist-right">
        {
          filteredAppointments &&
            filteredAppointments.map((appointment) => {
              return (
                <div>
                  <p>{appointment.date}</p>
                  <p>{appointment.nutritionist_id}</p>
                </div>
              )
            })
        }
      </div>
    </div>
  );
};

export default DashboardNutritionist;