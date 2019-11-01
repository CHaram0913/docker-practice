const generateQueryString = queryParams => {
  let queryString = '?';

  Object.keys(queryParams).forEach(key => {
    queryString = queryString + `${key}=${queryParams[key]}&`;
  });

  return queryString;
};

const generateRequestUrl = (route, queryParams) => {
  if (queryParams)
    return process.env.REACT_APP_API_ENDPOINT_DEVELOPMENT + route + generateQueryString(queryParams);
  else
    return process.env.REACT_APP_API_ENDPOINT_DEVELOPMENT + route;
};

const formatRequestHeaders = headerOptions => {
  return {
    'Access-Control-Allow-Origin': '*',
  };
};

export const request = async (requestOptions = {}) => {
  // validate request options

  /**
   * requestOptions = {
   *   route: '',
   *   method: '',
   *   headers: {},
   *   query: {},
   *   body: {},
   *
   * }
   */

  const res = await fetch(
    generateRequestUrl(requestOptions.route, requestOptions.query),
    {
      method: requestOptions.method,
      headers: formatRequestHeaders(requestOptions.headers),
      ...(requestOptions.body && {
        body: requestOptions.body,
      }),
    },
  );

  return await res.json();
};
