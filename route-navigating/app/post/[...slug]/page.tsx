import React from "react";

const PostSlugPage = ({ params }: { params: { slug: Object } }) => {
  const { slug } = params;
  return (
    <div>
      <h1>PostSlugPage</h1>
      <p>slug: {JSON.stringify(slug)}</p>
    </div>
  );
};

export default PostSlugPage;
