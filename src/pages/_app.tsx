import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';

const MyApp = ({Component, pageProps}: AppProps) => {
  console.log(process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string);
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}>
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
};

export default MyApp;
