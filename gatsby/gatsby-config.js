// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from "dotenv";
// configure dotenv with current .env file:
dotenv.config({ path: ".env" });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: "The best pizza place in Hamilton!",
    twitter: `@slicksslices`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "7okf7mas",
        dataset: "production",
        watchMode: process.env.NODE_ENV === "development" ? true : false,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
