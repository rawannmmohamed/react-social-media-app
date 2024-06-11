import {
  useGetCurrentUser,
  useLikePost,
} from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { useEffect, useState } from "react";

type PostStatsProp = {
  post: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }: PostStatsProp) => {
  const likesList: string[] = post.likes.map(
    (user: Models.Document) => user.$id
  );
  const [likes, setLikes] = useState<string[]>(likesList);
  const [isLiked, setIsLiked] = useState(false);
  const { mutate: likePost } = useLikePost();
  const { data: currentUser } = useGetCurrentUser();

  useEffect(() => {
    const checkStatus = () => {
      setIsLiked(likes.includes(userId));
    };
    checkStatus();
  }, [likes, currentUser]);

  const handleLikePost = (e: React.MouseEvent) => {
    e.stopPropagation();

    const newLikes = likes.includes(userId)
      ? likes.filter((id) => id !== userId)
      : [...likes, userId];

    setLikes(newLikes);
    likePost({ postId: post.$id, likesArray: newLikes });
  };

  return (
    <div className="flex-between z-20">
      <div className="flex gap-2 mr-5">
        <img
          src={isLiked ? "/assets/icons/liked.svg" : "/assets/icons/like.svg"}
          alt="like button"
          width={20}
          height={20}
          onClick={handleLikePost}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>
    </div>
  );
};

export default PostStats;
