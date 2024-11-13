import { Router } from "express";
import campagins from "../controller/campaign-controller";
import analytics from "../controller/analytics-controller";
const apiRoute = Router();

/************************************************************/
/**************************   GET   *************************/
/************************************************************/

// apiRoute.get("/chat/:file",                                       getData)

/************************************************************/
/**************************   POST  *************************/
/************************************************************/

apiRoute.post("/dashboard",                campagins.getMetrics);
apiRoute.post("/campaigns",                campagins.getMetrics);
apiRoute.post("/strategies",                campagins.getMetrics);
apiRoute.post("/creatives",                campagins.getMetrics);
apiRoute.post("/analytics",                analytics.getMetrics);
apiRoute.post("/reports",                campagins.getMetrics);


export default apiRoute;
