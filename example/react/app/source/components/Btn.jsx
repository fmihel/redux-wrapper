import React from 'react';
import './Btn.scss';
// import { flex, binds } from 'fmihel-browser-lib'
export default class Btn extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        return (
            <div onClick = {this.props.onClick} className="btn">{this.props.children}</div>
        );
    }
}
Btn.defaultProps = {
// default
    onClick: undefined,
};
