import { getStateInstance } from "../api/whatsapp";
import { config } from "../config/config";

describe("Authorization API", () => {
  describe("Positive cases", () => {
    it("should return state -- authorized", async () => {
      const res = await getStateInstance();

      expect(res.status).toBe(200);
      expect(res.data.stateInstance).toBe("authorized");
    });
  });


  describe("Negative cases", () => {
    it("should fail with invalid token", async () => {
      const originalToken = config.apiToken;

      // @ts-ignore
      config.apiToken = "invalid_token";

      await expect(getStateInstance()).rejects.toHaveProperty(
        "response.status",
      );

      config.apiToken = originalToken;
    });
  });
});
