import React from 'react';
import { binds } from 'fmihel-browser-lib';

export default class Idle extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            w: 100,
            h: 100,
        };

        this.$window = undefined;
        binds(this, 'onResize');
    }

    componentDidMount() {
        this.$window = $(window);
        this.$window.on('resize', this.onResize);
        this.onResize();
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        this.$window.off('resize', this.onResize);
    }


    onResize() {
        this.setState({
            w: this.$window.width(),
            h: this.$window.height(),
        });
    }

    render() {
        const { w, h } = this.state;
        const { visible } = this.props;
        return (

            <div
                style={{
                    display: visible ? 'block' : 'none',
                    position: 'absolute',
                    opacity: 0.5,
                    background: 'black',
                    left: 0,
                    top: 0,
                    width: w,
                    height: h,
                }}
            >
                loading...
            </div>
        );
    }
}
Idle.defaultProps = {
    visible: false,
};
