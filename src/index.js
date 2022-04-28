import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import App from "./App";
import { ArchiveProvider,AuthProvider,ModalProvider,NoteProvider, TrashProvider } from "./context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NoteProvider>
          <ArchiveProvider>
            <ModalProvider>
              <TrashProvider>
                <App />
              </TrashProvider>
            </ModalProvider>
          </ArchiveProvider>
        </NoteProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
