const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

if (!(GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET)) {
  throw new Error("missing/invalid google oauth credentials");
}

const googleConfig = {
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
};

export default googleConfig;
