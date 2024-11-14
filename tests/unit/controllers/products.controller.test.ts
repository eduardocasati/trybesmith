import { expect } from 'chai';
import { Request, Response } from 'express';
import sinon, { SinonStub } from 'sinon';
import productController from '../../../src/controllers/product.controller';
import productService from '../../../src/services/product.service';
import productMock from '../../mocks/product.mock';

describe('Testa productController - create', () => {
  let createStub: SinonStub;
  let res: Partial<Response>;

  beforeEach(() => {
    createStub = sinon.stub(productService, 'create');
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
  });

  afterEach(() => {
    createStub.restore();
  });

  it('Cria um produto com sucesso', async () => {
    const req: Partial<Request> = {
      body: productMock.mockProduct,
    };

    createStub.resolves({ status: 'CREATED', data: productMock.mockProductResponse });

    await productController.create(req as Request, res as Response);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWithMatch(productMock.mockProductResponse);
  });

  it('Retorna erro interno do servidor', async () => {
    const req: Partial<Request> = {
      body: productMock.mockProduct,
    };

    const errorMessage = 'An internal server error occurred. Please try again later.';
    
    createStub.rejects(new Error(errorMessage));

    await productController.create(req as Request, res as Response);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWithMatch({ error: true, message: errorMessage, });
  });
});

describe('Testa productController - getAll', () => {
  let getAllStub: SinonStub;
  let res: Partial<Response>;

  beforeEach(() => {
    getAllStub = sinon.stub(productService, 'getAll');
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
  });

  afterEach(() => {
    getAllStub.restore();
  });

  it('Retorna todos os produtos com sucesso', async () => {
    const data = [productMock.mockProductResponse];

    getAllStub.resolves({ status: 'SUCCESSFUL', data });

    await productController.getAll({} as Request, res as Response);
    
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(data);
  });

  it('Retorna erro interno do servidor', async () => {
    const errorMessage = 'An internal server error occurred. Please try again later.';
    
    getAllStub.rejects(new Error(errorMessage));

    await productController.getAll({} as Request, res as Response);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWithMatch({ error: true, message: errorMessage });
  });
});
