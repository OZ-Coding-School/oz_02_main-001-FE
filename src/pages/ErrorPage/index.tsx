import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-[25px]">404 Error: Page Not Found</h1>
      <p className="text-[15px] text-red-600">The page you are looking for does not exist.</p>
    </div>
  );
};

export default ErrorPage;
