import React from "react";
import HomeAdvertising from "./homeAdvertising";
import New from "./New";
import Hero from "../../components/hero/hero";
// import HomeReview from "./homeReview";

function Home() {
  return (
    <>
      <HomeAdvertising />
      <New />
      <section>
        <div className="container">
          <Hero />
          {/* <HomeReview /> */}
        </div>
      </section>
    </>
  );
}
export default Home;
