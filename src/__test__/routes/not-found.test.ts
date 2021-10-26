import app from '../../app';
import request from 'supertest';
describe('Not Found on wrong path', ()=>{
    it('GET /te',async ()=>{
        await request(app).get('/').then((data)=>{
            expect(data.status).toStrictEqual(404);
            expect(data.body.message).toStrictEqual('Not Found');
        });
    });

});