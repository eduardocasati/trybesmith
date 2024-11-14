import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = process.env.JWT_SECRET || 'secretJWT';

const generateJWT = ({ id, username }: { id: number; username: string }): string => {
  const jwtToken = jwt.sign({ id, username }, JWT_SECRET_KEY);
  return jwtToken;
};

export default generateJWT;
