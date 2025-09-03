export const getPostsDetails = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

export default async function PostDetails({ params }) {
  const p = await params;
  const post = await getPostsDetails(p.id);
  return (
    <div>
      <h1 className="mt-5 text-2xl">Post details</h1>
      <div className="border p-2 justify-center items-center mt-12">
        <h1 className="mb-3 text-xl">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
