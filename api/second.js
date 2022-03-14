"use strict";

module.exports.second = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        message:
          "Go Serverless v3.0! Your second function executed successfully!",
      },
      null,
      2
    ),
  };
};
