import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.OcTToIxe.js","_app/immutable/chunks/scheduler.v4c2umFH.js","_app/immutable/chunks/index.3VQIyI8a.js","_app/immutable/chunks/stores.JTTrptLV.js","_app/immutable/chunks/entry.Dh5W7N9l.js","_app/immutable/chunks/index.Co7SCSpI.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/firebase.BUtuNcO3.js"];
export const stylesheets = [];
export const fonts = [];
