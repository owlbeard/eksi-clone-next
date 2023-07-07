import React from 'react';
import Headings from '../data/headings.json';
import Entries from '../data/entries.json';
import Link from 'next/link';
import uniqid from 'uniqid';

type IndexesProps = {
  width: number;
  channel: string;
};

const sortedEntries = Entries.sort((a, b) => b.fav - a.fav);

export default function Indexes({ width, channel }: IndexesProps) {
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
          {sortedEntries.map((entry) => {
            return (
              <Link href={`/entry/${entry.entry_no}`} key={uniqid()}>
                <div className="flex justify-between items-center py-3 gap-3 w-full hover:bg-sourBottomBorder">
                  <h3 className="text-sm w-48 text-sourText">
                    {entry.heading}
                  </h3>
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
              <Link href={`/basliklar/${heading.name}`} key={uniqid()}>
                <div className="flex justify-between items-center py-3 gap-3 w-full hover:bg-sourBottomBorder">
                  <h3 className="text-sm w-48 text-sourText">{heading.name}</h3>
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
              <Link href={`/basliklar/${heading.name}`} key={uniqid()}>
                <div className="flex justify-between items-center py-3 gap-3 w-full hover:bg-sourBottomBorder">
                  <h3 className="text-sm w-48 text-sourText">{heading.name}</h3>
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
          {channel === 'gündem' ? (
            <div className="text-right text-sm pb-6 text-sourText">
              daha da...
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
