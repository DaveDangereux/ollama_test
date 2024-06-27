import ollama from "ollama";
import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chat = async () => {
  while (true) {
    const userInput = await rl.question("> ");

    const response = await ollama.chat({
      model: "llama2",
      messages: [{ role: "user", content: userInput }],
    });

    console.log("\n", response.message.content, "\n");
  }
};

chat();
