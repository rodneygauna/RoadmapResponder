const templates = {
  acknowledgment:
    "Thank the customer for sharing their idea and let them know their request has been noted.",
  future_consideration:
    "Thank the customer for sharing their idea and let them know it’s been captured for future review.",
  on_the_radar:
    "Thank the customer for sharing their idea and let them know something related is already tentatively planned for [Quarter/Date Placeholder].",
  decline_politely:
    "Thanks for the suggestion! While we love hearing ideas, this particular request doesn't align with our current plans.",
};

const tones = {
  neutral: "Use a neutral and professional tone.",
  friendly: "Use a friendly and approachable tone.",
  apologetic: "Use a polite and empathetic tone that acknowledges limitations.",
};

export default function buildPrompt(requestText, templateKey, toneKey) {
  const base = templates[templateKey];
  const toneInstruction = tones[toneKey];

  return `
A customer submitted the following product enhancement request:
"${requestText}"

Write a single concise paragraph that follows this guidance:
${base}

Do not format as an email. ${toneInstruction}
Keep the tone professional and limit the response to no more than 3 sentences.
  `.trim();
}
