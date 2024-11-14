import ProductModel, {
  ProductInputtableTypes, ProductSequelizeModel,
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import handleServiceResponse from '../utils/formatResponse';

const create = async (productInput: ProductInputtableTypes): Promise<ServiceResponse<Product>> => {
  try {
    const product = await ProductModel.create(productInput);
    
    return handleServiceResponse('CREATED', product.dataValues);
  } catch (error) {
    throw new Error(`Error creating the product: ${(error as Error).message}`);
  }
};

const getAll = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  try {
    const productList = await ProductModel.findAll();

    return handleServiceResponse('SUCCESSFUL', productList);
  } catch (error) {
    throw new Error(`Error fetching the product list: ${(error as Error).message}`);
  }
};

export default {
  create,
  getAll,
};
