import React from "react";
import { COMMENTS_DATA } from "../../utils/mockData";
import CommentsList from "./CommentsList";

export const CommentContainer = () => {
  return (
    <div>
      <h1 className="font-bold p-1 m-1">Comments : </h1>
      <CommentsList data={COMMENTS_DATA} />
    </div>
  );
};
