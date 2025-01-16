import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

const GoogleAuth = ({ placeHolder }: { placeHolder?: string }) => {
  return (
    <Button variant={"outline"} className="w-full">
      <FcGoogle />
      <span>{placeHolder ? placeHolder : ""}</span>
    </Button>
  );
};

export default GoogleAuth;
