import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import App from "./App";
import { ArchiveProvider,AuthProvider,FilterProvider,ModalProvider,NoteProvider, ThemeProvider, TrashProvider } from "./context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <NoteProvider>
            <ArchiveProvider>
              <ModalProvider>
                <TrashProvider>
                  <FilterProvider>
                    <App />
                  </FilterProvider>
                </TrashProvider>
              </ModalProvider>
            </ArchiveProvider>
          </NoteProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
