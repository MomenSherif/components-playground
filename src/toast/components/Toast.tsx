import { useState, ReactNode } from 'react';
import clsx from 'clsx';

type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  children: ReactNode;
  type?: ToastType;
  id: string;
  onRequestClose(id: string): void;
}

const bgColor: Record<ToastType, string> = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
};

const icon: Record<ToastType, string> = {
  success: '✔',
  error: '✖',
  warning: '⚠',
  info: '❕',
};

export default function Toast({
  children,
  type,
  id,
  onRequestClose,
}: ToastProps) {
  const [animateOut, setAnimateOut] = useState(false);

  return (
    <div
      onAnimationEnd={e => {
        // if (e.animationName === 'slide-down') onRequestClose(id);
        if (e.animationName === 'slide-out-right') onRequestClose(id);
      }}
      className={clsx(
        'flex flex-shrink-0 items-center min-w-[24rem] bg-gray-200 text-gray-900 p-4 font-medium rounded-md shadow-md relative pointer-events-auto overflow-hidden group',
        // animateOut ? 'animate-slide-down' : 'animate-slide-up',
        animateOut ? 'animate-slide-out-right' : 'animate-slide-in-right',
      )}
    >
      {type && (
        <span className="w-8 h-8 text-sm text-center rounded-full flex justify-center items-center mr-1">
          {icon[type]}
        </span>
      )}
      <span>{children}</span>
      <button
        className="ml-auto flex items-center justify-center w-8 h-8 bg-gray-700/10 p-2 rounded-full hover:bg-gray-700/20 transition-colors"
        aria-label="close toast"
        onClick={() => setAnimateOut(true)}
      >
        &#x2718;
      </button>
      <div
        onAnimationEnd={e => {
          if (e.animationName === 'shrink-x') setAnimateOut(true);
        }}
        className={clsx(
          'absolute z-10 bottom-0 left-0 w-full h-1 origin-left animate-shrink-x group-hover:[animation-play-state:paused]',
          type ? bgColor[type] : 'bg-gray-500',
        )}
      />
    </div>
  );
}
