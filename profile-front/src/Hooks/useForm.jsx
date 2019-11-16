import { useState } from 'react';

export const useForm = () => {
  const [form, setForm] = useState({});

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileInput = (event) => {
    const { name, files } = event.target;
    setForm(prevState => ({ ...prevState, [name]: files }));
  };

  return [form, handleInputs, handleFileInput];
};