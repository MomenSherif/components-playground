import { ReactNode } from 'react';

import { ToastProps } from '@toast/components/Toast';
import { ToastOption } from '@toast/components/Toaster';
import uuid from '@utils/uuid';

type Observer = (toast: ToastOption) => void;

class ToastManager {
  private _observers: Observer[] = [];

  subscribe(callback: Observer) {
    this._observers.push(callback);
  }

  unsubscribe(callback: Observer) {
    this._observers.filter(obs => obs !== callback);
  }

  private _notify(toast: ToastOption) {
    this._observers.forEach(obs => obs(toast));
  }

  success(children: ReactNode) {
    this._notify({ id: uuid(), type: 'success', children });
  }

  error(children: ReactNode) {
    this._notify({ id: uuid(), type: 'error', children });
  }

  warning(children: ReactNode) {
    this._notify({ id: uuid(), type: 'warning', children });
  }

  info(children: ReactNode) {
    this._notify({ id: uuid(), type: 'info', children });
  }
}

const toast = new ToastManager();
export default toast;
