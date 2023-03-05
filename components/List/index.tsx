interface Item {
  title: string;
  description: string;
  src: string;
}

interface ListProps {
  items?: Item[];
}

export const List = ({ items }: ListProps) => {
  if (!items) return null;

  return (
    <ul>
      {items.map((i) => (
        <li key={i.title}>
          <img src={i.src} alt=""></img>
          <h3>{i.title}</h3>
          <p>{i.description}</p>
        </li>
      ))}
    </ul>
  );
};
