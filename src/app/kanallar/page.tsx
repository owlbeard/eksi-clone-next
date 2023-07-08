import Link from 'next/link';
import Channels from '@/data/channels.json';

export default function page() {
  return (
    <section className="flex flex-col gap-2 w-full">
      <h1 className="font-extrabold text-xl">kanallar</h1>
      <p>"bugün"de takip etmek istediğiniz kanallar</p>
      <ul className="flex flex-col gap-4">
        {Channels.map((channel) => {
          return (
            <li className="w-full flex justify-between items-center px-1 py-4  hover:bg-sourBottomBorder">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-xl">{channel.name}</h3>
                <p className="text-sourMute text-xs">{channel.description}</p>
              </div>
              <Link
                className="p-2 whitespace-nowrap w-auto rounded-sm border border-sourFormBorder text-white bg-sourChannelButton hover:bg-sourChannelButtonHover"
                href={'/giris'}
              >
                takip et
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
