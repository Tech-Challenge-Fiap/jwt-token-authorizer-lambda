/* eslint-disable prettier/prettier */
import { APIGatewayProxyEvent } from 'aws-lambda';
import { jwtDecode } from 'jwt-decode';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<boolean> => {
    const token = event.headers.Authorization;

    console.log('teste')

    if (!token) {
        return false;
    }

    const decodedToken = jwtDecode<any>(token)
    
    console.log("Teste")
    if (decodedToken && decodedToken.cpf) {
        return true;
      } else {
        return false;
      }
};
