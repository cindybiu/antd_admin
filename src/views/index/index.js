import React, { Component } from 'react';
import { Layout, Icon } from 'antd'; 
import { connect } from 'react-redux'
import MySlider  from '../../components/slider' 
import { mapStateToProps, mapDispatchToProps } from '../../reducer/connect' 
const { Header, Content } = Layout;

class Index extends Component {
    constructor(props){ 
        super(props) 
        this.state = { 
            onSlidecollapsed: this.props.onSlidecollapsed 
        };
    }

    toggle = () => {  
        this.state.onSlidecollapsed()
    }

    render() {
        const { slidecollapsed } = this.props 
        return (
            <Layout>
                <MySlider></MySlider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={ slidecollapsed ? 'menu-unfold' : 'menu-fold'}  
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index); 
