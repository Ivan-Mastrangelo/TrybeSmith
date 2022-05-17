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

  public getAll = async (): Promise<IUser[]> => {
    const [users] = await connection.execute(
      'SELECT id, username, classe, level, password FROM Trybesmith.Users ORDER BY id;',
    );
    
    return users as IUser[];
  };

  public findByNameAndPassword = async (username: string, password: string): Promise<IUser> => {
    const query = `SELECT * FROM Trybesmith.Users
      WHERE username = ? AND password = ?`;
    const result = await connection.execute(query, [username, password]);

    const [rows] = result;
    const [user] = rows as IUser[];
    return user;
  };
}

export default UserModel;