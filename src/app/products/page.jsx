export default async function ProductsPage() {
    const res = await fetch("http://localhost:3000/api/items", {
        cache: 'force-cache'
    })
    const data = await res.json();
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