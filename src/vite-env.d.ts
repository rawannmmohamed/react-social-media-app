i;

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APPWRITE_PROJECT_ID: string;
  readonly VITE_APPWRITE_URL_ID: string;
  readonly VITE_APPWRITE_DATABASE_ID: string;
  readonly VITE_APPWRITE_STORAGE_ID: string;
  readonly VITE_APPWRITE_USERS_ID: string;
  readonly VITE_APPWRITE_POST_ID: string;

}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
