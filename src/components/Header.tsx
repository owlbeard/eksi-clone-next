'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';

export default function Header() {
  const [form, setForm] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  useEffect(() => {
    const main = document.querySelector('.main');
    main!.addEventListener('click', (e: any) => handleClick(e));
  }, [form]);
  const handleClick = (e: MouseEvent) => {
    const navElement = formRef.current;
    if (form === true && navElement) {
      const dialogDimensions = navElement.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        setForm(false);
        document.body.classList.remove('stopScroll');
      }
    }
  };
  return (
    <header className="container fixed flex flex-col gap-4 z-50 bg-sourBG mt-5">
      <div className=" flex gap-4 items-center">
        <div className="md:w-48 xl:w-60 p-1">
          {windowWidth >= 450 ? (
            <Link className="flex" href={'/'}>
              <Image
                src="https://ekstat.com/img/new-design/eksisozluk_logo_darktheme.svg"
                alt="icon"
                width={129}
                height={40}
              ></Image>
            </Link>
          ) : (
            <Link href={'/'}>
              <Image
                src="https://ekstat.com/img/ilogo_smallv2.png"
                alt="icon"
                width={20}
                height={20}
              ></Image>
            </Link>
          )}
        </div>
        <div className="flex flex-grow">
          <input
            className="focus:outline-none text-black p-0.5 rounded-l-md border border-sour border-r-0 w-72"
            type="search"
            placeholder="başlık,#entry,@yazar"
          />
          <Image
            onClick={() => setForm(!form)}
            className="bg-white border border-sour border-l-0 cursor-pointer"
            src="/menu-down.svg"
            alt="search"
            width={16}
            height={16}
          ></Image>
          <div className="bg-sour rounded-r-md p-0.5 cursor-pointer">
            <Image
              className="place-self-center"
              id="magnify"
              src="/magnify.svg"
              alt="search"
              width={24}
              height={24}
            ></Image>
          </div>
          {form && (
            <form
              ref={formRef}
              className="flex flex-col gap-2 md:pr-32 absolute top-16 p-2 border border-sourFormBorder text-sm z-50 bg-sourBG"
              onSubmit={() => setForm(false)}
            >
              <div className="flex flex-col">
                <label htmlFor="kelimeler">kelimeler</label>
                <input
                  className="p-2 text-black focus:outline-none border border-sourFormBorder"
                  type="text"
                  name="kelimeler"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="yazar">yazar</label>
                <input
                  className="p-2 text-black focus:outline-none border border-sourFormBorder"
                  type="text"
                  name="yazar"
                />
              </div>
              <label htmlFor="ne-zaman">ne zaman</label>
              <div className="flex gap-2">
                <input
                  className="p-2 text-black border border-sourFormBorder"
                  type="date"
                  name="ne-zaman"
                  id="from"
                />
                <input
                  className="p-2 text-black border border-sourFormBorder"
                  type="date"
                  name="ne-zaman"
                  id="to"
                />
              </div>
              <div className="flex gap-1">
                <input type="checkbox" name="şükela" />
                <label htmlFor="şükela">güzelinden olsun</label>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" name="fav" />
                <label htmlFor="fav">sadece favladıklarımda ara</label>
              </div>
              <label htmlFor="sıralama">sıralama şekli</label>
              <select
                className="p-2 text-black border border-sourFormBorder focus:outline-dotted"
                name="sıralama"
                defaultValue={'yeniden eskiye'}
              >
                <option value="alfabetik">alfabetik</option>
                <option value="yeniden eskiye">yeniden eskiye</option>
                <option value="dolu dolu">dolu dolu</option>
              </select>
              <div className="flex gap-2">
                <button
                  className="p-2 bg-sour text-white rounded-sm"
                  type="submit"
                >
                  mükemmel ara
                </button>
                <button type="button" onClick={() => setForm(false)}>
                  boşver
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="text-right text-sm space-x-4 md:block hidden">
          <Link href={'/giris'}>giriş</Link>
          <Link href={'/kayit'}>kayıt ol</Link>
        </div>
      </div>
      <Navbar width={windowWidth} />
    </header>
  );
}
