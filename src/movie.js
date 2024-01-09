 //fetchMovieData함수를 사용해서 TMDB api 서버로 부터 데이터를 받아와서 movies에 담아줌
export const generateMovieCards = async () => {
  const movies = await fetchMovieData();

//card-list라는 아이디를 가진 객체를 담아서 cardLit 변수에 담아줌
  const cardList = document.querySelector("#card-list");
  cardList.innerHTML = movies
    .map( //map을 돌리면 배열이됨! 총 20개의 카드가 생김
      (movie) => `
        <div class="movie-card" id="${movie.id}">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <h3 class="movie-title">${movie.title}</h3>
          <p>${movie.overview}</p>
          <p>Rating: ${movie.vote_average}</p>
        </div>`
    )
    .join(""); //배열을 문자로 만드는 메소드 ()안에 '',공백 등 뭐가 들어가냐에 따라 만들어지는 문자가 다름

    //cardList태그에 클릭 이벤트가 발생되면 , handleClickCard를 실행해
  cardList.addEventListener("click", handleClickCard);

  // 이벤트 위임: 하위요소에서 발생한 이벤트를 상위요소에서 처리하도록 해줍니다.----> 각 카드를 선택하는게 아니라 카드를 품고있는 부모에 이벤트할당
  function handleClickCard({ target }) {
    // 카드 외 영역 클릭 시 무시
    if (target === cardList) return;

    if (target.matches(".movie-card")) { //제대로 클릭시
      alert(`영화 id: ${target.id}`);
    } else {
      // 카드의 자식 태그 (img, h3, p) 클릭 시 부모의 id로 접근
      alert(`영화 id: ${target.parentNode.id}`);
    }
  }
};



async function fetchMovieData() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2U2YTBhNWRkYjkwYzFiYmZmZjA0ZTQzMTkzNzMzNSIsInN1YiI6IjY1OWI2MWE3Y2E0ZjY3MDFmZTc3MzlkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z1kQ84X5_ZIA9RFVO4X540m7vnIyLH_zWe8ohzhUIYU'
    }
  };
  
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options
  );
  const data = await response.json();
  return data.results;
}