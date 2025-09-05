import { redirect } from "next/navigation";

export default async function ProductsPage() {
    const res = await fetch("http://localhost:3000/api/items", {
        cache: 'force-cache'
    })
    const data = await res.json();

    if(data.length > 3){
        redirect('/')
    }
    
    return(
        <div>
            {data.map((product, index) => {
                return(
                    <div key={index}>
                        <li>{product?.productName}</li>
                    </div>
                )
            })}
        </div>
    )
}