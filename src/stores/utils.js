import { writable } from 'svelte/store'

const utils = writable({
  PAUSED: true,
});

export default utils;