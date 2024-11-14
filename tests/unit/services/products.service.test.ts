import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';
import productMock from '../../mocks/product.mock';

describe('Testa productService - create', () => {
  let createStub: SinonStub;

  beforeEach(() => {
    createStub = sinon.stub(ProductModel, 'create');
  });

  afterEach(() => {
    createStub.restore();
  });

  it('Cria um produto com sucesso', async () => {
    interface ProductData {
      id: number;
      name: string;
      price: string;
      orderId: number;
      [key: string]: any;
    }
    const productData: ProductData = productMock.mockProductResponse;
    const sequelizeModel = {
      dataValues: productMock.mockProductResponse,
      get: (attribute: string) => productData[attribute],
      save: () => Promise.resolve(),
    };

    createStub.resolves(sequelizeModel);
    
    const result = await productService.create(productMock.mockProduct);

    expect(result.status).to.equal('CREATED');
    expect(result.data).to.deep.equal(productMock.mockProductResponse);
  });

  it('Retorna um erro na criação do produto', async () => {
    const errorMessage = 'Error message';
    
    createStub.rejects(new Error(errorMessage));

    try {
      await productService.create(productMock.mockProduct);

      expect.fail('Expected an error to be thrown');
    } catch (error) {
      expect((error as Error).message).to.equal(`Error creating the product: ${errorMessage}`);
    }
  });
});

describe('Testa productService - getAll', () => {
  let findAllStub: SinonStub;

  beforeEach(() => {
    findAllStub = sinon.stub(ProductModel, 'findAll');
  });

  afterEach(() => {
    findAllStub.restore();
  });

  it('Retorna a lista de produtos com sucesso', async () => {

    findAllStub.resolves(productMock.mockProductList);

    const result = await productService.getAll();

    expect(result.status).to.equal('SUCCESSFUL');
    expect(result.data).to.deep.equal(productMock.mockProductList);
  });

  it('Retorna um erro ao buscar a lista de produtos', async () => {
    const errorMessage = 'Error message';

    findAllStub.rejects(new Error(errorMessage));

    try {
      await productService.getAll();
      expect.fail('Expected an error to be thrown');
    } catch (error) {
      expect((error as Error).message).to.equal(`Error fetching the product list: ${errorMessage}`);
    }
  });
});
