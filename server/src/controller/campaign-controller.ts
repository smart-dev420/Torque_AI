import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
const { v4: uuidv4 } = require('uuid');
import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import config from "../config/config";
import { enums } from "google-ads-api";
dotenv.config({ path: "./.env" });


const getMetrics: RequestHandler = async (req, res) => {
  try {
    const refreshToken = req.body.refresh_token;
    console.log(refreshToken);
    const customer = config.client.Customer({
      // login_customer_id: "2463479895",
      refresh_token: refreshToken,
      customer_id : "2478333258",
    });
    try {
      const campaigns = await customer.report({
        entity: "campaign",
        attributes: [
          "campaign.id",
          "campaign.name",
          "campaign.bidding_strategy_type",
          "campaign_budget.amount_micros",
        ],
        metrics: [
          "metrics.cost_micros",
          "metrics.clicks",
          "metrics.impressions",
          "metrics.all_conversions",
        ],
        constraints: {
          "campaign.status": enums.CampaignStatus.ENABLED,
        },
        limit: 20,
      });

      console.log(campaigns, "------------")
    } catch (error) {
      console.log(error)
    }
    return res.status(StatusCodes.OK).send();
  } catch (error: any) {
    console.log("error: ", error);
    // throw error;
  }
}

const campagins = {
  getMetrics,
};
export default campagins;