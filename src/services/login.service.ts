import UserModel from '../models/users.model';
import tokenGenerate from '../helpers/tokenGenerate';

class LoginService {
  public model = new UserModel();

  public login = async (username: string, password: string): Promise<string> => {
    const user = await this.model.findByNameEndPassword(username, password);
    if (!user) return ('error');

    const { id } = user;
    const userToken = tokenGenerate(id, username);            
  
    return userToken;
  };
}
  
export default LoginService;