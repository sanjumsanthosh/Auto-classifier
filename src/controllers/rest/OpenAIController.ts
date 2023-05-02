import { Controller } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Get, Post } from "@tsed/schema";
import { AIQueryModel } from "src/model/AIQueryModel";
import { OpenAIService } from "src/service/OpenAIService";

@Controller("/openai")
export class OpenAIController {

    constructor(
        protected aiService: OpenAIService
    ) { }


    @Post("/predict")
    async testPrediction(
        @BodyParams() query: AIQueryModel
    ) {
        const response = await this.aiService.tryPrediction(query);
        return response;
    }
}