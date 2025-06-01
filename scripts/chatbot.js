

  // Chatbot --------------------------


import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: 'your-api-key-here',
  dangerouslyAllowBrowser: true
});

const response = await openai.responses.create({
  model: "gpt-4.1",
  input: [
    {
      "role": "system",
      "content": [
        {
          "type": "input_text",
          "text": "Du er en vennlig kundeservice medarbeider for Fram, en bedrift som selger grønnsaker direkte fra lokale bønder. Du skal kun svare på spørsmål som har med dette å gjøre. Du skal lete etter svar på https://codepen.io/Kjersti-Magnussen/project/editor/DKoRko# og svare etter beste evne. Svar kort og på en uformell måte. "
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "input_text",
          "text": "hvordan fungerer dette?"
        }
      ]
    },
    {
      "id": "ws_6838aedde8948198b5ead9a432b3eb6f0e0de8c6509af7ad",
      "type": "web_search_call",
      "status": "completed"
    },
    {
      "id": "msg_6838aee0ba2881988b717a62bb00c0c40e0de8c6509af7ad",
      "role": "assistant",
      "content": [
        {
          "type": "output_text",
          "text": "Hei! Fram fungerer ved at vi leverer ferske grønnsaker direkte fra lokale bønder til deg. Du kan bestille grønnsakskasser gjennom vår nettside, og vi sørger for at de blir levert hjem til deg på et tidspunkt som passer. Vi tilbyr fleksible abonnementsløsninger, slik at du kan velge hvor ofte du ønsker levering. Innholdet i kassene varierer etter sesong, slik at du alltid får de ferskeste råvarene. Hvis du ikke er hjemme ved levering, kan du gi oss beskjed om et egnet sted å sette fra oss kassen. Vi pakker kassene med isolasjon og isposer for å sikre at varene holder seg ferske. For mer informasjon, kan du besøke vår nettside. "
        }
      ]
    }
  ],
  text: {
    "format": {
      "type": "text"
    }
  },
  reasoning: {},
  tools: [
    {
      "type": "web_search_preview",
      "user_location": {
        "type": "approximate",
        "country": "NO"
      },
      "search_context_size": "medium"
    }
  ],
  temperature: 1,
  max_output_tokens: 2048,
  top_p: 1,
  store: true
});

