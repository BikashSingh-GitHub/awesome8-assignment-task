import React from 'react';
import './App.css';
import logo from './logo.jpg';

const App = () => {
  return (
    <div className='App'>
    <div className="bg-blue-500 px-4 py-8 md:py-12 lg:py-16 xl:py-20 flex flex-col items-center">
    
        <h3 className="headingtext">자유톡</h3>
      </div>
    <div className='centered'> <div>
        <div className="headingtext1">
        <b>  지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</b>
        </div>
        
          <p className="text-sm sm:text-sm md:text-lg lg:text-md xl:text-1xl text-white mb-6 text-center">
            지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~<br /><br />
            혹시 어떤 상품이 제일 괜찮았어? 후기 올라오는거 보면 로우라이즈?<br /><br />
            그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아???<br /><br />
            올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던
            팝들 있으면 어땠는지 후기 좀 공유해주라~~!
          </p>
       </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
          <button className="button-style">#2023</button>
          <button className="button-style">#TRENDS</button>
          <button className="button-style">#LOVE</button>
          <button className="button-style">#POP</button>
          <button className="button-style">#TOP</button>
          <button className="button-style">#POPS!</button>
          <button className="button-style">#WOW</button>
          <button className="button-style">#ROW</button>
        </div><br></br>
      </div>
      <div className="flex flex-col items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 max-w-3xl mx-auto">
        <div className="setimage">
          <img src={logo} alt="Logo" className="imageset" />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight text-center">
            안녕 나 응애
          </h2>
          <div className="expert-icon w-6 h-6 border-2 border-white rounded-full"></div>
        </div>
      
      </div>
    </div>
  );
};

export default App;
