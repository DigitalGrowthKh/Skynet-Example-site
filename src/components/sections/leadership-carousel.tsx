'use client';

import { useState, useEffect } from 'react';
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

export function LeadershipCarousel({ profiles }: LeadershipCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion, profiles.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
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
      {/* Carousel track */}
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCount})))`,
            transition: prefersReducedMotion ? 'none' : 'transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          {profiles.map((profile, idx) => (
            <div
              key={profile.name}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3"
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${profiles.length}`}
              aria-hidden={idx < currentIndex || idx >= currentIndex + visibleCount}
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
                idx === currentIndex
                  ? 'w-6 bg-[var(--brand-red)]'
                  : 'bg-[var(--border-subtle)] hover:bg-[var(--text-muted)]'
              }`}
              aria-label={`Slide ${idx + 1}`}
              aria-selected={idx === currentIndex}
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
