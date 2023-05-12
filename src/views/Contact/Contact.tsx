/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React, { FormEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { BtnLMH, InputLMH, TextAreaLMH } from '../../component/forms';
import { Card } from '../../component';
import styles from './styles.module.css';
import { object, string, Schema } from 'yup';
import { MsgLMH } from '../../models';
import { useFormik } from 'formik';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const msgSchema: Schema<MsgLMH> = object({
    name: string().required(),
    mail: string().required().email(),
    msg: string().required().min(50),
  });

  // eslint-disable-next-line @typescript-eslint/typedef
  const formik = useFormik<MsgLMH>({
    initialValues: {
      name: '',
      mail: '',
      msg: ''
    },
    validationSchema: msgSchema,
    onSubmit: (values: MsgLMH): void => {
      console.log(values);
    }
  });

  return (
    <Card title={t('contact.title')}>
      <form onSubmit={(e): void => e.preventDefault()}>
        <InputLMH
          id="name"
          label={t('labels.name')}
          placeholder={t('placeholder.name') as string}
          value={formik.values.name}
          hint={t('hint.test') as string}
          error={t('hint.error') as string}
          onChange={formik.handleChange}
          onBlur={():void => console.log('onChange')}
        />
        <InputLMH
          id="mail"
          label={t('labels.mail')}
          placeholder={t('placeholder.mail') as string}
          value={formik.values.mail}
          hint={t('hint.test') as string}
          error={t('hint.error') as string}
          onChange={formik.handleChange}
          onBlur={():void => console.log('onChange')}
        />
        <TextAreaLMH
          id="msg"
          label={t('labels.msg')}
          placeholder={t('placeholder.msg') as string}
          value={formik.values.msg}
          hint={t('hint.test') as string}
          error={t('hint.error') as string}
          onChange={formik.handleChange}
          onBlur={():void => console.log('onChange')}
        />
        <div className={styles.actions} >
          <BtnLMH 
            label={t('labels.send')}
            type='submit'
            onClick={():void => console.log(formik.values)} 
          />
        </div>
      </form>
    </Card>
  );
};

export default Contact;