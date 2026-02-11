const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetails = err.extraDetails || "Error from the Backend";

  console.error("Full Error:", err);
  console.error(
    `[${req.method}]  ${req.path} >> StatusCode:: ${status}, Message:: ${message}`
  );

  return res.status(status).json({ message, extraDetails });
};

export { errorMiddleware };