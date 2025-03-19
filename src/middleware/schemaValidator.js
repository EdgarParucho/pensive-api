function noteSchemaValidator(schemas) {

  return (req, res, next) => {
  
    for (let schema of schemas) {
      const { requestKey, keyValidators } = schema;
      const payload = req[requestKey];

      const requestKeys = Object.keys(keyValidators);
      for (let key of requestKeys) {
        const payloadValue = payload[key];
        const keyValidator = keyValidators[key];
        const wrongValue = keyValidator(payloadValue);
        if (wrongValue) return res.sendStatus(400);
      }

      const payloadKeys = Object.keys(payload);
      for (let key of payloadKeys) {
        const keyIsNotExpected = (key) => !requestKeys.includes(key);
        if (keyIsNotExpected(key)) return res.sendStatus(409);
      }

      if (requestKey == 'body' && payloadKeys.length == 0) return res.sendStatus(400);

    }

    next();
  };
}

function searchSchemaValidator(schema)  {
  return (req, res, next) => {
    const { requestKey, keyValidators } = schema;
    const payload = req[requestKey];
    const requestKeys = Object.keys(keyValidators);

    for (let key of requestKeys) {
      const payloadValue = payload.search;
      const keyValidator = keyValidators.search;
      const wrongValue = keyValidator(payloadValue);
      if (wrongValue) return res.sendStatus(400);
    }

    const payloadKeys = Object.keys(payload);
    for (let key of payloadKeys) {
      const keyIsNotExpected = (key) => !requestKeys.includes(key);
      if (keyIsNotExpected(key)) return res.sendStatus(409);
    }
    next()
  }
}

module.exports = {
  noteSchemaValidator,
  searchSchemaValidator
}