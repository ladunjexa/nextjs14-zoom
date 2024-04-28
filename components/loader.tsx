import Image from "next/image";
import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="flex-center h-screen w-full">
      <Image src="/icons/loading-circle.svg" alt="Loading" width={50} height={50} />
    </div>
  );
};

export default Loader;
