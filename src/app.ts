import express from 'express'
import swaggerUI from 'swagger-ui-express';
import {logger} from './logger/logger'
import Teams from './routes/teams';
import TeamDetails from './routes/team-details';
import NotFound from './routes/not-found';
import specs from './swagger.json'

const app = express();

app.use(express.json());
// app.use(logger);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use('/teams', Teams);
app.use('/teams', TeamDetails);
app.use("*",NotFound);

export default app;