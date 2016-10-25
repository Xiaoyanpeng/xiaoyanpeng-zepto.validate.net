/**
 * Created by xyp on 2016/10/24.
 */
(function() {
  var regs = {
    dataType: {
      "*": /[\w\W]+/,
      "m":/^(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/,
      "e": /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      "t": /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$/,
    }
  }


  $("#sub").click(function () {
    var $form = $(this).closest("form")
    var flag = 1
    $form.find(".need-verify").each(function () {
      formVerify($(this))
    })

    $form.find(".verify-group").each(function () {
      if ($(this).hasClass("has-error")) {
        flag = 0
      }
    })

    if (flag) {
       alert('成功')
    }
  })

  $(document).on("change", ".need-verify", function () {
    formVerify($(this))
  })

  var formVerify = function(obj) {
    var $this = obj
    var value = $this.val()
    var dataType = $this.attr("datatype")
    var errorMsg = $this.attr("errormsg")
    var nullMsg = $this.attr("nullmsg")

    if ($.trim(value) === "") {
      $this.siblings(".valid-tip").text(nullMsg)
      $this.closest(".verify-group").removeClass("has-success").addClass("has-error")
    } else {
      if (!regs.dataType[dataType].test($.trim(value))) {
        $this.siblings(".valid-tip").text(errorMsg)
        $this.closest(".verify-group").removeClass("has-success").addClass("has-error")
      } else {
        $this.closest(".verify-group").addClass("has-success").removeClass("has-error")
        $this.siblings(".valid-tip").text(" ")
      }
    }
  }
})()