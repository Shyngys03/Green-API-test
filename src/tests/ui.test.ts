import { Builder, By } from "selenium-webdriver";

// Увеличиваем таймаут для тестов, так как загрузка страницы может занять некоторое время
// Я использовал WSL, и там иногда бывают задержки при открытии браузера
jest.setTimeout(30000);

describe("UI Test - Green API", () => {
  let driver: any;

  beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  it("should open SendMessage documentation page", async () => {
    await driver.get("https://green-api.com/docs/api/sending/SendMessage/");

    const title = await driver.getTitle();

    expect(title).toContain("Как отправить текстовое сообщение");
  });

  it("should find page content", async () => {
    await driver.get("https://green-api.com/docs/api/sending/SendMessage/");

    const body = await driver.findElement(By.tagName("body"));
    const text = await body.getText();

    expect(text).toContain("sendMessage");
  });
});
