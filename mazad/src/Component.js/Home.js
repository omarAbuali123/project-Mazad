import React from 'react';
// import Header from './Header';
import Hero from './Hero';
import Card from './Card';
import High from './4x4';
// import Footer from './Footer';
import Logocar from './Logocar';


const items = [
  { id: 1, image: 'https://cdn.discordapp.com/attachments/1263051013607129230/1263051114824077364/837070308599a4b6.jpg?ex=66a35f84&is=66a20e04&hm=c3f324a797d88c8f8e82f2ec40fe965febdf6c9ab629b8287f852528100e88af&', title: 'Car', description: 'سيارات مستعمله وجديده' },
  { id: 2, image: 'https://cdn.discordapp.com/attachments/1263051013607129230/1263051114824077364/837070308599a4b6.jpg?ex=66a35f84&is=66a20e04&hm=c3f324a797d88c8f8e82f2ec40fe965febdf6c9ab629b8287f852528100e88af&', title: 'جدارية', description: 'لوحات جدارية' },
  { id: 3, image: 'https://cdn.discordapp.com/attachments/1263051013607129230/1263052231486476288/Rectangle_29.png?ex=66a3608e&is=66a20f0e&hm=1c4171c16d892f691182766dc272f52e8be5a4555af1322e12e2954b91cf9acc&', title: 'PlayStation', description: 'ألعاب الفيديو' },
  { id: 4, image: 'https://cdn.discordapp.com/attachments/1263051013607129230/1263052815337652285/Rectangle_35.png?ex=66a36119&is=66a20f99&hm=9b1c32cb4c9cfe6fc1c6fe54a0e81298d0ae308fe55beeb081ec2c25f0adbc45&', title: 'موبايلات والكترونيات', description: '' },
  { id: 5, image: 'https://cdn.discordapp.com/attachments/1263051013607129230/1263053137325850716/Rectangle_37.png?ex=66a36166&is=66a20fe6&hm=329642c89404af32839105353bd54a69fdc5b7d93041b7e5a030b1fcf7638df1&', title: 'قطع ثمينه من التماثيل والتحف', description: '' },
  { id: 6, image: 'https://cdn.discordapp.com/attachments/1263051013607129230/1263053274794295306/Rectangle_40.png?ex=66a36187&is=66a21007&hm=c89b9839d5a8c753c5a9cbbe0831dab972c23a9f9ffd6961f6c80912c8fddec4&', title: 'عقارات', description: '' },
  { id: 7, image: 'https://cdn.discordapp.com/attachments/1263051013607129230/1263053274794295306/Rectangle_40.png?ex=66a36187&is=66a21007&hm=c89b9839d5a8c753c5a9cbbe0831dab972c23a9f9ffd6961f6c80912c8fddec4&', title: 'dwd', description: '' },
  { id: 7, image: 'https://cdn.discordapp.com/attachments/1263051013607129230/1263053274794295306/Rectangle_40.png?ex=66a36187&is=66a21007&hm=c89b9839d5a8c753c5a9cbbe0831dab972c23a9f9ffd6961f6c80912c8fddec4&', title: 'dwd', description: '' },
  { id: 7, image: 'https://cdn.discordapp.com/attachments/1263051013607129230/1263053274794295306/Rectangle_40.png?ex=66a36187&is=66a21007&hm=c89b9839d5a8c753c5a9cbbe0831dab972c23a9f9ffd6961f6c80912c8fddec4&', title: 'dwd', description: '' }

];

const Home = () => {
  return (
    <div className="Home">
      {/* <Header /> */}
      <Hero />
      <main className="main">
          <Card  items={items}/>
          <div className="ProductDetails"></div>
      </main>
      
      <Logocar />
      <High />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;











