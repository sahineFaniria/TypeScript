import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <main className="flex min-h-screen flex-col p-6">
      <div className=" titre flex h-20 shrink-0 items-end rounded-l bg-cyan-600 p-4 md:h-52 text-white text-2xl font-bold">
        TYPESCRIPT.
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-xl md:leading-normal`}>
            <strong>Welcome to Rafane's.</strong> This is the plateforme for the{' '}
            <a href="https://nextjs.org/learn/" className=" text-cyan-700">
              TypeScripts Learn Course
            </a>
            , brought to you by Rafane.
          </p>
          <div className="flex flex-row flex-wrap gap-2">
            <Link
              href="/started"
              className="flex items-center gap-1 self-start rounded-lg bg-cyan-600 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-cyan-500 md:text-base"
            >
              <span className='text-xs'>Started</span> <ArrowRightIcon className="w-2 md:w-4" />
            </Link>
            <Link
              href="/simple"
              className="flex items-center gap-1 self-start rounded-lg bg-slate-800 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-700 md:text-base"
            >
              <span className='text-xs'>Simple types</span> <ArrowRightIcon className="w-2 md:w-4" />
            </Link>
            <Link
              href="/special"
              className="flex items-center gap-1 self-start rounded-lg bg-gray-700 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-gray-600 md:text-base"
            >
              <span className='text-xs'>Special types</span> <ArrowRightIcon className="w-2 md:w-4" />
            </Link>
            <Link
              href="/arrays"
              className="flex items-center gap-1 self-start rounded-lg bg-zinc-800 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-700 md:text-base"
            >
              <span className='text-xs'>Arrays</span> <ArrowRightIcon className="w-2 md:w-4" />
            </Link>
            <Link
              href="/tuples"
              className="flex items-center gap-1 self-start rounded-lg bg-neutral-600 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-700 md:text-base"
            >
              <span className='text-xs'>Tuples</span> <ArrowRightIcon className="w-2 md:w-4" />
            </Link>
            <Link
              href="/object"
              className="flex items-center gap-1 self-start rounded-lg bg-stone-800 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-stone-700 md:text-base"
            >
              <span className='text-xs'>Object</span> <ArrowRightIcon className="w-2 md:w-4" />
            </Link>
            <Link
              href="/enums"
              className="flex items-center gap-1 self-start rounded-lg bg-red-500 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-red-600 md:text-base"
            >
              <span className='text-xs'>Enums</span> <ArrowRightIcon className="w-2 md:w-4" />
            </Link>
            <Link
              href="/interface"
              className="flex items-center gap-1 self-start rounded-lg bg-orange-600 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-orange-500 md:text-base"
            >
              <span className='text-xs'>Aliases & Interface</span> <ArrowRightIcon className="w-2 md:w-4" />
            </Link>
            <Link
              href="/union"
              className="flex items-center gap-1 self-start rounded-lg bg-amber-600 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-amber-500 md:text-base"
            >
              <span className='text-xs'>Union Types</span> <ArrowRightIcon className="w-2 md:w-4" />
            </Link>
            <Link
              href="/functions"
              className="flex items-center gap-1 self-start rounded-lg bg-yellow-500 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-amber-400 md:text-base"
            >
              <span className='text-xs'>Functions</span> <ArrowRightIcon className="w-2 md:w-4" />
            </Link>
            
          </div>
        </div>
        <div className="flex p-6 md:w-3/5 md:px-5 md:py-5 bg-gray-100 rounded-lg ">
          {children}
        </div>
      </div>
    </main>
        
      </body>
    </html>
  );
}
