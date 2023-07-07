import Link from 'next/link';
import Channels from '../../data/channels.json';

export default function page() {
  return (
    <section className="mx-6 flex flex-col gap-2" style={{ maxWidth: '645px' }}>
      <h1 className="font-extrabold text-xl">kanallar</h1>
      <p>"bugün"de takip etmek istediğiniz kanallar</p>
      <div className="flex flex-col gap-4">
        {Channels.map((channel) => {
          return (
            <div className="flex items-center w-full justify-between px-1 py-4  hover:bg-sourBottomBorder">
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-xl">{channel.name}</h2>
                <p className="text-sourMute text-xs">{channel.description}</p>
              </div>
              <Link
                className="p-2 rounded-sm border border-sourFormBorder text-white bg-sourChannelButton hover:bg-sourChannelButtonHover"
                href={'/giris'}
              >
                takip et
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
