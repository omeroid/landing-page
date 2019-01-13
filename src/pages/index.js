//core
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
//front10 components
import '@front10/landing-page-book/dist/themes/default/index.legacy_browsers.css'

import '../app.css'

import React from 'react'

import {
  Row,
  Header,
  Container,
  Hero,
  Image,
  Link,
  GithubButton,
  Column,
  Navbar,
  NavbarCollapse,
  NavbarBrand,
  NavbarNav,
  NavbarLink,
  Icon,
  LanguageSwitcher,
  Features,
  Team,
  BrowserSupport,
  Gif,
  Footer,
  Copyright,
  Social,
  Analytics,
  ContactInfo,
} from '@front10/landing-page-book/dist/components'

import MessengerCustomerChat from 'react-messenger-customer-chat'
// import Helmet from "react-helmet";

import SEO from '../components/seo/seo'

import particles from '../data/particles.json'
import features from '../data/features.json'
import team from '../data/team.json'
import browsers from '../data/browsers.json'

export default () => (
  <div className="App">
    <MessengerCustomerChat pageId="1970520546574914" appId="1634817276825716" />
    <SEO />
    <Analytics idTracking="UA-132404098-1" urlPath="/" />
    <Navbar expand="lg">
      <Container>
        <NavbarCollapse>
          <NavbarBrand>
            <Image
              width="180"
              src="images/logo/omeroid_w.svg"
              alt="omeroid logo"
            />
          </NavbarBrand>
          <NavbarNav alignItems="right">
            <NavbarLink>Blog</NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-github" />
            </NavbarLink>
          </NavbarNav>
        </NavbarCollapse>
      </Container>
    </Navbar>
    <Hero
      opacity={1}
      overlayColor="#373D45"
      particlesParams={particles}
      minHeight="80vh"
    >
      <Container>
        <Image
          alt="omeroid logo"
          className="main-logo"
          src="images/logo/omeroid_w.svg"
          width="800vw"
        />
        <Header className="text-warning">~ Make it simple ~</Header>
      </Container>
    </Hero>
    <Container>
      <br />
      <Header borderBottom type="h1">
        Service
      </Header>
      <Features shadow buttonColor="primary" features={features} />
    </Container>
    <Container>
      <Header borderBottom type="h1">
        Team
      </Header>
      <Team
        showBorder={false}
        members={team}
        socials={['linkedin', 'twitter']}
      />
    </Container>
    <Container>
      <ContactInfo
        showBorder
        showIcons
        lat={35.579114}
        lng={139.747703}
        locationApiKey="AIzaSyABYHuI6Wr_dYJA98KeMiltbx_aF5EqaDc"
        address="東京都大田区平和島6丁目1番1号"
        email="sadayuki.matsuno@omeroid.com"
        mobile="05052402216"
        website="https://omeroid.com"
      />
    </Container>
    <Footer copyrightTextColor={'light'}>
      <Row>
        <Column className="col-sm-12 col-md">
          <Copyright
            showAllRightText={false}
            text="omeroid Inc. All rights reserved"
          />
        </Column>
        <Column className="col-sm-12 col-md mt-3 mt-md-0">
          <Social type="twitter" url="https://twitter.com/omeroid_inc" />
          <Social type="facebook" url="fb.me/omeroid" />
        </Column>
      </Row>
    </Footer>
    <Container>
      <Row className="mt-5">
        <Column>
          <Header borderBottom type="h3">
            This an example of use landing page book in gatsby js
          </Header>
        </Column>
      </Row>
      <Row className="mt-5">
        <Column>
          <Header type="h5">1. Navbar</Header>
          <Navbar expand="md">
            <NavbarCollapse>
              <NavbarBrand>
                <Image
                  alt="Front10 logo"
                  src="images/logo/front10.png"
                  width="40"
                />
              </NavbarBrand>
              <NavbarNav alignItems="right">
                <NavbarLink>
                  <Icon icon="fa fa-search" />
                </NavbarLink>
                <NavbarLink>
                  <Icon icon="fa fa-github" />
                </NavbarLink>
                <NavbarLink>
                  <Icon icon="fa fa-stack-overflow" />
                </NavbarLink>
                <LanguageSwitcher showArrow={false} />
              </NavbarNav>
            </NavbarCollapse>
          </Navbar>
        </Column>
      </Row>
      <Row className="mt-5">
        <Column>
          <Header type="h5">2. Hero</Header>
          <Hero
            backgroundColor="#212529"
            particlesParams={particles}
            minHeight="50vh"
          >
            <Container>
              <Image
                alt="Front10 logo"
                className="main-logo"
                rounded
                src="images/logo/front10.png"
                width="80"
              />
              <Header className="text-warning">Landing Page Book</Header>
              <Header className="text-warning" type="h5">
                React components to build!
              </Header>
              <div className="mt-5">
                <Link
                  className="btn btn-primary btn-started"
                  href="https://front10.com/landing-page-book"
                  target="_blank"
                >
                  Explore
                </Link>
                <GithubButton btnText="Stars" btnType="star" />
              </div>
            </Container>
          </Hero>
        </Column>
      </Row>
      <Row className="mt-5">
        <Column>
          <Header type="h5">3. Features</Header>
          <Features
            features={features}
            imageCircle={false}
            showBorder={false}
            showSubtitle={true}
          />
        </Column>
      </Row>
      <Row className="mt-5">
        <Column>
          <Header type="h5">4. Team</Header>
          <Team
            showBorder={false}
            members={team}
            socials={['linkedin', 'twitter']}
          />
        </Column>
      </Row>
      <Row className="mt-5">
        <Column>
          <Header type="h5">5. Gif</Header>
          <Gif autoplay image="images/demo/themes.gif" />
        </Column>
      </Row>
      <Row className="mt-5">
        <Column>
          <Header type="h5">6. Browsers support</Header>
          <BrowserSupport browsers={browsers} />
        </Column>
      </Row>
      <Row className="mt-5">
        <Column>
          <Header type="h5">7. Footer</Header>
          <Footer>
            <Row>
              <Column className="col-sm-12 col-md">
                <Copyright showAllRightText={false} text="Front10, LLC" />
              </Column>
              <Column className="col-sm-12 col-md mt-3 mt-md-0">
                <span>With ♥ by </span>
                <Link href="https://front10.com/" target="_blank">
                  <Image
                    alt="Front 10 logo"
                    src="https://front10.com/img/logos/logo-main.png"
                    width="100"
                  />
                </Link>
              </Column>
              <Column className="col-sm-12 col-md mt-3 mt-md-0">
                <Social type="twitter" url="https://twitter.com/front10hello" />
                <Social
                  type="linkedin"
                  url="https://www.linkedin.com/company/front10/"
                />
              </Column>
            </Row>
          </Footer>
        </Column>
      </Row>
      <Row className="mt-5 mb-5">
        <Column className="text-center">
          <Link
            className="btn btn-primary btn-started"
            href="https://front10.com/landing-page-book"
            target="_blank"
          >
            Explore more components...
          </Link>
        </Column>
      </Row>
    </Container>
  </div>
)
