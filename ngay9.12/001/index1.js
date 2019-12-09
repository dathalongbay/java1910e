
// khai báo class trong javascript
class SinhVien {
    // constructor : phương thức khởi tạo của 1 class
    constructor(ten, tuoi, quequan) {
        // tạo ra 1 thuộc tính trong class với tên thuộc tính là tensinhvien
        this.tensinhvien = ten;
        this.tuoisinhvien = tuoi;
        this.quequansinhvien = quequan;
    }

    // phương thức bình thường trong class
    thongtin() {
        var info = "Tên sinh viên là : " + this.tensinhvien;
        info = info + " Tuôi sinh viên là : " + this.tuoisinhvien;
        info = info + " Quê sinh viên là : " + this.quequansinhvien;

        return info;
    }


    /**
     * static method ( phương thức tĩnh )
     * có thể gọi đến phương thức tĩnh mà không cân khởi tạo đối tượng
     */
    static diemSinhVien() {
        return "java 8 html 5 css 6";
    }

}

// gọi trực tiếp đến phương thức tĩnh mà không cần khởi tạo đối tượng
// cú pháp TenClass.TenPhuongThucTinh();
document.getElementById("diem").innerHTML = SinhVien.diemSinhVien();


// khởi tạo đổi tượng từ class
var trung = new SinhVien("nguyễn đức trung", 21, "ninh bình");
document.getElementById("demo").innerHTML = trung.thongtin();