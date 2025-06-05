interface ButtonProps {
  children: string;
  onClick: (event: React.MouseEvent) => void;
}

function Button({ children, onClick: handleClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: "red" }}
      className=" rounded-button"
    >
      {children}
    </button>
  );
}

export default Button;
