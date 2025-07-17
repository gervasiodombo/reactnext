import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POST_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");
const SIMULATED_DELAY = 5000;

export class JsonPostRepository implements PostRepository {
  private async sleep() {
    if (SIMULATED_DELAY <= 0) return;

    return new Promise((resolve) => {
      setTimeout(resolve, SIMULATED_DELAY);
    });
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POST_PATH, "utf-8");
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await this.sleep();
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);
    if (!post) throw new Error(`Post with id ${id} not found`);
    return post;
  }
}
