import { createEvent, createStore } from "effector";

export const plusRandom = createEvent();
export const minusRandom = createEvent();
export const random = createEvent();
export const  clear = createEvent();

export const $random = createStore<number>(0);

$random
  .on(plusRandom, (start) => start + 1)
  .on(minusRandom, (start) => start - 1)
  .on(clear, (start) => start - start)  
  .on(
    random,
    (state) => (state = Math.floor(Math.random() * (100 - -100) + -100))
  );

