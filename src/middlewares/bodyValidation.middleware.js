const validateBody = (schema) => (req, res, next) => {
    const rb = req.body;
    const errors = []
    const schemaErrors = schema.validate(rb).error?.details;
    if (schemaErrors) {
      schemaErrors.forEach((element) => {
          const error = {}
          error.path = element.path[0];
          error.message = element.message;
          errors.push(error);
        });
      res.status(400).send(errors);
      return;
    }
    next();
  };
  
  module.exports = {
    validateBody,
  };
  