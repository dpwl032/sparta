
//movieCards를 선언 후 모든 무비카드를 선택해서 (20개의 li태그 하나하나 ) 담음
export const handleSearch = (searchKeyword) => {
  const movieCards = document.querySelectorAll(".movie-card");

//movie-card는 배열의 형태를 띄고있어서 forEach메소드를 쓸 수 있음
//반복문을 들면서 내용을 하나하나 추가함
  movieCards.forEach((card) => {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();
    const searchedValue = searchKeyword.toLowerCase();

    if (title.includes(searchedValue)) { //내가 입력한 값을 포함한다면
      card.style.display = "block";     //그대로 보여주고
    } else {
      card.style.display = "none";     //아니라면 보여주지마
    }
  });
};