import React from 'react';
import { Link } from "react-router-dom";


export default function Header() {

    return (
        <div className="header">
            <div className={'logo'}>
                <p className={'logo_text_first'}>
                    True
                </p>
                <p className={'logo_text_second'}>
                    change
                </p>
            </div>
            <div className={'support_button'}>
                Support
            </div>
            <div className={'login_button'}>
                <Link to={'/account'}>Account</Link>
            </div>
            <div className={'choose_language'}>
                Language
            </div>
            <div className={'header_menu'}>
                Menu
            </div>
        </div>
    );

}