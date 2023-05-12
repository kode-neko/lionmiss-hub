import React from 'react';
import { SocialCont } from './types';
import { MenuOptionLMH } from '../../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './styles.module.less';
import { useTranslation } from 'react-i18next';

const SocialCont: React.FC<SocialCont> = ({ list }: SocialCont) => {
  const { t } = useTranslation();
  return (
    <div className={styles.cont}>
      <div className={styles.msg}>{t('msgs.rrss')}</div>
      <ul>
        {list.map((soc: MenuOptionLMH) => <li key={soc.name}><a href={soc.path} target='_blank' rel="noreferrer"><FontAwesomeIcon className={styles.icon} icon={soc.icon as IconProp} /></a></li>)}
      </ul>
    </div>
  );
};

export default SocialCont;