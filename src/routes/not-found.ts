import express, {Request, Response} from "express";

const notFound = express.Router();

notFound.get('/', (_: Request, res: Response) => {
    res.status(404).send("NOT FOUND");
})
export default notFound;