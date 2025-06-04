# FRAM - Eksamensprosjekt PRO1001

Dette repositoriet inneholder eksamensoppgaven i emnet **PRO1001 våren 2025** ved Oslo Nye Fagskole. Prosjektet viser konseptet "FRAM" som tilbyr hjemlevering av ferske råvarer fra lokale gårder. Designet er basert på en ferdig Figma-mal og implementert med statiske HTML-sider, CSS og JavaScript.


**Konfigurer chatboten**
   - Skaff en API-nøkkel fra [OpenAI](https://platform.openai.com/).
   - Åpne `scripts/chatbot.js` og erstatt verdien i <YOUR-OPENAI-KEY> med din nøkkel.
   - Lagre filen. Når du laster `chatbot.html` vil chatboten kommunisere med OpenAI sitt API.


## Prosjektbeskrivelse

FRAM-nettsiden demonstrerer en enkel e‑handel der brukeren kan se sesongens råvarer, legge varer i en handlekurv og kontakte en virtuell kundebehandler via en chatbot. Kartkomponenten viser hvor gårdene befinner seg.

### Funksjoner

- **Responsivt design** med burger-meny.
- **Produktside** som viser varer med navn, bilde, pris og vekt.
- **Handlekurv** som teller antall varer når du trykker «Add to basket».
- **Chatbot** på egen side som besvarer spørsmål om FRAM med OpenAI Chat API.
- **Nyhetsbrevskjema** i footeren (bruker `mailto:` for innsending).
- **Google Maps**-integrasjon som peker til samarbeidende gårder.

## Bruk

1. Åpne `index.html` i en nettleser for å se hovedsiden.
2. Naviger til `product.html` for å bla gjennom hele vareutvalget.
3. Klikk på «Add to basket» for å teste handlekurven – tallet øverst i menyen øker.
4. Gå til `chatbot.html` for å chatte med den automatiske kundeservicen.
5. Fyll inn nyhetsbrevskjemaet i footeren om du ønsker å simulere en påmelding.

## API-detaljer

Chatboten bruker OpenAI sitt REST-API med følgende parametere:

- **URL:** `https://api.openai.com/v1/chat/completions`
- **Modell:** `gpt-3.5-turbo`
- **Autentisering:** HTTP-header `Authorization: Bearer <din-nøkkel>`
- **Request-format:** JSON der meldingen fra brukeren sendes inn som vist i `scripts/chatbot.js`.

Sørg for at nettleseren har tilgang til internett når chatboten brukes. Dersom noe går galt vises en feilmelding i chat-vinduet.

---

Prosjektet er ment som et læringsprosjekt og inneholder ingen backend eller vedvarende lagring. Alt innhold er ment for demonstrasjon i forbindelse med eksamen i PRO1001.
