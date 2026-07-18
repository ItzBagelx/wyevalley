import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4000');
  
  await new Promise(r => setTimeout(r, 1000));
  
  await page.evaluate(() => {
    Array.from(document.querySelectorAll("button")).find(b => b.innerText.toLowerCase().includes("quote"))?.click();
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  const data = await page.evaluate(() => {
    const modal = document.querySelector('div[class*="z-[100]"]');
    if (!modal) return "Modal not found";
    
    const h3 = modal.querySelector('h3');
    const h3Text = h3 ? h3.innerText : "No h3";
    
    const buttons = Array.from(modal.querySelectorAll('button'));
    const buttonData = buttons.map(b => {
      const rect = b.getBoundingClientRect();
      const style = window.getComputedStyle(b);
      return {
        text: b.innerText,
        width: rect.width,
        height: rect.height,
        opacity: style.opacity,
        display: style.display,
        visibility: style.visibility,
      };
    });
    
    const motionDiv = modal.querySelector('h3')?.parentElement;
    const motionDivStyle = motionDiv ? window.getComputedStyle(motionDiv) : null;
    
    return {
      h3Text,
      motionDivOpacity: motionDivStyle ? motionDivStyle.opacity : "N/A",
      buttons: buttonData
    };
  });
  
  console.log("Modal Data:", JSON.stringify(data, null, 2));
  
  await browser.close();
})();
