interface TextProps {
  align?: CanvasTextAlign;
  color?: string;
  text?: string;
}

export const Text = ({ align, color, text }: TextProps) => {
  return <p style={{ textAlign: align, color: color }}>{text}</p>;
};
