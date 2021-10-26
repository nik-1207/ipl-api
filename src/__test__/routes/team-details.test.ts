import app from '../../app';
import request from 'supertest';

jest.mock('../../controller/team-details', () => {
    return {
        getTeamDetails: () => {
            return Promise.resolve("FROM GET TEAM DETAILS");
        },
        setTeamDetails: (id: string, team: string, players: string) => {
            return Promise.resolve({
                id, team, players
            });
        }
    }
});

describe('/teams:id', () => {
    it('GET /teams', async () => {
        await request(app).get('/teams/test-team').then(res => {
            expect(res.status).toStrictEqual(200);
            expect(res.body.data).toBe("FROM GET TEAM DETAILS");
        });
    });
    it('POST /teams', async () => {
        await request(app).post('/teams/test-team').send({
            team: 'test',
            players: 'test'
        }).then((res) => {
            expect(res.status).toStrictEqual(201)
            expect(res.body.data).toStrictEqual({
                id: "test-team",
                team: 'test',
                players: 'test'
            });
        });
    });

});