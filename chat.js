import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/61474ca9-d111-488c-aa45-07f5880fda3c/chat',
  mode: 'window',
  loadPreviousSession: false,
  initialMessages: [
    'Hello! I’m the JS-SEZ advisor.',
    'Ask me about the zones, SETUP or setting up in Johor.'
  ],
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: 'Answers grounded in the SMF playbook'
    }
  }
});
