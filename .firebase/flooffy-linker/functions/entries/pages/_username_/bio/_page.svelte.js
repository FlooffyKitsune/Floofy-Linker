import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "devalue";
import { a as userData } from "../../../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_userData();
  $$unsubscribe_page();
  return `${$userData?.username == $page.params.username ? `<main class="max-w-lg prose text-center mx-auto my-6"><p>Current Bio: <span class="text-info">${escape(data.bio)}</span></p> <p>Status Code: ${escape($page.status)}</p> <p class="text-error">${escape($page.form?.problem ?? "")}</p> <form method="POST"><div class="form-control"><label for="bio" class="label" data-svelte-h="svelte-18mmhtu"><span class="label-text">Your bio</span></label> <textarea name="bio" class="textarea textarea-bordered textarea-accent">${escape(data.bio, false)}</textarea></div> <button class="btn btn-primary my-5" data-svelte-h="svelte-tqnit3">Update Bio</button></form></main>` : ``}`;
});
export {
  Page as default
};
