import { EnvelopeBase } from "./base-types";

interface EnvelopeResponse extends EnvelopeBase {
  id: number;
}

interface ErrorResponse {
  errorMessage: string;
}

export type { EnvelopeResponse, ErrorResponse };
