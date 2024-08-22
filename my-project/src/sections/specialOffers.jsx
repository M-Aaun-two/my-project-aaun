import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/Button"

const specialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer"
        width={733} height={687}
        className="object-contain w-full hover:scale-105 transform transition duration-300"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">
          Special
          </span> Offer
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quas doloremque consequuntur placeat sunt, ab provident harum, at, dicta ducimus voluptas similique nemo a nihil? Ipsum odit dicta sapiente repellat.</p>
        <p className="mt-6 lg:max-w-lg info-text">This is just a test web to show case in profile made by Aaun. Not a real nike website</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label=" Shoe now" iconURL={arrowRight}/>
          <Button label="Learn more" 
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default specialOffers