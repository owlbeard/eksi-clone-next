'use client';

import Headings from '@/data/headings.json';
import Entries from '@/data/entries.json';
import Users from '@/data/users.json';
import { useSearchParams } from 'next/navigation';
import replaceAll from '@/util/replaceAll';
import Link from 'next/link';
import uniqid from 'uniqid';

const sortedEntries = Entries.sort((a, b) => b.fav - a.fav);

export default function HeadingsId({ params }: { params: { name: string } }) {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [heading] = Headings.filter((heading) => heading.id === Number(id));
  return (
    <section className="w-full">
      {params.name === 'populer' ? (
        <>
          <h1 className="text-sourMute text-xl">gündem</h1>

          {Headings.map((heading) => {
            if (heading.hot) {
              return (
                <Link
                  href={`/basliklar/${replaceAll(heading.name, ' ', '-')}?id=${
                    heading.id
                  }`}
                  key={uniqid()}
                >
                  <div className="flex justify-between items-center py-3 gap-3 w-full hover:bg-sourBottomBorder">
                    <h2 className="text-sm text-sourText">{heading.name}</h2>
                    <p className="text-sourHalfMute">{heading.entryCount}</p>
                  </div>
                </Link>
              );
            }
            return null;
          })}
        </>
      ) : params.name === 'debe' ? (
        <div>
          <h1 className="text-sourMute text-xl">
            dünün en beğenilen entryleri
          </h1>

          {sortedEntries.slice(0, 50).map((entry) => {
            return (
              <Link href={`/entry/${entry.id}`} key={uniqid()}>
                <div className="flex justify-between items-center py-3 gap-3 w-full hover:bg-sourBottomBorder">
                  <h3 className="text-sm text-sourText">{entry.heading}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-extrabold hover:underline">
            <Link
              href={`/basliklar/${replaceAll(heading.name, ' ', '-')}?id=${
                heading.id
              }`}
            >
              {heading.name?.toLowerCase()}
            </Link>
          </h1>
          {Entries.filter((entry) => entry.heading === heading.name).map(
            (entry) => {
              let pic = '';
              let user = Users.find((user) => {
                return user.name === entry.writer;
              });
              if (user !== undefined) pic = user.pp;
              return (
                <div key={uniqid()} className="flex flex-col gap-2 w-full">
                  <p className="text-sm font-thin mb-2 whitespace-pre-wrap">
                    {entry.entry?.toLowerCase()}
                    {entry.links ? (
                      <span>
                        ({entry.links.type}:
                        <a
                          href={entry.links.url}
                          className="text-sourLink"
                        >{`  ${entry.links.linkText}`}</a>
                        )
                      </span>
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
                          <title>şükela!</title>
                          <path d="M7.03 9.97H11.03V18.89L13.04 18.92V9.97H17.03L12.03 4.97Z" />
                        </svg>
                      </button>

                      <button className="border border-sourText hover:border-sourBad rounded-sm m-1">
                        <svg
                          id="sourBad"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 cursor-pointer"
                        >
                          <title>çok kötü</title>
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
                          <title>share</title>
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
                          <title>diğer</title>
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
                        href={`/entry/${replaceAll(
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
        </div>
      )}
    </section>
  );
}
