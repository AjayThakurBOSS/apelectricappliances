import { motion } from 'framer-motion'
import Slider from 'react-slick'

const testimonials = [
  {
    name: 'Sonu Kumar',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWG61IZzyaI98EzucFIYG_yYj0WtFuREbW9EW7baEMdkcxAMF4K=w75-h75-p-rp-mo-br100',
    role: 'Homeowner',
    quote: 'My AC broke down during a heatwave. They came within an hour and fixed it right away. Exceptional service!',
    rating: 5,
    reviewLink: ''
  },
  {
    name: 'Raj Sagar',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocKM7A-OZcGiNADu20LIejw---ct7Qi9odUidTobU2W7PpUo7w=w75-h75-p-rp-mo-br100',
    role: 'Restaurant Owner',
    quote: 'Best man. He is very qualified electrician in patna. I called him to repair my window ac. Other electrician was asking for 5000+ rupees. Then one person from my society gave his number. I called him. With his work I am very satisfied. He charged me only 2200 for his wonderful work.',
    rating: 5, 
     reviewLink: ''
  },
  {
    name: 'Pawan Kumar',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWFZiE17fAJ9I7OuxrLGIZG2cDJFxdD8CNh-8NiaH7wg0TXe7w=w75-h75-p-rp-mo-br100',
    role: 'House Owner',
    quote: "Kanhaiya ji bahut gajab ke mechanic hai. AC thik karne me to expert hai. Kisi kam ke liye bulaiye thori hi der me wo aapke ghar pahuch jayega. Aapki pareshani ko wo bilkul samajhta hai. Hm dave ke sath kah sakte hai, ki agar aapn ek bar isko bula liye to, kisi kam ke liye aap doosre ko nhi bula sakte. Paisa v wo bilkul uchit mangta hai. Jiyo kanhaiya ji",
    rating: 5,
     reviewLink: ''
  }
]

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false
  }

  return (
    <div className="max-w-4xl mx-auto ">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl  italic mb-6">
                "{testimonial.quote}" 
              </blockquote>
              <div className="text-gray-900 font-semibold">{testimonial.name}</div>
              <div className="text-gray-600">{testimonial.role}</div>
              <a href="https://www.google.com/search?q=A.P.+Electric+Appliances+services&stick=H4sIAAAAAAAA_-NgU1I1qDC2TE0xtTQwMktJMjNNNTG0MqgwSzW0SDGxMDS3TDU3MDE2WMSq6KgXoKfgmpOaXFKUmazgWFCQk5mYl5xarFCcWlSWCWQAAPhCsnFNAAAA&hl=en-GB&mat=CXOJKg2EYF6fElcBmzl_pdbq0H7OYyxgdmBLm7gJQ1d083be_NBIdBK9m6K75ART1Hdoi-JR9btlTpNDR0D7JVgWMVko29YHvxE-KpQOelYFnPP5ZQJfL99ebLxfHopDbOU&authuser=0&ved=2ahUKEwihy_TGwqGLAxVAyTgGHeUpIsAQ-MgIegQIJBAf"  style={{color:'red'}}>view revirew...</a>
            </motion.div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center items-center ">
  <button className="btn btn-primary cursor-pointer"><a href="https://www.google.com/search?q=A.P.+Electric+Appliances+services&stick=H4sIAAAAAAAA_-NgU1I1qDC2TE0xtTQwMktJMjNNNTG0MqgwSzW0SDGxMDS3TDU3MDE2WMSq6KgXoKfgmpOaXFKUmazgWFCQk5mYl5xarFCcWlSWCWQAAPhCsnFNAAAA&hl=en-GB&mat=CXOJKg2EYF6fElcBmzl_pdbq0H7OYyxgdmBLm7gJQ1d083be_NBIdBK9m6K75ART1Hdoi-JR9btlTpNDR0D7JVgWMVko29YHvxE-KpQOelYFnPP5ZQJfL99ebLxfHopDbOU&authuser=0&ved=2ahUKEwihy_TGwqGLAxVAyTgGHeUpIsAQ-MgIegQIJBAf"  >Review Us ...</a>!!</button>
</div>
    </div>
  )
}


export default Testimonials