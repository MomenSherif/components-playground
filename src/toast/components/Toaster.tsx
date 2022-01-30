import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Toast, { ToastProps } from '@toast/components/Toast';
import toast from '@toast/toast';

type XAxis = 'left' | 'center' | 'right';
type YAxis = 'top' | 'bottom';

type ToastPosition = `${YAxis}-${XAxis}`;

interface ToasterProps {
  position?: ToastPosition;
}

export type ToastOption = Omit<ToastProps, 'onRequestClose'>;

export default function Toaster({ position = 'top-right' }: ToasterProps) {
  const [toasts, setToasts] = useState<ToastOption[]>([]);

  useEffect(() => {
    const handleToast = (toast: ToastOption) => setToasts(t => [...t, toast]);

    toast.subscribe(handleToast);
    return () => {
      toast.unsubscribe(handleToast);
    };
  }, []);

  const [yAxis, xAxis] = position.split('-') as [YAxis, XAxis];
  return (
    <div
      id="toaster"
      className={clsx(
        'fixed z-[999] pointer-events-none p-2 [--padding:2rem] sm:p-4 sm:[--padding:4rem] inset-0 flex gap-2',
        {
          'flex-col': yAxis === 'top',
          'flex-col-reverse': yAxis === 'bottom',
          'sm:items-start': xAxis === 'left',
          'sm:items-center': xAxis === 'center',
          'sm:items-end': xAxis === 'right',
        },
      )}
    >
      {toasts.map(t => (
        <Toast
          key={t.id}
          id={t.id}
          type={t.type}
          onRequestClose={id =>
            setToasts(toasts => toasts.filter(t => t.id !== id))
          }
        >
          {t.children}
        </Toast>
      ))}
    </div>
  );
}
