import { Box, BoxProps } from '@chakra-ui/react';

export function BgImage(props: BoxProps) {
  return (
    <Box
      w="100%"
      h="100%"
      bgImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      bgSize={'cover'}
      bgPosition={'center center'}
      {...props}
    />
  );
}
