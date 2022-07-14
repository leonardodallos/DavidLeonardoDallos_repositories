import { Request, Response, NextFunction } from "express";
import { CustomError } from "../commons/errors/customError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ errors: err.serializeErrors() })
  } else {
    res.status(500).send("Something went wrong: " + err.message)
  }
};