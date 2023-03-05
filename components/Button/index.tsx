interface ButtonProps {
  bgColor?: string;
  color?: string;
  text?: string;
}

export const Button = ({ bgColor, color, text }: ButtonProps) => {
  return (
    <button style={{ backgroundColor: bgColor, color: color }}>{text}</button>
  );
};
