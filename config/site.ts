import { APP_NAME, APP_DESCRIPTION } from "@/constants";

export const siteConfig = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    instagram: "https://instagram.com",
    github: "https://github.com",
  },
  creator: {
    name: "Your Name",
    url: "https://yourwebsite.com",
  },
};

export type SiteConfig = typeof siteConfig;
