import React from 'react';
import { ApolloSandbox } from '@apollo/sandbox/react';
import styles from './styles.module.less';

const SandboxGQL: React.FC = () => {
  return (
    <div className={styles.cont}>
      <ApolloSandbox
        initialEndpoint='https://www.kodeneko.com/lionmiss/gql/'
      />
    </div>
  );
};

export default SandboxGQL;