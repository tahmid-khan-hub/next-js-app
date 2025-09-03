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
          </div>
        );
      })}
    </div>
  );
}
