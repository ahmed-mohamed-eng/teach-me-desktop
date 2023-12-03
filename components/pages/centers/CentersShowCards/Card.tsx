import Link from "next/link";
import { DateTime } from "luxon";
import { useRouter } from "next/navigation";

import { CenterDisplayData } from "@/utils/docs/center-display-data";

export interface CardProps extends CenterDisplayData {}

const Card = (props: CardProps) => {
  const router = useRouter();

  const onGoToPage = () => {
    router.push(`/centers/one/${props._id}`);
  };

  return (
    <div
      onClick={onGoToPage}
      className="w-full cursor-pointer bg-white rounded-xl p-3 border flex items-start justify-start space-x-5"
    >
      <div className="flex flex-col items-start justify-start space-y-1">
        <h1 className="text-2xl font-bold font-cairo">{props.name}</h1>
        <p className="text-lg text-gray-500 font-cairo font-bold">
          By:{" "}
          <span className="text-black font-medium">
            <Link href={`/admins/one/${props.creatorID._id}`}>
              {props.creatorID.name}
            </Link>
          </span>
        </p>
        <p className="text-lg">
          Admins:{" "}
          {props.adminsIDs?.length
            ? props.adminsIDs?.slice(0, 2).map((v, idx) => (
                <Link key={v.email + idx} href={`/admins/one/${v._id}`}>
                  <span>{v.name}</span>
                </Link>
              ))
            : "No Associated Admins"}
        </p>
      </div>
      <div className="flex flex-col items-start justify-start space-y-1">
        <p className="text-lg">Halls: {props.hallsIDs?.length}</p>
        <p className="text-lg">Sessions: {props.sessionsIDs?.length}</p>
        <p className="text-lg">Students: {props.sessionsIDs?.length}</p>
        <p className="text-lg">Teachers: {props.teachersIDs?.length}</p>
      </div>
      <div className="flex flex-col items-start justify-start space-y-1">
        <p className="text-lg">Location: [{props.location[0]}, {props.location[0]}]</p>
        <p className="text-lg">
          Created At:{" "}
          {DateTime.fromISO(props.createdAt).toFormat("yyyy LLL dd")}
        </p>
        <p className="text-lg">
          Updated At:{" "}
          {DateTime.fromISO(props.updatedAt).toFormat("yyyy LLL dd")}
        </p>
      </div>
    </div>
  );
};

export default Card;
