import { writable } from 'svelte/store'

const config = writable({
  backendURL: "https://api.futurejobs-foodbev.co.za/api",
  currentUser: null,
});

export default config;