# ScambioPro

Sito di scambio diretto tra professionisti e attività della riviera romagnola
(Cattolica, Riccione, Misano).

Ogni utente pubblica **cosa offre**, **cosa cerca** e **quanto conguaglio in euro**
è disposto ad accettare. Gli accordi si chiudono direttamente tra le due parti:
la piattaforma mette in contatto, non gestisce denaro, saldi o crediti interni.

## Com'è fatto

Pagina singola statica: un solo file `index.html` con HTML, CSS e JavaScript
all'interno. Nessuna dipendenza da installare, nessun processo di build.
I font arrivano da Google Fonts.

## Vederlo in locale

Basta aprire `index.html` con un doppio clic nel browser.

## Pubblicarlo con GitHub Pages

1. Carica questi file nella radice del repository.
2. Vai su **Settings → Pages**.
3. Alla voce *Source* scegli **Deploy from a branch**, poi il branch `main` e la cartella `/ (root)`.
4. Salva. Dopo un minuto il sito è online all'indirizzo indicato nella stessa pagina.

Per usare il dominio `scambiopro.it`: aggiungi il dominio nel campo *Custom domain*
della stessa schermata e imposta i record DNS dal pannello del tuo registrar
seguendo le istruzioni che GitHub mostra lì.

## Configurazione (da fare prima di pubblicare)

Le adesioni inviate dal sito finiscono da sole in un foglio Google, una riga
per ciascuna, e ti arriva anche una email di avviso. Serve una configurazione
una tantum di circa 5 minuti. È tutto gratuito.

### 1. Crea il foglio

Vai su Google Drive e crea un nuovo **Foglio di lavoro** vuoto.
Chiamalo per esempio "ScambioPro — adesioni".

### 2. Incolla il codice

Nel foglio: menu **Estensioni → Apps Script**.
Cancella quello che trovi già scritto e incolla tutto il contenuto del file
`google-apps-script.gs` che trovi in questo repository.
Salva con l'icona del dischetto.

### 3. Pubblica lo script

In alto a destra: **Attiva deployment → Nuovo deployment**.
- Clicca l'ingranaggio accanto a "Seleziona tipo" e scegli **App web**
- Esegui come: **Io**
- Chi ha accesso: **Chiunque**
- Clicca **Attiva deployment**

Google chiederà l'autorizzazione: accetta (comparirà un avviso "app non
verificata", è normale trattandosi di uno script tuo — clicca su "Avanzate"
e poi su "Apri progetto").

Alla fine copia l'**URL dell'app web**: è un indirizzo lungo che finisce
con `/exec`.

### 4. Incolla l'indirizzo nel sito

Apri `index.html`, cerca il blocco `CONFIGURAZIONE` verso la fine del file
e sostituisci il segnaposto con l'indirizzo appena copiato:

```js
const ENDPOINT = 'https://script.google.com/macros/s/.../exec';
```

Fatto. Da quel momento ogni richiesta compilata sul sito compare
automaticamente nel foglio.

### Cambiare l'indirizzo email degli avvisi

Si imposta nella prima riga di `google-apps-script.gs`
(`const AVVISO_EMAIL`). Dopo averla modificata bisogna rifare
un deployment (**Attiva deployment → Gestisci deployment → Modifica**).

## File

- `index.html` — il sito
- `google-apps-script.gs` — il codice da incollare in Apps Script
- `.nojekyll` — evita che GitHub Pages processi i file con Jekyll

## Stato

Prototipo. I dati degli annunci sono di esempio e sono scritti direttamente
dentro `index.html` (array `annunci`): per modificarli basta cambiare quelle righe.
