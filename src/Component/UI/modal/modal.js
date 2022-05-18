import reactDom from "react-dom";
import Backdrop from "../backdrop/backDrop";
import clasess from "./modal.module.css"

const ModelOverlay= (props) =>{
    return <div className={clasess.modal}>
    <div className={clasess.content}> {props.children} </div>
</div>} 

const portelElement = document.getElementById("overlays");

const Module = props =>{
    return <frameElement>
        { reactDom.createPortal( <Backdrop /> ,portelElement) }
        { reactDom.createPortal( <ModelOverlay> {props.children}</ModelOverlay> ,portelElement) }
    </frameElement>
}
export default Module;