import { useLocale } from "next-intl";
import { useState } from "react";
import * as XLSX from "xlsx";

const useExcelToJson = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale();

  const fetchDataAndReadFile = async () => {
    setLoading(true);
    setError(null);

    try {
      const request = await fetch(
        "https://wp.cl-brokers.com/wp-json/wp/v2/trading-markets?acf_format=standard&_fields=acf.exel_document_input"
      );
      const result = await request.json();

      if (
        !result ||
        !result[0] ||
        !result[0].acf ||
        !result[0].acf.exel_document_input
      ) {
        setError("Помилка при отриманні посилання на Excel файл");
        return;
      }

      const excelFileUrl = result[0].acf.exel_document_input;

      // Виділіть частину URL, яка йде після "https://wp.cl-brokers.com/"
      const relativePath = excelFileUrl.replace(
        "https://wp.cl-brokers.com/",
        ""
      );

      // Збережіть нову базову URL
      const baseUrl = "http://46.175.148.107:3001/";

      // Складіть повний URL для нового запиту
      const newUrl = baseUrl + relativePath;
      // Виконайте запит з новим URL
      const response = await fetch(newUrl);
      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      
      const workbook = XLSX.read(data, { type: "array" });
      // Determine sheet name based on locale
      let sheetName: string;
      switch (locale) {
        case "en":
          sheetName = "English";
          break;
        case "es":
          sheetName = "Spain";
          break;
        case "de":
          sheetName = "Deutch";
          break;
        case "ua":
          sheetName = "Ukraine";
          break;
        default:
          throw new Error(`Unsupported locale: ${locale}`);
      }

      const sheet = workbook.Sheets[sheetName];

      // Get data without transposition
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
            currentCountry = {
              country: value.toLowerCase(),
              agriculturalCrops: [],
              deliveryOptions: [],
            };
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
      setError("Помилка при обробці Excel файлу");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Викликаємо функцію при старті компонента, можливо використовуючи useEffect

  return { loading, data, error, fetchDataAndReadFile };
};

export default useExcelToJson;
