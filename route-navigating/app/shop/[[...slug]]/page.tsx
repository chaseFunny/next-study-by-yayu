import React from "react";

const ShopSlugPage = ({ params }: { params: any }) => {
  return (
    <div>
      <h1>ShopSlugPage</h1>
      <p>slug: {JSON.stringify(params)}</p>
    </div>
  );
};

export default ShopSlugPage;
