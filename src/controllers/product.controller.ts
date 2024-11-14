import { Request, Response } from 'express';
import productService from '../services/product.service';
import { Product } from '../types/Product';
import handleInternalServerError from '../utils/errorHandler';
import mapStatusToHTTPCode from '../utils/httpStatusMap';

const create = async (req: Request, res: Response) => {
  try {
    const productData = req.body as Product;
    const { status, data } = await productService.create(productData);

    const httpStatusCode = mapStatusToHTTPCode(status);
    return res.status(httpStatusCode).json(data);
  } catch (error) {
    handleInternalServerError(res, error as Error);
  }
};

const getAll = async (_req: Request, res: Response) => {
  try {
    const { status, data } = await productService.getAll();

    const httpStatusCode = mapStatusToHTTPCode(status);
    return res.status(httpStatusCode).json(data);
  } catch (error) {
    handleInternalServerError(res, error as Error);
  }
};

export default {
  create,
  getAll,
};
