import React from 'react';
import logo from '../assets/images/sublime.jpeg'

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="footer-area bg-f7fafd">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <img src={logo} width="20px" height="20px" alt="logo" />
                                </div>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <p>Copyright @2019 Society All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
