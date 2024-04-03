import React from "react";

const DynamicRoutePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <h1>DynamicRoutePage</h1>
      <p>id: {id}</p>
    </div>
  );
};

export default DynamicRoutePage;
