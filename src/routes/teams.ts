import express, {Request, Response} from 'express';
import {getAllTeamData, setAllTeamData} from "../controller/teams";

const teams = express.Router();

teams.get('/', async (_: Request, res: Response) => {

    try {
        const data=await getAllTeamData();
        res.status(200).send({data});
    } catch (err:any) {
        res.status(500).send(err.message);
    }});

teams.post('/', async (req: Request, res: Response) => {
    const {id, teamName, winningYears, venue} = req.body;
    try {
        const data=await setAllTeamData(id, teamName, winningYears, venue)
        res.status(201).send({data});
    } catch(err:any) {
        res.status(500).send(err.message);
    }
});
export default teams;