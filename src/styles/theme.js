import { UserThemeProvider } from '../components/UserThemeContext';

import theme from "../themes/default";
import GlobalStyles from './globals';

const Theme = ({ children }) => (
  <UserThemeProvider>
    <GlobalStyles />
    {children}
  </UserThemeProvider>
);

export default Theme;