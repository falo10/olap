

function LastHerb (props) {

    return(
     <div className="card bg-light">
        <div className="card-header">
        Ostatnio oglądałeś to ziółko.Wciaż zainteresowany?
        </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{props.name}</h5>
                    </div>
                    <div style={{width: '100px'}} className="ml-auto d-flex justify-content-between">
                    <button href="#" className="btn btn-sm btn-dark">TAK</button>
                    <button href="#" onClick={props.onRemove} className="btn btn-sm btn-dark">NIE</button>
                    </div>
                </div>
            </div>

    );
}
export default LastHerb;