import EnvelopesContainer from "@/components/EnvelopesContainer";
import { getEnvelopes } from "@/services/api-manager";

export default async function Home() {
  const response = await getEnvelopes();

  return (
    <>
      <h1>Welcome to your budget manager!</h1>
      {"errorMessage" in response ? (
        <h2>{response.errorMessage}</h2>
      ) : (
        <EnvelopesContainer envelopes={response} />
      )}
    </>
  );
}
