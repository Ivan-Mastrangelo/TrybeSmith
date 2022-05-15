import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IUser from '../interfaces/user.interface';

class UserModel {
  public create = async (username: string, classe: string, level: number, password: string):
  Promise<IUser> => {
    const [result] = await connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Users
      (username, classe, level, password) VALUES (?, ?, ?, ?);`,
      [username, classe, level, password],
    );
    return {
      id: result.insertId,
      username,
      classe,
      level,
      password,
    };
  };
}

export default UserModel;