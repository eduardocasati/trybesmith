import { Response } from 'express';

const handleInternalServerError = (res: Response, error: Error): Response => {
  console.error(error);

  const errorMessage = error.message 
    || 'An internal server error occurred. Please try again later.';
  
  return res.status(500).json({
    error: true,
    message: errorMessage,
  });
};

export default handleInternalServerError;
