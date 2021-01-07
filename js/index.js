charset = 'UTF-8';
$(function () {
  theaMsForm($('.sign-in'));

  // 单选
  function radio(btn, cont, classname) {
    $(btn).each(function (i) {
      $(this).click(function () {
        $(this).addClass(classname).siblings().removeClass(classname);
        $($(cont)[i]).addClass(classname).siblings().removeClass(classname);
      });
    });
  }
  // 获取学习备考方案
  radio('.guide .d-row span', null, 'on');
  // 在线测试
  radio('.online .fl li', '.online .fr .item', 'on');
  // 在线测试-题目
  radio('.online .item .thead li', '.online .item .tbody', 'on');
  // 在线测试-题目的选项
  radio('.online .tbody li', null, 'on');
  // 资料
  radio('.data .thead li', '.data .tbody', 'on');
  // 获取学习备考方案
  $('.guide .submit').click(function () {
    $('#plan').val($('.guide .d-row .on').text());
  });

  // 考试时间倒计时
  var start = new Date();
  var end = new Date("2021/05/25");
  function countTime(start, end) {
    const month = end.getMonth() - start.getMonth();
    let days = 0;
    switch (month) {
      case 4:
        days = 31 - start.getDate() + 28 + 31 + 30 + end.getDate();
        break;
      case 3:
        days = 28 - start.getDate() + 31 + 30 + end.getDate();
        break;
      case 2:
        days = 31 - start.getDate() + 30 + end.getDate();
        break;
      case 1:
        days = 30 - start.getDate() + end.getDate();
        break;
      default:
        days = end.getDate() - start.getDate();
    }
    return days;
  }
  // 动态赋值天数
  const days = countTime(start, end).toString();
  function fillDate(ele, days) {
    for (let i = 0; i < days.length; i++) {
      let $span = $('<span>')
      $span.text(days[i])
      ele.append($span);
    }
  }
  fillDate($('#days'), days);

  function playVideo(video, btn, classname) {
    $(btn).each(function(i){
      $(this).click(function () {
        $(video).map(function(index, item){
          item.pause(); // 暂停
        })
        $($(video)[i]).addClass(classname).siblings().removeClass(classname);
        $($(video)[i])[0].play();
      });
    });
  };
  playVideo('.video', '.test-play', 'active');

  // 关闭侧边导航
  $('.close').click(function () {
    $('.right-side').hide();
  });

  // 回到顶部
  $('.black-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });

});
