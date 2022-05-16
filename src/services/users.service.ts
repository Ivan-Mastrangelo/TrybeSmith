import UserModel from '../models/users.model';
import tokenGenerate from '../helpers/tokenGenerate';

class UserService {
  public model = new UserModel();

  public create = async (username: string, classe: string, level: number, password: string):
  Promise<string> => {
    const { id } = await this.model.create(username, classe, level, password);
    const userToken = tokenGenerate(id, username);            
  
    return userToken;
  };
}

export default UserService;