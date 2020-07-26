import React from "react";
import Posts from "./Posts";
import { ActionCableProvider } from "use-action-cable";

export default function PostsWrapper(props) {
  return (
    <ActionCableProvider url="/cable">
      <Posts {...props} />
    </ActionCableProvider>
  );
}