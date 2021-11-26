import "./ArrowIcon.scss";
import {useState} from 'react';

export default function ArrowIcon(props) {
    let [toggleArrow, setToggleArrow] = useState(false);
    let baseClass = 'arrow-icon';
    let extraClass = !toggleArrow ? 'down' : "up";
    let className = baseClass + " " + extraClass;
    const toggle = (e) => {
        setToggleArrow(!toggleArrow);
        props.clickHandler(e);
    }
    return (
        <div className={className} onClick={(e) => { toggle(e); }}></div>
    );
}