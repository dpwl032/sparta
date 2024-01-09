//메인보드
//main.js가 movie.js와 search.js를 불러옴
import { generateMovieCards } from "./movie.js";
import { handleSearch } from "./search.js";

generateMovieCards();//함수실행- 영화카드들을 실행


//searchInput이라는 변수에다 전체화면에 있는 문서에서 id가 search-input을 찾아서 담아줌
const searchInput = document.querySelector("#search-input");
searchInput.focus();//focus() : 새로고침했을 때 input창에 커서


//똑같이 전체문서에서 id가 search-btn인 값을 찾아서 form 변수에 넣어줌
const form = document.querySelector("#search-form");
//form을 submit이벤트가 발생할 때마다 검색로직을 실행
form.addEventListener("submit", (event) => {
  event.preventDefault();//submit이벤트가 발생했을 때, form태그의 기본동작인 새로고침을 막아줘!
  handleSearch(searchInput.value);;//검색창에 입력한 값을 handleSearch함수의 인자로 들어감
});