<初期作成>
npx create-react-app frondend
npx create-react-app   --template typescript

※ファイル修正
<index.js>
import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

<package.json>
,
  "homepage":"."

<インストール>
npm install –save-dev json-server　--force
npm install --save @material-ui/core @material-ui/icons @material-ui/system --force
npm install axios --save --force
npm install react-router-dom --save --force

<動かし方>
npm start
json-server -w .\db.json -p 3001