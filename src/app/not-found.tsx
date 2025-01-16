import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-full h-screen">
      <Image
        src={"/assets/fotoes.png"}
        height={1080}
        width={1200}
        alt="not-fpund image"
        className="h-fit w-[40vw]"
      />
      <h1 className="text-2xl font-semibold">Not Found</h1>
      <p className="text-5xl">404</p>
    </div>
  );
};

export default NotFound;
