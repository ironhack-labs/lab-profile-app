const error = (err, req, res) => {
  console.error("ERROR", req.method, req.path, err);
  if (!res.headersSent)
    res.status(500).json({ status: "ServerError", message: err });
};

const notFound = (req, res) => {
  res.status(404).json({ status: "NotFound" });
};

module.exports = {
  error,
  notFound
};
