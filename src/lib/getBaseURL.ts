export const getBaseUrl = () =>
  process.env.VERCEL_URL
    ? `https://nextjs-mantap-mania.vercel.app`
    : `http://localhost:3000}`;
