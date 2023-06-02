import React, { useState } from 'react';
import Form from './infoform';
import FormDataContext from './action';

const ParentComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    age: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`
      Name: ${formData.name}
      Phone: ${formData.phone}
      Email: ${formData.email}
      Date of Birth: ${formData.dob}
      Age: ${formData.age}
    `);
  };

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </FormDataContext.Provider>
  );
};

export default ParentComponent;