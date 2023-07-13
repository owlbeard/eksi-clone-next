'use client';

export default function ResetPassword() {
  return (
    <section className="flex flex-col gap-4 max-w-sm">
      <h1 className="font-extrabold text-xl">şifre sıfırlama süreci</h1>
      <p className="mb-2">
        e-mail adresinizi doğru girdiğiniz takdirde size bazı güzellikler
        olabilir
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4 w-full mb-8"
      >
        <label htmlFor="email">email&apos;im şuydu</label>
        <input className="p-2 rounded-sm" type="email" name="email" />
        <button className="bg-sour text-sm p-2 w-1/2 rounded-sm text-white hover:bg-sourButtonHover border border-sourButtonHoverBorder">
          geri kalanı neydi yahu
        </button>
      </form>
    </section>
  );
}
