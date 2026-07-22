
import "../../css/Posts.css";
import { useAddReactionMutation } from "./postSlice";


const Reactions = ({ post }) => {
  const reactionEmoji = {
    thumbsUp: "👍",
    heart: "❤️",
    eyes: "👀",
    hooray: "🎉",
    laugh: "🤣",
  };
  
   const [addReaction] = useAddReactionMutation()
   
   

  const reactions = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reaction-btn"
        onClick= {
             ()=>{
              const newValue = post.reactions[name] + 1
                addReaction({postId: post.id, reactions: {...post.reactions, [name]: newValue}})
             }
              
            
        
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
