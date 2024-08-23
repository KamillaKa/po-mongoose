type MessageResponse = {
  message: string;
}

type ErrorResponse = MessageResponse & {
  stack?: string;
}

type DBMessageResponse = MessageResponse & {
  data: object;
}

export {MessageResponse, ErrorResponse, DBMessageResponse};
