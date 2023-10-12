"use server"

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl:string) {
  if(!productUrl) return;

  try {
    const scrapedProduct = await scrapeAmazonProduct(productUrl)
  } catch (error: any) {
    throw new Error(`Falied to create/update the product: ${error.message}`)
  }
}