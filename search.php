<?php 
$lists = array('11111','22222222', '33333', '12312', '3242341', '123123123', '3123123', '中国人', '中华');

$results = array_filter($lists, function($s){
  return strpos($s, $_POST["query"]) !== false;
});


echo json_encode($results);
?>
