// A successful honeypot response deliberately has no provider acceptance ID.
// Acceptance is not proof of inbox delivery or a qualified customer enquiry.
export function isAcceptedProposal(result: unknown) {
  if (!result || typeof result !== "object") return false;
  const response = result as { success?: unknown; id?: unknown };
  return (
    response.success === true &&
    typeof response.id === "string" &&
    response.id.trim().length > 0
  );
}
