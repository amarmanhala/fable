import React, { Children } from "react";
import Image from "next/image";

interface ContainerProps {
  title?: string;
  primary?: boolean;
  small?: boolean;
  secondary?: boolean;
  children?: any;
}
const Container = (props: ContainerProps) => {
  return (
    <main>
      <div className="text-white flex flex-row justify-center w-full p-16">
    
          {props.children}
        
      </div>
    </main>
  );
};
export { Container };
