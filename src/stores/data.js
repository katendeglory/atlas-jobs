// https://gist.github.com/katendeglory/fb6392f914df31b5b75ab014ff12b369

import { writable } from 'svelte/store'

const valueChains = writable({});
const jobs = writable({});

export { valueChains, jobs };