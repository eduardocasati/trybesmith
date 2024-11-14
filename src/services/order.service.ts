import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderWithProductIds } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';
import handleServiceResponse from '../utils/formatResponse';

const getAll = async (): Promise<ServiceResponse<OrderWithProductIds[]>> => {
  try {
    const orderList = await OrderModel.findAll({
      include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] },
      ],
    });

    const formattedOrderList = orderList.map((order) => ({
      id: order.dataValues.id,
      userId: order.dataValues.userId,
      productIds: order.dataValues.productIds?.map((product) => product.id) || [],
    }));
  
    return handleServiceResponse('SUCCESSFUL', formattedOrderList);
  } catch (error) {
    throw new Error(`Error fetching the product list: ${(error as Error).message}`);
  }
};

export default {
  getAll,
};
