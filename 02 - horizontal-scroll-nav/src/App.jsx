import HorizontalNavComponent from "./components/horzontal-nav/horizontalNavComponent"

function App() {

  const objectsList = [
    {
      "name": "Floral Design Coffee Mug",
      "image": "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "description": "Beautiful ceramic coffee mug with vibrant floral design. Perfect for enjoying your favorite coffee or tea. 300 ml capacity. Dishwasher and microwave safe."
    },
    {
      "name": "GPS Sports Smartwatch",
      "image": "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300",
      "description": "Multifunctional smartwatch with built-in GPS. Monitor your physical activity, heart rate, sleep, and more. Receive phone notifications and control your music. Water-resistant up to 50 meters."
    },
    {
      "name": "Running Sports Shoes",
      "image": "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "description": "Lightweight and breathable running shoes designed for optimal cushioning and support. Ideal for workouts and races."
    },
    {
      "name": "Wireless Noise-Canceling Earbuds",
      "image": "https://images.pexels.com/photos/18254079/pexels-photo-18254079/free-photo-of-hombre-mano-musica-sujetando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "description": "Enjoy uninterrupted music with these wireless noise-canceling earbuds. High-quality sound and comfortable fit. Long-lasting battery."
    },
    {
      "name": "Next-Generation Smartphone",
      "image": "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "description": "Cutting-edge smartphone with high-resolution display, triple camera, and ultra-fast processor. Experience top-notch multimedia and exceptional performance."
    },
    {
      "name": "E-Book Reader with E-Ink Display",
      "image": "https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "description": "Take your library with you wherever you go with this e-book reader featuring an E-Ink display. Enjoy comfortable, eye-friendly reading."
    },
    {
      "name": "Multifunctional Travel Backpack",
      "image": "https://images.pexels.com/photos/18070636/pexels-photo-18070636/free-photo-of-encantadora-cascada-de-foroglio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "description": "Spacious and durable backpack with multiple compartments. Perfect for travel, excursions, or everyday use."
    },
    {
      "name": "UV-Protected Polarized Sunglasses",
      "image": "https://images.pexels.com/photos/20781308/pexels-photo-20781308/free-photo-of-gafas-de-sol-mujer-pared-muro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "description": "Shield your eyes from the sun with these UV-protected polarized sunglasses. Elegant and timeless design."
    },
    {
      "name": "Digital SLR Camera for Beginners",
      "image": "https://images.pexels.com/photos/17906700/pexels-photo-17906700/free-photo-of-camara-vintage-lente-objetivo.jpeg?auto=compress&cs=tinysrgb&w=1260&h",
      "description": "Easy-to-use digital SLR camera for beginners. Capture high-quality photos and videos. Includes 18-55mm kit lens."
    }
  ];

  return (
    <main className="mainFrame">
      <HorizontalNavComponent data={objectsList} />
    </main>
  )
}

export default App
