import React, { ReactNode } from "react";

type propsType = {
  children: ReactNode;
  className?: string;
  link?: string;
};

const UiTitle = ({ children, className, link }: propsType) => {
  return (
    <div className={`${className} font-main`}>
      {link ? <a href={link}>{children}</a> :<p className="whitespace-pre-wrap">{children}</p> }
    </div>
  );
};

export default UiTitle;
