interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="border-2 border-gray-700 focus:border-pink-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
