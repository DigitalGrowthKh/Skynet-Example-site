import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "unconfigured",
    instagramProfile: "https://www.instagram.com/skynet.uk/",
    facebookPage: "https://www.facebook.com/SkyNetWorldwideExpressUK",
  });
}