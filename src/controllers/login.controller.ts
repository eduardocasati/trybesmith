import { Request, Response } from 'express';
import loginService from '../services/login.service';
import handleInternalServerError from '../utils/errorHandler';
import mapStatusToHTTPCode from '../utils/httpStatusMap';

const authenticateUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const { status, data } = await loginService.authenticateUser(username, password);

    const httpStatusCode = mapStatusToHTTPCode(status);
    return res.status(httpStatusCode).json(data);
  } catch (error) {
    handleInternalServerError(res, error as Error);
  }
};

export default {
  authenticateUser,
};
