import styled from 'styled-components';

const Title = styled.h3`
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`;

const LeadText = styled.div`
  font-size: 1.25rem;
  font-weight: 300;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

export { Title, LeadText };
