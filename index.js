/*var soGioLam =5 ;
var tienLuongTrenGio =100;

var tienLuong = soGioLam*tienLuongTrenGio;
*/

// function tinhLuong(soGioLam,tienLuongTrenGio){
//     // silution
//     var tienLuong = soGioLam*tienLuongTrenGio;
//     console.log(tienLuong);
//     // output
//     return soGioLam;
// }

// var tinh = tinhLuong(5,100);
// tinh+=100;
// console.log('tienLuong',tinh);
// // xử lí thêm

// document.getElementById('diemTrungBinh').onclick=function(){
//     // input điểm toán, lí , toán
//     var diemToan =document.getElementById('diemToan').value*1;
//     var diemLi =document.getElementById('diemLi').value*1;
//     var diemHoa =document.getElementById('diemHoa').value*1;

//     // output điểm trung bình khối A
//     var diemTBKA = tinhDiemTrungBinh(diemToan,diemLi,diemHoa);
//     console.log(diemTBKA);
//     document.getElementById('diemTrungBinhkhoiA').value = diemTBKA ;
//     // tính điểm trung bình khối C
//     // var diemVan =document.getElementById('diemVan').value*1;
//     // var diemSu =document.getElementById('diemSu').value*1;
//     // var diemDia =document.getElementById('diemDia').value*1;

//     // // var diemTBKC = (diemVan+diemSu+diemDia)/3 ;
//     // var diemTBKC = tinhDiemTrungBinh(diemVan,diemDia,diemSu);
//     // document.getElementById('diemTrungBinhkhoiC').value= diemTBKC;
// }

// function tinhDiemTrungBinh (diem1,diem2,diem3){
//     // input
//     var dtb = 0;
//     dtb =(diem1+diem2+diem3)/3;
//     return dtb ;
// }

// Quản lí sinh viên
document.getElementById("tongDiemTB").onclick = function () {
  var diemThuNhat = Number(document.getElementById("diemMonThuNhat").value);
  var diemThuHai = Number(document.getElementById("diemMonThuHai").value);
  var diemThuBa = Number(document.getElementById("diemMonThuBa").value);
  var diemCongKhuVuc = document.getElementById("diemKhuVuc").value * 1;
  var diemChuan = document.getElementById("diemChuanHoiDong").value * 1;
  switch (diemCongKhuVuc) {
    case "2":
      {
        console.log("bạn được cộng 2đ");
      }
      break;
    case "1":
      {
        console.log("bạn được cộng 1đ");
      }
      break;
    case "0.5":
      {
        console.log("bạn được cộng 0.5đ");
      }
      break;
  }
  var diemCongDoiTuong = document.getElementById("diemDoiTuong").value * 1;
  switch (diemCongKhuVuc) {
    case "2.5":
      {
        console.log("bạn được cộng 2.5đ");
      }
      break;
    case "1.5":
      {
        console.log("bạn được cộng 1.5đ");
      }
      break;
    case "1":
      {
        console.log("bạn được cộng 1đ");
      }
      break;
  }
  // var diemTB = (diemThuNhat+diemThuHai+diemThuBa)/3;
  var tongDiem =
    diemThuNhat + diemThuHai + diemThuBa + diemCongKhuVuc + diemCongDoiTuong;
  if (
    tongDiem >= diemChuan &&
    diemThuNhat > 0 &&
    diemThuHai > 0 &&
    diemThuBa > 0
  ) {
    xepLoai = "Đạt";
  } else {
    xepLoai = "không Đạt";
  }

  document.getElementById("diemTrungBinhBaMon").value =
    "tổng điểm: " + tongDiem + " _kết luận: " + xepLoai;
};

// function diemTrungBinhCuaBaMon (mark1,mark2,mark3){
//     var average =0;
//     average =(mark1+mark2+mark3)/3 ;
//     return average ;
// }

// bài tập 3 tính tiền điện
/* 
input : nhập tên người dùng và thông tin số điện kw


các bước xử lí
TH1 50kw đầu : 500d/kw;
TH2 50kw tt : 650d/kw;
TH3 100kw tt : 850d/kw;
TH4 150kw tt: 1100d/kw
TH5 còn lại : 1300d/kw

output: xuất ra số tiền cho người dùng .

*/
const tien50KwDauTien = 500;
const tien50KwTiepTheo = 650;
const tien100KwTiepTheo = 850;
const tien150KwTiepTheo = 1100;
const tienKwConLai = 1300;

document.getElementById("ketQuaTienDien").onclick = function () {
  // lấy số kw từ người dùng
  var soKw = document.getElementById("nhapSoDien").value * 1;
  var tenNguoiDung = document.getElementById("nguoiSuDung").value;
  // kiểm tra giá trị số kw từ người dùng
  // var giaDien1 =tien50KwDauTien*(50-soKw)
  // var giaDien2 =tien50KwTiepTheo
  // var giaDien3 =tien100KwTiepTheo
  // var giaDien4 =tien150KwTiepTheo
  // var giaDien5=tienKwConLai*(soKw-350)

  if (soKw <= 50) {
    tinhTongTienDien = tien50KwDauTien * soKw;
    console.log(tinhTongTienDien);
  } else if (soKw > 50 && soKw <= 100) {
    tinhTongTienDien = tien50KwDauTien * 50 + tien50KwTiepTheo * (soKw - 50);
  } else if (soKw > 100 && soKw <= 200) {
    tinhTongTienDien =
      tien50KwDauTien * 50 +
      tien50KwTiepTheo * 50 +
      tien100KwTiepTheo * (soKw - 100);
  } else if (soKw > 200 && soKw <= 350) {
    tinhTongTienDien =
      tien50KwDauTien * 50 +
      tien50KwTiepTheo * 50 +
      tien100KwTiepTheo * 100 +
      tien150KwTiepTheo * (soKw - 200);
  }
  if (350 < soKw) {
    tinhTongTienDien =
      tien50KwDauTien * 50 +
      tien50KwTiepTheo * 50 +
      tien100KwTiepTheo * 100 +
      tien150KwTiepTheo * 150 +
      tienKwConLai * (soKw - 350);
  }

  document.getElementById("tongTienDien").value =
    "Tổng tiền điện của " + tenNguoiDung + " là " + tinhTongTienDien + " VNĐ";
};

// bài tập 3 tính tiền thu nhập cá nhân

/*
 input : 
 họ và tên
 tổng thu nhập 
 người phụ thuộc

 các bước xử lí
    tổng thuế cá nhân = tổng thu nhập 1 năm -4tr -số người phụ thuộc *1.6tr

 output:
 thuế mà cá nhân phải đóng là :

*/
var tienNguoiPhuThuoc = 1600000;
var tienCaNhan = 4000000;

const duoi60Trieu = 5 / 100;
const tu60Den120Trieu = 10 / 100;
const tu120Den210Trieu = 15 / 100;
const tu210Den380Trieu = 20 / 100;
const tu380Den624Trieu = 25 / 100;
const tu624Den960Trieu = 30 / 100;
const tren960Trieu = 35 / 100;

function tongThueCaNhan() {
  var thuNhap1Nam = document.getElementById("tongThuNhapMotNam").value * 1;
  var tongnguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
  var chiuThue =
    thuNhap1Nam - tienCaNhan - tongnguoiPhuThuoc * tienNguoiPhuThuoc;
  console.log(chiuThue);
  if (chiuThue <= 60000000) {
    tongchiuThueMotNam = chiuThue * duoi60Trieu;
    console.log(tongchiuThueMotNam);
  } else if (chiuThue > 60000000 && chiuThue <= 120000000) {
    tongchiuThueMotNam = chiuThue * tu60Den120Trieu;
  } else if (chiuThue > 1200000000 && chiuThue <= 210000000) {
    tongchiuThueMotNam = chiuThue * tu120Den210Trieu;
  } else if (chiuThue > 210000000 && chiuThue <= 380000000) {
    tongchiuThueMotNam = chiuThue * tu210Den380Trieu;
  } else if (chiuThue > 380000000 && chiuThue <= 624000000) {
    tongchiuThueMotNam = chiuThue * tu380Den624Trieu;
  } else if (chiuThue > 624000000 && chiuThue <= 960000000) {
    tongchiuThueMotNam = chiuThue * tu624Den960Trieu;
  }
  if (chiuThue > 960000000) {
    tongchiuThueMotNam = chiuThue * tren960Trieu;
    console.log(tongchiuThueMotNam);
  }
  document.getElementById("tienThueMotNam").value = tongchiuThueMotNam + "VNĐ";
}

// bài tập 4 tính tiền cáp
function changCustumer() {
  var typeCustumer = document.getElementById("loaiKhachHang").value;
  if (typeCustumer == "nhaDan") {
    document.getElementById("ketNoiDoanhNghiep").style.display = "none";
  } else {
    document.getElementById("ketNoiDoanhNghiep").style.display = "block";
  }
}

document.getElementById("tinhTien").onclick = function () {
  feeInvoice = 0;
  feeService = 0;
  feeLuxury = 0;
  var numberCustumer = document.getElementById("maKhachHang").value;
  var typeCustumer = document.getElementById("loaiKhachHang").value;
  var numberConnect = document.getElementById("ketNoiDoanhNghiep") * 1;
  var numberLuxury = document.getElementById("soKenhCaoCap").value * 1;
  if (typeCustumer == "nhaDan") {
    feeInvoice = 4.5;
    feeService = 20.5;
    feeLuxury = 7.5;
  } else if (typeCustumer == "doanhNghiep") {
    feeInvoice = 15;
    if (numberConnect <= 10) {
      feeService = 75;
    } else if (numberConnect > 10) {
      feeService = 75 + (numberConnect - 10) * 5;
    }
    feeLuxury = 50;
  }
  tongTienCap = feeInvoice + feeService + feeLuxury;
  console.log(tongTienCap);
  document.getElementById("hienThiTienCap").innerHTML =
    "MÃ khách hàng: " + numberCustumer + " tổng tiền cáp : " + tongTienCap;
};
