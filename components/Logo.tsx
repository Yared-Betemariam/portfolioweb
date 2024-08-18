import Image from "next/image";

const Logo = () => {
  return (
    <a href="#">
      <Image
        src={"/logo.png"}
        alt="logo"
        className="w-40 md:w-56"
        width={4000}
        height={1000}
      />
    </a>
  );
};
export default Logo;
