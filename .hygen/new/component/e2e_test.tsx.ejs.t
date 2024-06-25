---
to: <%= absPath %>/e2e_tests/<%= component_name %>.playwright.spec.tsx
---
const { chromium } = require('playwright');
import { test } from '@playwright/test';
(async () => {  
    const browser = await chromium.launch({ headless: false });

    // logic of your code


    await browser.close();
})();

