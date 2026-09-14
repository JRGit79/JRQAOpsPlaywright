// @ts-check
import { test, expect } from '@playwright/test';

test ('Hit and try cases', async ({ page }) => {
const Text1 = '300 Seats avalable';
const text2 = parseInt(Text1.trim().split(/\s+/)[0], 10);
console.log(`ParsedIntegerOneWay= ${text2}`);
const NumberOfSeats = parseInt(Text1);
console.log("ParsedIntegerSecondWay= " +NumberOfSeats);


});
