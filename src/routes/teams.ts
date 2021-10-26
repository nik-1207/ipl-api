import express, {Request, Response} from 'express';
import {getAllTeamData, setAllTeamData} from "../controller/teams";

const teams = express.Router();

teams.get('/', async (_: Request, res: Response) => {
    try {
        const data=await getAllTeamData();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }});

teams.post('/', async (req: Request, res: Response) => {
    const {id, teamName, winningYears, venue} = req.body;
    try {
        res.status(201).send(await setAllTeamData(id, teamName, winningYears, venue));
    } catch(err) {
        res.status(500).send(err);
    }
});
export default teams;