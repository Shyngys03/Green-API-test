export interface SendMessageResponse {
  idMessage: string;
}

export interface SendMessageRequest {
  chatId: string;
  message: string;
}

export interface ChatMessage {
  idMessage: string;
  textMessage?: string;
  timestamp?: number;
  type?: string;
}

export interface GetChatHistoryRequest {
  chatId: string;
  count: number;
}

export interface StateInstanceResponse {
  stateInstance: "authorized" | "notAuthorized" | string;
}
