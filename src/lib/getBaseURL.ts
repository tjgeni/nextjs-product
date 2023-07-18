import { cache } from "react";

export const getBaseUrl = cache(() =>
  process.env.URL_STRING
    ? `https://nextjs-mantap-mania.vercel.app/`
    : `http://localhost:${process.env.PORT ?? 3000}`
);
