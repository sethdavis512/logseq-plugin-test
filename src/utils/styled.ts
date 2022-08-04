// import {Resolver} from '@parcel/plugin';
// import path from 'path';

import { css, SystemStyleObject } from '@styled-system/css';
import { CSSObject } from '@emotion/styled';
import { ElementType } from 'react';

import { Theme } from '../utils/theme';

// export default new Resolver({
//   async resolve({specifier}) {
//     if (specifier === '@styled-system/css') {
//       return {
//         filePath: '@types/styled-systemcss__'
//       };
//     }

//     // Let the next resolver in the pipeline handle 
//     // this dependency.
//     return null;
//   }
// });

export interface StyleProps {
  as?: ElementType;
  sx?: SystemStyleObject;
  theme?: Theme;
}

export const sxPropHelper = (props: StyleProps): CSSObject => themeHelper(props.sx)(props);

export const themeHelper =
  (input?: SystemStyleObject | SystemStyleObject[]) =>
  (props?: any): CSSObject => {
    return css(input)(props.theme);
  };
