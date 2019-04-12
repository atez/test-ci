const { describe, it } = require("mocha");
const { Application } = require("../dist/app");
const supertest = require("supertest");
const expect = require("chai").expect;
const app  =new Application().app;
const request = supertest(app);

describe("app", function() {
  it("hello world", done => {
    request
      .post("/")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.equal({ msg: "hello world" });
        done();
      });
  });
});
