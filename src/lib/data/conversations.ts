import { Conversation } from "@/lib/types/chat";
import { CURRENT_USER_ID } from "@/lib/data/users";

export const CONVERSATIONS: Conversation[] = [
  {
    id: "conv2",
    participantIds: [CURRENT_USER_ID, "u5"],
    unreadCount: 1,
    messages: [
      {
        id: "m8",
        senderId: CURRENT_USER_ID,
        text: {
          en: "do you miss me as well?",
          zh: "你也想我吗？",
        },
        sentAt: "2026-09-03T20:15:00",
      },
      {
        id: "m9",
        senderId: "u5",
        text: { en: "meow", zh: "喵" },
        sentAt: "2026-09-03T20:17:00",
      },
    ],
  },
  {
    id: "conv-e1",
    eventId: "e1",
    participantIds: [CURRENT_USER_ID, "u10", "u4", "u8", "u5"],
    unreadCount: 3,
    messages: [
      {
        id: "g1",
        senderId: "u10",
        text: {
          en: "Welcome everyone — this is the group for Thursday's National Gallery tour. I'll post the meeting point here.",
          zh: "欢迎大家 —— 这是周四国家美术馆导览的群聊，集合地点我会发在这里。",
        },
        sentAt: "2026-09-05T09:00:00",
      },
      {
        id: "g2",
        senderId: "u10",
        text: {
          en: "Meeting point: main entrance on Trafalgar Square, under the portico. 2:50pm so we can hand out the headsets.",
          zh: "集合地点：特拉法加广场正门柱廊下，下午 2:50，方便分发耳机。",
        },
        sentAt: "2026-09-05T09:01:00",
      },
      {
        id: "g3",
        senderId: "u4",
        text: {
          en: "Perfect. Is there a cloakroom? I'll be coming straight from work with a bag.",
          zh: "好的。有寄存处吗？我下班直接过去，会带包。",
        },
        sentAt: "2026-09-05T09:14:00",
      },
      {
        id: "g4",
        senderId: "u10",
        text: {
          en: "Yes, free cloakroom just inside on the left. Large bags have to go in anyway.",
          zh: "有的，进门左手边有免费寄存，大包也必须寄存。",
        },
        sentAt: "2026-09-05T09:16:00",
      },
      {
        id: "g5",
        senderId: "u8",
        text: {
          en: "Is photography allowed? I'd love to shoot the Turner room if so.",
          zh: "可以拍照吗？如果可以我想拍透纳展厅。",
        },
        sentAt: "2026-09-05T10:02:00",
      },
      {
        id: "g6",
        senderId: "u10",
        text: {
          en: "No flash, no tripods, otherwise fine. The Turner is the finale — we spend a good ten minutes there.",
          zh: "不能用闪光灯和三脚架，其他都可以。透纳是压轴，我们会在那儿待十分钟左右。",
        },
        sentAt: "2026-09-05T10:05:00",
      },
      {
        id: "g7",
        senderId: "u5",
        text: {
          en: "Anyone fancy a coffee at the café afterwards? I'm not rushing off.",
          zh: "结束后有人想去咖啡厅坐坐吗？我不急着走。",
        },
        sentAt: "2026-09-05T11:20:00",
      },
      {
        id: "g8",
        senderId: CURRENT_USER_ID,
        text: { en: "I'm in for that.", zh: "我也去。" },
        sentAt: "2026-09-05T11:26:00",
      },
      {
        id: "g9",
        senderId: "u4",
        text: {
          en: "Same. See you all Thursday!",
          zh: "同去。周四见！",
        },
        sentAt: "2026-09-05T11:31:00",
      },
    ],
  },
  {
    id: "conv1",
    participantIds: [CURRENT_USER_ID, "u10"],
    messages: [
      {
        id: "m1",
        senderId: "u10",
        text: {
          en: "Hi Alex — you're on the list for Thursday's National Gallery tour.",
          zh: "Alex 你好，周四国家美术馆导览已经帮你登记好了。",
        },
        sentAt: "2026-09-04T18:02:00",
      },
      {
        id: "m2",
        senderId: CURRENT_USER_ID,
        text: {
          en: "Thank you! Where exactly do we meet?",
          zh: "谢谢！我们具体在哪里集合？",
        },
        sentAt: "2026-09-04T18:05:00",
      },
      {
        id: "m3",
        senderId: "u10",
        text: {
          en: "Main entrance on Trafalgar Square, under the portico. I'll have the headsets.",
          zh: "特拉法加广场正门柱廊下集合，我会带着耳机。",
        },
        sentAt: "2026-09-04T18:06:00",
      },
      {
        id: "m4",
        senderId: "u10",
        text: {
          en: "Come at 2:50 so we can hand them out before we start.",
          zh: "2:50 到就好，方便开始前发耳机。",
        },
        sentAt: "2026-09-04T18:07:00",
      },
      {
        id: "m5",
        senderId: CURRENT_USER_ID,
        text: {
          en: "Perfect. Is the Turner included in the route?",
          zh: "好的。路线里包含透纳的作品吗？",
        },
        sentAt: "2026-09-04T18:10:00",
      },
      {
        id: "m6",
        senderId: "u10",
        text: {
          en: "It's the finale — we spend a good ten minutes in front of it.",
          zh: "那是压轴 —— 我们会在画前待上十分钟。",
        },
        sentAt: "2026-09-04T18:11:00",
      },
      {
        id: "m7",
        senderId: CURRENT_USER_ID,
        text: { en: "Can't wait. See you Thursday!", zh: "太期待了，周四见！" },
        sentAt: "2026-09-04T18:12:00",
      },
    ],
  },
  {
    id: "conv3",
    participantIds: [CURRENT_USER_ID, "u2"],
    messages: [
      {
        id: "m13",
        senderId: "u2",
        text: { en: "Still coming to board games Tuesday?", zh: "周二桌游还来吗？" },
        sentAt: "2026-09-03T12:00:00",
      },
      {
        id: "m14",
        senderId: CURRENT_USER_ID,
        text: {
          en: "Wouldn't miss it. Are we doing Catan again?",
          zh: "肯定来。还是玩卡坦岛吗？",
        },
        sentAt: "2026-09-03T12:04:00",
      },
      {
        id: "m15",
        senderId: "u2",
        text: {
          en: "Yes, bringing the expansion so we can fit more players.",
          zh: "是的，我带扩展包，可以多几个人一起玩。",
        },
        sentAt: "2026-09-03T12:05:00",
      },
      {
        id: "m16",
        senderId: CURRENT_USER_ID,
        text: { en: "Nice, I'll bring snacks.", zh: "好，我带零食。" },
        sentAt: "2026-09-03T12:06:00",
      },
      {
        id: "m17",
        senderId: "u2",
        text: { en: "You're the real MVP of this club.", zh: "你才是这个社群的功臣。" },
        sentAt: "2026-09-03T12:07:00",
      },
    ],
  },
];

export function getConversationById(id: string): Conversation | undefined {
  return CONVERSATIONS.find((conversation) => conversation.id === id);
}

export function getOtherParticipantId(conversation: Conversation): string {
  return (
    conversation.participantIds.find((id) => id !== CURRENT_USER_ID) ??
    conversation.participantIds[0]
  );
}
