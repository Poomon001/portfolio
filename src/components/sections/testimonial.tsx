/**
 * A testimonial powered by embla-carousel
 **/
import React from "react";
import styled from "styled-components";
import { useContents } from "@/contexts/contents";
import type { TestimonialContent as TestimonialContentType } from "@/contexts/contents";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Quote from "@/components/quote";

// Wrapper for the entire testimonial section
const TestimonialSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 0.75rem 2rem 1.25rem;

  @media (min-width: 1152px) {
    padding: 4rem 2rem;
  }
`;

const TestimonialContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
`;

const TestimonialGrid = styled.div`
  display: none;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: 1152px) {
    display: flex;
  }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  @media (min-width: 1152px) {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
`;

const CarouselSlide = styled.div`
  flex: 0 0 100%;
  padding: 1rem;
`;

const TestimonialCarousel = ({ testimonials }: { testimonials: TestimonialContentType[] }) => {
  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: false,
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

  return (
    <CarouselWrapper ref={emblaRef}>
      <CarouselContainer>
        {testimonials.map((item) => (
          <CarouselSlide key={item.id}>
            <Quote item={item} />
          </CarouselSlide>
        ))}
      </CarouselContainer>
    </CarouselWrapper>
  );
};

const TestimonialGridLayout = ({ testimonials }: { testimonials: TestimonialContentType[] }) => (
  <TestimonialGrid>
    {testimonials.slice(0, 3).map((item) => (
      <Quote key={item.id} item={item} />
    ))}
  </TestimonialGrid>
);

const Testimonial = () => {
  const contents = useContents();
  const testimonials = contents.testimonial as TestimonialContentType[];

  return (
    <TestimonialSection>
      <TestimonialContainer>
        <TestimonialGridLayout testimonials={testimonials} />
        <TestimonialCarousel testimonials={testimonials} />
      </TestimonialContainer>
    </TestimonialSection>
  );
};

export default Testimonial;
