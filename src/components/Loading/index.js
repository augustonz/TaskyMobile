import React from 'react';
import {LoadingIcon, Container} from './styles';

export default function Loading() {
  return (
    <Container>
      <LoadingIcon name="spinner" />
    </Container>
  );
}
