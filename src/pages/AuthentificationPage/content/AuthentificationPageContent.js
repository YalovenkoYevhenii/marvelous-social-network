import React, { useState } from 'react';

import LoginForm from '../../../components/forms/SignInForm/SignInForm';
import SignUp from '../../../components/forms/SignUpForm/SignUpForm';
import ButtonGroupOfTwo from '../../../components/ButtonGroupOfTwo/ButtonGroupOfTwo';

const AuthentificationPageContent = () => {
  const [form, setForm] = useState(true);
  return (
    <div>
      <ButtonGroupOfTwo setFormType={setForm} />
      { form ? <LoginForm /> : <SignUp /> }
    </div>
  );
};

export default AuthentificationPageContent;
