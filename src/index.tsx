import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { theme } from "./config/theme";
import { PostsProvider } from "context/PostsProvider";

import Posts from "./pages/Posts";

import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <PostsProvider>
      <Posts />
    </PostsProvider>
  </ThemeProvider>
);
