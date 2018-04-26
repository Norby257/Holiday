import React, { Component } from "react";
import {Carousel, Layout, Menu, Breadcrumb } from "antd";
import { Rate } from 'antd';
import IoIosPaw from "react-icons/lib/io/ios-paw";
import IoAndroidPersonAdd from "react-icons/lib/io/android-person-add";
import IoEmail from "react-icons/lib/io/email";
import IoWifi from "react-icons/lib/io/wifi";
import MdHotel from "react-icons/lib/md/hotel"
import MdHotTub from "react-icons/lib/md/hot-tub";
import IoAndroidPeople from "react-icons/lib/io/android-people";
import MdTv from "react-icons/lib/md/tv";
import IoIosTelephone from "react-icons/lib/io/ios-telephone";
import { Card, Icon, Avatar } from "antd";
import { message, Button } from "antd";
import "./Propertyinfor.css";
const { Meta } = Card;
const { Header, Content, Sider, Footer } = Layout;
class Propertyinfor extends Component {
  state = {
    value: 3
  };
  handleChange = value => {
    this.setState({ value });
  };
  success = () => {
    message.config({
      top: 250,
      duration: 2
    });
    message.success("You have added a new friend!");
  };
  render() {
    const { value } = this.state;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <Layout>
          <Sider>
            <Card
              style={{ width: 100 + "%" }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <IoAndroidPersonAdd onClick={this.success} ></IoAndroidPersonAdd>,
                <IoEmail></IoEmail>,
                <IoIosTelephone ></IoIosTelephone>
              ]}
            >
              <Meta
                // avatar={
                //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                // }
                title="Eddie"
                description="hello, it is me!"
              />
            </Card>
          </Sider>
          <Content>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              Content
            </div>
          </Content>
        </Layout>
        <Layout>
          <Content style={{ paddingLeft: 200 + "px" }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              <IoIosPaw style={{fontSize:30}}></IoIosPaw>
              <IoWifi style={{fontSize:30}} />
              <MdHotel style={{fontSize:30}}></MdHotel>
              <MdHotTub style={{fontSize:30}}></MdHotTub>
              <IoAndroidPeople style={{fontSize:30}}></IoAndroidPeople>
              <MdTv style={{fontSize:30}}></MdTv>
              
              <span>
                <Rate onChange={this.handleChange}  style={{ color: '#00c' }} value={value} />
                {value && <span className="ant-rate-text">{value} stars</span>}
              </span>
              <Rate disabled defaultValue={2} />
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default Propertyinfor;