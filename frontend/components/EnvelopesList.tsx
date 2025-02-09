import { EnvelopeResponse } from "@/types/api-types";
import Envelope from "./Envelope";
import { Dispatch, SetStateAction } from "react";

interface Props {
  envelopes: EnvelopeResponse[];
  setEnvelopes: Dispatch<SetStateAction<EnvelopeResponse[]>>;
}

export default function EnvelopesList({ envelopes, setEnvelopes }: Props) {
  return (
    <ul>
      {envelopes.map((envelope) => (
        <Envelope
          key={envelope.id}
          envelope={envelope}
          setEnvelopes={setEnvelopes}
        />
      ))}
    </ul>
  );
}
