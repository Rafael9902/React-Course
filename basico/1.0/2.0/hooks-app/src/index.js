import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormWithCustomHook } from './hooks/02-use-effect/FormWithCustomHook';
import { SimpleForm } from './hooks/02-use-effect/SimpleForm';
import { FocusScreen } from './hooks/04-use-ref/FocusScreen';
import { Layout } from './hooks/05-uselayout-effect/Layout';
import { Memorize } from './hooks/06-memos/Memorize';
import { HooksApp } from './HooksApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Memorize />
);
