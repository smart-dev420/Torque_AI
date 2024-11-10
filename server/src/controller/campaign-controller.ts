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
    const customer = config.client.Customer({
      refresh_token: refreshToken,
      customer_id: process.env.CUSTOMER_ID!,
    });


    const performMetrics = await perfromMetrics(customer);
    const perfrom = performMetrics.map((item: any) => {
      const costMicros = item.campaign.cost_micros;
      const conversions = item.campaign.conversions;

      // Calculate CPA
      const totalCost = costMicros / 1_000_000; // Convert micros to currency
      const cpa = conversions > 0 ? totalCost / conversions : 0;
      const list = {
        id: item.campaign?.id,
        name : item.campaign?.name,
        impressions: item.metrics.impressions,
        clicks: item.metrics.clicks,
        conversions: item.metrics.conversions,
        ctr: item.metrics.interaction_rate,
        cpa: cpa,
      }
      return list;
    });
    const result = {
      perform :perfrom,
  }
  return res.status(StatusCodes.OK).send(result);
  } catch (error: any) {
    console.log("error: ", error);
    // throw error;
  }
}

const perfromMetrics = async (customer: any) => {
  try {
      const campaigns = await customer.query(`
          SELECT 
              campaign.id, 
              campaign.name,
              metrics.cost_micros,
              metrics.clicks,
              metrics.impressions,
              metrics.conversions,
              metrics.interaction_rate
          FROM 
              campaign
          WHERE
              campaign.status = "ENABLED"
          LIMIT 20
      `);

      return campaigns;
  } catch (error) {
      console.log("error: ", error);
      // throw error;
  }
}

const campagins = {
  getMetrics,
};
export default campagins;