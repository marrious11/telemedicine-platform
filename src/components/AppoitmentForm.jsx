import { useState } from 'react';
import { supabase } from '../services/supabase';

export default function AppointmentForm() {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    const { data, error } = await supabase
      .from('doctor_profiles')
      .select('*');
    if (data) setDoctors(data);
  };

  return (
    <div>
      <button onClick={fetchDoctors}>Load Doctors</button>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>{doctor.full_name} ({doctor.specialty})</li>
        ))}
      </ul>
    </div>
  );
}