import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import { postRepository } from "@/repositories";
import { Suspense } from "react";

export default async function Home() {
  const posts = await postRepository.findAll();

  return (
    <div>
      <header>Hello meu caro</header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </div>
  );
}
