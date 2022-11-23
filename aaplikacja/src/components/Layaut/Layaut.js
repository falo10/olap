import Fragment from "../hoc/fragment";
import withClass from "../hoc/withClass";

function Layaut (props) {
  return(
    <>
        <div>{props.header}</div>
        <div>{props.menu}</div>
        <div>{props.content}</div>
        <div>{props.footer}</div>
    </>
  )
}


export default withClass(Layaut, 'layaut');