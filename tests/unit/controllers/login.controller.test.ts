import { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import loginController from '../../../src/controllers/login.controller';
import loginService from '../../../src/services/login.service';

describe('Testa loginController', () => {
  let authenticateUserStub: sinon.SinonStub;

  beforeEach(() => {
    authenticateUserStub = sinon.stub(loginService, 'authenticateUser');
  });

  afterEach(() => {
    authenticateUserStub.restore();
  });

  it('Autentica o usuário com sucesso', async () => {
    const req: Partial<Request> = {
      body: { username: 'testuser', password: 'password' },
    };
    const res: Partial<Response> = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    authenticateUserStub.resolves({ status: 'SUCCESSFUL', data: { token: 'mockToken' } });

    await loginController.authenticateUser(req as Request, res as Response);

    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith({ token: 'mockToken' });
  });

  it('Retorna erro interno do servidor', async () => {
    const req: Partial<Request> = {
      body: { username: 'testuser', password: 'password' },
    };
    const res: Partial<Response> = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const error = new Error('Internal Server Error');

    authenticateUserStub.rejects(error);

    await loginController.authenticateUser(req as Request, res as Response);

    expect(res.status).to.be.calledWith(500);
  });
});
