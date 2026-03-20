import { sendMessage } from "../api/whatsapp";
import { SendMessageResponse } from "../types/whatsapp.types";

describe("SendMessage API", () => {
  describe("Positive cases", () => {
    it("should send message !!!", async () => {
      const res = await sendMessage("Test message: Hello, bro!");

      const data: SendMessageResponse = res.data;

      expect(res.status).toBe(200);
      expect(data.idMessage).toBeDefined();
    });
  });


  describe("Negative cases", () => {
    it("should return status 400 when message is empty", async () => {
      await expect(sendMessage("")).rejects.toMatchObject({
        response: { status: 400 },
      });
    });

    it("should return status 400 when chatId is invalid", async () => {
      await expect(sendMessage("Test", "invalid_chat")).rejects.toMatchObject({
        response: { status: 400 },
      });
    });

    it("should return status 400 when message is missing", async () => {
      await expect(
        sendMessage(undefined as unknown as string),
      ).rejects.toMatchObject({
        response: { status: 400 },
      });
    });
  });
});
