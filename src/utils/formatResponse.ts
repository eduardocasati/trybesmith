import { ServiceResponse } from '../types/ServiceResponse';

const handleServiceResponse = <T>(
  status: 'SUCCESSFUL' | 'CREATED',
  result: T,
): ServiceResponse<T> => ({
    status,
    data: result,
  });

export default handleServiceResponse;
