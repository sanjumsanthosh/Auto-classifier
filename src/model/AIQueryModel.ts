import { Example, Required } from "@tsed/schema";

export class AIQueryModel {

    @Required()
    @Example("Hackers can use SQL injection to bypass login")
    query: string;

    @Required()
    @Example("attack")
    type: string;
}