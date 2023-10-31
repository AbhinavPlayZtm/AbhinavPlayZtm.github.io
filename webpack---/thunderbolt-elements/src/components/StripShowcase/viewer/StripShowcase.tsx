import * as React from 'react';
import {
  StripShowcaseProps,
  StripShowcaseImperativeActions,
} from '../StripShowcase.types';
import TPAGallery from '../../TPAGallery/viewer/TPAGallery';

const StripShowcase: React.ForwardRefRenderFunction<
  StripShowcaseImperativeActions,
  StripShowcaseProps
> = (props, forwardRef) => {
  return <TPAGallery {...props} forwardRef={forwardRef}></TPAGallery>;
};

export default React.forwardRef(StripShowcase);
