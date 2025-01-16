import Image from "next/image";

export const HeadersLoginDesktop = () => {
  return (
    <div className="w-full h-14 max-w-7xl flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src={"/assets/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="h-10 w-10 "
        />
        <p className="font-semibold ml-2 text-2xl text-slate-700">IN-VENTO</p>
      </div>
      <p className="font-semibold ml-2 text-xs text-slate-400">
        Ptanton Group .Inc
      </p>
    </div>
  );
};
