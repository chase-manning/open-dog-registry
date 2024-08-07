const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const REPO = "chase-manning/open-dog-registry";
const DATA_URL = `https://raw.githubusercontent.com/${REPO}/main/data/v1.json`;

exports.helloWorld = onRequest(async (request, response) => {
  try {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    response.status(200).send({ status: "success", data });
  } catch (error) {
    logger.error(error);
    response.status(500).send({ status: "error", error });
  }
});
