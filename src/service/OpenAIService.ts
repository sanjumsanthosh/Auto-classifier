import { Injectable } from "@tsed/di";
import { $log } from '@tsed/common';
import { openai } from "src/Openai";
import { PromptBuilder } from "src/utils/PromptBuilder";
import { AIQueryModel } from "src/model/AIQueryModel";


@Injectable()
export class OpenAIService {
    openai: any;

    constructor(
    ) {
        this.openai = openai;
        $log.info("OpenAIService constructor initialized");
    }

    async tryPrediction(query: AIQueryModel) {
        const prompt = new PromptBuilder();
        prompt.setSentance(query.query);
        prompt.setType(query.type);
        const response = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: prompt.build(),
        });
        try {
            const message = response.data.choices[0].message.content;
            const data = {
                corrected_sentance: message.split("|")[1],
                score: message.split("|")[2]
            }
            return data;
        }
        catch (err) {
            $log.error(err);
            return response.data;
        }

    }

}