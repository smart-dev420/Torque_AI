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
                impressions: item.metrics.impressions,
                clicks: item.metrics.clicks,
                conversions: item.metrics.conversions,
                ctr: item.metrics.interaction_rate,
                cpa: cpa,
            }
            return list;
        });



        // fetchKeywordPerformance(customer);
        fetchAudience(customer);
        return res.status(StatusCodes.OK).send();
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

const fetchAudience = async (customer : any) => {

    const query = `
    SELECT
        segments.date,
        segments.hour,
        ad_group_criterion.age_range.type
        metrics.impressions,
        metrics.clicks,
        metrics.cost_micros
    FROM
        age_range_view
    WHERE
        segments.date DURING LAST_7_DAYS
    ORDER BY
        segments.date, segments.hour
`;

    try {
        const response = await customer.query(query);
        console.log(response);

        // // Initialize arrays
        // const dailyData: { date: any; impressions: any[]; }[] = [];
        // const ageRanges = ['AGE_RANGE_25_34', 'AGE_RANGE_35_44', 'AGE_RANGE_45_54', 'AGE_RANGE_55_64', 'AGE_RANGE_65_UP'];
        // const impressionsArray = Array(ageRanges.length).fill(0).map(() => Array(24).fill(0)); // 24 hours in a day

        // // Process the response
        // response.forEach((row: any) => {
        //     const date = row.segments.date;
        //     const hour = row.segments.hour;
        //     const ageRangeIndex = ageRanges.indexOf(row.ad_group_criterion.age_range);
        //     const impressions = parseInt(row.metrics.impressions, 10);

        //     // Fill the daily data structure
        //     if (!dailyData.some(d => d.date === date)) {
        //         dailyData.push({ date, impressions: Array(24).fill(0) }); // 24 hours
        //     }

        //     // Add impressions to the corresponding hour in daily data
        //     const dailyEntry = dailyData.find(d => d.date === date);
    
        //     // Ensure dailyEntry is defined before trying to assign
        //     if (dailyEntry) {
        //         dailyEntry.impressions[hour] += impressions;
        
        //         // Add impressions to the impressions array for 3-hour intervals
        //         if (ageRangeIndex !== -1) {
        //             impressionsArray[ageRangeIndex][hour] += impressions;
        //         }
        //     }
        // });

        // console.log("Daily Data:", dailyData);
        // console.log("Impressions by Age Ranges:", impressionsArray);
        
    } catch (error) {
        console.error("Error fetching audience insights:", error);
    }
}
async function fetchKeywordPerformance(customer: any) {
    try {
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
        const keywords = list.map((row : any) => {
            return row.ad_group_criterion.keyword.text;
        });
        const ideasService = customer.keywordPlanIdeaService;
        console.log(ideasService)
        try {
            const response = await customer.keywordPlanIdeas.generateKeywordIdeas({
                keywordPlanNetwork: 'GOOGLE_SEARCH',
                keywords: keywords,
            });
            console.log("Keyword Ideas Response:", response);
        } catch (error) {
            console.error("Error fetching keyword ideas:", error);
        }
        // response.map((idea: any) => {
        //     const keyword = idea.text.value;
        //     const searchVolume = idea.avgMonthlySearches.value; // Monthly search volume
        //     const competition = idea.competition.value; // Competition level

        //     console.log(`Keyword: ${keyword}, Search Volume: ${searchVolume}/month, Competition: ${competition}`);
        // });
    } catch (error) {
        console.error('Error fetching keyword performance data:', error);
    }
}

const analytics = {
    getMetrics,
};
export default analytics;