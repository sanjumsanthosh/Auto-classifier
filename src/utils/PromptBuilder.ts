
import { $log } from '@tsed/common';
export class PromptBuilder {

    private messages = [
        { role: "user", content: "Correct and summarize the following sentance. check if type matches the sentance and give a score of 0-10 where 0 is not-close" },
        { role: "assistant", content: "provide input as sentance == type . always provide output format in |<corrected_sentance>|<score>|" },
    ]

    private sentance: string;
    private type: string;

    setSentance(sentance: string) {
        this.sentance = sentance;
        return this;
    }

    setType(type: string) {
        this.type = type;
        return this;
    }

    build() {
        this.messages.push({ role: "user", content: `${this.sentance} == ${this.type}` });
        $log.info(this.messages);
        return this.messages;
    }
}
