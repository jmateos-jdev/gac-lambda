import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler} from "aws-lambda";
import * as _ from "lodash";

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
    const randomNumber = _.random(50);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `El número aleatorio es ${randomNumber}` }),
    };
};

