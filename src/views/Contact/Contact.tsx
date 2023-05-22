/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BtnLMH, InputLMH, TextAreaLMH } from '../../component/forms';
import { Card } from '../../component';
import styles from './styles.module.css';
import { object, string, Schema } from 'yup';
import { MsgLMH } from '../../models';
import { useFormik } from 'formik';
import { sendMail } from '../../api';
import rolling from '../../assets/pics/rolling.png';
import { toast } from 'react-toastify';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [ isSending, setIsSending ] = useState<boolean>(false);

  const msgSchema: Schema<MsgLMH> = object({
    name: string().required(t('hint.required') ?? ''),
    mail: string().email(t('hint.mail') ?? '').required(t('hint.required') ?? ''),
    content: string().min(30, t('hint.msg') ?? '').required(t('hint.required') ?? ''),
  });

  // eslint-disable-next-line @typescript-eslint/typedef
  const formik = useFormik<MsgLMH>({
    initialValues: {
      name: '',
      mail: '',
      content: ''
    },
    validationSchema: msgSchema,
    onSubmit: (): void => {},
  });

  return (
    <Card title={t('contact.title')}>
      <form onSubmit={(e): void => { 
        e.preventDefault();
        setIsSending(true);
        sendMail(formik.values as MsgLMH)
          .then(() => toast.success(t('contact.sucess')))
          .catch(() => toast.error(t('contact.error')))
          .finally(() => setIsSending(false));
      }}>
        <InputLMH
          id="name"
          label={t('labels.name')}
          placeholder={t('placeholder.name') as string}
          value={formik.values.name}
          error={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <InputLMH
          id="mail"
          label={t('labels.mail')}
          placeholder={t('placeholder.mail') as string}
          value={formik.values.mail}
          error={formik.touched.mail && formik.errors.mail ? formik.errors.mail : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextAreaLMH
          id="content"
          label={t('labels.msg')}
          placeholder={t('placeholder.msg') as string}
          value={formik.values.content}
          error={formik.touched.content && formik.errors.content ? formik.errors.content : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className={styles.actions} >
          <BtnLMH 
            label={isSending ? <img className={styles.rolling} src={rolling} /> : <span>{t('labels.send')}</span>}
            disabled={!formik.dirty || (formik.dirty && !formik.isValid) || isSending}
            type='submit'
          />
        </div>
      </form>
    </Card>
  );
};

export default Contact;