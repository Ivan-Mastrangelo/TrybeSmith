import { sign } from 'jsonwebtoken';

const tokenGenerate = (id: number, username: string): string => {
  const secretKey = 'xablau';

  const token = sign({ id, username }, secretKey, {
    expiresIn: '5d',
    algorithm: 'HS256',
  });

  return token as string;
};

export default tokenGenerate;

// Referência: https://www.treinaweb.com.br/blog/tipagem-no-typescript