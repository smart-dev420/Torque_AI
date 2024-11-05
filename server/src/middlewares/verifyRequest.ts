import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

// export const existIDRequest: RequestHandler = (req, res, next) => {
//   const id = req.query.id;
//   if (isEmpty(id)) {
//     logger.error("existIDRequest : Request has no address!");
//     return res
//       .status(StatusCodes.BAD_REQUEST)
//       .json({ msg: "身分証明書なし!" }); // No ID
//   } else {
//     if(id?.length != 24){
//       logger.error("Invalid ID!"); //
//       return res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ msg: "IDの検証に失敗しました" }); // ID validation failed
//     }else{
//       next();
//     }
//   }
// };
