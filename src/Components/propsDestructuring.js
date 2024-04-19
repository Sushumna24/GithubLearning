import React, { useEffect } from 'react';

const Destructured = () => {
    useEffect(() => {
        const product = {
            name: 'Smartphone',
            price: 499.99,
            description: 'A high-quality smartphone with advanced features.',
            category: 'Electronics',
            available: true
        };

        myProduct(product);
    }, []);

    function myProduct({ name, price, description, category }) {
        const text = 'I have ' + name + ' which costs of Rs. ' + price + '. Description is ' + description + '. It belongs to category of ' + category + '.';
        document.getElementById("hi").innerHTML=text;
        console.log(text);
    }

    return (
        <div>
            <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>Props destructuring in React" is the process of extracting specific properties from the props object passed to a component and assigning them to variables</p></center>
            <center><h1 style={{fontFamily:'Times New Roman'}}>Props Destructuring--Unpacking the array or any object to particular values</h1></center>
            <div id="hi">
            <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}></p>
              </div> {/* Add this div with the id "hi" */}
        </div>
    );
}

export default Destructured;
