/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ACCESS_CODES?: string;
  readonly VITE_CALENDLY_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
