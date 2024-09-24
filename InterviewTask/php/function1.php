<?php
function findMax($numbers) {
    if (empty($numbers)) {
        return null;
    }
    $max = $numbers[0];
    foreach ($numbers as $number) {
        if ($number > $max) {
            $max = $number;
        }
    }
    
    return $max;
}

$numbers = [3, 5, 7, 2, 8, -1, 4];
$maxNumber = findMax($numbers);
echo "Максимальное число: " . $maxNumber;
?>
