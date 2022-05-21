import './Main1.css';

function Main1() {
  return (
    // 새로고침 시 랜덤으로 배경이 바뀝니다.
    <div className='wrap'>
      {/* 1. header */}
      <div className="header">
        {/* 1-1. 로고 */}
        {/* 클릭 시 Main1로 이동합니다. */}
        <a href="#top">
          <img className="logo" alt="profile" src={require("./img/logo.png")} />
        </a>
        <div className="login">
          {/* 1-2. 사업자 로그인 */}
          {/* 사업자 로그인 페이지(Businesslogin.js)로 이동합니다. */}
          <span>사업자 로그인</span>
          <b> | </b>
          {/* 1-3. 일반 회원 로그인 */}
          {/* 일반 회원 페이지(MemberLogin.js)로 이동합니다. */}
          <span>일반 회원 로그인</span>
        </div>
      </div>


      {/* 2. search */}
      <div className="search">
        {/* 2-1. search bar */}
        {/* 검색 클릭 시 UI 변경 되고 검색 버튼 추가 필요합니다. */}
        {/* 검색 버튼 클릭 시 검색 페이지(Search.js) 이동됩니다 */}
        <div className="searchBar">검색</div>
        {/* 2-2. keyword */}
        {/* #뒤에 키워드(고정?변동?) 추가 후 클릭 시 키워드에 맞는 페이지(Search.js) 이동합니다. */}
        <div className="keyword">추천키워드: #{ } #{ } #{ }</div>
      </div>

      {/* 3. nav */}
      <div className="nav">
        <div className="nav1"></div>
        {/* 두번 째 메인페이지(Main2.js)으로 이동합니다. */}
        <div className="nav2"></div>
        {/* 세번 째 메인페이지(Main3.js)로 이동합니다. */}
        <div className="nav3"></div>
      </div>
    </div>
  );
}

export default Main1;
