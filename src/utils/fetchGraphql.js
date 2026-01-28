import AsyncStorage from "@react-native-async-storage/async-storage";
import { getValue } from '../utils/localStorage';

// utils/fetchGraphQL.js
const API_URL = "https://qhvm3e-ny.myshopify.com/api/2026-01/graphql.json";
const HEADERS = {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": "4f4f46fe0a14322930e2c2148d0c25f3",
};

// JavaScript version
export const fetchGraphQL = async (query, variables) => {
    // const language = (await getValue('language')) || 'en';

    // console.log("Selected language:", language);

    const language = 'en';

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                ...HEADERS,
                "Accept-Language": language,
            },
            body: JSON.stringify({ query, variables }),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data from Shopify GraphQL API:", error);
        throw error;
    }
};
