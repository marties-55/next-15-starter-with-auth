"use client";

import { loginAction } from "@/app/(auth)/login/action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import z from "zod";
import GoogleAuth from "../reusable/google-auth";
import { BgDecoration } from "./bg-decoration";
import { HeadersLoginDesktop } from "./headers-desktop";

type LoginForm = {
  email: string;
  password: string;
};
export const loginSchema = z.object({
  email: z
    .string()
    .email("Email tidak valid")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  password: z
    .string()
    .min(8, "Password harus minimal 8 karakter")
    .max(50, "Password tidak boleh lebih dari 50 karakter"),
});

export default function LoginPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    setMessage("");

    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.format();

      const errorMessages = Object.values(fieldErrors).flat().join(", ");
      setMessage(errorMessages);
      setIsPending(false);
      return;
    }
    const loginResult = await loginAction(formData);
    console.log("loginResult", loginResult);

    if (loginResult.status == 404) {
      setMessage(loginResult.message);
      toast({
        title: "Login Gagal",
        variant: "destructive",
        description: "Login gagal,please try again!",
      });
    } else if (loginResult.status == 200) {
      toast({
        title: "Login Berhasil",
        description: "Login berhasil selamat bekerja!",
      });
    } else {
      toast({
        title: "Ilegal Login!",
        description: "Method Not allowed",
      });
    }

    setIsPending(false);
  };
  return (
    <div className=" w-full flex flex-col justify-center items-center h-screen">
      <HeadersLoginDesktop />
      <Card className="w-[350px] mx-auto my-auto h-fit">
        <CardHeader>
          <div className="flex space-x-2">
            <Image
              src={"/assets/logo.png"}
              alt="image"
              width={100}
              height={100}
              className="h-8 w-8"
            />
            <div className="p-1">
              <CardTitle>Login</CardTitle>
              <CardDescription className="text-[11px] mt-">
                Kelola inventory dengan mudah dan efisien.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-500 dark:bg-teal-500 hover:dark:bg-teal-400"
              disabled={isPending}
            >
              {isPending ? "Logging in..." : "Login"}
            </Button>
            {message && (
              <p className="flex items-center space-x-1 text-[11px] font-medium mt-2 text-red-500 bg-red-100 p-2 border border-red-400 rounded-md ">
                <IoWarningOutline />
                <span> {message}</span>
              </p>
            )}
          </form>
        </CardContent>
        <CardFooter>
          <CardDescription className="text-center w-full">Atau</CardDescription>
        </CardFooter>
        <CardContent>
          <GoogleAuth placeHolder="Login With Google" />
        </CardContent>
      </Card>
      <BgDecoration />
    </div>
  );
}
