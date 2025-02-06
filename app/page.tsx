'use client';
import { useEffect, useState } from 'react';
import { countElapsedTime } from './utils';

export default function Home() {
  const [time, setTime] = useState(() => countElapsedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(countElapsedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex h-[100px] flex-col justify-center bg-red-600 align-middle md:h-[200px]">
        <h1 className="flex flex-row justify-center font-mono text-3xl font-bold text-white md:text-6xl lg:text-7xl">
          BRING THEM HOME NOW!
        </h1>
      </div>

      <div className="m-10 flex flex-row justify-center space-x-10 align-middle text-3xl text-white md:text-8xl">
        <div className="flex flex-col items-center">
          <p>{time.days}</p>
          <span className="text-lg text-white md:text-2xl">
            <p>Days</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <p>{time.hours}</p>
          <span className="text-lg text-white md:text-2xl">
            <p>Hours</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <p>{time.minutes}</p>
          <span className="text-lg text-white md:text-2xl">
            <p>Minutes</p>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <p>{time.seconds}</p>
          <span className="text-lg text-white md:text-2xl">
            <p>Seconds</p>
          </span>
        </div>
      </div>

      <main>
        <div className="m-20 space-y-10 md:flex md:flex-row md:justify-center md:space-x-4 md:space-y-0">
          <section className="max-w-[500px]">
            <h2 className="mb-4 text-2xl font-bold">
              The Horror of October 7th
            </h2>
            <p>
              On the morning of October 7, 2023, at 6:30 AM, the world witnessed
              unimaginable terror.
              <br /> <br />
              Innocent men, women, children, and elderly were torn from their
              homes, abducted from their beds, and taken into the darkness.
              <br /> <br />
              Families were shattered in an instant, their loved ones stolen
              away without a trace. The fear, the cries, the violence—they still
              echo in the hearts of those who wait, day after day, hoping for
              their safe return.
              <br /> <br />
              These were not just numbers. These were people. Parents, siblings,
              grandparents, and children. People with dreams, with laughter,
              with stories that should never have been interrupted by the
              brutality of that day. The pain has not faded. Every moment that
              passes is another moment stolen from them.
            </p>
          </section>

          <section className="max-w-[500px]">
            <h2 className="mb-4 text-2xl font-bold">
              Why I Built This Website
            </h2>
            <p>
              This website is my dedication to those who have suffered, to those
              who are still missing, and to those who are waiting for them. I
              created it so the world will not forget—so that every face, every
              name, every story remains visible, unforgotten, and undeniable.
              <br /> <br />
              Here, you can see them. You can know them. You can read about
              their lives, their families, their hopes. They are not just
              headlines; they are people. And most importantly, you can write to
              them.
              <br /> <br />
              Leave a message. Speak to them. Let them know that when they come
              home, they will see that they were never forgotten. That the world
              fought for them, cried for them, and held onto hope for them.
              <br /> <br />
              <b>
                Because when they return, they deserve to see that we never
                stopped waiting.
              </b>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
