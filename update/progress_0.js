classes = 0;
pages = 0;

class_progress = Math.round(classes*100/38);
$('#class_progress').progress({
  percent: class_progress
});
$('#classes_completed').text(classes);

page_progress = Math.round(pages*100/192);
$('#page_progress').progress({
  percent: page_progress
});
$('#pages_completed').text(pages);
