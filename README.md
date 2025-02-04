# Vegetarian Recipes App:

Una web application per vegetariani che consente agli utenti di cercare ricette vegetariane tramite l'API di Spoonacular. L'app mostra un elenco di ricette in formato scheda, permette di visualizzare i dettagli di una ricetta specifica e di caricare ulteriori risultati con un pulsante "Load more".

## Caratteristiche:

- **Ricerca ricette**: L'utente può cercare ricette vegetariane utilizzando una barra di ricerca.
- **Visualizzazione schede ricetta**: Ogni ricetta viene presentata con immagine e titolo.
- **Dettagli ricetta**: Cliccando su una ricetta, l'utente può visualizzare informazioni dettagliate.
- **Caricamento dinamico**: Un pulsante "Load more" permette di caricare ulteriori ricette (disponibile solo durante una ricerca).
- **Navigazione intuitiva**: La navigazione tra le pagine avviene senza refresh completo grazie a React Router, con opzioni per forzare un refresh completo se necessario.
- **Gestione dello stato**: Utilizzo di Redux Toolkit per gestire lo stato globale dell’app.
- **Configurazione API sicura**: Le variabili d'ambiente (come l'URL dell'API e l'API key) sono gestite tramite dotenv.

## Tecnologie Utilizzate:

- **React**: Libreria per la creazione dell'interfaccia utente.
- **React Router**: Per la navigazione tra le pagine.
- **Redux Toolkit**: Per la gestione dello stato globale.
- **Axios**: Per le chiamate API.
- **Vite**: Per il bundling e lo sviluppo dell'applicazione.
- **Dotenv**: Per gestire le variabili d'ambiente (API key e API URL).

## Struttura del Progetto:

## Installazione e Configurazione:

1. **Clona il repository:**
   git clone <URL-del-repository>
   cd <nome-del-repository>

2. **Clona il repository:**
   npm install

3. **Configura le variabili d'ambiente:**
   Crea un file .env nella root del progetto e aggiungi:
   VITE_API_KEY=la_tua_chiave_api
   VITE_API_URL=https://api.spoonacular.com/recipes/

4. **Avvia il server di sviluppo:**
   npm run dev

## Utilizzo:

- **Ricerca**: Usa la barra di ricerca per trovare ricette vegetariane. Quando una ricerca è attiva, il titolo della sezione diventa "Results:"; altrimenti rimane "Our best recipes:".
- **Dettagli Ricetta**: Clicca su una scheda ricetta per visualizzare i dettagli.
- **Load More**: Durante una ricerca, il pulsante "Load more" ti consente di visualizzare ulteriori risultati.
