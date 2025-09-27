import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div className="flex gap-2">
      <img className="w-12 rounded-4xl" src="/assets/images/user.jpg" alt="" />
      <div>
        <p>{comment.username}</p>
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
