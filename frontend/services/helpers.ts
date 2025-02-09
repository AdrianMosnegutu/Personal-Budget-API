function getErrorMessage(err: unknown): string {
  return err instanceof Error ? err.message : "Unkown error";
}

export { getErrorMessage };
