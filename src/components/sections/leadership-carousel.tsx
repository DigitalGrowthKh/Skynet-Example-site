'use client';

import { useEffect, useMemo, useState } from 'react';
import { PlaceholderImage } from '@/components/ui/placeholder-image';
import { placeholderAssets } from '@/lib/placeholders';

interface Profile {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface LeadershipCarouselProps {
  profiles: Profile[];
}

const AUTO_ADVANCE_MS = 5500;

function normalizeIndex(index: number, length: number) {
  if (length === 0) {
    return 0;
  }

  return ((index % length) + length) % length;
}

export function LeadershipCarousel({ profiles }: LeadershipCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const profileCount = profiles.length;
  const activeIndex = normalizeIndex(currentIndex, profileCount);
  const renderedCount = Math.min(visibleCount, Math.max(profileCount, 1));

  const visibleProfiles = useMemo(() => {
    if (profileCount === 0) {
      return [];
    }

    return Array.from({ length: renderedCount }, (_, offset) => {
      const profileIndex = normalizeIndex(activeIndex + offset, profileCount);
      return {
        profile: profiles[profileIndex],
        profileIndex,
      };
    });
  }, [activeIndex, profileCount, profiles, renderedCount]);

  // Detect screen size and set visible count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || prefersReducedMotion || profileCount <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion, profileCount]);

  const goToPrevious = () => {
    if (profileCount <= 1) {
      return;
    }

    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (profileCount <= 1) {
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <div
      className="space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Leadership team carousel"
      tabIndex={0}
    >
      {/* Carousel cards */}
      <div className="flex">
        {visibleProfiles.map(({ profile, profileIndex }, slotIndex) => (
          <div
            key={`${profile.name}-${profileIndex}-${slotIndex}`}
            className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3"
            role="group"
            aria-roledescription="slide"
            aria-label={`${profileIndex + 1} of ${profileCount}`}
            aria-hidden={false}
          >
            <article className="leader-card-carousel group">
              <div className="leader-media-carousel">
                <PlaceholderImage
                  src={`/${profile.image}`}
                  fallbackSrc={placeholderAssets.fallback}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 48vw, 32vw"
                  className="leader-portrait transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="leader-overlay" />
              </div>
              <div className="leader-body-carousel">
                <p className="leader-name-carousel">{profile.name}</p>
                <p className="leader-role-carousel">{profile.role}</p>
                <p className="leader-bio-carousel">{profile.bio}</p>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Navigation buttons and indicators */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={goToPrevious}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] transition-colors hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"
          aria-label="Previous slide"
          type="button"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2" role="tablist" aria-label="Carousel slides">
          {profiles.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === activeIndex
                  ? 'w-6 bg-[var(--brand-red)]'
                  : 'bg-[var(--border-subtle)] hover:bg-[var(--text-muted)]'
              }`}
              aria-label={`Slide ${idx + 1}`}
              aria-selected={idx === activeIndex}
              role="tab"
              type="button"
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] transition-colors hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"
          aria-label="Next slide"
          type="button"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
