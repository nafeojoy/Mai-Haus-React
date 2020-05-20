import AuthForm, { STATE_LOGIN } from './../components/AuthForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';


function AuthPage(props) {

  //const AuthContextVal = useContext(AuthContext);

  const handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      props.history.push('/login');
    } else {
      props.history.push('/signup');
    }
  };

  const handleLogoClick = () => {
    props.history.push('/');
  };
  return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
            <AuthForm
              authState={props.authState}
              onChangeAuthState={handleAuthState}
              onLogoClick={handleLogoClick}
            />
          </Card>
        </Col>
      </Row>
  )
}

export default AuthPage
