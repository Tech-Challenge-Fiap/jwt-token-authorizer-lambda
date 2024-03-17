/* eslint-disable prettier/prettier */
import { APIGatewayProxyEvent } from 'aws-lambda';
import { jwtDecode } from 'jwt-decode';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<boolean> => {
    const token = event.headers.Authorization;

    if (!token) {
        return false;
    }

    const decodedToken = jwtDecode<any>(token)
    
    
    if (decodedToken && decodedToken.cpf) {
        return true;
      } else {
        return false;
      }
};