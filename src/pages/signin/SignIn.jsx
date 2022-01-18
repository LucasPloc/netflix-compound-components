import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../context/firebase";
import HeaderContainer from "../../containers/Header";
import FooterContainer from "../../containers/Footer";
import { Form } from "../../components";
import { SIGN_UP, BROWSE } from "../../constants/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { Firebase } = useContext(FirebaseContext);

  const navigate = useNavigate();

  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = (e) => {
    e.preventDefault();

    const signIn = async (email, password) => {
      try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        navigate(BROWSE);
      } catch (err) {
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      }
    };
    signIn(emailAddress, password);
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input
              type='email'
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              autoComplete='off'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to={SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignIn;
