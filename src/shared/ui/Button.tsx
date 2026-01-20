interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      className={`pb-4 hover:text-green-500 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
