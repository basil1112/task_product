import { FC } from "react";
import { ICommonEvents } from "../ICommonEvents";


interface IAttributeComponent extends ICommonEvents {
    attribute: any
    position: number,
    isLastPosition: boolean,
    isFirstPosition: boolean
}


const AttributeComponent: FC<IAttributeComponent> = ({ attribute, position, isFirstPosition, isLastPosition, onAttrValueChange, onDelete, onPositionSwap }) => {

    const { attribute_id, attribute_value } = attribute;

    return (
        <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2">
                {!isFirstPosition && <button className="btn btn-sm btn-danger" onClick={() => onPositionSwap(false, position)}><i className="fa-solid fa-caret-up"></i></button>}
                {!isLastPosition && <button className="btn btn-sm btn-success" onClick={() => onPositionSwap(true, position)}><i className="fa-solid fa-caret-down"></i></button>}
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
                <input type="text" className="form-control" placeholder="Enter Attributes" onChange={(event) => { onAttrValueChange({ ...attribute, attribute_value: event.target.value }) }} key={attribute_id} value={attribute_value} />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2">
                <button className="btn btn-sm" onClick={() => onDelete(attribute)}><i className="fa-solid fa-trash"></i></button>
            </div>

        </div>

    )

}


export default AttributeComponent;