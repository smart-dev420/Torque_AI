import apiRoute from "./api.route";

export default function setupRoute(app: any) {
  app.use("/api", apiRoute);
}
