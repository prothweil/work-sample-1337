interface TextProps {
  align?: CanvasTextAlign;
  color?: string;
  text?: string;
}

export const Text = ({ align, color, text }: TextProps) => {
  return (
    <p className="text-lg mb-3" style={{ textAlign: align, color: color }}>
      {text}
    </p>
  );
};
