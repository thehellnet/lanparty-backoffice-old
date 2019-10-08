function _getStatusMessage(status) {
  let message = "";
  switch (status) {
    case 200:
      message = "All done. Request successfully executed";
      break;
    case 201:
      message = "Data successfully created";
      break;
    case 400:
      message = "Bad Request";
      break;
    case 401:
      message = "Need auth";
      break;
    case 404:
      message = "Not found";
      break;
    case 503:
      message = "Service Unavailable";
      break;
    default:
      message = "Something wrong. Client default error message";
      break;
  }
  return message;
}

function _getResponseErrorMessage(error) {
  if (
    error.response &&
    !!error.response.data &&
    Object.keys(error.response.data).length > 0
  ) {
    return error.response.data.description;
  }
  if (error.response && error.response.statusText) {
    return error.response.statusText;
  }
  if (error.message) {
    return error.message;
  }
  return "_getResponseErrorMessage can't handle error";
}

export class ResponseWrapper {
  constructor(response, data = {}, message) {
    this.data = data;
    this.success = response.data.success;
    this.status = response.status;
    this.statusMessage = _getStatusMessage(this.status);
    this.message = message || null;
  }
}

export class ErrorWrapper extends Error {
  constructor(error, message) {
    super();
    this.name = "ErrorWrapper";
    this.stack = new Error().stack;
    this.success = error.response ? error.response.data.success : false;
    this.status = error.response ? error.response.status : false;
    this.statusMessage = _getStatusMessage(this.status);
    this.message = message || _getResponseErrorMessage(error);
  }
}
