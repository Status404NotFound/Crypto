import React, {useRef, useState} from "react";

export default function ExchangeMenuItem(props) {

    const currency = props.currency
    const itemsStyle = props.itemStyle
    const [isHover, setHover] = useState(false);
    const boxRef = useRef(null);


    const showText = (e) => {
        e.preventDefault();
        setHover(true)
        console.log(currency);
    }
    const hideText = (e) => {
        e.preventDefault();
        setHover(false)
    }

    return (
        <>
            <button onMouseOut={hideText} onMouseOver={showText} className="circular-menu__item" style={itemsStyle} ref={boxRef}>
                <img alt={''} className='circular-menu__item_logo' src={'media/crypto_icons_svg/' + currency.tag_name + '.svg'} />
                <div className={isHover && props.isActive === true ? 'circular-menu__item_text_active': 'circular-menu__item_text'}>
                    {currency.name}
                </div>
            </button>
        </>
    )
}