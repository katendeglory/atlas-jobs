import { writable } from 'svelte/store'

const config = writable({
  backendURL: "http://3.253.128.228:1337/api",
  currentUser: null,
});

export default config;