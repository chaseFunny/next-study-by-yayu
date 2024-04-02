"use client";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const Template: React.FC<Props> = ({ children }) => {
  const [templateNum, setTemplateNum] = React.useState(0);
  return (
    <div className="text-center m-6">
      <button
        className="btn"
        onClick={() => {
          setTemplateNum(templateNum + 1);
        }}
      >
        Click me +1
      </button>
      <p>我是模板页面，当前数字: {templateNum}</p>
      <br />
      <p>当切换页面的时候，我不会保持状态，我会重新渲染</p>
      {children}
    </div>
  );
};

export default Template;
