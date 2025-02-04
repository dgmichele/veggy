# Veggy 🌿

Una web app per vegetariani che consente agli utenti di cercare ricette vegetariane tramite l'API di Spoonacular. L'app mostra un elenco di ricette in formato card, permette di visualizzare i dettagli di una ricetta specifica e di caricare ulteriori risultati con un pulsante "Load more".

## Caratteristiche:

- **Ricerca ricette**: L'utente può cercare ricette vegetariane utilizzando una barra di ricerca.
- **Visualizzazione schede ricetta**: Ogni ricetta viene presentata con immagine e titolo.
- **Dettagli ricetta**: Cliccando su una ricetta, l'utente può visualizzare informazioni dettagliate.
- **Caricamento dinamico**: Un pulsante "Load more" permette di caricare ulteriori ricette (disponibile solo durante una ricerca).
- **Navigazione intuitiva**: La navigazione tra le pagine avviene senza refresh completo grazie a React Router, invece se si clicca il logo nell'header per tornare alla home, si ha un refresh dell'homepage.
- **Gestione dello stato**: Utilizzo di Redux Toolkit per gestire lo stato globale dell’app.
- **Configurazione API sicura**: Le variabili d'ambiente (come l'URL dell'API e l'API key) sono gestite tramite dotenv.
- **Stile**: Vengono utilizzati i CSS Modules per una migliore gestione degli stili e soprattutto per evitare conflitti interni nell'app.

## Tecnologie Utilizzate:

- **React**: Libreria per la creazione dell'interfaccia utente.
- **React Router**: Per la navigazione tra le pagine.
- **Redux Toolkit**: Per la gestione dello stato globale.
- **Axios**: Per le chiamate API.
- **Vite**: Per il bundling e lo sviluppo dell'applicazione.
- **Dotenv**: Per gestire le variabili d'ambiente (API key e API URL).

## Struttura del Progetto:

- **`main.jsx`**
  Punto di ingresso dell'app React. Configuriamo ReactDOM e colleghiamo il nostro componente principale (`App.jsx`).
- **`App.jsx`**
  Configurazione generale dell'app. Qui aggiungiamo React Router e definiamo le rotte principali, come la Home e la pagina dei dettagli della ricetta.

### Redux

- **`redux/store.js`**
  Configuriamo lo store Redux. È fondamentale impostarlo per gestire lo stato globale.
- **`redux/slices/recipeSlice.js`**
  Creiamo lo slice Redux per gestire lo stato delle ricette (es. lista ricette, dettagli di una ricetta, stati di caricamento, errori, ecc... ).

### Servizi (API)

- **`services/api.js`**
  Scriviamo le funzioni per comunicare con l'API di Spoonacular usando Axios. Qui centralizziamo le chiamate API per la ricerca delle ricette e per ottenere i dettagli di una ricetta (usando dotenv).

### Componenti

- **`components/SearchBar.jsx`**
  Componente per la barra di ricerca. Questo sarà il primo punto di interazione per l'utente per cercare ricette.
- **`components/RecipeCard.jsx`**
  Componente per visualizzare una scheda ricetta con immagine e titolo. Lo utilizzeremo per mostrare i risultati della ricerca.
- **`components/RecipeDetail.jsx`**
  Componente per visualizzare i dettagli di una ricetta. Questo sarà utilizzato nella pagina dedicata alla singola ricetta.

### Pagine

- **`pages/Home.jsx`**
  Configuriamo la pagina iniziale con la barra di ricerca e l'elenco dei risultati (usando `RecipeCard`).
- **`pages/RecipePage.jsx`**
  Configuriamo la pagina che mostra i dettagli di una ricetta, utilizzando il componente `RecipeDetail`.

## Installazione e Configurazione:

1. **Clona il repository:**
   `git clone URL-del-repository cd nome-del-repository`

2. **Clona il repository:**
   `npm install`

3. **Configura le variabili d'ambiente:**
   Crea un file `.env` nella root del progetto e aggiungi:

   - `VITE_API_KEY=la_tua_chiave_api`
   - `VITE_API_URL=https://api.spoonacular.com/recipes/`

4. **Avvia il server di sviluppo:**
   `npm run dev`

## Utilizzo:

- **Ricerca**: Usa la barra di ricerca per trovare ricette vegetariane. Quando una ricerca è attiva, il titolo della sezione diventa "Results:"; altrimenti rimane "Our best recipes:".
- **Dettagli Ricetta**: Clicca su una scheda ricetta per visualizzare i dettagli.
- **Load More**: Durante una ricerca, il pulsante "Load more" ti consente di visualizzare ulteriori risultati.

## Test:

Per testare l'app, vai qui https://your-veggy.netlify.app/ 🔗
