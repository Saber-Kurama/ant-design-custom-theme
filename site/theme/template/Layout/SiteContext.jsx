import * as React from 'react';

// export interface SiteContextProps {
//   isMobile: boolean;
//   direction: string;
// }

const SiteContext = React.createContext({
  isMobile: false,
  direction: 'ltr',
});

export default SiteContext;
