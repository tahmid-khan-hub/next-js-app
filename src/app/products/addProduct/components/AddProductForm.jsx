import React from 'react';

const AddProductForm = () => {

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const payload = {productName};
        const res = await fetch("http://localhost:3000/api/items", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers:{
                "Content-Type": "application/json",
            }
        })
        const result = await res.json();
        console.log(result);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='productName' placeholder='name'></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddProductForm;