import { JsonPostRepository } from "./post/json-post-repository";
import { PostRepository } from "./post/post-repository";

export const postRepository: PostRepository = new JsonPostRepository();
