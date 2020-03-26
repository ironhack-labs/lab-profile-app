const asyncController = (controllerPromise, options = {}) => {
  return (req, res, next) => {
    if (options.json) {
      req.setjsonerror = true;
    }
    controllerPromise(req, res, next).catch(e => next(e));
  };
};

module.exports = {
  asyncController
};
