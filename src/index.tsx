import en from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './app/app.component';
import '@shopify/polaris/build/esm/styles.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <AppProvider i18n={en}>
      <App/>
    </AppProvider>
  </StrictMode>
);
