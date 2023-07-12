'use client';

import Users from '@/data/users.json';
import Entries from '@/data/entries.json';
import Headings from '@/data/headings.json';
import { useSearchParams } from 'next/navigation';
import uniqid from 'uniqid';
import Link from 'next/link';
import { useState } from 'react';
import replaceAll from '@/util/replaceAll';

export default function page({ params }: { params: { name: string } }) {
  const [page, setPage] = useState('entry');
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const user = Users.filter((user) => user.id === Number(id));
  return (
    <section>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-xl mb-8">{user[0].name}</h1>
          <div className="flex items-center text-xs text-sourHalfMute font-bold">
            <p>{user[0].entries} entry</p>
            <svg
              className="white first-letter:h-2 w-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>circle-small</title>
              <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
            </svg>
            <p>{user[0].followers} takipçi</p>
            <svg
              className="white h-2 w-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>circle-small</title>
              <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
            </svg>
            <p>{user[0].followed} takip</p>
          </div>
        </div>
        <img
          className="rounded-full object-cover h-24 w-24 my-0.5"
          src={user[0].pp}
          alt={user[0].name}
        />
      </div>
      <div className="flex justify-start gap-3">
        <div className="p-2 rounded-fifty border border-sourText">
          <img
            className="h-4 white"
            src="/export-variant.svg"
            alt="share"
            title="share"
          />
        </div>
        <div className="p-2 rounded-fifty border border-sourText">
          <img
            className="h-4 white"
            src="/dots-horizontal.svg"
            alt="share"
            title="share"
          />
        </div>
      </div>
      <div className="flex border-y border-sourMute gap-6 text-sm mt-3">
        <button
          className={`border-y-2 border-t-transparent p-1 hover:underline hover:font-extrabold ${
            page === 'entry'
              ? 'border-b-sour font-extrabold'
              : 'border-b-transparent'
          }`}
          onClick={() => setPage('entry')}
        >
          entry'ler
        </button>
        <button
          className={`border-y-2 border-t-transparent hover:underline hover:font-extrabold p-1 ${
            page === 'favoriler'
              ? 'border-b-sour font-extrabold'
              : 'border-b-transparent'
          }`}
          onClick={() => setPage('favoriler')}
        >
          favoriler
        </button>
        <button
          className={`border-y-2 border-t-transparent hover:underline hover:font-extrabold p-1 ${
            page === 'görsel'
              ? 'border-b-sour font-extrabold'
              : 'border-b-transparent'
          }`}
          onClick={() => setPage('görsel')}
        >
          görseller
        </button>
        <div className="flex items-center" onClick={() => setOpen(!open)}>
          <button
            className={
              'border-y-2 border-y-transparent hover:underline hover:font-extrabold p-1'
            }
          >
            istatistikler
          </button>
          <img
            className="white h-6 cursor-pointer"
            src="/menu-down.svg"
            alt="menu down"
          />
        </div>
      </div>
      <>
        {Entries.filter((entry) => entry.writer === user[0].name).map(
          (entry) => {
            let pic = '';
            let heading = Headings.filter(
              (heading) => heading.name === entry.heading
            );
            console.log(heading);
            let user = Users.find((user) => {
              return user.name === entry.writer;
            });
            if (user !== undefined) pic = user.pp;
            return (
              <div key={uniqid()} className="flex flex-col gap-2 w-full">
                <h1 className="text-lg font-extrabold">
                  <Link
                    href={`/basliklar/${replaceAll(
                      entry.heading,
                      ' ',
                      '-'
                    )}?id=${'lol'}`}
                  >
                    {entry.heading?.toLowerCase()}
                  </Link>
                </h1>
                <p className="text-sm font-thin mb-2 whitespace-pre-wrap">
                  {entry.entry?.toLowerCase()}
                  {entry.links ? (
                    <p>
                      ({entry.links.type}:
                      <a
                        href={entry.links.url}
                        className="text-sourLink"
                      >{`  ${entry.links.linkText}`}</a>
                      )
                    </p>
                  ) : null}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex">
                    <button className="border border-sourText hover:border-sour rounded-sm m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="eksico h-4 w-4 cursor-pointer"
                      >
                        <title>arrow-up-thin</title>
                        <path d="M7.03 9.97H11.03V18.89L13.04 18.92V9.97H17.03L12.03 4.97Z" />
                      </svg>
                    </button>

                    <button className="border border-sourText hover:border-sour rounded-sm m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="eksico h-4 w-4 cursor-pointer"
                      >
                        <title>arrow-down-thin</title>
                        <path d="M7.03 13.92H11.03V5L13.04 4.97V13.92H17.03L12.03 18.92Z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex">
                    <button className="m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="eksico h-4 w-4 cursor-pointer"
                      >
                        <title>export-variant</title>
                        <path d="M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z" />
                      </svg>
                      <div></div>
                    </button>
                    <button className="m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="eksico h-4 w-4 cursor-pointer"
                      >
                        <title>dots-horizontal</title>
                        <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-end items-center gap-2">
                  <div>
                    <Link
                      href={`/biri/${replaceAll(user!.name, ' ', '-')}?id=${
                        user!.id
                      }`}
                    >
                      <p className="text-sourLink text-right text-sm hover:underline">
                        {user?.name}
                      </p>
                    </Link>
                    <Link
                      href={`/basliklar/${replaceAll(
                        entry.heading,
                        ' ',
                        '-'
                      )}?id=${entry.id}`}
                    >
                      <p className="text-xs text-sourMute hover:underline">
                        {entry.date}
                      </p>
                    </Link>
                  </div>
                  <Link
                    href={`/biri/${replaceAll(user!.name, ' ', '-')}?id=${
                      user!.id
                    }`}
                  >
                    <img
                      className="rounded-full object-cover h-10 w-10 my-0.5"
                      src={pic}
                      alt={user!.name}
                    />
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </>
    </section>
  );
}
