i;

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APPWRITE_PROJECT_ID: string;
  readonly VITE_APPWRITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
