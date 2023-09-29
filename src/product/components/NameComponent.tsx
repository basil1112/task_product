import { FC } from "react";

interface INameComponent {
    productName: string
    onChange: any
}


const NameComponent: FC<INameComponent> = ({ productName, onChange }) => {

    return (<input type="text" className="form-control" placeholder="Enter Product Name" value={productName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onChange(e.target.value) }} />)
}


export default NameComponent;