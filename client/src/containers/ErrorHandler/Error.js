import React from 'react';
import {Alert, PageHeader, Progress, Typography} from "antd";
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {FrownOutlined} from "@ant-design/icons";
import styled from 'styled-components';

const {Title, Text} = Typography;

const Error = (props) => {
  const [timer, setTimer] = useState(5);
  const history = useHistory();
  const {title, error} = props

  useEffect(e=> {
    if(timer > 0 ){
      setTimeout(e=> {setTimer(timer - 1)}, 1000)
    } else window.location.reload();
  }, [timer])

  return <>
    <PageHeader
      className="site-page-header"
      onBack={() => {
        history.push('/');
        window.location.reload();
      }}
      title={<Alert message={title} type="error" showIcon />}
    />
    <Wrapper>
      <div className={'error_handler_container'}>
        <Title><FrownOutlined /> Error</Title>
        <Title level={3}>{`Something went wrong reload in ${timer} (s)`}</Title>
        <Text className={'error_handler_description'}>If the problem recurs please tell administration about this!</Text>
        <Progress percent={100 - 20*timer} status="exception" />
      </div>
    </Wrapper>
  </>
}

const Wrapper = styled.div`
  .error_handler_container {
    width: 100%;
    height: 70vh;
    text-align: center;
    padding: 20% 20% 20% 20%;
  }
  .error_handler_description {
    width: 100%;
    display: inline-block;
    margin-bottom: 10px;
  }
`

export default Error
