import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {posts.map((post) => {
        return (
          <div key={post.id} className="mb-6 border p-2">
            <p className="mb-3">{post.title}</p>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`}><button className="p-3 bg-green-600 mt-4 w-full">Details</button></Link>
          </div>
        );
      })}
    </div>
  );
}
