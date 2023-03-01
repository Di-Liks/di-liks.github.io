<?php

header('HTTP/1.1 404 Not Found');
header('Content-Type: text/html; charset=UTF-8');

print_r($_POST);

print('Привет, мир!');

$xml = file_get_contents('php://input');

// Память очищается в конце работы скрипта.
if (isset($v1)) {
  $v1++;
}
else {
  $v1 = 1;
}
print($v1);
