const chai = require('chai');
const chaihttp= require('chai-http');
const app = require('../index');
chai.use(chaihttp);
chai.should();
describe("Get Orders", () => {
    describe("GET /get-orders", () => {
        // Test to get all order record
        it("should get all order record", (done) => {
             chai.request(app)
                 .get('/get-orders')
                 .end((err, res) => {
                     res.should.have.status(200);
                     //res.body.should.be.a('object');
                     done();
                  });
         });
        });
    });