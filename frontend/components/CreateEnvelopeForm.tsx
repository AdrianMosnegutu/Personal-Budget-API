import { createEnvelope } from "@/services/api-manager";
import { EnvelopeResponse } from "@/types/api-types";
import { Dispatch, SetStateAction } from "react";
import EnvelopeFormBase from "./EnvelopeFormBase";
import { EnvelopeBase } from "@/types/base-types";

interface Props {
  setEnvelopes: Dispatch<SetStateAction<EnvelopeResponse[]>>;
}

export default function CreateEnvelopeForm({ setEnvelopes }: Props) {
  async function createEnvelopeLogic(envelope: EnvelopeBase) {
    try {
      const newEnvelope = await createEnvelope(envelope);

      if ("errorMessage" in newEnvelope) {
        throw new Error(newEnvelope.errorMessage);
      } else {
        setEnvelopes((prev) => [...prev, newEnvelope]);
      }
    } catch (err) {
      console.error(err instanceof Error ? err.message : "Unkown error");
    }
  }

  return (
    <EnvelopeFormBase
      initialCategory={"category"}
      initialBudget={1}
      formSubitLogic={createEnvelopeLogic}
      resetForm
    />
  );
}
