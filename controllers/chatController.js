const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const chatController = {
    processMessage: async (req, res) => {
        try {
            const { message, category, context } = req.body;

            // Define system messages based on category
            const categoryPrompts = {
                residential: "You are a home audio expert helping customers...",
                commercial: "You are a commercial audio solutions expert...",
                tender: "You are a tender specialist analyzing requirements...",
                insurance: "You are an insurance claim specialist..."
            };

            const completion = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [
                    { role: "system", content: categoryPrompts[category] },
                    { role: "user", content: message }
                ],
            });

            res.json({
                reply: completion.choices[0].message.content,
                suggestions: [] // Add product suggestions based on context
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    startSession: async (req, res) => {
        const { category } = req.body;
        // Initialize chat session with category-specific greeting
        res.json({
            sessionId: Date.now(),
            greeting: `Welcome to ${category} quotes! How can I help you today?`
        });
    }
};

module.exports = chatController;