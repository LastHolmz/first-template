"use client";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/logos/logoipsum-296.svg"
        width={30}
        height={30}
        alt="logo"
        priority
      />
    </div>
  );
};

export default Logo;
