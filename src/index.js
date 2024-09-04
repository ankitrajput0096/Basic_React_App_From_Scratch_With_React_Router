// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/routes';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);

if (module.hot) {
    module.hot.accept();
}
