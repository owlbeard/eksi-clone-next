'use client';

import Link from 'next/link';

export default function page() {
  return (
    <section className="max-w-sm">
      <h1 className="font-extrabold text-xl mb-8">giriş</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4 w-full mb-8"
      >
        <label htmlFor="e-mail">e-mail adresi</label>
        <input
          className="p-2 rounded-sm focus:outline-none text-black"
          type="email"
          name="e-mail"
        />
        <label htmlFor="şifre">şifre</label>
        <input
          className="p-2 rounded-sm focus:outline-none text-black"
          type="password"
          name="şifre"
        />
        <div className="flex gap-1">
          <input type="checkbox" name="unutma" />
          <label htmlFor="unutma">unutma bunları sorucam sonra</label>
        </div>
        <button className="w-full py-2 rounded-sm text-white bg-sour border border-sourButtonBorder hover:bg-sourButtonHover hover:border-sourButtonHoverBorder ">
          giriş yapmaya çabala
        </button>
      </form>
      <h2 className="font-extrabold text-xl mb-6">giremeyiş</h2>
      <div className="flex flex-col">
        <Link href={'/sifre-sifirla'}>şifremi unuttum</Link>
        <Link href={'/kayit'}>kayıtlı kullanıcı olunası</Link>
      </div>
    </section>
  );
}
