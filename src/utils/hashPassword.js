import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
  const saltRounds = 10; // Número de rondas para el salt
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
