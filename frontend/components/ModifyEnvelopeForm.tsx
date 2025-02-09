import { modifyEnvelope } from "@/services/api-manager";
import { EnvelopeResponse } from "@/types/api-types";
import { Dispatch, SetStateAction } from "react";
import EnvelopeFormBase from "./EnvelopeFormBase";
import { EnvelopeBase } from "@/types/base-types";

interface Props {
  envelope: EnvelopeResponse;
  setEnvelope: Dispatch<SetStateAction<EnvelopeResponse>>;
  setModifying: Dispatch<SetStateAction<boolean>>;
}

export default function ModifyEnvelopeForm({
  envelope: initialEnvelope,
  setEnvelope,
  setModifying,
}: Props) {
  async function modifyEnvelopeLogic(envelope: EnvelopeBase) {
    const response = await modifyEnvelope(initialEnvelope.id, envelope);

    if ("errorMessage" in response) {
      console.error(response.errorMessage);
      return;
    }

    setEnvelope(response);
    setModifying(false);
  }

  return (
    <EnvelopeFormBase
      initialCategory={initialEnvelope.category}
      initialBudget={initialEnvelope.budget}
      formSubitLogic={modifyEnvelopeLogic}
    />
  );
}
