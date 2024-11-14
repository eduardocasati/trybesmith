import chai, { expect } from "chai";
import { Request, Response } from "express";
import sinon, { SinonStub } from "sinon";
import sinonChai from "sinon-chai";
import orderController from "../../../src/controllers/order.controller";
import orderService from "../../../src/services/order.service";
import orderMock from "../../mocks/order.mock";

chai.use(sinonChai);

describe('Testa orderController - getAll', () => {
  let getAllStub: SinonStub;
  let res: Partial<Response>;
  let statusStub: SinonStub;
  let jsonStub: SinonStub;

  beforeEach(() => {
    getAllStub = sinon.stub(orderService, 'getAll');
    statusStub = sinon.stub();
    jsonStub = sinon.stub();
    res = {
      status: statusStub.returnsThis(),
      json: jsonStub,
    };
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Retorna todos os pedidos com sucesso', async () => {
    const req: Partial<Request> = {};

    getAllStub.resolves({ status: 'SUCCESSFUL', data: orderMock.mockOrderList });

    await orderController.getAll(req as Request, res as Response);

    expect(statusStub.calledWith(200)).to.be.true;
    expect(jsonStub.calledWith(orderMock.mockOrderList)).to.be.true;
  });

  it('Retorna erro interno do servidor', async () => {
    const req: Partial<Request> = {};
    const error = new Error('Internal Server Error');
    
    getAllStub.rejects(error);

    await orderController.getAll(req as Request, res as Response);

    expect(statusStub.calledWith(500)).to.be.true;
  });
});
