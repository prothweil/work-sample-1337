interface ButtonProps {
  bgColor?: string;
  color?: string;
  text?: string;
}

export const Button = ({ bgColor, color, text }: ButtonProps) => {
  return (
    <div className="flex justify-center mb-3">
      <button
        className="p-3 rounded-full text-sm"
        style={{ backgroundColor: bgColor, color: color }}
      >
        {text}
      </button>
    </div>
  );
};
