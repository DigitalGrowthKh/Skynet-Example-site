import { type CSSProperties } from "react";

type FacebookEmbeddedPostProps = {
  postUrl: string;
  title?: string;
};

function getFacebookEmbedUrl(postUrl: string) {
  const encodedPostUrl = encodeURIComponent(postUrl);
  return `https://www.facebook.com/plugins/post.php?href=${encodedPostUrl}&show_text=true&width=500`;
}

const iframeStyle: CSSProperties = {
  border: "none",
  overflow: "hidden",
  width: "100%",
  background: "transparent",
};

export function FacebookEmbeddedPost({ postUrl, title = "Facebook embedded post" }: FacebookEmbeddedPostProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-white shadow-[0_12px_24px_-22px_rgba(8,16,26,0.22)]">
      <iframe
        title={title}
        src={getFacebookEmbedUrl(postUrl)}
        style={iframeStyle}
        width="100%"
        height="430"
        loading="lazy"
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}
