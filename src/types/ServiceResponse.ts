type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string },
};

export type ServiceResponseSuccessful<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T,
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccessful<T>;
