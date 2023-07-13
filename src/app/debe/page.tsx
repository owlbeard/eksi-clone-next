import Entries from '@/data/entries.json';
import Link from 'next/link';
import uniqid from 'uniqid';

const sortedEntries = Entries.sort((a, b) => b.fav - a.fav);

export default function Debe() {
  return (
    <section>
      <div>
        <h1 className="text-sourMute text-xl">dünün en beğenilen entryleri</h1>
      </div>
      {sortedEntries.slice(0, 50).map((entry) => {
        return (
          <Link href={`/entry/${entry.id}`} key={uniqid()}>
            <div className="flex justify-between items-center py-3 gap-3 w-full hover:bg-sourBottomBorder">
              <h3 className="text-sm text-sourText">{entry.heading}</h3>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
