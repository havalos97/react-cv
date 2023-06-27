import {useCallback, useMemo, useState} from 'react';
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';

import Spinner from '../../Spinner';
import Toast from '../../Toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const {executeRecaptcha} = useGoogleReCaptcha();
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({
        ...data,
        ...fieldData,
      });
    },
    [data],
  );

  const sendContactForm = useCallback(
    async (formData: FormData) => {
      setLoading(true);
      if (!executeRecaptcha) return;

      try {
        const token = await executeRecaptcha('contactFormSubmit');
        if (!token) return;

        await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({...formData, token}),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
      } finally {
        setLoading(false);
        setSuccess(true);
        setData({
          name: '',
          email: '',
          message: '',
        });
        setTimeout(() => {
          setSuccess(false);
        }, 3e3);
      }
    },
    [executeRecaptcha],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      sendContactForm(data);
    },
    [data, sendContactForm],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
        value={data.name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      {isLoading && <Spinner />}
      {!isLoading && success && <Toast text="Email has been sent!" />}
      {!isLoading && (
        <button
          aria-label="Submit contact form"
          className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
          type="submit">
          Send Message
        </button>
      )}
    </form>
  );
};

ContactForm.displayName = 'ContactForm';
export default ContactForm;
