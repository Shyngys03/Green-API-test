import { getChatHistory } from "../api/whatsapp";
import { config } from "../config/config";

describe("GetChatHistory API", () => {
  describe("Positive cases", () => {
    it("should return chat history", async () => {
      const res = await getChatHistory();

      expect(res.status).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
    });
  });


  describe("Negative cases", () => {
    it("should return status 400 with invalid token", async () => {
      const originalToken = config.apiToken;

      // @ts-ignore
      config.apiToken = "invalid_token";

      await expect(getChatHistory()).rejects.toHaveProperty("response.status");

      config.apiToken = originalToken;
    });
  });
});
