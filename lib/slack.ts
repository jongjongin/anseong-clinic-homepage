/**
 * 슬랙 알림 전송.
 * 봇 토큰(chat.postMessage)을 우선 사용하고, 없으면 Incoming Webhook으로 보낸다.
 */
export async function sendSlackMessage(text: string): Promise<boolean> {
  const botToken = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHANNEL_ID;

  if (botToken && channel) {
    const response = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${botToken}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ channel, text, unfurl_links: false }),
    });

    const result = (await response.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
    };

    if (result.ok) {
      return true;
    }

    console.error("[slack] chat.postMessage failed:", result.error);
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  return response.ok;
}

export const ADMIN_LINK = "<https://anseong365.com/admin/reservations|관리자 페이지에서 차트 등록 완료 처리>";
