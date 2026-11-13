import {test, expect, Page} from '@playwright/test';
let page: Page;
// This hook runs BEFORE every single test in the file
test.beforeAll('Global', async ({ browser }) => 
{
  console.log("BeforeAll-Started");
  page = await browser.newPage();
  // 1. Navigate to the base application URL
   await page.goto("https://ctcorphyd.com/SureshIT/login.php");
   console.log("Application Opened");
  // 2. Perform common prerequisite actions (e.g., Logging in)
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
    console.log("BeforeAll completed");
    
});
test.afterAll('AfterAllTest', async()=>
{
   console.log("AfterAll-Started");
   // Click on the logout link
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.waitForTimeout(3000);
    console.log("Logout completed");
    console.log("AfterAll Completed");
});
// Test Case 1: Will run after the beforeEach hook completes
test('User can navigate to the dashboard @regression @smoke', async () => 
{
  console.log(test.info().title + "-Started");
  await expect(page).toHaveURL('https://ctcorphyd.com/SureshIT/index.php');
  await expect(page.getByRole('listitem').filter({ hasText: 'Welcome sureshit' })).toBeVisible();
  console.log("Verified User Login completion");
  console.log(test.info().title + "-Completed");
});

// Test Case 2: Will run after the beforeEach hook completes
test("LanguageSkills-MouseOverTest",async({},testInfo)=>
{
   console.log(testInfo.title + "-Started");
   await page.getByText('Admin', { exact: true }).hover();
   await page.waitForTimeout(2000);
   await page.getByText('Skills',{exact: true}).first().hover(); 
   await page.waitForTimeout(2000);
   await page.getByText('Languages',{exact: true}).hover();
   await page.waitForTimeout(2000);
   await page.getByText('Languages',{exact: true}).click();
   console.log("Languages menuitem has been clicked");
   console.log(testInfo.title + "-Completed");
});

// Test Case 3: Will run after the beforeEach hook completes
test ('PIM-mouseoverTest', async () =>
{   
    console.log(test.info().title + "-Started");
    await page.getByText('PIM').highlight();
    await page.getByText('PIM').hover();
    await page.waitForTimeout(3000);
    await page.getByText('Add Employee').click();
    await page.waitForTimeout(3000);
    console.log("Add Employee has been clicked");
    console.log(test.info().title + "-Completed");
});
