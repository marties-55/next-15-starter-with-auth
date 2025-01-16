export async function loginAction(
  formData: { email: string; password: string }
) {
  const user = findUser(formData?.email, formData?.password);
  console.log(user?.email);
  if (!user) {
    return {
      status:404,
      message: "Invalid username or password,Try again !",
    };
  }
  return {
    status:200,
    message: "Login berhasil!",
  };
}

export interface User {
  id: number;
  email: string;
  password: string;
}

export const users: User[] = [
  { id: 1, email: "admin@mail.com", password: "rahasia123" },
  { id: 2, email: "user2@example.com", password: "rahasia123" },
];

export function findUser(email: string, password: string): User | undefined {
  return users.find((user) => user.email === email && user.password === password);
}