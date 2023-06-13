// DOM 요소

const $modalWarp = document.querySelector(".modal-wrap");

// .new-btn 클릭시, .modal-wrap의 hidden 클래스 없애기
const $newbtn = document.querySelector(".new-btn");
$newbtn.addEventListener("click", () => {
    remove();
});

// .close-btn 클릭시, .modal-wrap에 hidden 클래스 추가
// 힌트) remove대신 add 사용하기
const $closebtn = document.querySelector(".close-btn")
$closebtn.addEventListener("click", () => {
    add();
})

// .open-btn 클릭시, .modal-wrap의 hidden 클래스 없애기
const $openbtn = document.querySelector(".open-btn")
$openbtn.addEventListener("click", () => {
    remove();
})

// .delete-btn 클릭시, 삭제 여부 물어보는 창 띄워주기
const $deletebtn = document.querySelector(".delete-btn")
$deletebtn.addEventListener("click", () => {
    confirm("정말 삭제하시겠습니까?");
});

//함수 만들기
const remove = () => {
    $modalWarp.classList.remove("hidden");
}
const add = () => {
    $modalWarp.classList.add("hidden");
}
const $title = document.querySelector(".title");
$title.classList.add("change-color");