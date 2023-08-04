// Tabloyu seçin
const table = document.querySelector('.ess-table-canvas');

// Satırları seçin
const rows = table.querySelectorAll('.particle-table-row');

// Boş bir dizi oluşturun
const data = [];

// Her satır için verileri alın
rows.forEach(row => {
    const cells = row.querySelectorAll('ess-cell');
    const rowData = {};

    rowData.device = cells[0].querySelector('div.line').textContent.trim();
    rowData.marketName = cells[2].querySelector('text-field').textContent.trim();
    rowData.androidVersions = cells[3].querySelector('text-field').textContent.trim();
    rowData.ram = cells[4].querySelector('text-field').textContent.trim();
    rowData.soc = cells[5].querySelector('text-field').textContent.trim();

    // Resim linkini alın
    rowData.imageSrc = row.querySelector('.image-container._ngcontent-ogt-38 img').getAttribute('src');

    data.push(rowData);
});

// Elde edilen verileri konsola yazdırın
console.log(JSON.stringify(data, null, 2));
