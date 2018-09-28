import React, { Fragment, Component } from 'react'

class Footer extends Component {
    state = {
        positionval: null,
    }

    componentDidMount() {
        (this.props.position === undefined) ?
            this.setState({
                positionval: 'unset'
            }) :
            this.setState({
                positionval: 'absolute'
            });
    }

    render() {
        const { positionval } = this.state
        console.log(positionval);
        return (
            <Fragment>
                <div className='footerStyle' style={{ position: `${positionval}` }}>
                    <div style={{ float: 'left' }}>
                        &copy; 2018 Okike Foods. All Rights Reserved
            </div>
                    <div style={{ float: 'right' }}>
                        <i className='fab fa-facebook'></i> &nbsp;&nbsp;
                <i className='fab fa-twitter'></i> &nbsp;&nbsp;
                <i className='fab fa-instagram'></i> &nbsp;&nbsp;
            </div>
                    <p style={{ textAlign: 'center', marginLeft: -30 }}>
                        +08100000000000 &nbsp;&nbsp;&nbsp; @info@okikefoods.ng
            </p>
                </div>
            </Fragment>
        )
    }
}

export default Footer;