const templates = {
  acknowledgment: "Thank you for your suggestion! We appreciate your input...",
  future_consideration:
    "Thanks for your idea! It's been shared with our product team...",
  on_the_radar:
    "Great minds think alike! This request aligns with discussions...",
  decline_politely: "Thanks for the suggestion! While we love hearing ideas...",
};

const tones = {
  neutral: "Respond in a neutral, professional tone.",
  friendly: "Respond in a warm and friendly tone.",
  apologetic:
    "Respond in a polite and empathetic tone, acknowledging the limitations.",
};

export default function buildPrompt(requestText, templateKey, toneKey) {
  const base = templates[templateKey];
  const toneInstruction = tones[toneKey];

  return `A customer submitted the following request:\n"${requestText}"\n\nRespond professionally using this base:\n"${base}"\n\n${toneInstruction}`;
}
