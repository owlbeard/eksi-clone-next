import randomize from '@/util/randomize';
import Entries from '@/data/entries.json';
import Users from '@/data/users.json';
import uniqid from 'uniqid';
import Link from 'next/link';
import replaceAll from '@/util/replaceAll';

let randomEntries: Entry[] = randomize(Entries);

export default function Home() {
  return (
    <section className="flex flex-col gap-2 w-full">
      {randomEntries.map((entry) => {
        let pic = '';
        let user = Users.find((user) => {
          return user.name === entry.writer;
        });
        if (user !== undefined) pic = user.pp;
        return (
          <div key={uniqid()} className="flex flex-col gap-2 w-full">
            <h1 className="text-lg font-extrabold">
              <Link
                href={`/basliklar/${replaceAll(entry.heading, ' ', '-')}?id=${
                  entry.id
                }`}
              >
                {entry.heading?.toLowerCase()}
              </Link>
            </h1>
            <p className="text-sm mb-2 whitespace-pre-wrap">
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
                <Link href={`/entry/${entry.id}`}>
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
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
