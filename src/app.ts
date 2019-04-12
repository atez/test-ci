import * as express from "express";
import * as bodyParser from "body-parser";

export class Application {
  constructor() {
    this.init();
  }

  public app: express.Application = express();

  public init(){
    this.app.bind(this.app).use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.all("*", (req, res) => {
      return res.send({ msg: "hello world" });
    });
  }

  public start() {
    const server = require("http").createServer(this.app);
    let siteUrl = "http://127.0.0.1:3000";
    server.listen(3000, () => {
      console.log(`server start，visit ${siteUrl}`);
    });
  }
}


