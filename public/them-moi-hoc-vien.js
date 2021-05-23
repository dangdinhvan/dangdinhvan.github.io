$('#save-btn').click(function () {
    $.ajax({
        type: 'POST',
        url: "http://localhost:3000/users",
        data: {
            "firstName":'',
            "lastName": $('#name').val(),
            "birthday": $('#birthday').val(),
            "email": $('#email').val(),
            "phone": $('#phone').val()
        },
        success: alert('Thêm mới thành công'),
        dataType: 'json'
    });
});
