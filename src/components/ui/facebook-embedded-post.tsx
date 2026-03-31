'use client';

import { type CSSProperties, useEffect, useRef, useState } from 'react';

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
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver not supported, mount immediately
    if (!('IntersectionObserver' in window)) {
      setIsMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsMounted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px' } // Start loading 100px before the element enters viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-white shadow-[0_12px_24px_-22px_rgba(8,16,26,0.22)]"
      style={{ aspectRatio: '1 / 1.16', minHeight: '430px' }} // Reserve space to prevent CLS
    >
      {isMounted && (
        <iframe
          title={title}
          src={getFacebookEmbedUrl(postUrl)}
          style={iframeStyle}
          width="100%"
          height="430"
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      )}
    </div>
  );
}
