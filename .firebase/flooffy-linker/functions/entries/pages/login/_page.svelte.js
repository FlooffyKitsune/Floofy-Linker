import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { u as user } from "../../../chunks/firebase.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<h2 data-svelte-h="svelte-bhb3ah">Login</h2> ${$user ? `<h2 class="card-title">Welcome, ${escape($user.displayName)}</h2> <p class="text-center text-success" data-svelte-h="svelte-1958qcl">You are logged in</p> <button class="btn btn-warning" data-svelte-h="svelte-1tqdu8r">Sign out</button>` : `<button class="btn btn-primary" data-svelte-h="svelte-12721gk">Sign in with Google</button>`}`;
});
export {
  Page as default
};
