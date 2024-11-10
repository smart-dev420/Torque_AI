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

        // fetch campaign metrics from google ads
        const performMetrics = await perfromMetrics(customer);
        const perfrom = performMetrics.map((item: any) => {
            const costMicros = item.campaign.cost_micros;
            const conversions = item.campaign.conversions;

            // Calculate CPA
            const totalCost = costMicros / 1_000_000; // Convert micros to currency
            const cpa = conversions > 0 ? totalCost / conversions : 0;
            const list = {
                id: item.campaign?.id,
                impressions: item.metrics.impressions,
                clicks: item.metrics.clicks,
                conversions: item.metrics.conversions,
                ctr: item.metrics.interaction_rate,
                cpa: cpa,
            }
            return list;
        });
        // fetch keyword metrics from google ads
        // fetchKeywordPerformance(customer);

        // fetch audience metrics from google ads
        const audience = await fetchAudience(customer);

        const result = {
            perform: perfrom,
            audience: audience
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

const fetchAudience = async (customer: any) => {
    // $query = 'SELECT campaign.id, ad_group_criterion.age_range.type,ad_group.id,metrics.clicks,metrics.ctr,metrics.impressions,segments.ad_network_type,segments.device, ad_group.name FROM age_range_view';

    const query = `
        SELECT
            segments.date,
            ad_group_criterion.age_range.type,
            metrics.impressions,
            metrics.clicks,
            metrics.cost_micros,
            age_range_view.resource_name
        FROM
            age_range_view
        WHERE
             segments.date DURING LAST_7_DAYS
    `;

    try {
        const response = await customer.query(query);
        const formattedData: any[] = [];
        let currentDate = '';
        response.map((row: any) => {
            const date = row.segments.date;
            const ageRangeName = row.ad_group_criterion.age_range.type;

            const impressions = row.metrics.impressions;

            // Check if we are still on the same date
            if (currentDate !== date) {
                // Push the new date entry
                currentDate = date;
                formattedData.push({
                    date: currentDate,
                    age_ranges: []
                });
            }

            // Find the last entry for the current date
            const lastEntry = formattedData[formattedData.length - 1];

            // Add or update the age range data
            lastEntry.age_ranges.push({
                age_range: ageRangeName,
                impression: impressions
            });
        });

        // Output the formatted data
        return formattedData;

    } catch (error) {
        console.error("Error fetching audience insights:", error);
    }
}
async function fetchKeywordPerformance(customer: any) {
    const query = `
            SELECT
                keyword_view.resource_name,
                ad_group_criterion.criterion_id,
                ad_group_criterion.keyword.text,
                ad_group_criterion.keyword.match_type
            FROM
                keyword_view
            WHERE
                ad_group_criterion.status = 'ENABLED'
        `;

    const list = await customer.query(query);
    const keywords = list.map((row: any) => {
        return row.ad_group_criterion.keyword.text;
    });
}

const analytics = {
    getMetrics,
};
export default analytics;