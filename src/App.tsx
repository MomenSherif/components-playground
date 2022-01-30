import { useState } from 'react';

import toast from '@toast/toast';

import Toaster from '@toast/components/Toaster';

export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white">
        <h1 className="text-6xl font-bold">Toast! 🚀</h1>
        <div className="mt-4 space-x-3">
          <button
            className="text-xl bg-green-500 rounded-md px-3 py-2 min-w-[100px]"
            aria-label="close toast"
            onClick={() => toast.success('Success 🎉')}
          >
            Success
          </button>
          <button
            className="text-xl bg-red-500 rounded-md px-3 py-2 min-w-[100px]"
            aria-label="close toast"
            onClick={() => toast.error('Error 💢')}
          >
            Error
          </button>
          <button
            className="text-xl bg-orange-500 rounded-md px-3 py-2 min-w-[100px]"
            aria-label="close toast"
            onClick={() => toast.warning('Warning ☢')}
          >
            Warning
          </button>
          <button
            className="text-xl bg-blue-500 rounded-md px-3 py-2 min-w-[100px]"
            aria-label="close toast"
            onClick={() => toast.info('Info 📫')}
          >
            Info
          </button>
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
}
