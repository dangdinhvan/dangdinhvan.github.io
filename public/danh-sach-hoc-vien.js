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
                      <a class="edit-btn" href="./chinh-sua-hoc-vien.html"><i class="fas fa-edit icon"></i>Chỉnh
                        sửa</a>
                      | 
                      <button class="del-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                            class="fas fa-trash-alt icon"></i>Xóa</button>
                    </span>
        </td>
    </tr>`;
    };

    $("#table-users").html(content);
    
    // ham chuc nang xoa
    $('.del-btn').click(function(){
     
    });
    //---------------------------
  });
};

$(function () {
  loadDocJQuery();
});
