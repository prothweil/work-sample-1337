import { FilePicker } from "@components/FilePicker";
import Image from "next/image";
import Link from "next/link";

export const TopBar = () => {
  const iconDimensionXY = 40;

  return (
    <div className="flex items-center justify-between mb-2 px-5 py-3 text-slate-100 bg-slate-800">
      <Link href="/">
        <Image
          src="https://perspective.imgix.net/assets/app/logo/256x256.png?auto=compress&dpr=2"
          alt="Perspective Logo"
          height={iconDimensionXY}
          width={iconDimensionXY}
        />
      </Link>
      <FilePicker />
    </div>
  );
};
