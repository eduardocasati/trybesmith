import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import orderService from '../../../src/services/order.service';

describe('Testa orderService - getAll', () => {
  let findAllStub: SinonStub;

  beforeEach(() => {
    findAllStub = sinon.stub(OrderModel, 'findAll');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Retorna um erro ao buscar a lista de pedidos', async () => {
    const errorMessage = 'Error message';
    
    findAllStub.rejects(new Error(errorMessage));

    try {
      await orderService.getAll();
      
      expect.fail('Expected an error to be thrown.');
    } catch (error) {
      expect((error as Error).message).to.equal(`Error fetching the product list: ${errorMessage}`);
    }
  });
});
