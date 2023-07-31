import './globals.css';
import Indexes from '@/components/Indexes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SourThings from '@/components/SourThings';

export const metadata = {
  title: 'ekşi sözlük - kutsal bilgi kaynağı',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sourBG text-sourText">
        <Header />
        <div className="container md:pl-8">
          <main className="main flex min-h-screen flex-col">
            <div className="flex-grow flex md:flex-row flex-col md:mb-0 mb-8 md:gap-0 gap-4">
              <div className="page flex grow">{children}</div>
              <SourThings />
            </div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
