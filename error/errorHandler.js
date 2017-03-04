var util = require('util');

var MESSAGES = {
    PATH_NOT_FOUND: 'Path Not Found',
    INVALID_PARAMETER: 'Invalid Parameter',
    INVALID_ACCESS: 'Invalid Access',
    INTERNAL_SERVER_ERROR: 'Internal Server Error'
};

var STATUS = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

function APIError(message, status) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.name || 'APIError';
    this.message = message || MESSAGES.INTERNAL_SERVER_ERROR;
    this.status = status || STATUS.INTERNAL_SERVER_ERROR;
}

util.inherits(APIError, Error);

APIError.prototype.toString = function() {
    var m = this.message;
    m += ' (status: ' + this.status + ')';
    return m;
};

function InvalidParameterError(message, status) {
    this.name = 'InvalidParameterError';
    message = message || MESSAGES.INVALID_PARAMETER;
    status = status || STATUS.BAD_REQUEST;
    APIError.apply(this, [message, status]);
}

util.inherits(InvalidParameterError, APIError);

function PathNotFoundError(message, status) {
    this.name = 'PathNotFoundError';
    message = message || MESSAGES.PATH_NOT_FOUND;
    status = status || STATUS.NOT_FOUND;
    APIError.apply(this, [message, status]);
}

util.inherits(PathNotFoundError, APIError);

exports.APIError = APIError;
exports.InvalidParameterError = InvalidParameterError;
exports.PathNotFoundError = PathNotFoundError;

exports.handleError = function (err, req, res, next) {

    if (!err) {
        err = new APIError(INVALID_ACCESS);
    }

    var status = err.status || STATUS.INTERNAL_SERVER_ERROR;
    return res.status(status).json(err);
};

exports.handleCheckedError = function (err, res) {
    return exports.handleError(err, null, res);
};
