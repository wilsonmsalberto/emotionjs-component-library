import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers);