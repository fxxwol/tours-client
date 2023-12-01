import React from 'react';
import { TailSpin } from 'react-loader-spinner'
import { LoaderWrapper } from './Loader.styled';

function Loader() {
  return (
    <LoaderWrapper>
      <TailSpin
        height="80"
        width="80"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </LoaderWrapper>
  );
}

export default Loader;
