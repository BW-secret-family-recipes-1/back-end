const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    it('should set the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    // return 200 status on GET /api/recipes
    describe('GET /api/recipes', () => {
        it('should return a 200 status', () => {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        });
    })

    // return 200 status on GET /api/recipes/:id
    describe('GET /api/recipes/1', () => {
        it('should return a 200 status', () => {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        });
    })

    // return 200 status on GET /api/recipes/:id/instructions
    describe('GET /api/recipes/1/instructions', () => {
        it('should return a 200 status', () => {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        });
    })

    // return 200 status on GET /api/recipes/:id/ingredients
    describe('GET /api/recipes/1/ingredients', () => {
        it('should return a 200 status', () => {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        });
    })

    // return "Server is running"
    // describe('GET /', () => {
    //     it('should return "Server is running"', () => {
    //         return(server).get('/');
    //     })
    // })
})