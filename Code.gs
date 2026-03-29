function insertDate() {
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  if (cursor) {
    var date = new Date();
    var formattedDate = formatDateCatalan(date);
    var days1977 = insertDaysSince1977();

    //cursor.insertText(days1977);
    cursor.insertText(formattedDate + ' (dia ' + days1977 +')');

    
  } else {
    DocumentApp.getUi().alert('Please place the cursor where you want to insert the date.');
  }
}

function formatDateCatalan(date) {
  var days = ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte'];
  var months = ['de gener', 'de febrer', 'de març', 'd\'abril', 'de maig', 'de juny', 'de juliol', 'd\'agost', 'de setembre', 'd\'octubre', 'de novembre', 'de desembre'];
  
  var dayName = days[date.getDay()];
  var day = date.getDate();
  var month = months[date.getMonth()];
  var year = date.getFullYear();
  
  return dayName + ', ' + day + ' ' + month + ' de ' + year;
}

function insertDaysSince1977() {
  // Fecha inicial: 25 de julio de 1977
  var startDate = new Date(1977, 6, 25); // Los meses en JavaScript son 0-indexed (julio es el mes 6)

  // Fecha actual
  var currentDate = new Date();

  // Calcular la diferencia en milisegundos
  var timeDifference = currentDate - startDate;

  // Convertir la diferencia a días (milisegundos en un día = 1000 ms * 60 s * 60 min * 24 horas)
  var daysSince1977 = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Abrir el documento de Google Docs (reemplaza 'DOCUMENT_ID' con el ID de tu documento)
  //var doc = DocumentApp.openById('DOCUMENT_ID');
  //var body = doc.getBody();

  // Insertar el número de días en el documento
  //body.appendParagraph("Han pasado " + daysSince1977 + " días desde el 25 de julio de 1977.");

  // Guardar los cambios en el documento
  //doc.saveAndClose();

  return daysSince1977;
}

function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Insert Date', 'insertDate')
      .addToUi();
}

