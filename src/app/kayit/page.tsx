'use client';

import { range } from '@/util/range';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function page() {
  const birthday = range(1, 31);
  const years = range(1900, 2006).reverse();
  const [gender, setGender] = useState('');
  const [pw, setPw] = useState('');
  function hasLowerCase(str: string) {
    return str.toUpperCase() != str;
  }
  function hasUpperCase(str: string) {
    return str.toLowerCase() != str;
  }
  function hasNumber(str: string) {
    return /\d/.test(str);
  }
  return (
    <section className="mx-6">
      <h1 className="font-extrabold text-xl mb-8">yeni kullanıcı kaydı</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4 w-80 mb-8"
      >
        <label htmlFor="nick">nick</label>
        <input
          className="p-2 rounded-sm focus:outline-none text-black"
          type="text"
          name="nick"
        />
        <label htmlFor="e-mail">e-mail</label>
        <input
          className="p-2 rounded-sm focus:outline-none text-black"
          type="email"
          name="e-mail"
        />
        <div>
          <h2>doğum tarihi</h2>

          <select
            className="p-2 rounded-sm text-black focus:outline-dotted mr-2"
            name="doğum"
          >
            <option></option>
            {birthday.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <select
            className="p-2 rounded-sm text-black focus:outline-dotted mr-2"
            name="doğum"
          >
            <option></option>
            <option value="ocak">ocak</option>
            <option value="şubat">şubat</option>
            <option value="mart">mart</option>
            <option value="nisan">nisan</option>
            <option value="mayıs">mayıs</option>
            <option value="haziran">haziran</option>
            <option value="temmuz">temmuz</option>
            <option value="ağustos">ağustos</option>
            <option value="eylül">eylül</option>
            <option value="ekim">ekim</option>
            <option value="kasım">kasım</option>
            <option value="aralık">aralık</option>
          </select>
          <select
            className="p-2 rounded-sm text-black focus:outline-dotted"
            name="doğum"
          >
            <option></option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="cinsiyet">cinsiyet</label>
        <input type="hidden" name="cinsiyet" value={'x'} />
        <div className="flex text-black">
          <button
            onClick={() => setGender('w')}
            className={`py-1 px-2 rounded-l-md ${
              gender === 'w'
                ? 'bg-sourButtonHover text-white'
                : 'bg-sourHalfMute'
            } border border-transparent hover:text-black hover:bg-sourButtonHover hover:border-sourButtonHoverBorder`}
          >
            kadın
          </button>
          <button
            onClick={() => setGender('m')}
            className={`py-1 px-2 ${
              gender === 'm'
                ? 'bg-sourButtonHover text-white'
                : 'bg-sourHalfMute'
            } border border-transparent hover:text-black hover:bg-sourButtonHover hover:border-sourButtonHoverBorder`}
          >
            erkek
          </button>
          <button
            onClick={() => setGender('?')}
            className={`py-1 px-2 ${
              gender === '?'
                ? 'bg-sourButtonHover text-white'
                : 'bg-sourHalfMute'
            } border border-transparent hover:text-black hover:bg-sourButtonHover hover:border-sourButtonHoverBorder`}
          >
            başka
          </button>
          <button
            onClick={() => setGender('x')}
            className={`py-1 px-2 rounded-r-md ${
              gender === 'x'
                ? 'bg-sourButtonHover text-white'
                : 'bg-sourHalfMute'
            } border border-transparent hover:text-black hover:bg-sourButtonHover hover:border-sourButtonHoverBorder`}
          >
            boşver
          </button>
        </div>
        <div className="flex gap-2">
          <Image
            id="alert"
            className="self-start"
            src={'/comment-alert-outline.svg'}
            alt="alert"
            width={19.59}
            height={19.59}
          ></Image>
          <p className="text-sm">
            hesap güvenliğiniz açısından şifrenizin <b>diğer</b>
            <br />
            <b>sitelerde kullandığınız şifrelerden farklı</b>
            <br />
            <b>olmasını</b> tavsiye ederiz
          </p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="şifre">şifre</label>
          <input
            className="p-2 rounded-sm"
            type="password"
            name="şifre"
            onChange={(e) => setPw(e.target.value)}
          />
          <div className="text-xs">
            <p>şifre en az 8 karakter</p>
            <p>en az bir büyük harf</p>
            <p>bir küçük harf</p>
            <p>rakam içermelidir</p>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="şifre (tekrar)">şifre (tekrar)</label>
          <input className="p-2 rounded-sm" type="password" name="şifre" />
          <div className="text-xs">
            {hasLowerCase(pw) ? (
              <div className="flex gap-1">
                <Image
                  src={'https://ekstat.com/img/icons/tick-o.svg'}
                  alt="check"
                  width={10}
                  height={10}
                ></Image>
                <p className="text-sour">en az 1 küçük harf</p>
              </div>
            ) : (
              <p>en az 1 küçük harf</p>
            )}
            {hasUpperCase(pw) ? (
              <div className="flex gap-1">
                <Image
                  src={'https://ekstat.com/img/icons/tick-o.svg'}
                  alt="check"
                  width={10}
                  height={10}
                ></Image>
                <p className="text-sour">en az 1 büyük harf</p>
              </div>
            ) : (
              <p>en az 1 büyük harf</p>
            )}
            {hasNumber(pw) ? (
              <div className="flex gap-1">
                <Image
                  src={'https://ekstat.com/img/icons/tick-o.svg'}
                  alt="check"
                  width={10}
                  height={10}
                ></Image>
                <p className="text-sour">en az 1 rakam</p>
              </div>
            ) : (
              <p>en az 1 rakam</p>
            )}
            {pw.length >= 8 ? (
              <div className="flex gap-1">
                <Image
                  src={'https://ekstat.com/img/icons/tick-o.svg'}
                  alt="check"
                  width={10}
                  height={10}
                ></Image>
                <p className="text-sour">en az 8 karakter</p>
              </div>
            ) : (
              <p>en az 8 karakter</p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="okudum" />
          <label htmlFor="okudum">
            <Link href={'https://eksisozluk1923.com/registration/eula'}>
              ekşi sözlük kullanıcı sözleşmesi
            </Link>
            ni okudum ve kabul ediyorum
          </label>
        </div>
        <button className="bg-sour p-2 w-full rounded-sm text-white hover:bg-sourButtonHover border border-sourButtonHoverBorder">
          kayıt ol işte böyle
        </button>
      </form>
    </section>
  );
}
