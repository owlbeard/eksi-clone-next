'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Indexes from './Indexes';

type NavbarProps = {
  width: number;
};

export default function Navbar({ width }: NavbarProps) {
  const [channel, setChannel] = useState('gündem');
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const main = document.querySelector('.main');
    main!.addEventListener('click', (e: any) => handleClick(e));
  }, [open]);
  const handleClick = (e: MouseEvent) => {
    const navElement = popupRef.current;
    if (open === true && navElement) {
      const dialogDimensions = navElement.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        setOpen(false);
        document.body.classList.remove('stopScroll');
      }
    }
  };
  return (
    <nav className="flex justify-between items-center text-xs md:font-bold">
      {width >= 850 ? (
        <>
          <button
            className="sm:px-10 px-2 pb-2 border-b-sourThingsBorder border-transparent hover:border-sour"
            onClick={() => setChannel('gündem')}
          >
            gündem
          </button>
          <button
            className="sm:px-10 px-2 pb-2 border-b-sourThingsBorder border-transparent hover:border-sour"
            onClick={() => setChannel('debe')}
          >
            debe
          </button>
          <button
            className="sm:px-10 pb-2 border-b-sourThingsBorder border-transparent hover:border-sour"
            onClick={() => setChannel('sorunsallar')}
          >
            sorunsallar
          </button>
          <button
            className="sm:px-10 pb-2 border-b-sourThingsBorder border-transparent hover:border-sour"
            onClick={() => setChannel('spor')}
          >
            #spor
          </button>
          <button
            className="sm:px-10 pb-2 border-b-sourThingsBorder border-transparent hover:border-sour"
            onClick={() => setChannel('ilişkiler')}
          >
            #ilişkiler
          </button>
          <button
            className="sm:px-10 pb-2 border-b-sourThingsBorder border-transparent hover:border-sour"
            onClick={() => setChannel('siyaset')}
          >
            #siyaset
          </button>
        </>
      ) : (
        <>
          <Link
            href={'/basliklar/populer'}
            className="px-2 pb-2 border-b-sourThingsBorder border-transparent hover:border-sour"
            onClick={() => setChannel('gündem')}
          >
            gündem
          </Link>
          <Link
            href={'/debe'}
            className="px-2 pb-2 border-b-sourThingsBorder border-transparent hover:border-sour"
            onClick={() => setChannel('debe')}
          >
            debe
          </Link>
          <Link
            className="px-2 pb-2 border-b-sourThingsBorder border-transparent hover:border-sour"
            href={'/kanallar'}
          >
            kanallar
          </Link>
          <Link
            className="px-2 pb-2 border-b-sourThingsBorder border-transparent hover:border-sour"
            href={'/giris'}
          >
            giriş
          </Link>
          <Link
            className="px-2 pb-2 border-b-sourThingsBorder border-transparent hover:border-sour"
            href={'/kayit'}
          >
            kayıt ol
          </Link>
        </>
      )}
      {width >= 850 && (
        <div className="relative flex items-start h-full">
          <button
            className="h-full flex items-start px-10 border-b-sourThingsBorder border-transparent hover:border-sour"
            onClick={() => setOpen(!open)}
          >
            <p className="align-middle ">...</p>
          </button>
          {open && (
            <div
              ref={popupRef}
              className="text-sm absolute top-full left-0 float-left flex flex-col text-center border border-sourFormBorder w-36 bg-sourBG z-overAll"
            >
              <button
                className="w-full p-2 hover:bg-sourBottomBorder"
                onClick={() => {
                  setChannel('tarihte bugün');
                  setOpen(!open);
                }}
              >
                tarihte bugün
              </button>
              <button
                className="w-full p-2 hover:bg-sourBottomBorder"
                onClick={() => {
                  setChannel('seyahat');
                  setOpen(!open);
                }}
              >
                #seyahat
              </button>
              <button
                className="w-full p-2 hover:bg-sourBottomBorder"
                onClick={() => {
                  setChannel('müzik');
                  setOpen(!open);
                }}
              >
                #müzik
              </button>
              <button
                className="w-full p-2 hover:bg-sourBottomBorder"
                onClick={() => {
                  setChannel('tv');
                  setOpen(!open);
                }}
              >
                #tv
              </button>
              <button
                className="w-full p-2 hover:bg-sourBottomBorder"
                onClick={() => {
                  setChannel('haber');
                  setOpen(!open);
                }}
              >
                #haber
              </button>
              <button
                className="w-full p-2 hover:bg-sourBottomBorder"
                onClick={() => {
                  setChannel('bilim');
                  setOpen(!open);
                }}
              >
                #bilim
              </button>
              <button
                className="w-full p-2 hover:bg-sourBottomBorder"
                onClick={() => {
                  setChannel('edebiyat');
                  setOpen(!open);
                }}
              >
                #edebiyat
              </button>
              <button
                className="w-full p-2 hover:bg-sourBottomBorder"
                onClick={() => {
                  setChannel('ekonomi');
                  setOpen(!open);
                }}
              >
                #ekonomi
              </button>
              <button
                className="w-full p-2 hover:bg-sourBottomBorder"
                onClick={() => {
                  setChannel('başıboşlar');
                  setOpen(!open);
                }}
              >
                başıboşlar
              </button>
              <Link
                className="w-full p-2 hover:bg-sourBottomBorder"
                href={'/kanallar'}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                tüm kanallar
              </Link>
            </div>
          )}
        </div>
      )}
      <Link
        className="px-2 sm:sm:px-8 pb-2"
        href={'https://www.youtube.com/penavideo'}
      >
        {width >= 950 ? (
          <Image
            src={'https://ekstat.com/img/new-logos/pena-text-logo-dark@2x.png'}
            alt="pena"
            width={64}
            height={30}
          ></Image>
        ) : (
          <Image
            src={
              'https://eksisozluk1923.com/Content/img/new-logos/pena-logo.svg'
            }
            alt="pena"
            width={16}
            height={12}
          ></Image>
        )}
      </Link>
      <Link className="px-2 sm:px-8 pb-2" href={'https://eksiseyler.com/'}>
        {width >= 950 ? (
          <Image
            src={
              'https://ekstat.com/img/new-logos/eksiseyler-text-logo-dark@2x.png'
            }
            alt="ekşi şeyler"
            width={90}
            height={30}
          ></Image>
        ) : (
          <Image
            src={
              'https://eksisozluk1923.com/Content/img/new-logos/eksiseyler-logo.svg'
            }
            alt="ekşi şeyler"
            width={12}
            height={12}
          ></Image>
        )}
      </Link>
      {width >= 850 && <Indexes width={width} channel={channel} />}
    </nav>
  );
}
