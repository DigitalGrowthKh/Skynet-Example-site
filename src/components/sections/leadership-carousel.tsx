'use client';

import { useEffect, useRef, useState } from 'react';
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
const AUTO_TRANSITION_MS = 600;
const MANUAL_TRANSITION_MS = 220;
const MANUAL_TRANSITION_BUFFER_MS = 120;

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
  const [transitionsEnabled, setTransitionsEnabled] = useState(true);
  const [transitionDurationMs, setTransitionDurationMs] = useState(AUTO_TRANSITION_MS);
  const previousCloneCountRef = useRef(0);
  const manualTransitionTimeoutRef = useRef<number | null>(null);
  const manualTransitionTokenRef = useRef(0);

  const profileCount = profiles.length;
  const cloneCount = Math.min(visibleCount, Math.max(profileCount, 1));
  const activeIndex = normalizeIndex(currentIndex - cloneCount, profileCount);

  const headClones = profileCount > 0 ? profiles.slice(-cloneCount) : [];
  const tailClones = profileCount > 0 ? profiles.slice(0, cloneCount) : [];
  const loopedProfiles = [...headClones, ...profiles, ...tailClones];

  const resetToIndex = (nextIndex: number) => {
    setTransitionsEnabled(false);
    setCurrentIndex(nextIndex);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionsEnabled(true);
      });
    });
  };

  const beginManualTransition = () => {
    manualTransitionTokenRef.current += 1;
    const token = manualTransitionTokenRef.current;

    setTransitionDurationMs(MANUAL_TRANSITION_MS);

    if (manualTransitionTimeoutRef.current !== null) {
      window.clearTimeout(manualTransitionTimeoutRef.current);
    }

    manualTransitionTimeoutRef.current = window.setTimeout(() => {
      if (manualTransitionTokenRef.current === token) {
        setTransitionDurationMs(AUTO_TRANSITION_MS);
      }
    }, MANUAL_TRANSITION_MS + MANUAL_TRANSITION_BUFFER_MS);
  };

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

  useEffect(() => {
    if (profileCount === 0) {
      return;
    }

    const previousCloneCount = previousCloneCountRef.current;

    setTransitionsEnabled(false);
    setCurrentIndex((prev) => normalizeIndex(prev - previousCloneCount, profileCount) + cloneCount);
    previousCloneCountRef.current = cloneCount;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionsEnabled(true);
      });
    });
  }, [cloneCount, profileCount]);

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

  useEffect(() => {
    return () => {
      if (manualTransitionTimeoutRef.current !== null) {
        window.clearTimeout(manualTransitionTimeoutRef.current);
      }
    };
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || prefersReducedMotion || profileCount <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setTransitionDurationMs(AUTO_TRANSITION_MS);
      setCurrentIndex((prev) => prev + 1);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion, profileCount]);

  useEffect(() => {
    if (!prefersReducedMotion || profileCount === 0) {
      return;
    }

    if (currentIndex < cloneCount) {
      setCurrentIndex(currentIndex + profileCount);
      return;
    }

    if (currentIndex >= profileCount + cloneCount) {
      setCurrentIndex(currentIndex - profileCount);
    }
  }, [cloneCount, currentIndex, prefersReducedMotion, profileCount]);

  const goToPrevious = () => {
    if (profileCount <= 1) {
      return;
    }

    beginManualTransition();
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (profileCount <= 1) {
      return;
    }

    beginManualTransition();
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    beginManualTransition();
    setCurrentIndex(index + cloneCount);
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
      {/* Carousel track */}
      <div className="overflow-hidden">
        <div
          className="flex"
          onTransitionEnd={() => {
            if (prefersReducedMotion || profileCount === 0) {
              return;
            }

            if (currentIndex < cloneCount) {
              resetToIndex(currentIndex + profileCount);
              return;
            }

            if (currentIndex >= profileCount + cloneCount) {
              resetToIndex(currentIndex - profileCount);
            }
          }}
          style={{
            transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCount})))`,
            transition:
              prefersReducedMotion || !transitionsEnabled
                ? 'none'
                : `transform ${transitionDurationMs}ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
          }}
        >
          {loopedProfiles.map((profile, idx) => {
            const profilePosition = normalizeIndex(idx - cloneCount, profileCount);
            const isVisible = idx >= currentIndex && idx < currentIndex + visibleCount;

            return (
              <div
                key={`${profile.name}-${idx}`}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3"
                role="group"
                aria-roledescription="slide"
                aria-label={`${profilePosition + 1} of ${profileCount}`}
                aria-hidden={!isVisible}
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
            );
          })}
        </div>
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
