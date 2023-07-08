'use client';

import Headings from '@/data/headings.json';
import Problematics from '@/data/problematics.json';
import Entries from '@/data/entries.json';
import Users from '@/data/users.json';
import { useSearchParams } from 'next/navigation';

export default function page({ params }: { params: { name: string } }) {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const heading = Headings.filter((heading) => heading.id === Number(id));
  return (
    <section className="w-full">
      {params.name === 'populer' ? (
        <>
          <h1 className="font-extrabold text-xl mb-8">gündem</h1>
          <div className="flex flex-col gap-4">
            {Headings.map((heading) => {
              if (heading.hot) {
                return (
                  <div className="flex justify-between items-center">
                    <h2>{heading.name}</h2>
                    <p className="text-sourHalfMute">{heading.entryCount}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </>
      ) : params.name === 'sorunsallar' ? (
        <>
          <h1 className="font-extrabold text-xl mb-8">sorunsallar</h1>
        </>
      ) : (
        <>
          <h1 className="font-extrabold text-xl mb-8">{heading[0].name}</h1>
        </>
      )}
    </section>
  );
}
