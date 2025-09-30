import React from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

export interface VideoItem { id: string; title?: string; thumbTitle?: string; }
export interface TestimonialsVideoWallProps { main: VideoItem; side: VideoItem[]; heading?: string; id?: string; }

/**
 * Video testimonial wall replicating provided layout: one large video left, three stacked right.
 */
export const TestimonialsVideoWall: React.FC<TestimonialsVideoWallProps> = ({
  main,
  side,
  heading = 'Testimonials',
  id = 'testimonials',
}) => {
  const embed = (v: VideoItem, variant: 'main' | 'small') => (
    <div className={`relative w-full overflow-hidden rounded-lg bg-gray-200 shadow-sm ${variant === 'main' ? 'pb-[56.25%]' : 'pb-[56.25%]'} group`}> 
      <iframe
        className="absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-[1.01]"
        src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
        title={v.title || 'Client testimonial video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );

  return (
    <Section id={id} className="bg-white" spacing="xl">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">{heading}</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3">{embed(main, 'main')}</div>
          <div className="space-y-3">{side.slice(0,3).map(v => <div key={v.id}>{embed(v,'small')}</div>)}</div>
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsVideoWall;
