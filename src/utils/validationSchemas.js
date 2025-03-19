const { isUUID } = require('validator');

function stringValidator(mandatory, length, value) {
  if (value == null) return mandatory;
  else if (typeof value != 'string') return true;
  else if (value.length == 0) return true;
  else if (length != null && value.length > length) return true;
  else return false;
}

const createSchema = [{
  requestKey: 'body',
  keyValidators: {
    title: (value) => stringValidator(true, 255, value),
    body: (value) => stringValidator(true, null, value),
    type: (value) => stringValidator(true, 50, value),
    keywords: (value) => stringValidator(false, 255, value),
    reference: (value) => stringValidator(false, 255, value),
  }
}];

const updateSchema = [{
  requestKey: 'params',
  keyValidators: {
    id: (value) => !isUUID(value, 4),
  }
}, {
  requestKey: 'body',
  keyValidators: {
    title: (value) => stringValidator(false, 255, value),
    body: (value) => stringValidator(false, null, value),
    type: (value) => stringValidator(false, 50, value),
    keywords: (value) => stringValidator(false, 255, value),
    reference: (value) => stringValidator(false, 255, value),
  }
}];

const searchSchema = {
  requestKey: 'query',
  keyValidators: {
    search: (value) => stringValidator(true, 255, value)
  }
};

const deleteSchema = [{
  requestKey: 'params',
  keyValidators: {
    id: (value) => !isUUID(value, 4),
  }
}];

module.exports = {
  createSchema,
  updateSchema,
  searchSchema,
  deleteSchema
}