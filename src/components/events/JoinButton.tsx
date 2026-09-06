"use client";

import { Button } from "@/components/ui/Button";
import { useAppState } from "@/lib/context/AppStateContext";

export function JoinButton({ eventId }: { eventId: string }) {
  const { isEventJoined, toggleJoinEvent, t } = useAppState();
  const joined = isEventJoined(eventId);

  return (
    <Button
      variant={joined ? "success" : "primary"}
      size="lg"
      fullWidth
      onClick={() => toggleJoinEvent(eventId)}
    >
      {joined ? `✓ ${t("joined")}` : t("join")}
    </Button>
  );
}
