interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  event: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

export default function Input({ value, onChange, className }: InputProps) {
  return <input value={value} onChange={onChange} className={className} />;
}
