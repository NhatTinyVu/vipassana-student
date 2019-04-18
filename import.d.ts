declare module 'console' {
  export = typeof import("console");
}

declare module 'setTimeout' {
  export = typeof import("setTimeout");
}

declare module 'clearTimeout' {
  export = typeof import("clearTimeout");
}