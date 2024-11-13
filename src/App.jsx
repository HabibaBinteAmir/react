import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './componanats/Button'
import Heading from './componanats/Heading'
import Flex from './componanats/Flex'
import Image from './componanats/Image'
import Container from './componanats/Container'
import Logo from './assets/Logo.png'
import Modle from './assets/Modle.png'
import Sweats from './assets/Sweats.png'
import Shoe from './assets/Shoe.png'
import Pant from './assets/Pant.png'
import About from './assets/About.png'
import Jama from './assets/Jama.png'
import Payjama from './assets/Payjama.png'
import Stars from './assets/Stars.png'

import Menu from './componanats/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* Header part start  */}
    <div className="py-5 bg-primaryColor w-full fixed z-40 ">
      <Container>
        <Flex className={"justify-between "}>
          <div className="pt-2">
            <Image src={Logo} alt={Logo}/>
          </div>
          <div className="pt-4">
            <Flex className={"gap-x-8 font-semibold text-2xl font-Poppins"}>
              <Menu mtext={"Men"}/>
              <Menu mtext={"Women"}/>
              <Menu mtext={"Kids"}/>
              <Menu mtext={"Collection"}/>
              <Menu mtext={"Treads"}/>
            </Flex>
          </div>
          <div className="">
            <Flex className={"gap-x-5 font-semibold text-2xl font-Poppins"}>
            <Button btntext={"Log in"} className={"px-[30px] py-[15px] border border-hoverColor shadow-lg rounded-2xl hover:bg-hoverColor"}/>
            <Button btntext={"Sign in"} className={"px-[30px] py-[15px] border border-hoverColor shadow-lg rounded-2xl hover:bg-hoverColor"}/>
            </Flex>
            
          </div>
        </Flex>
      </Container>
    </div>
 {/* heasder part end */}
 {/* Banner part start */}

  <div className="py-[150px] bg-primaryColor">
    <Container>
      <Flex>
        <div className="w-1/2">
        <Heading text={"Find The Best Fashion Style For You"} as={"h1"} className={"text-[64px] font-Poppins font-semibold pr-[120px]"}/>
        <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."} as={"p"} className={"text-[22px] font-Poppins pt-[30px] pb-[30px] "}/>
        <Button btntext={"Shop Now"} className={"bg-black text-white px-[35px] py-[20px] rounded-2xl font-semibold font-Poppins shadow-md text-2xl "}/>

        </div>
        
        <div className="w-1/2">
        <Image src={Modle} alt={Modle}/>
        </div>
      </Flex>
    </Container>

    </div> 
    {/* Banner part end */}
    {/* product part starts */}
    <div className="relative">
      <Container>
        <div className=" text-center pt-[190px] pb-[20px] ">
        <Heading text={"New Collection"} as={"h1"} className={"text-[64px] font-Poppins font-bold "}/>
        </div>
        <div className=" py-[80px] ">
        <Flex className={"justify-between"}>
          <Image src={Sweats} alt={Sweats}/>
          <Image src={Shoe} alt={Shoe}/>
          <Image src={Pant} alt={Pant}/>
        </Flex>
        </div>
        <div className="absolute top-[690px] left-[370px]">
        <Button btntext={"Sweats"} className={"bg-white text-black px-[115px] py-[15px] rounded-2xl font-semibold font-Poppins shadow-md text-2xl hover:bg-hoverColor"}/>
        </div>
        <div className="absolute top-[690px] left-[850px]">
        <Button btntext={"Basket"} className={"bg-white text-black px-[115px] py-[15px] rounded-2xl font-semibold font-Poppins shadow-md text-2xl hover:bg-hoverColor"}/>
        </div>
        <div className="absolute top-[690px] left-[1350px]">
        <Button btntext={"Jeans"} className={"bg-white text-black px-[115px] py-[15px] rounded-2xl font-semibold font-Poppins shadow-md text-2xl hover:bg-hoverColor"}/>
        </div>

      </Container>
    </div>
    {/* product part end */}
    {/* About part starts */}
    <div className="pt-[100px] pb-[250px] relative ">
      <Container>
        <Flex className={""}>
          <div className="w-1/2 z-10">
          <Image src={About} alt={About}/>
          </div>
          <div className="w-1/2 ml-[150px] pt-[80px]">
          <Heading text={"Best Fashion Since 2010"} as={"h1"} className={"text-[64px] font-Poppins font-semibold pr-[120px]"}/>
        <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."} as={"p"} className={"text-[24px] font-Poppins pt-[30px] pb-[30px] font-semibold pr-[160px]"}/>
          </div>
        </Flex>
        <div className="py-6 bg-primaryColor w-[795px]  rounded-xl absolute z-0 top-[670px] left-[870px]" >
          <Flex className={"text-center"}>
            <div className="w-1/3 border-r border-black">
            <Heading text={"2010"} as={"h2"} className={"text-[64px] font-Poppins font-bold "}/>
            <Heading text={"Founded"} as={"p"} className={"text-[22px] font-Poppins font-medium "}/>

            </div>
            <div className="w-1/3 border-r border-black">
            <Heading text={"500+"} as={"h2"} className={"text-[64px] font-Poppins font-bold "}/>
            <Heading text={"Produst Sold"} as={"p"} className={"text-[22px] font-Poppins font-medium "}/></div>
            <div className="w-1/3 ">
            <Heading text={"4500+"} as={"h2"} className={"text-[64px] font-Poppins font-bold "}/>
            <Heading text={"Best Reviews"} as={"p"} className={"text-[22px] font-Poppins font-medium "}/></div>
          </Flex>
        </div>
      </Container>


    </div>

    {/* About part end */}
    {/* seales part starts */}
    <div className="py-[150px]  bg-sealsColor">
      <Container>
        <Flex>
          <div className="w-1/2">
          <Heading text={"Best Seller Product"} as={"h1"} className={"text-[64px] font-Poppins font-semibold pr-[120px] text-white"}/>
        <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."} as={"p"} className={"text-[24px] font-Poppins pt-[30px] pb-[30px] font-semibold pr-[200px] text-white"}/>
        <Button btntext={"Learn More"} className={"bg-black text-white px-[35px] py-[20px] rounded-2xl font-semibold font-Poppins shadow-md text-2xl "}/>
          </div>
          <div className="w-1/2" >
          <Flex className={"gap-10"}>
          <div className="w-full ">
           <Image src={Jama} alt={Jama} className={"w-full"}/>
           <div className="py-5 bg-white ">
           <Image src={Stars} alt={Stars} className={"pl-4"}/>
           <Heading text={"Sweater Shirt"} as={"p"} className={"text-[22px] font-Poppins text-black pl-4"}/>
           <Flex className={"gap-x-5"}>
           <Heading text={"$ 49.55"} as={"h1"} className={"text-[24px] font-Poppins   text-black pl-4"}/>
           <Heading text={"$ 35.99"} as={"h1"} className={"text-[24px] font-Poppins   text-[#C4C4C4] pl-4"}/>
           </Flex>

           </div>
          </div>
        
           <div className="w-full">
            <Image src={Payjama} alt={Payjama}/>
            <div className="py-5 bg-white ">
           <Image src={Stars} alt={Stars} className={"pl-4"}/>
           <Heading text={"Pants Fashion"} as={"p"} className={"text-[22px] font-Poppins text-black pl-4"}/>
           <Flex className={"gap-x-5"}>
           <Heading text={"$ 55"} as={"h1"} className={"text-[24px] font-Poppins   text-black pl-4"}/>
           <Heading text={"$ 44.99"} as={"h1"} className={"text-[24px] font-Poppins   text-[#C4C4C4] pl-4"}/>
           </Flex>

           </div>
            
           </div>
          </Flex>
          </div>
        </Flex>
      </Container>
    </div>
    {/* seales part end */}
    </>
  )
}

export default App
