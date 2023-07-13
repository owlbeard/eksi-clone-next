'use client';

import { useSearchParams } from 'next/navigation';
import Problematics from '@/data/problematics.json';

export default function page({ params }: { params: { name: string } }) {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [problem] = Problematics.filter((problem) => problem.id === Number(id));
  return (
    <section className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <p className="text-sourLink hover:underline cursor-pointer font-bold text-sm">
          {problem.heading}
        </p>
        <p className="text-white">{'>>'}</p>
      </div>
      <h2 className="text-lg font-extrabold hover:underline cursor-pointer">{`${problem.heading} sorunsalları`}</h2>
      <div className="flex text-xs gap-4">
        <div className="flex items-center">
          <button>sıralama şekli</button>
          <img
            className="h-4 w-4 white opacity-30"
            src="/menu-down.svg"
            alt="drop down"
          />
        </div>
        <button>soru sor</button>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col">
          <svg
            className="h-8 w-12 pl-1 eksico"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>menu-up</title>
            <path d="M7,15L12,10L17,15H7Z" />
          </svg>
          <p className="pl-4 font-bold text-xl">{`${problem.likes}`}</p>
          <svg
            id="sourBad"
            className="h-8 w-12 pl-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>menu-down</title>
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        </div>
        <div className="self-start mt-2">
          <h2 className="text-md font-extrabold hover:underline cursor-pointer">
            {problem.name}
          </h2>
          <p className="h-8"></p>
          <p className="text-xs text-sourMute hover:underline">
            {problem.replies} yanıt
          </p>
        </div>
      </div>
    </section>
  );
}
