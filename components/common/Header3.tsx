import { FC } from 'react';

const Header3: FC = ({ children }) => {
  return (
    <h3
      css={{
        fontWeight: 700,
        fontSize: '1rem',
        marginBottom: '.5rem',
      }}
    >
      {children}
    </h3>
  );
};

export default Header3;
