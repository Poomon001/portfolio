import type { TestimonialContent } from "@/contexts/contents";
import styled from "styled-components";

const QuoteItem = styled.div`
  max-width: 800px;
  margin: 0 auto;
  @media (min-width: 1152px) {
    max-width: 350px;
    flex: 1 1 300px;
  }
`;

const QuoteIcon = styled.img`
  height: 1.75rem;
  color: #666;
  width: auto;
`;

const BlockQuote = styled.blockquote`
  p {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const CaptionText = styled.div`
  display: flex;
  gap: 0.75rem;

  & > div:first-child {
    padding-right: 0.75rem;
    font-weight: 500;
    color: #666;
  }

  & > div:last-child {
    padding-right: 0.75rem;
    font-size: 0.875rem;
    font-weight: 300;
    color: #666;
  }
`;

const Quote = ({ item }: { item: TestimonialContent }) => (
  <QuoteItem>
    <QuoteIcon src='./quote.svg' alt='quote icon' />
    <BlockQuote>
      <p>{item.testimonial}</p>
      <CaptionText>
        <div>
          {item.source} &#8226; {item.company}
        </div>
      </CaptionText>
    </BlockQuote>
  </QuoteItem>
);

export default Quote;
