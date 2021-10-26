import app from '../../app';
import request from 'supertest';

const mockTeamData = {
    id: 'test',
    teamName: 'test',
    winningYears: [0, 1, 2, 3],
    venue: 'test'
}
jest.mock('../../controller/teams', () => {
    return {
        getAllTeamData: () => {
            return Promise.resolve("FROM GET ALL TEAM DATA")
        },
        setAllTeamData: (id: string, teamName: string, winningYears: Array<number>, venue: string) => {
            return Promise.resolve({
                id, teamName, winningYears, venue
            });
        }
    }
});

describe('/teams', () => {
    it('GET /teams', async () => {
        await request(app).get('/teams').then(res => {
            expect(res.status).toStrictEqual(200);
            expect(res.body.data).toBe("FROM GET ALL TEAM DATA");
        });
    });
    it('POST /teams', async () => {
        await request(app).post('/teams').send({
            id: 'test',
            teamName: 'test',
            winningYears: [0, 1, 2, 3],
            venue: 'test'
        }).then((res) => {
                expect(res.status).toStrictEqual(201);
                expect(res.body.data).toEqual({
                    id: 'test',
                    teamName: 'test',
                    winningYears: [0, 1, 2, 3],
                    venue: 'test'
                });
            });
    });
});
