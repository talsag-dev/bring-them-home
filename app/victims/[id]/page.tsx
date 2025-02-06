import Image from 'next/image';
import { data } from '../../data';
import { PersonPlaceHolder } from '../../images';

export async function generateStaticParams() {
  return data.map((_, index) => ({
    id: index.toString(),
  }));
}

export default async function VictimPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId) || numericId < 0 || numericId >= data.length) {
    return <p>Hostage not found</p>;
  }

  const hostage = data[numericId];

  const hostageName = hostage.name.split(' ')[0];
  return (
    <div className="flex flex-col items-center">
      <p className="self-center text-2xl text-red-500">{hostage.name}</p>
      <Image
        alt="hostage-pic"
        layout="responsive"
        loading="lazy"
        className="mt-10 h-auto max-h-[300px] w-full max-w-[300px] rounded-lg object-cover"
        src={!!hostage.imageUrl ? hostage.imageUrl : PersonPlaceHolder}
        width={150}
        height={150}
      />
      <section>
        <h3 className="my-10 text-2xl">A little about {hostage.name} 🎗️</h3>
        <p>
          {hostageName} was {hostage.location} on October 7th
          <br />
          <br />
          To Write something to {hostageName} please fill the box below
        </p>
      </section>
    </div>
  );
}
