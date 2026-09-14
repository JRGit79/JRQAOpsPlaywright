const ExcelJS = require('exceljs');
const {test,expect} = require('@playwright/test');



// Find specific value of cell and replace with new value(write)
async function writeExcelTest(searchText, replacedText, filePath, change) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcelTest(worksheet, searchText);

    if (output.row !== -1 && output.column !== -1) {
        const cell = worksheet.getCell(output.row, output.column+change.colChange);
        cell.value = replacedText;
        await workbook.xlsx.writeFile(filePath);
        console.log("Value updated successfully.");
    }
    else {
        console.log("Error : searched value was not found in the worksheet.")
    }

    // Reading Value on cell
    async function readExcelTest(worksheet, searchText) {
        let output = { row: -1, column: -1 };
        worksheet.eachRow((row, rowNumber) => {
            row.eachCell((cell, colNumber) => {

                if (cell.value && cell.value.toString().trim() === searchText) {
                    output.row = rowNumber;
                    output.column = colNumber;
                }
                
            });
        });
        console.log(output);
        return output;
    }    
   
    return output;
}
// writeExcelTest("Banana", "Apple","/Users/Jitendra Rawat/JavaPractice/excelTest.xlsx");

test('download upload excel validation', async ({page}) =>
    {
        const textsearch = "Mango";
        const updatevalue = "350"
        await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
        const downloadPromise= page.waitForEvent('download');
        await page.getByRole('button', {name:'Download'}).click();
        const download = await downloadPromise;
        const filePath = '/Users/Jitendra Rawat/downloads/download.xlsx';
        await download.saveAs(filePath);
        await writeExcelTest(textsearch, updatevalue, filePath, {rowChange: 0, colChange: 2});
        await page.locator("#fileinput").click();
        await page.locator("#fileinput").setInputFiles(filePath);
        const textlocator = page.getByText(textsearch);
        const desirerow = page.getByRole('row').filter({has:textlocator });
        await expect(desirerow.locator("#cell-4-undefined")).toContainText(updatevalue);
    
    });

