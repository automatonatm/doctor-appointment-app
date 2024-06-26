import React, { ReactNode } from "react";
import { CategoryList } from "./search/components/CategoryList";

interface LayoutProps {
  children: ReactNode;

}

function layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-4">
      <div className="hidden md:block"> 
        {/* Categories */}
        <CategoryList />
      </div>
      <div className="col-span-4  md:col-span-3">{children}</div>
    </div>
  );
}

export default layout;
