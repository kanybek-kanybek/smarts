import React from "react";
import Hero from "../../components/hero/hero";
import HomeReview from "./homeReview";

function Home() {
    return (
        <section>
            <div className="container">
                <Hero />
                <HomeReview />
            </div>
        </section>
    );
}
export default Home;
