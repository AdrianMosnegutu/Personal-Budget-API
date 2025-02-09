import { deleteEnvelope } from "@/services/api-manager";
import { EnvelopeResponse } from "@/types/api-types";
import { Dispatch, SetStateAction, useState } from "react";
import ModifyEnvelopeForm from "./ModifyEnvelopeForm";
import { getErrorMessage } from "@/services/helpers";

interface Props {
  envelope: EnvelopeResponse;
  setEnvelopes: Dispatch<SetStateAction<EnvelopeResponse[]>>;
}

export default function Envelope({
  envelope: mainEnvelope,
  setEnvelopes,
}: Props) {
  const [envelope, setEnvelope] = useState(mainEnvelope);
  const [modifying, setModifying] = useState(false);

  async function handleDeleteEnvelope() {
    try {
      const response = await deleteEnvelope(envelope.id);

      if (response) {
        console.error(response.errorMessage);
        return;
      }

      setEnvelopes((prev) => prev.filter((item) => item.id !== envelope.id));
    } catch (err) {
      console.error(getErrorMessage(err));
    }
  }

  return (
    <li>
      {modifying ? (
        <ModifyEnvelopeForm
          envelope={envelope}
          setEnvelope={setEnvelope}
          setModifying={setModifying}
        />
      ) : (
        <>
          <h3>Category: {envelope.category}</h3>
          <p>Budget: {envelope.budget}$</p>
          <button onClick={() => setModifying(true)}>Modify</button>
          <button onClick={handleDeleteEnvelope}>Delete</button>
        </>
      )}
    </li>
  );
}
