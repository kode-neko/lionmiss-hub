/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BtnLMH, InputLMH, TextAreaLMH } from '../../component/forms';
import { Card } from '../../component';
import styles from './styles.module.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Card title={t('contact.title')}>
      <form>
        <InputLMH
          id="name"
          label={t('labels.name')}
          placeholder={t('placeholder.name') as string}
          value=''
          hint={t('hint.test') as string}
          error={t('hint.error') as string}
          onChange={():void => console.log('onChange')}
          onBlur={():void => console.log('onChange')}
        />
        <InputLMH
          id="mail"
          label={t('labels.mail')}
          placeholder={t('placeholder.mail') as string}
          value=''
          hint={t('hint.test') as string}
          error={t('hint.error') as string}
          onChange={():void => console.log('onChange')}
          onBlur={():void => console.log('onChange')}
        />
        <TextAreaLMH
          id="msg"
          label={t('labels.msg')}
          placeholder={t('placeholder.msg') as string}
          value=''
          hint={t('hint.test') as string}
          error={t('hint.error') as string}
          onChange={():void => console.log('onChange')}
          onBlur={():void => console.log('onChange')}
        />
        <div className={styles.actions} >
          <BtnLMH 
            label={t('labels.send')} 
            onClick={():void => console.log('onClick')} 
          />
        </div>
      </form>
    </Card>
  );
};

export default Contact;