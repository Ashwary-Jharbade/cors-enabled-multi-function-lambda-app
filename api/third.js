"use strict";

module.exports.third = async (event) => {
  const queryParams = event.queryStringParameters;
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        message: "Post method successfully executed",
        ...queryParams,
      },
      null,
      2
    ),
  };
};
