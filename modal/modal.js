console.log('[PI-V2] START: MODAL UTILS');

// 주문 4 버튼 클릭 시 모달 창 표시
document.getElementById("order-4").addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
});

// 모달 닫기 버튼 클릭 시 모달 창 닫기
document.getElementsByClassName("close")[0].addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
});

// 닫기 버튼 클릭 시 모달 창 닫기
document.getElementsByClassName("close-btn")[0].addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
});

// 모달 창 외부 클릭 시 모달 창 닫기
window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

console.log('[PI-V2] END: MODAL UTILS');
