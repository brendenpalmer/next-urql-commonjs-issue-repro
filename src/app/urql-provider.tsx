'use client';

import { UrqlProvider, Client, fetchExchange, ssrExchange } from '@urql/next';
import { PropsWithChildren } from 'react';

export function AppUrqlProvider({ children }: PropsWithChildren) {
  const ssr = ssrExchange();

  const client = new Client({
    url: 'https://trygql.formidable.dev/graphql/basic-pokedex',
    exchanges: [ssr, fetchExchange],
  });

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}
