import { NextFunction, Request, Response } from 'express';

export const productNameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: '"name" is required',
    });
  }

  if (typeof name !== 'string') {
    return res.status(422).json({
      message: '"name" must be a string',
    });
  }

  if (typeof name !== 'string' || name.length < 3) {
    return res.status(422).json({
      message: '"name" length must be at least 3 characters long',
    });
  }

  next();
};

export const productPriceValidation = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;

  if (!price) {
    return res.status(400).json({
      message: '"price" is required',
    });
  }

  if (typeof price !== 'string') {
    return res.status(422).json({
      message: '"price" must be a string',
    });
  }

  if (typeof price !== 'string' || price.length < 3) {
    return res.status(422).json({
      message: '"price" length must be at least 3 characters long',
    });
  }

  next();
};
