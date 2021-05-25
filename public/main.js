// Hàm chức năng vẽ giao diện và nội dung
function loadDocJQuery() {
    $.ajax("http://localhost:3000/users", {
        method: "GET"
    }).done(function (users) {
        let content = "";

        for (let i = 0; i < users.length; i++) {
            const user = users[i];

            content += `<tr>
                      <td>${user.firstName} ${user.lastName}</td>
                      <td>${user.birthday}</td>
                      <td>${user.email}</td>
                      <td>${user.phone}
                      <span>
                        <a class="edit-btn" href="./chinh-sua-hoc-vien.html?${user.id}")"><i class="fas fa-edit icon"></i>Chỉnh
                          sửa</a>
                        | 
                        <button class="del-btn" onclick="del(${user.id})" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                              class="fas fa-trash-alt icon"></i>Xóa</button>
                      </span>
          </td>
      </tr>`;
        };

        $("#table-users").html(content);
    });
};

$(function () {
    loadDocJQuery();
});

//-----------------------------

// Hàm chức năng xóa
function del(id) {
    $('.btn-primary').click(function () {
        $.ajax(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        }).done(function () {
            $('.modal-content').css('visibility','hidden');
            setTimeout(() => {
                alert('Đã xóa thành công');
                location.reload();
            }, 100);
        });
    });
}
//-----------------------------

// Hàm chức năng thêm học viên
$('#save-btn').click(function () {
    if ($('#name').val() === '' || $('#birthday').val() === '' || $('#email').val() === '' || $('#phone').val() === '') {
        if ($('#name').val() === '') {
            alert('Bạn cần nhập họ tên');
        }
        else if ($('#birthday').val() === '') {
            alert('Bạn cần nhập ngày tháng năm sinh');
        }
        else if ($('#email').val() === '') {
            alert('Bạn cần nhập email');
        }
        else if ($('#phone').val() === '') {
            alert('Bạn cần nhập số điện thoại');
        }
    }
    else {
        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/users",
            data: {
                "firstName": '',
                "lastName": $('#name').val(),
                "birthday": $('#birthday').val(),
                "email": $('#email').val(),
                "phone": $('#phone').val()
            },
            dataType: 'json'
        }).done(function () {
            alert('Thêm mới thành công');
            window.history.back();
        });
    }
});
//-----------------------------

// Hàm chỉnh sửa thông tin học viên
   
//-----------------------------
