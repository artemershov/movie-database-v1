import Row from 'reactstrap/lib/Row';
import styled from 'styled-components';

const RowXS = styled(Row)`
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  > [class*='col-'] {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`;
const RowSM = styled(Row)`
  margin-right: -1rem;
  margin-left: -1rem;
  > [class*='col-'] {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;
const RowMD = styled(Row)`
  margin-right: -1.5rem;
  margin-left: -1.5rem;
  > [class*='col-'] {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
`;
const RowLG = styled(Row)`
  margin-right: -2rem;
  margin-left: -2rem;
  > [class*='col-'] {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

export { RowXS, RowSM, RowMD, RowLG };
