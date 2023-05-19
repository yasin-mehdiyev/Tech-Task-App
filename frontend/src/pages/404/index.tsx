import { FC } from 'react';
// Custom Hooks
import useResources from '../../hooks/useResources';

const NotFound : FC = () => {
  const { resources } = useResources();
  return (
    <p className={"d-flex align-items-center justify-content-center h-100vh fs-22"}>{resources["errorPage"]}</p>
  )
}

export default NotFound;
