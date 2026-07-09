// ACEP Board Documents · Session Guard
// ตรวจว่ามีการยืนยันรหัสจาก /board/ แล้วหรือยัง — ถ้าไม่มี → redirect กลับหน้ารหัสผ่าน
(function () {
  try {
    if (sessionStorage.getItem('acep_board_auth') === 'ok') return;
  } catch (e) { /* ignore */ }
  // ไม่ผ่าน gate — ส่งกลับหน้า /board/
  var here = encodeURIComponent(location.pathname.split('/').pop() || '');
  location.replace('index.html?next=' + here);
})();
