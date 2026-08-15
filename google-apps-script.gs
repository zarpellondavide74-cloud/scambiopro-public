/**
 * ScambioPro — ricezione automatica delle adesioni
 *
 * Questo codice va incollato in Extensions > Apps Script
 * di un foglio Google vuoto. Istruzioni complete nel README.
 *
 * Ogni adesione inviata dal sito diventa una nuova riga del foglio,
 * e ti arriva anche una email di avviso.
 */

// Metti qui l'indirizzo dove vuoi ricevere l'avviso di ogni nuova adesione.
// Lascia la stringa vuota ('') se non vuoi ricevere email.
const AVVISO_EMAIL = 'davzac74@gmail.com';

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const foglio = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Alla prima esecuzione crea l'intestazione
    if (foglio.getLastRow() === 0) {
      foglio.appendRow(['Data', 'Nome e attività', 'Zona', 'Offre', 'Cerca', 'Conguaglio', 'Contatto']);
      foglio.getRange(1, 1, 1, 7).setFontWeight('bold');
      foglio.setFrozenRows(1);
    }

    foglio.appendRow([
      new Date(),
      d.nome || '',
      d.zona || '',
      d.offro || '',
      d.cerco || '',
      d.cong || '',
      d.contatto || ''
    ]);

    if (AVVISO_EMAIL) {
      MailApp.sendEmail(
        AVVISO_EMAIL,
        'Nuova adesione ScambioPro — ' + (d.nome || ''),
        'Nome e attività: ' + (d.nome || '') + '\n' +
        'Zona: ' + (d.zona || '') + '\n' +
        'Offre: ' + (d.offro || '') + '\n' +
        'Cerca: ' + (d.cerco || '') + '\n' +
        'Conguaglio: ' + (d.cong || '') + '\n' +
        'Contatto: ' + (d.contatto || '')
      );
    }

    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('errore: ' + err);
  }
}

function doGet() {
  return ContentService.createTextOutput('ScambioPro: endpoint attivo.');
}
