# ScambioPro

Marketplace per scambiare ciò che non si usa: beni, servizi, disponibilità
e capacità inutilizzata. Ogni utente pubblica **cosa offre**, **cosa cerca**
e il **valore indicativo**; l'accordo si chiude direttamente tra le parti
in tre modalità possibili: **scambio**, **scambio + conguaglio in euro**,
oppure **vendita**. Gli annunci possono essere locali, spedibili o a
distanza — non solo nella riviera romagnola ma ovunque nel mondo.

La piattaforma mette in contatto le parti: non gestisce pagamenti, saldi
o crediti interni.

## Com'è fatto

Pagina singola statica: un solo file `index.html` con HTML, CSS e
JavaScript all'interno. Nessuna dipendenza da installare, nessun processo
di build. I font arrivano da Google Fonts.

Gli annunci sono salvati e letti da **Supabase** (database + storage per
le foto): la pubblicazione di un nuovo annuncio dal form scrive
direttamente nel database e compare subito nel marketplace, senza bisogno
di approvazione manuale.

> Nota: il file `google-apps-script.gs` presente nel repository è una
> versione precedente del backend (basata su Google Apps Script + Google
> Sheet) ed è **superata**: non è più collegata al sito. Resta nel repo
> solo come riferimento storico.

## Vederlo in locale

Basta aprire `index.html` con un doppio clic nel browser.

## Pubblicarlo con GitHub Pages

1. Assicurati che questi file siano nella radice del repository (`main`).
2. Vai su **Settings → Pages**.
3. Alla voce *Source* scegli **Deploy from a branch**, poi il branch
   `main` e la cartella `/ (root)`.
4. Salva. Dopo un minuto il sito è online all'indirizzo indicato nella
   stessa pagina.

Per usare il dominio `scambiopro.it`: aggiungi il dominio nel campo
*Custom domain* della stessa schermata (il file `CNAME` nel repository
lo fa già in automatico) e imposta i record DNS dal pannello del tuo
registrar seguendo le istruzioni che GitHub mostra lì.

## Configurazione del backend (Supabase)

Il sito è già collegato a un progetto Supabase esistente (URL e chiave
pubblica sono nel blocco `<script>` di `index.html`). Per modificare il
progetto Supabase collegato (es. per ambiente di test separato):

1. Crea un progetto su [supabase.com](https://supabase.com).
2. Crea una tabella `annunci` con le colonne usate dal form: `name`,
   `place`, `category`, `offer`, `seek`, `amount`, `contact`, `local`,
   `shipping`, `remote`, `swap`, `conguaglio`, `sale`,
   `consent_public_contact`, `active`, `image_url`, `image_path`,
   `created_at`.
3. Crea un bucket di storage pubblico chiamato `annunci-foto` per le foto
   degli annunci.
4. Copia l'URL del progetto e la chiave pubblica (`anon`/`publishable`)
   da **Project Settings → API** e sostituiscile in `index.html` nelle
   costanti `SUPABASE_URL` e `SUPABASE_KEY`.

## File

- `index.html` — il sito
- `CNAME` — dominio personalizzato per GitHub Pages
- `google-apps-script.gs` — versione precedente del backend (superata, vedi sopra)
- `.nojekyll` — evita che GitHub Pages processi i file con Jekyll

## Stato

In produzione (marketplace globale di valore inutilizzato, backend
Supabase). Non ancora pubblicato su GitHub Pages/dominio scambiopro.it:
il dominio punta ancora a una versione precedente del sito.
