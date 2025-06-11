import React from "react";

const EnquiryForm = () =>{
    return(
        <div className="">
            <h1>RS EnterPrises</h1>
            <h3>Price Starting at 350/- per Sq. ft</h3>

            <form action="">
                <label htmlFor="Name">Name </label>
                <input type="text" name="Name" placeholder="Enter your full name" />
                
                <label htmlFor="phone">Phone </label>
                <input type="text" name="email" placeholder="Enter your phone number" />

                <label htmlFor="email">E-Mail</label>
                <input type="email" name="email" placeholder="Enter your email address" />

                <label htmlFor="area">Area</label>
                <input type="text" name="area" placeholder="Enter your local area or street" />

                <label htmlFor="city">City</label>
                <input type="text" name="city" placeholder="Enter your city name" />

                <label htmlFor="pincode">Pincode</label>
                <input type="text" name="pincode" placeholder="Enter your area pincode" />
                
                <label htmlFor="requirement">Requirement</label>
                <textarea name="requirement" id="requirement" cols="30" rows="12">e.g. 4 windows and 2 doors</textarea>
                
                <button type="submit">Get Visit</button>

            </form>
            
        </div>
    )

}