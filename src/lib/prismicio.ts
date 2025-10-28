import * as prismic from "@prismicio/client";

export const repositoryName = "pizza4real";

export const client = prismic.createClient(repositoryName, {});
