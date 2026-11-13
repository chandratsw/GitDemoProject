import {test, expect} from '@playwright/test';

// This hook runs BEFORE every single test in the file
test.beforeEach('Global', async ({ page }) => {
  // 1. Navigate to the base application URL
   await page.goto("https://ctcorphyd.com/SureshIT/login.php");
   console.log("Application Opened");
  // 2. Perform common prerequisite actions (e.g., Logging in)
    let url : string = "https://ctcorphyd.com/SureshIT/login.php";
    let username : string = "sureshit";
    let password : string = "sureshit";
    await page.locator("//input[@name='txtUserName']").fill(username);
    await page.locator("//input[@name='txtPassword']").fill(password);
    await page.waitForTimeout(3000);
    console.log("Username and Password entered");
    // Click on the login button
    await page.locator("//input[@name='Submit']").click();
    await page.waitForTimeout(3000);
    console.log("Login completed");
    await page.screenshot({ path: "C:\\Playwright_WS\\Practice Jenkins\\test-results\\screenshots\\loginverify.png", fullPage: true });
});


// Test Case 1: Will run after the beforeEach hook completes
test('User can navigate to the dashboard',{tag: '@regression'}, async ({ page }) => {
  await expect(page).toHaveURL('https://ctcorphyd.com/SureshIT/index.php');
  await expect(page.getByRole('listitem').filter({ hasText: 'Welcome sureshit' })).toBeVisible();
});

// Test Case 2: Will run after the beforeEach hook completes
test("LanguageSkills-MouseOverTest",async({page})=>
{   
   //await page.locator('#admin > a > span').hover();
   //await page.locator('#admin > ul > li:nth-child(4) > a > span').hover();
   //await page.locator('#admin > ul > li:nth-child(4) > ul > li:nth-child(2) > a > span').click(); 
   await page.getByText('Admin', { exact: true }).hover();
   await page.waitForTimeout(2000);
   await page.getByText('Skills',{exact: true}).first().hover(); 
   await page.waitForTimeout(2000);
   await page.getByText('Languages',{exact: true}).hover();
   await page.waitForTimeout(2000);
   await page.getByText('Languages',{exact: true}).click();
   console.log("Languages menuitem has been clicked");
});

// Test Case 3: Will run after the beforeEach hook completes
test ('PIM-MouseoverTest @smoke', async ({ page }) =>
{
    await page.getByText('PIM').highlight();
    await page.getByText('PIM').hover();
    await page.waitForTimeout(3000);
    await page.getByText('Add Employee').click();
    await page.waitForTimeout(3000);
});

//This hook runs AFTER every single test in the file
test.afterEach("My Custom Title", async ({ page }) => {
  const currentTitle = test.info().title;
  console.log(`Finished ${test.info().title} with status ${test.info().status}`);
  console.log("After Each Completed");
  console.log(currentTitle);

  if (test.info().status !== test.info().expectedStatus)
  {
    console.log(`Did not run as expected, ended up at ${page.url()}`);
  }
});