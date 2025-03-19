export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Blog Post Route {id}</h1>
    </div>
  );
}
