import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../atoms/Button';
import Input from '../atoms/Input';

export default function SearchBox() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  function handelClick() {
    if (value.trim()) {
      navigate(`/search/?search=${value.trim()}`);
    }
  }
  return (
    <>
      <Input
        className="border-2 border-gray-700 focus:border-pink-600"
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handelClick}>S</Button>
    </>
  );
}
