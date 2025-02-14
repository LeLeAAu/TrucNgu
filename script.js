function render() {
  uniforms.u_time.value += 0.01;
  uniforms.u_time.value = uniforms.u_time.value % 1000000;
  renderer.render( scene, camera );
}
const messages = [
    "Đùa thôi đúng k 🥹",
    "Thằng cụ nhà mày",
    "Nói thật đi",
    ":))))))))))))",
    "Nhìn cái mặt mày kìa",
    "?:))",
    "Thế thôi t đ hỏi nữa",
    "Thôi nào bấm yes đi:)))))))))))",
    ":))))))))))))))"];
let messageIndex = 0;
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.525}px`;}
function handleYesClick() {
    window.location.href = "MatThangTruc.html";
}
