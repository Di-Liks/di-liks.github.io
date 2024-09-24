<?php
function countEvenOdd($numbers) {
    $result = [
        'even' => 0,
        'odd' => 0
    ];

    foreach ($numbers as $number) {
        if ($number % 2 === 0) {
            $result['even']++;
        } else {
            $result['odd']++;
        }
    }

    return $result;
}

$numbers = [1, 2, 3, 4, 5, 6, 7, 8];
$count = countEvenOdd($numbers);
print_r($count);
?>
