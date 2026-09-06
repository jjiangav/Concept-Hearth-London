"use client";

import Link from "next/link";
import { TopBar } from "@/components/ui/TopBar";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Avatar } from "@/components/ui/Avatar";
import { VerifiedBadge } from "@/components/ui/VerifiedBadge";
import { CONVERSATIONS, getOtherParticipantId } from "@/lib/data/conversations";
import { getUserById, CURRENT_USER_ID } from "@/lib/data/users";
import { getEventById } from "@/lib/data/events";
import { isGroupConversation } from "@/lib/types/chat";
import { useAppState } from "@/lib/context/AppStateContext";
import { formatMessageTime } from "@/lib/utils";

export default function ChatListPage() {
  const { t, tx, lang, getMessages } = useAppState();

  return (
    <>
      <TopBar title={t("chatTitle")} large action={<LanguageToggle />} />

      <ul className="divide-y divide-hearth-ink/8 pb-24">
        {CONVERSATIONS.map((conversation) => {
          const messages = getMessages(conversation.id);
          const last = messages[messages.length - 1];
          const isGroup = isGroupConversation(conversation);
          const event = conversation.eventId
            ? getEventById(conversation.eventId)
            : undefined;
          const other = isGroup
            ? undefined
            : getUserById(getOtherParticipantId(conversation));

          if (!isGroup && !other) return null;

          const title = event
            ? tx(event.title)
            : conversation.title
              ? tx(conversation.title)
              : lang === "zh" && other?.nameZh
                ? other.nameZh
                : (other?.name ?? "");

          const lastSender = last ? getUserById(last.senderId) : undefined;
          const senderPrefix =
            isGroup && last
              ? `${
                  last.senderId === CURRENT_USER_ID
                    ? t("you")
                    : lang === "zh" && lastSender?.nameZh
                      ? lastSender.nameZh
                      : (lastSender?.name.split(" ")[0] ?? "")
                }: `
              : "";

          return (
            <li key={conversation.id}>
              <Link
                href={`/chat/${conversation.id}`}
                className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-hearth-cream-dark/40"
              >
                {event ? (
                  <span className="h-12 w-12 shrink-0 overflow-hidden rounded-[6px] border-2 border-hearth-gold bg-hearth-cream-dark">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={event.posterUrl}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </span>
                ) : (
                  <Avatar name={other!.name} src={other!.avatarUrl} size="md" />
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="flex min-w-0 items-center gap-1.5 text-[15px] font-semibold text-hearth-ink">
                      <span className="truncate">{title}</span>
                      {!isGroup && other?.verified && <VerifiedBadge />}
                    </p>
                    {last && (
                      <span className="shrink-0 text-[11px] text-hearth-charcoal-soft">
                        {formatMessageTime(last.sentAt, lang)}
                      </span>
                    )}
                  </div>

                  {isGroup && (
                    <p className="mt-0.5 text-[11px] uppercase tracking-widest text-hearth-gold">
                      {t("eventGroup")} · {conversation.participantIds.length}{" "}
                      {t("groupMembers")}
                    </p>
                  )}

                  <p className="mt-0.5 truncate text-[13px] text-hearth-charcoal-soft">
                    {last ? `${senderPrefix}${tx(last.text)}` : t("noMessages")}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
