import { memo } from 'react';

import { formatYear } from '@/utils/date';

const Footer = () => (
  <footer className="bg-muted p-4 text-center text-muted-foreground">
    <p>© {formatYear()} React 19 Boilerplate</p>
  </footer>
);

export default memo(Footer);
