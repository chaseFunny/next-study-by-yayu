import React from "react";

const WebLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>WebLayout</h1>
      {children}
    </div>
  );
};

export default WebLayout;
