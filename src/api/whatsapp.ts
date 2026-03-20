import { api } from "./client";
import { config } from "../config/config";
import {
  SendMessageRequest,
  SendMessageResponse,
  GetChatHistoryRequest,
  ChatMessage,
  StateInstanceResponse,
} from "../types/whatsapp.types";

export const sendMessage = async (message: string, chatId?: string) => {
  const body: SendMessageRequest = {
    chatId: chatId || config.chatId,
    message,
  };

  return api.post<SendMessageResponse>(`/sendMessage/${config.apiToken}`, body);
};

export const getChatHistory = async () => {
  const body: GetChatHistoryRequest = {
    chatId: config.chatId,
    count: 10,
  };

  return api.post<ChatMessage[]>(`/getChatHistory/${config.apiToken}`, body);
};

export const getStateInstance = async () => {
  return api.get<StateInstanceResponse>(`/getStateInstance/${config.apiToken}`);
};
