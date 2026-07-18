import { useDispatch } from "react-redux";
import "../../css/Posts.css";

const Reactions = ({ post }) => {
  const reactionEmoji = {
    thumbsUp: "👍",
    heart: "❤️",
    eyes: "👀",
    hooray: "🎉",
    laugh: "🤣",
  };
  const dispatch = useDispatch();

  const reactions = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reaction-btn"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        <span className="reaction-btn__emoji">{emoji}</span>
        <span className="reaction-btn__count">
          {(post.reactions ?? {})[name] ?? 0}
        </span>
      </button>
    );
  });

  return <div className="reactions">{reactions}</div>;
};

export default Reactions;
