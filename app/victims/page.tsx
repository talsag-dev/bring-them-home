import Image from 'next/image';
import { data } from '../data';
import { PersonPlaceHolder } from '../images';
import Link from 'next/link';
export default function VictimsPage() {
  return (
    <div className="m-2 flex flex-col">
      <p className="self-center font-protest text-3xl font-bold text-red-500">
        HELP US BRING THEM BACK
      </p>
      <p className="mt-10 self-center">
        If you would like to write something to a hostage please click
      </p>
      <div className="m-20 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((victim, index) => (
          <Link
            href={`/victims/${index}`}
            key={index}
            className="flex flex-row items-center space-x-4 overflow-hidden border-2 border-yellow-500 p-4"
          >
            <Image
              alt="hostage-pic"
              loading="lazy"
              className="aspect-auto h-auto max-h-[200px] w-full max-w-[200px] rounded-lg object-cover"
              src={!!victim.imageUrl ? victim.imageUrl : PersonPlaceHolder}
              width={150}
              height={150}
            />
            <div className="m-4 flex flex-col space-y-3 align-bottom">
              <p className="text-lg">{victim.name}</p>
              {victim.age ? <p>Age: {victim.age}</p> : null}
              <p>{victim.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
