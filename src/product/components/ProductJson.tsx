import { FC } from "react"

const ProductJson: FC<any> = ({ product }) => {


    return <pre className="text-left">
        {JSON.stringify(product, null, 4)}
    </pre>
}

export default ProductJson