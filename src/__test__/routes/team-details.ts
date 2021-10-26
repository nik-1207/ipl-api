import app from '../../app';
import request from 'supertest';

jest.mock('../../controller/team-details', () => {
    return {
        getTeamDetails: () => {
            return Promise.resolve("hello")
        },
        setTeamDetails: (id: string, teamName: string, winningYears: Array<number>, venue: string) => {
            return Promise.resolve("hello")
        }
    }
});

describe('/teams', () => {
    it('GET /teams', async () => {
        await request(app).get('/teams').then(res => {
            expect(res.status).toStrictEqual(200)
            expect(res.body.data).toBe("hello");
        });
    });
    it('POST /teams', async () => {
        await request(app).post('/teams').send({data: 'test data'})
            .then((res) => {
                expect(res.status).toStrictEqual(201)
                expect(res.body.data).toBe("hello");
            })
    });

});
