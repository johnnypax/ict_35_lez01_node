const request = require('supertest');
const { app, close } = require('./index');

describe("Test degli endpoint API", () => {

    it("La GET di / dovrebbe restituire Hello World!", async () => {
        const response = await request(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello World!' });
    })

    it("La GET di /client dovrebbe restituire Hello client!", async () => {
        const response = await request(app).get('/client');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello client!' });
    })

    afterAll(() => {
        close();
    })
})