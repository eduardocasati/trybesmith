const mapStatusToHTTPCode = (status: string): number => {
  const httpStatusCodeMap: Record<string, number> = {
    SUCCESSFUL: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
  };

  return httpStatusCodeMap[status] || 500;
};

export = mapStatusToHTTPCode;
