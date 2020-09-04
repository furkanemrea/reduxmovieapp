import React, { Component } from "react";
import { Container, Image, Menu, Visibility } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { menuStyle, fixedMenuStyle } from "../helpers/styleHelper";

class Header extends Component {
  state = {
    menuFixed: null,
    overlayFixed: false,
  };
  


  stickTopMenu = () => this.setState({ menuFixed: true });


  unStickTopMenu = () => this.setState({ menuFixed: null });

  render() {
    const { menuFixed } = this.state;
    return (
      <div>
        <div>
          {" "}
          <Visibility
            onBottomPassed={this.stickTopMenu}
            onBottomVisible={this.unStickTopMenu}
            once={false}
          >
            <Menu
              borderless
              fixed={menuFixed ? "top" : undefined}
              style={menuFixed ? fixedMenuStyle : menuStyle}
            >
              <Container text>
                <Menu.Item>
                  <Image
                    size="mini"
                    src="https://react.semantic-ui.com/logo.png"
                  />
                </Menu.Item>
                <Menu.Item header>Movie App</Menu.Item>
                <Menu.Item as={Link} to="/movies">
                  Movies
                </Menu.Item>
                <Menu.Item as="a">Add New</Menu.Item>
              </Container>
            </Menu>
          </Visibility>
        </div>
      </div>
    );
  }
}
export default Header;
