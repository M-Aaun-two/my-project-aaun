import { shoe8 } from "../assets/images"
import Button from "../Components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
         We provide you&nbsp;
          <span className="text-coral-red">
          Super
          </span> 
          <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quas doloremque consequuntur placeat sunt, ab provident harum, at, dicta ducimus voluptas similique nemo a nihil? Ipsum odit dicta sapiente repellat.</p>
        <p className="mt-6 lg:max-w-lg info-text">This is just a test web to show case in profile made by Aaun. Not a real nike website</p>
        <div className="mt-11">
          <Button label="View More"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe"
        width={570} height={522}
        className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality