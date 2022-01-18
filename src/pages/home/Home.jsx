import { Fragment } from "react";
import { OptForm, Feature } from "../../components";
import HeaderContainer from "../../containers/Header";
import JumbotronContainer from "../../containers/Jumbotron";
import FaqsContainer from "../../containers/Faqs";
import FooterContainer from "../../containers/Footer";

const Home = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder='Email address' />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
              Ready to watch ? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Fragment>
  );
};

export default Home;
