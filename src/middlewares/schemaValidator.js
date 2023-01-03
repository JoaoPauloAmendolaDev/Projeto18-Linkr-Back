export function validateSchema(schema) {
    return (req, res, next) => { 
      console.log(req.body)
      const {error} = schema.validate(req.body, {abortEarly: false});
      if (error) {
        return res.status(422).send(error.details.map(detail => detail.message));
      }
  
      res.locals = req.body
      next();
    }
  }