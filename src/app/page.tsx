import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-4 flex flex-col space-y-4 w-full bg-red-200">
      Dashbaord utama
      <Link href={"login"}>
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default page;
