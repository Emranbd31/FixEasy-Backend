// codex.js
import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function askCodex(prompt) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a code assistant for FixEasy." },
            { role: "user", content: prompt },
        ],
    });

    const answer = response.choices[0].message.content;
    console.log("\n💬 Codex reply:\n");
    console.log(answer);
    fs.writeFileSync("codex_output.txt", answer);
}

const userPrompt = process.argv.slice(2).join(" ");
if (!userPrompt) {
    console.log("Usage: node codex.js \"your question or command\"");
    process.exit(1);
}

askCodex(userPrompt);
