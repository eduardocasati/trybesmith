import { Request, Response } from 'express';
import orderService from '../services/order.service';
import handleInternalServerError from '../utils/errorHandler';
import mapStatusToHTTPCode from '../utils/httpStatusMap';

const getAll = async (_req: Request, res: Response) => {
  try {
    const { status, data } = await orderService.getAll();

    const httpStatusCode = mapStatusToHTTPCode(status);
    return res.status(httpStatusCode).json(data);
  } catch (error) {
    handleInternalServerError(res, error as Error);
  }
};

export default {
  getAll,
};
