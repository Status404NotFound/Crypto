import React, { useState } from "react";
import ExchangeMenuItem from "./ExchangeMenuItem";
import {string} from "prop-types";

export default function ExchangeMenu(props) {

    const [isActive, setActive] = useState(false);

    const currencies = props.currencies
    const itemsCount = currencies.length
    const itemsStyle = []

    const openMenu = () => {
        const radius = 70;
        const arc = 2 * Math.PI * (1 / itemsCount);
        let itemsStyle = getItemPos(radius, arc)
        console.log(itemsStyle)
    }

    const getItemPos = (radius, arc) => {
        for (let i = 0; i < itemsCount; i++) {
            const angle = i * arc;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const left = 50 + x + "%";
            const top = 50 + y + "%";
            const style = {
                left: left,
                top: top
            }
            itemsStyle.push(style)
        }
        return itemsStyle
    }

    if(isActive){
        openMenu()
    } else {

    }

    const handleClick = (e) => {
        e.preventDefault();
        setActive(!isActive)
    }

    const buttonProps = {
        text: string,
        classActive: string,
        classNonActive: string
    }

    if(props.type === 'current'){
        buttonProps.text = 'Отдаете'
        buttonProps.classActive = 'circular-menu__current_button circular-menu__current_button_active'
        buttonProps.classNonActive = 'circular-menu__current_button'
    } else {
        buttonProps.text = 'Получаете'
        buttonProps.classActive = 'circular-menu__target_button circular-menu__target_button_active'
        buttonProps.classNonActive = 'circular-menu__target_button'
    }


    return (<div className="circular-menu">
        <button onClick={handleClick} className={isActive ? buttonProps.classActive : buttonProps.classNonActive}>
            {isActive ? 'Закрыть': buttonProps.text }
        </button>
        {currencies.map((currency, index)=>(
            <ExchangeMenuItem type={props.type} isActive={isActive} key={index} currency={currency} itemStyle={itemsStyle[index]}/>
        ))}
    </div>);
}