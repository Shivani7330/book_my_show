import dbConnects from "./db/index.js";
import app from "./app.js";

dbConnects()
  .then(() => {
    app.listen(process.env.PORT || 10000),
      () => {
        console.log("server is listening at port", process.env.PORT);
      };
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);
  });
