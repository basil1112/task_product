import { FC } from "react";
import { IProdAttr } from "../container/ProductContainer";
import AttributeComponent from "./AttributeComponent";
import { ICommonEvents } from "../ICommonEvents";

interface IProductAttrComponent extends ICommonEvents {
    attribute_list: IProdAttr[]
    onAddAttribute: any
    onChange: any
}

const ProductAttributeComponent: FC<IProductAttrComponent> = ({ attribute_list, onAddAttribute, onChange, onDelete, onPositionSwap }) => {

    /* The `renderProductAttrList` function is mapping over the `attribute_list` array and returning an
    array of `AttributeComponent` components amd render as UI element  */
    const renderProductAttrList = () => {

        return attribute_list.map((object, index) => {
            return <AttributeComponent
                key={object.attribute_id}
                onDelete={onDelete}
                onPositionSwap={onPositionSwap}
                onAttrValueChange={onChange}
                attribute={object}
                position={index}
                isFirstPosition={index === 0}
                isLastPosition={index === attribute_list.length - 1} />
        })
    }


    return (<>
        {renderProductAttrList()}
        <div className="row mt-3">
            <div className="col-lg-12">
                <a href="#" onClick={() => { onAddAttribute() }}>Add Line</a>
            </div>
        </div>
        <hr></hr>

    </>)

}

export default ProductAttributeComponent;