import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { useState } from 'react';

export default function SearchForm() {
  const [value, setValue] = useState('');

  return (
    <>
      <Button>click</Button>
      <Input value={value} onChange={e => setValue(e.target.value)} />
    </>
  );
}
