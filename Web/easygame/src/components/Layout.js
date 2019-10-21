import React from 'react';
import Container from 'react-bootstrap/Container';


class Layout extends React.Component{
    render() {
        return (
            <Container fluid={true}>
                {this.props.children}
            </Container>
        );
    }
}
export default Layout;