import express from "express";
import { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/course", (request: Request, response: Response) => {
  const { message } = request.body;

  return response.json({ message });
});

app.listen(3333);
