import Image from "next/image";

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

  const iconDimensionXY = 50;

  return (
    <ul className="mb-3">
      {items.map((li, i) => (
        <li
          className="flex justify-center mb-3 text-slate-800"
          key={`${li.title}${i}`}
        >
          <div className="flex w-2/3">
            <Image
              className="self-center ml-4 mr-4"
              src={li.src}
              alt=""
              height={iconDimensionXY}
              width={iconDimensionXY}
            />
            <div className="">
              <h3 className="text-lg font-bold">{li.title}</h3>
              <p className="italic">{li.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
