import express, { type Request, type Response } from "express";
enum StatusCode {
  Success = 200,
  Unauthorized = 403,
  Error = 500,
}

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.status(StatusCode.Error).json();
});
