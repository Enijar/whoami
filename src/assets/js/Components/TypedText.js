import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";

export default class TypedText extends Component {
    static propTypes = {
        delay: PropTypes.number,
        speed: PropTypes.number,
        onComplete: PropTypes.func
    };

    static defaultProps = {
        delay: 0,
        speed: 100
    };

    timeout = null;

    state = {
        caret: 0,
        text: ''
    };

    componentDidMount() {
        this.timeout = setTimeout(() => this.updateText(), this.props.delay);
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    updateText() {
        let {caret, text} = this.state;
        caret = Math.min(caret + 1, this.props.text.length);
        text = this.props.text.substr(0, caret);
        this.setState({caret, text});

        if (caret === this.props.text.length) {
            this.props.onComplete && this.props.onComplete();
            return;
        }

        this.timeout = setTimeout(() => this.updateText(), this.props.speed);
    }

    render() {
        return (
            <Fragment>
                {this.state.text}
            </Fragment>
        );
    }
}
