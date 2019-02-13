import React from 'react';
import './App.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

    this.state = {
        dropdownOpen: false,
        categoryName: ["fruit", "vegetables", "misc."]
      };
    }
  
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
  

    render() {
        const ret = (
            <div className = "btn-group-vertical button-group">
                <Dropdown isOpen = {this.state.dropdownOpen} toggle = {this.toggle} style = {{width:"100%"}} data-toggle = "collapse">
                    <DropdownToggle caret>
                    {this.state.categoryName[0]}
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem>Foo Action</DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );

        const ret2 = (
            <a isOpen = {this.state.dropdownOpen} toggle = {this.toggle} class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
            </a>
        );

        return (
            ret
        );
    }
}