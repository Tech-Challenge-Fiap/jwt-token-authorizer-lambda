/* eslint-disable prettier/prettier */
import { APIGatewayProxyEvent } from 'aws-lambda';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<any> => {
    const token = event.headers.Authorization;
    const secretKey = process.env.JWT_SECRET_KEY + "";
    
    if (!token) {
      return {
        isAuthorized: false,
      };
    }

    const verifyResponse = jwt.verify(token, `${secretKey}`, (error: any, decoded: any) => {
      if (error) {
        return {
          isAuthorized: false,
        };
      } else {
        return {
          isAuthorized: true
        };
      }
    });

    return verifyResponse;
};
