import bcrypt from 'bcryptjs';
import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import loginService from '../../../src/services/login.service';

describe('Testa loginService', () => {
  let findOneStub: sinon.SinonStub;

  beforeEach(() => {
    findOneStub = sinon.stub(UserModel, 'findOne');
  });

  afterEach(() => {
    findOneStub.restore();
  });

  it('Retorna status UNAUTHORIZED quando o usuário não é encontrado', async () => {
    findOneStub.resolves(null);

    const result = await loginService.authenticateUser('nonexistentuser', 'password');

    expect(result).to.deep.equal({
      status: 'UNAUTHORIZED',
      data: { message: 'Username or password invalid' },
    });
  });

  it('Retorna status UNAUTHORIZED quando o password está incorreto', async () => {
    const mockUser = {
      id: 1,
      username: 'testuser',
      password: bcrypt.hashSync('password', 10),
    };

    findOneStub.resolves({ dataValues: mockUser });

    const result = await loginService.authenticateUser('testuser', 'wrongpassword');

    expect(result).to.deep.equal({
      status: 'UNAUTHORIZED',
      data: { message: 'Username or password invalid' },
    });
  });

  it('Retorna um erro ao consultar o banco de dados', async () => {
    const errorMessage = 'Error message';

    findOneStub.rejects(new Error(errorMessage));

    try {
      await loginService.authenticateUser('testuser', 'password');
      
      expect.fail('Expected an error to be thrown');
    } catch (error) {
      expect((error as Error).message).to.equal(`Unable to retrieve user data: ${errorMessage}`);
    }
  });
});
