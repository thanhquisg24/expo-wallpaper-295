import { EventEmitter as Emitter } from 'eventemitter3';

const AppEmitterSingleton = (() => {
  let instance: any;

  function createInstance() {
    return new Emitter(); // tạo object rỗng, có thể thay bằng Class khác
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
export const AppEmitter = AppEmitterSingleton.getInstance();

export const NOTIFY = 'NOTIFY';

export const CLOSE_MODAL = 'CLOSE_MODAL';
export enum NOTIFY_TYPE {
  ERROR,
  SUCCESS,
  DEFAULT,
}
export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const emitStartLoading = (): void => {
  AppEmitter.emit(START_LOADING);
};
export const emitStopLoading = (): void => {
  AppEmitter.emit(END_LOADING);
};
export const emitCloseModal = (): void => {
  AppEmitter.emit(CLOSE_MODAL);
};
