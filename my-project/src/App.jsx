import { CustomerReviews, Footer, Hero, PopularProducts,
   Services, SpecialOffers, Subscribe,SuperQuality,Nav } from "./sections";
import React, { useState, useEffect } from 'react';
import Loading from "./Components/Loading";


const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch or delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay for demonstration
  }, []);

  return (
    <main className="relative select-none">
      <div>
      {isLoading ? <Loading /> : 
      <div>
        <Nav />
      <section className="xl:padding-l wide:padding-r padding-b select-none">
        <Hero />
      </section>
      <section className="padding select-none">
        <PopularProducts />
      </section>
      <section className="padding select-none">
        <SuperQuality />
      </section>
      <section className="padding-x py-10" >
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
      </div>}
    </div>
     

    </main>
  );
}

export default App;