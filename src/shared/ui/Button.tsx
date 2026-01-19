interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="pb-4 hover:text-green-500 underline" onClick={onClick}>
      {children}
    </button>
  );
}
