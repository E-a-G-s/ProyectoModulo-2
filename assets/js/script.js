/* Script para direccionar los Link del nav */
$(document).ready(function () {
  let iraLink = $(".desplazar");

  iraLink.click(function (event) {
    event.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      2000
    );
  });
});
