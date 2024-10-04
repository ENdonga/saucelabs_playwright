import { test as baseTest } from "@playwright/test"
import { LoginPage } from "../pages/login.page"
import { HomePage } from "../pages/home.page";

const USERNAME = "standard_user";
const PASSWORD = "secret_sauce";

type TestFixtures = {
    login: () => Promise<void>;
    homePage: HomePage;
}

export const test = baseTest.extend<TestFixtures>({
    // fixture to provide login function
    login: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.loginToApplication(USERNAME, PASSWORD);
        await use(async ()=> {});
    },

    homePage: async({page}, use)=> {
        const homePage = new HomePage(page)
        await use(homePage)
    }
})

export { expect } from '@playwright/test';