const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const cors = require("cors");

const corsFunc = cors({ origin: true });

const REPO = "chase-manning/open-dog-registry";
const DATA_URL = `https://raw.githubusercontent.com/${REPO}/main/data/v1.json`;

exports.v1 = onRequest(async (request, response) => {
  corsFunc(request, response, async () => {
    try {
      const res = await fetch(DATA_URL);
      const data = await res.json();
      response.status(200).send({ status: "success", data });
    } catch (error) {
      logger.error(error);
      response.status(500).send({ status: "error", error });
    }
  });
});
