"use client";

import EnvelopesList from "./EnvelopesList";
import { useState } from "react";
import { EnvelopeResponse } from "@/types/api-types";
import CreateEnvelopeForm from "./CreateEnvelopeForm";

interface Props {
  envelopes: EnvelopeResponse[];
}

export default function EnvelopesContainer({
  envelopes: initialEnvelopes,
}: Props) {
  const [envelopes, setEnvelopes] = useState(initialEnvelopes);

  return (
    <div>
      <EnvelopesList envelopes={envelopes} setEnvelopes={setEnvelopes} />
      <CreateEnvelopeForm setEnvelopes={setEnvelopes} />
    </div>
  );
}
