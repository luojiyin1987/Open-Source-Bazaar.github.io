import { MDXProvider } from '@mdx-js/react';
import type { FC, PropsWithChildren } from 'react';
import { Card, Container } from 'react-bootstrap';

import styles from '../../styles/Home.module.scss';
import pageContentStyles from './PageContent.module.scss';

export type PageContentProps = PropsWithChildren<{}>;

const components = {
  h1: ({ children }: PropsWithChildren<{}>) => (
    <h1 className="bg-info text-center fw-bolder" style={{ color: 'red' }}>
      {children}
    </h1>
  ),
};

export const PageContent: FC<PageContentProps> = ({ children }) => (
  <main
    className={`d-flex flex-column justify-content-start align-items-center bg-secondary bg-gradient text-dark bg-opacity-10 ${styles.main}`}
  >
    <Container>
      <Card body className={`p-5 lh-base ${pageContentStyles.MDXProvider}`}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Card>
    </Container>
  </main>
);
