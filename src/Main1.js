import './Main1.css';

function Main1() {
  return (
    <div className='wrap'>
      {/* 1. header */}
      <div className="header">
        {/* 1-1. 로고 */}
        <a href="#top">
          <img className="logo" alt="profile" src={require("./img/logo.png")} />
        </a>
        <div className="login">
          {/* 1-2. 사업자 로그인 */}
          <span>사업자 로그인</span>
          <b> | </b>
          {/* 1-3. 일반 회원 로그인 */}
          <span>일반 회원 로그인</span>
        </div>
      </div>


      {/* 2. search */}
      <div className="search">
        {/* 2-1. search bar */}
        <div className="searchBar">검색</div>
        {/* 2-2. hash */}
        <div className="keyword">추천키워드: #{ } #{ } #{ }</div>
      </div>

      {/* 3. nav */}
      <div className="nav">
        <div className="nav1"></div>
        <div className="nav2"></div>
        <div className="nav3"></div>
      </div>
    </div>
  );
}

export default Main1;
