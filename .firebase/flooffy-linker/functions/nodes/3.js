

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DUT6uD_9.js","_app/immutable/chunks/scheduler.v4c2umFH.js","_app/immutable/chunks/index.3VQIyI8a.js"];
export const stylesheets = [];
export const fonts = [];
