import React from "react";
import { comments } from "../utils/data";
import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <CommentCard comment={comment} />
        <div className="ml-4 my-3">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="mt-4 bg-slate-100 rounded-xl p-2">
      <p className="text-xl font-bold shadow-sm p-2">Comments:</p>
      <div className="flex flex-col mt-5 gap-3">
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default CommentsContainer;
