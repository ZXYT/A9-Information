import express from "express";
import history from "connect-history-api-fallback";
import path from "path";
import tokenMidWare from "./tokenMidWare";
import errMIdware from "./errMIdware";
import admin from "./api/admin";
import map from "./api/map";
import place from "./api/place";
import event from "./api/event";
import car from "./api/car";
import upload from "./api/upload";
const app = express();

app.use(history());

const StaticRoot = path.resolve(__dirname, "../../public");
const StaticPageRoot = path.resolve(__dirname, "../../public/dist");

app.use(express.static(StaticRoot));
app.use(express.static(StaticPageRoot));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(tokenMidWare);

app.use("/api/admin", admin);
app.use("/api/map", map);
app.use("/api/place", place);
app.use("/api/event", event);
app.use("/api/car", car);
app.use("/api/upload", upload);

app.use(errMIdware);

const port = 8080;
app.listen(port, () => console.log("server start"));
