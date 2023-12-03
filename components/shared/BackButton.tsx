import Link from "next/link";
import { FloatingCreateButtonProps } from "./FloatingCreateButton";
import Image from "next/image";

export interface BackButtonProps extends FloatingCreateButtonProps {}

const BackButton = (props: BackButtonProps) => {
  return (
    <button className="fixed bottom-5 left-5 w-16 h-16 rounded-full bg-indigo-700 flex items-center justify-center">
      <Link
        className="w-full h-full flex items-center justify-center font-black text-white"
        href={props.linkTo}
      >
        <div className="relative w-10 h-10">
          <Image className="w-full h-full" fill src="/icons/back-icon.svg" alt="Back To Home Page" />
        </div>
      </Link>
    </button>
  );
};

export default BackButton;
