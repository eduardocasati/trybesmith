import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import handleServiceResponse from '../utils/formatResponse';
import generateJWT from '../utils/generateJWT';

const authenticateUser = async (
  username: string,
  password: string,
): Promise<ServiceResponse<{ token: string }>> => {
  try {
    const user = await UserModel.findOne({ where: { username } });

    if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
    }

    const authenticatedUser = {
      id: user.dataValues.id,
      username: user.dataValues.username,
    };

    const token = generateJWT(authenticatedUser);

    return handleServiceResponse('SUCCESSFUL', { token });
  } catch (error) {
    throw new Error(`Unable to retrieve user data: ${(error as Error).message}`);
  }
};

export default {
  authenticateUser,
};
