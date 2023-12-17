import React from 'react';
import { Skeleton } from 'src/components/Skeleton';

type WithSkeletonProps = {
  isLoading: boolean,
}

export const withSkeletone = <P extends object> (
  Component: React.ComponentType<P>
  ): React.ComponentType<P & WithSkeletonProps> =>
  ({ isLoading, ...restProps}) => {
    if (isLoading) {
      return <Skeleton />
    }

    return <Component {...(restProps as P)} />;
  }
  
