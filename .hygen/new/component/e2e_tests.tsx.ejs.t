---
to: <%= absPath %>/e2e_tests/<%= component_name %>.playwright.spec.tsx
---
const { chromium } = require('playwright');
(async () => {  
    //logic of your code
    const browser = await chromium.launch({ headless: false });
    await browser.close();
})();

