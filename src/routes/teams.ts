import express, {Request, Response} from 'express';
import {getAllTeamData, setAllTeamData} from "../controller/teams";

const teams = express.Router();

teams.get('/', async (_: Request, res: Response) => {
    try {
        res.status(200).send(await getAllTeamData())
    } catch (err) {
        res.status(500).send("Internal server Error");
    }});

teams.post('/', async (req: Request, res: Response) => {
    const {id, teamName, winningYears, venue} = req.body;
    try {
        res.status(201).send(await setAllTeamData(id, teamName, winningYears, venue));
    } catch {
        res.status(500).send("Internal server error");
    }
});
export default teams