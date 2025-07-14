import React from "react"
import "./homepage.css"

const Home = () => {
    return (
        <div className="homepages">

        <div className="homepage">
            <div>
                <p>Need our services??</p>
                <button><a href="/products">Get Started</a></button>
            </div>
            <div>
                <h1>PARADISE NURSERY SHOPPING</h1>
                <p>Welcome to GreenNest – Where Plants Find Their People 🌿</p>
                <p>Breathe life into your space with our hand-picked collection of vibrant, easy-care houseplants. Whether you’re a seasoned plant parent or just starting your green journey, we’ve got the perfect leafy companion for your home or office.
</p>
                <ul>
                    <h2>Why Choose GreenNest?</h2>
                    <li><b>Curated Selection:</b> Only the healthiest, most beautiful plants make the cut.</li>
                    <li><b>Delivered With Care:</b> Shipped fast, safe, and fresh to your doorstep.</li>
                    <li><b>Plant Care Made Easy:</b> Each order comes with simple care instructions.</li>
                </ul>
                <p>From succulents to statement plants – explore our collection today and bring nature indoors.</p>
            </div>
        </div>
        </div>
    )
}

export default Home