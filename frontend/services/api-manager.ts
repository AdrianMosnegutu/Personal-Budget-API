import { EnvelopeResponse, ErrorResponse } from "@/types/api-types";
import { EnvelopeBase } from "@/types/base-types";
import axios from "axios";
import { getErrorMessage } from "./helpers";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getEnvelopes(): Promise<EnvelopeResponse[] | ErrorResponse> {
  const url = BACKEND_URL + "/envelopes";

  try {
    const response = await axios.get(url);
    return response.data as EnvelopeResponse[];
  } catch (err) {
    return {
      errorMessage: getErrorMessage(err),
    };
  }
}

async function createEnvelope(
  envelope: EnvelopeBase,
): Promise<EnvelopeResponse | ErrorResponse> {
  const url = BACKEND_URL + "/envelopes";

  try {
    const response = await axios.post(url, envelope);
    return response.data as EnvelopeResponse;
  } catch (err) {
    return {
      errorMessage: getErrorMessage(err),
    };
  }
}

async function deleteEnvelope(id: number): Promise<ErrorResponse | null> {
  const url = BACKEND_URL + `/envelopes/${id}`;

  try {
    await axios.delete(url);
    return null;
  } catch (err) {
    return {
      errorMessage: getErrorMessage(err),
    };
  }
}

async function modifyEnvelope(
  id: number,
  envelope: EnvelopeBase,
): Promise<EnvelopeResponse | ErrorResponse> {
  const url = BACKEND_URL + `/envelopes/${id}`;

  try {
    const response = await axios.patch(url, envelope);
    return response.data;
  } catch (err) {
    return {
      errorMessage: getErrorMessage(err),
    };
  }
}

export { getEnvelopes, createEnvelope, deleteEnvelope, modifyEnvelope };
