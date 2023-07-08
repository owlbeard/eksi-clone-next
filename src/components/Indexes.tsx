'use client';

import Headings from '@/data/headings.json';
import Entries from '@/data/entries.json';
import Problematics from '@/data/problematics.json';
import Link from 'next/link';
import uniqid from 'uniqid';
import replaceAll from '@/util/replaceAll';
import { useState } from 'react';

type IndexesProps = {
  width: number;
  channel: string;
};

const sortedEntries = Entries.sort((a, b) => b.fav - a.fav);

export default function Indexes({ width, channel }: IndexesProps) {
  const [problematics, setProblematics] = useState('gündem');
  return (
    <div
      id="headings"
      className={`fixed top-32 bottom-0 mb-0 flex flex-col pr-2 overflow-auto font-thin bg-sourBG z-overAll ${
        width >= 1280 ? 'w-60' : 'w-48'
      }`}
    >
      {channel === 'debe' ? (
        <>
          <div>
            <h1 className="text-sourMute text-xl">
              dünün en beğenilen entryleri
            </h1>
          </div>
          {sortedEntries.slice(0, 50).map((entry) => {
            return (
              <Link href={`/entry/${entry.entry_no}`} key={uniqid()}>
                <div className="flex justify-between items-center py-3 gap-3 w-full hover:bg-sourBottomBorder">
                  <h3 className="text-sm text-sourText">{entry.heading}</h3>
                </div>
              </Link>
            );
          })}
        </>
      ) : channel === 'sorunsallar' ? (
        <>
          <div>
            <h1 className="text-sourMute text-xl">{channel}</h1>
          </div>
          <div className="flex">
            <button
              className={`p-2 rounded-t-sm text-sm border ${
                problematics === 'gündem'
                  ? 'border-sourFormBorder border-b-transparent'
                  : 'border-transparent border-b-sourFormBorder'
              }`}
              onClick={() => setProblematics('gündem')}
            >
              gündem
            </button>
            <button
              className={`p-2 rounded-t-sm text-sm border ${
                problematics === 'bugün'
                  ? 'border-sourFormBorder border-b-transparent'
                  : 'border-transparent border-b-sourFormBorder'
              }`}
              onClick={() => setProblematics('bugün')}
            >
              bugün
            </button>
            <div className="flex-grow h-full border-b border-b-sourFormBorder"></div>
          </div>
          {Problematics.slice(0, 50).map((problematic) => {
            return (
              <Link
                href={`/sorunsallar/${replaceAll(
                  problematic.name,
                  ' ',
                  '-'
                )}?id=${problematic.id}`}
                key={uniqid()}
              >
                <div className="flex justify-between items-center py-3 gap-3 w-full hover:bg-sourBottomBorder">
                  <div className="flex flex-col">
                    <h3 className="text-sm text-sourText">
                      {problematic.name}
                    </h3>
                    <p className="text-xs text-sourMute">
                      ({problematic.heading})
                    </p>
                  </div>
                  <p className="text-sm text-sourMute">
                    {problematic.replies < 1000
                      ? problematic.replies
                      : `${String(problematic.replies)[0]},${
                          String(problematic.replies)[1]
                        }b`}
                  </p>
                </div>
              </Link>
            );
          })}
        </>
      ) : (
        <>
          <div>
            <h1 className="text-sourMute text-xl">{channel}</h1>
          </div>
          {Headings.map((heading) => {
            return channel === 'gündem' && heading.hot === true ? (
              <Link
                href={`/basliklar/${replaceAll(heading.name, ' ', '-')}?id=${
                  heading.id
                }`}
                key={uniqid()}
              >
                <div className="flex justify-between items-center py-3 gap-3 w-full hover:bg-sourBottomBorder">
                  <h3 className="text-sm text-sourText">{heading.name}</h3>
                  <p className="text-sm text-sourMute">
                    {heading.entryCount < 1000
                      ? heading.entryCount
                      : `${String(heading.entryCount)[0]},${
                          String(heading.entryCount)[1]
                        }b`}
                  </p>
                </div>
              </Link>
            ) : heading.channel === channel ? (
              <Link
                href={`/basliklar/${replaceAll(heading.name, ' ', '-')}?id=${
                  heading.id
                }`}
                key={uniqid()}
              >
                <div className="flex justify-between items-center py-3 gap-3 w-full hover:bg-sourBottomBorder">
                  <h3 className="text-sm text-sourText">{heading.name}</h3>
                  <p className="text-sm text-sourMute">
                    {heading.entryCount < 1000
                      ? heading.entryCount
                      : `${String(heading.entryCount)[0]},${
                          String(heading.entryCount)[1]
                        }b`}
                  </p>
                </div>
              </Link>
            ) : null;
          })}
          {channel === 'gündem' &&
          Headings.filter((heading) => heading.hot === true).length >= 50 ? (
            <div className="text-right text-sm pb-6 text-sourText">
              daha da...
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
