import { z } from "zod";

export const signupValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({ message: "Invalid email" })
    .min(8, { message: "Too short" }),
  password: z.string().min(8, { message: "Too short" }),
});
export const signinValidation = z.object({
  email: z
    .string()
    .email({ message: "Invalid email" })
    .min(8, { message: "Too short" }),
  password: z.string().min(8, { message: "Too short" }),
});

export const PostValidation = z.object({
  caption: z.string().min(8, { message: "Too short" }).max(2200),
  file: z.custom<File[]>(),
  tags: z.string(),
  location: z.string().min(2).max(100),
});
