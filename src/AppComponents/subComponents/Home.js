import React from 'react'
import BannerOne from '../assets/BannerOne.jpg'
import product1 from '../assets/product1.jpg'
import Product from './Product'
import phoneq from '../assets/phoneq.jpg'
import  footware1 from '../assets/footware1.jpg'
import bag1 from '../assets/bag1.jpg'
import bag2 from '../assets/bag2.jpg'
import sp from '../assets/speacker.jpg'
import Watch from '../assets/WATCH.jpg'
import advert from '../assets/advertisement1.jpg'
import tv1 from '../assets/tv.jpg'
import lappy1 from '../assets/laptop.jpg'
import cloth1 from '../assets/cloth.jpg'
import kurta from '../assets/kurta.jpg'
import sports from '../assets/sports1.jpg'
import sports1 from '../assets/sports2.jpg'
import menKurta from '../assets/menKurta.jpg'
import '../style/Home.css'


const Home =()=>{
    return(
        <div className='home'>
            <div className="home__container">
                <img
                src={BannerOne}
                className="home__image"
                />
            <div className="product__container">
                <div className="home__row">
                    <Product title="The Lean startup by ERIC RICE"
                    price={199}
                    rating={4}
                    image={product1}
                    desc="Eric Rice"/>
                    <Product title="OnePlus 9R 5G (Lake Blue, 8GB RAM, 128GB Storage) | Extra INR 2,000 OFF on Exchange"
                    price={12599}
                    rating={5}
                    image={phoneq}
                    desc="OnePlus"/>
                    <Product title="HRV SPORTS Running Shoes for Mens | Sports Shoes for Mens"
                    price={5000}
                    rating={4}
                    image={footware1}
                    desc="HRV"/>
                    <Product title="Titan Connected X Green Hybrid Smartwatch for  Heart Rate Monitor + Full touch Display 
                    "
                    price={8000}
                    rating={5}
                    image={Watch}
                    desc="Titan"/>
                   
                
                </div>
                <div className="home__row">
                <Product title="Nelle Harper Women's Sling Bag (Yellow)| Faux leather material sling bag
                    "
                    price={1900}
                    rating={4}
                    image={bag1}
                    desc="Nelle Harper Store"/>
                    <Product title="ADISA Laptop Backpack with Rain Cover 31 Ltrs
                    "
                    price={2599}
                    rating={4}
                    image={bag2}
                    desc="ADISA"/>
                    <Product title="All-new Echo Dot (4th Gen) | #1 smart speaker brand in India with Alexa (Blue)"
                    price={1499.0}
                    rating={4}
                    image={sp}
                    desc="Amazon"/>
                   
                
                </div>

                <div className="home__row">
                <img
                src={advert}
                className="advert__image"
                />
                </div>
                <div className="home__row">
                <Product title="Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black) | Sound output: Inbuilt 20 Watts Powerful Speakers | Dolby Atmos | Anti-aliasing | Dynamic contrast | Dynamic backlight"
                    price={12000}
                    rating={4}
                    image={tv1}
                    desc="MI"/>
                    <Product title="ASUS ROG Zephyrus G14, 14 FHD 120Hz, Ryzen 5 4600HS, GeForce GTX 1650Ti 4GB Graphics, Gaming Laptop (8GB/1TB SSD/MS Office 2019/Windows 10/Eclipse Gray/Without Anime Matrix/1.6 Kg), GA401II-HE169TS"
                    price={64000}
                    rating={4}
                    image={lappy1}
                    desc="Asus"/>
                </div>
                <div className="home__row">
                <Product title="Amazon Brand - Symbol Men's Regular Fit Casual Shirt | Material - 100% Cotton"
                    price={899}
                    rating={5}
                    image={cloth1}
                    desc="Amazon Brand"/>
                    <Product title="KILLER mens TRACK SUIT | Color name: ANTHRA MELANGE | Long Sleeve"
                    price={659}
                    rating={4}
                    image={sports}
                    desc="Killer"/>
                    <Product title="Janasya Women's Poly Crepe A-Line Kurta with Pant and Dupatta"
                    price={999}
                    rating={4}
                    image={kurta}
                    desc="Janasya Women's"/>
                     <Product title="DOZZBY with DB Women's Sports Bra Yoga Pants Gym Outfits Tracksuit Sports"
                    price={899}
                    rating={4}
                    image={sports1}
                    desc="Dozzby"/>
                     <Product title="Manyavar Men's Full Sleeve Knee-Long Blended Kurta (ML11768)"
                    price={999}
                    rating={4}
                    image={menKurta}
                    desc="Amazon"/>
                   
                
                </div>
                </div>    
             </div>
        </div>
    )
}

export default Home