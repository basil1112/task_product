import { useEffect, useState } from "react";
import NameComponent from "../components/NameComponent";
import ProductAttributeComponent from "../components/ProductAttributeComponent";
import ProductJson from "../components/ProductJson";

export interface IProdAttr {
    attribute_id: number,
    attribute_value: string
}


interface IProduct {

    product_name: string,
    product_attribute: IProdAttr[]
}

/**
 * 
 * @returns JSX Element
 */
const ProductContainer = () => {

    const [product, setProduct] = useState<IProduct>({
        product_name: "",
        product_attribute: [
            {
                attribute_id: Date.now(),
                attribute_value: ''
            }
        ]
    });





    /**
     * The function `addAttribute` adds a new attribute to the `product attribute` object in React state.
     */
    const addAttribute = () => {
        setProduct({
            ...product!, product_attribute: [...product!.product_attribute, {
                attribute_id: Date.now(),
                attribute_value: ''
            }]
        })
    }


    /**
     * The function updates the product attribute value in a React component.
     * @param {IProdAttr} attribute - The parameter `attribute` is of type `IProdAttr`
     */
    const attributeValueChangeEvent = (attribute: IProdAttr) => {

        let tempAttributes = product!.product_attribute.map((element) => {
            if (element.attribute_id == attribute.attribute_id) {
                return attribute
            }
            return element;

        })
        setProduct({ ...product!, product_attribute: tempAttributes })

    }



    /**
     * The function "swap" takes an array and two indices as input
     * @returns The function `swap` returns a new array with the elements at the specified indices
     * swapped.
     */
    const swap = (array: any, index1: number, index2: number) => {
        let tempArray = [...array];
        [tempArray[index1], tempArray[index2]] = [tempArray[index2], tempArray[index1]];
        return tempArray;
    };



    const attributeValuePositionChangeEvent = (isDown: boolean, attribute_position: number) => {

        let tempArray = [];
        if (isDown) {
            tempArray = swap(product!.product_attribute, attribute_position, attribute_position + 1)

        }
        else {
            tempArray = swap(product!.product_attribute, attribute_position, attribute_position - 1)
        }

        tempArray = tempArray.map((element, index) => {
            return element;
        });

        setProduct({ ...product!, product_attribute: tempArray })
    }




    /**
     * The function `attributeValueDeleteEvent` deletes an attribute value from a product's list of
     * attributes.
     * @param {IProdAttr} attribute - The parameter `attribute` is of type `IProdAttr`
     */
    const attributeValueDeleteEvent = (attribute: IProdAttr) => {

        let tempAttributes = product!.product_attribute
            .filter((element) => element.attribute_id != attribute.attribute_id)

        setProduct({ ...product!, product_attribute: tempAttributes })

    }





    return (<>

        <div className="container-fluid">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Product</a>
                    </div>
                </div>
            </nav>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">

                            <div className="text-left h4">Product Name</div>
                            <NameComponent
                                productName={product?.product_name!}
                                onChange={(value: string) => {
                                    setProduct({ ...product!, product_name: value })
                                }} />

                        </div>
                    </div>

                    <hr></hr>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="text-left h4">Product Attributes</div>
                        </div>
                    </div>

                    {product &&
                        <ProductAttributeComponent
                            attribute_list={product?.product_attribute!}
                            onAddAttribute={addAttribute}
                            onPositionSwap={attributeValuePositionChangeEvent}
                            onChange={attributeValueChangeEvent}
                            onDelete={attributeValueDeleteEvent}
                        />
                    }

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <ProductJson product={product ? product : {}} />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    </>);

}


export default ProductContainer;