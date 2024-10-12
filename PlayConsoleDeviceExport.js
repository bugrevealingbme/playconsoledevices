// Tabloyu seçin
const table = document.querySelector('.ess-table-canvas');

// Eğer tablo mevcutsa satırları seçin
if (table) {
    const rows = table.querySelectorAll('.particle-table-row');

    // Boş bir dizi oluşturun
    const data = [];

    // Her satır için verileri alın
    rows.forEach(row => {
        const rowData = {};

        // Hücreleri sırayla alın
        const deviceCell = row.querySelector('ess-cell[essfield="model"] .line');
        const marketNameCell = row.querySelector('ess-cell[essfield="marketing"] text-field');
        const ramCell = row.querySelector('ess-cell[essfield="ram"] text-field');
        const androidVersionsCell = row.querySelector('ess-cell[essfield="sdk"] text-field');
        const imageCell = row.querySelector('.image-container img');

        // Hücrelerin içeriğini kontrol ederek doldurun
        if (deviceCell) rowData.device = deviceCell.textContent.trim();
        if (marketNameCell) rowData.marketName = marketNameCell.textContent.trim();
        if (ramCell) rowData.ram = ramCell.textContent.trim();
        if (androidVersionsCell) rowData.androidVersions = androidVersionsCell.textContent.trim();
        if (imageCell) rowData.imageSrc = imageCell.getAttribute('src');

        // Her bir satırı data dizisine ekleyin
        data.push(rowData);
    });

    // Elde edilen verileri konsola yazdırın
    console.log(JSON.stringify(data, null, 2));
} else {
    console.error('Tablo bulunamadı.');
}
