export const EmailValidator = (input: string): { isValid: boolean; message: string | null } => {
  const allowedCharactersRegex = /^[a-zA-Z0-9@._-]*$/;

  if (!allowedCharactersRegex.test(input)) {
    return {
      isValid: false,
      message: "Character not alowed",
    };
  }

const emailFormatRegex = /@/;
  if (!emailFormatRegex.test(input)) {
    return {
      isValid: false,
      message: "Masukan email yang valid.",
    };
  }

  return {
    isValid: true,
    message: null,
  };
};
