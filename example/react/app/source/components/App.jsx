import React from 'react';
import { binds, flex } from 'fmihel-browser-lib';
import { connect } from 'react-redux';
import Btn from './Btn.jsx';
import Idle from './Idle.jsx';
import redux from '../../redux';

class App extends React.Component {
    constructor(p) {
        super(p);
        binds(this, 'onClick');
    }

    onClick() {
        redux.actions.actAsync('');
    }

    render() {
        const { reduxData } = this.props;
        return (
            <React.Fragment>
                <div id='app' style={{ ...flex('horiz stretch'), padding: 10 }}>
                    <Btn
                        onClick={this.onClick}
                    >press</Btn>
                </div>
                <Idle visible={!reduxData.ui.idle}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    reduxData: state,
});

export default connect(mapStateToProps)(App);
