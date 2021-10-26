import express, {Request, Response} from 'express';
import {getTeamDetails, setTeamDetails} from '../controller/team-details';

const teamDetails = express.Router();

teamDetails.get('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const data=await getTeamDetails(id)
        res.status(200).send(data);
    } catch (err:any) {
        res.status(404).send(err.message);
    }
});

teamDetails.post('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    const {team, players} = req.body;
    try {
        const data=await setTeamDetails(id, team, players);
        res.status(201).send(data);
    } catch(err:any) {
        res.status(500).send(err.message);
    }
});

export default teamDetails