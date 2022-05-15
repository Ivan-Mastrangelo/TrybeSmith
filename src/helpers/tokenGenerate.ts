import { sign } from 'jsonwebtoken';

const tokenGenerate = (id: number) => {
  const secretKey = 'xablau';

  const token = sign({ id }, secretKey, {
    expiresIn: '5d',
    algorithm: 'HS256',
  });

  return token;
};

export default tokenGenerate;

// Referência: https://www.treinaweb.com.br/blog/tipagem-no-typescript