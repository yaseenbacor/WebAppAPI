function post(url, data, success = null, error = null, raw = false) {
    $(".splash").show();
    $.ajax({
        type: "POST",
        url,
        data,
        success: function (response) {
            $(".splash").hide();
            if (raw) {
                success(response);
                return;
            }
            if (response.success) {
                if (typeof success == "function") success(response.data, response.msg);
            } else {
                toastr.error(response.error);
                if (typeof error == "function") error();
            }
        }, error: function (response) {
            $(".splash").hide();
            if (raw) {
                success(response);
                return;
            }
            toastr.error("Failed to contact server");
            if (typeof error == "function") error();
        }
    });
}