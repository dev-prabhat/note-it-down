import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import App from "./App";
import { ArchiveProvider,NoteProvider } from "./context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <NoteProvider>
      <ArchiveProvider>
        <App />
      </ArchiveProvider>
     </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
