import './Button.scss';

export default function Button(props) {
    let className = "custom-btn ";
    className += props.signature ?? "info";
    const handler = (e) => {
        if (props.click) {
            if (props.click.handler && !props.click.bindParam) {
                props.click.handler(e);
            } else if (props.click.handler && props.click.bindParam) {
                props.click.handler(e, props.click.bindParam);
            }
        }
    }
    return(
        <button type="button" className={className} onClick={handler}>{props.name}</button>
    );
}