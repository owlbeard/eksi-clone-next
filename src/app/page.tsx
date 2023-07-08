import Dots from '/dots-horizontal.svg';
import DownArrow from '/arrow-down-bold-box-outline.svg';
import UpArrow from '/arrow-up-bold-box-outline.svg';
import Share from '/export-variant.svg';
import randomize from '@/util/randomize';
import Entries from '@/data/entries.json';
import Users from '@/data/users.json';
import uniqid from 'uniqid';

let randomEntries: Entry[] = randomize(Entries);

export default function Home() {
  return <h1 className="">hello world</h1>;
}
