import Link from "next/link";

export interface FloatingCreateButtonProps {
  linkTo: string;
}

const FloatingCreateButton = (props: FloatingCreateButtonProps) => {
  return (
    <button className="fixed bottom-5 left-5 w-16 h-16 rounded-full bg-indigo-700 flex items-center justify-center">
      <Link
        className="flex items-center justify-center font-black text-white"
        href={props.linkTo}
      >
        <span className="w-full h-full text-4xl ">+</span>
      </Link>
    </button>
  );
};

export default FloatingCreateButton;
