import { useState } from 'react';
import * as XLSX from 'xlsx';

const useExcelToJson = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchDataAndReadFile = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://softlion.blog/wp-json/wp/v2/trading-markets?acf_format=standard&_fields=acf.exel_document_input');
      const result = await response.json();

      if (!result || !result[0] || !result[0].acf || !result[0].acf.exel_document_input) {
        setError('Помилка при отриманні посилання на Excel файл');
        return;
      }

      const excelFileUrl = result[0].acf.exel_document_input;
      const excelResponse = await fetch(excelFileUrl);

      const arrayBuffer = await excelResponse.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);

      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Отримуємо дані без транспонування
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Групуємо дані за країнами
      const groupedData: any[] = [];
      let currentCountry: any = null;

      jsonData.forEach((row: any, rowIndex: number) => {
        if (rowIndex === 0) {
          return; // Пропускаємо рядок з назвами стовпців
        }

        row.forEach((value: any, columnIndex: number) => {
          if (columnIndex === 0) {
            if (currentCountry) {
              groupedData.push(currentCountry);
            }
            currentCountry = { country: value.toLowerCase(), agriculturalCrops: [], deliveryOptions: [] };
          } else if (columnIndex % 2 === 1) {
            currentCountry.agriculturalCrops.push(value);
          } else if (columnIndex % 2 === 0) {
            currentCountry.deliveryOptions.push(value);
          }
        });
      });

      if (currentCountry) {
        groupedData.push(currentCountry);
      }

      setData(groupedData);
    } catch (e) {
      setError('Помилка при обробці Excel файлу');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Викликаємо функцію при старті компонента, можливо використовуючи useEffect

  return { loading, data, error, fetchDataAndReadFile };
};

export default useExcelToJson;
