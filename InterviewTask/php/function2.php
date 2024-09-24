<?php
function sumRange($start, $end) {
    $sum = 0;
    for ($i = $start; $i <= $end; $i++) {
        $sum += $i;
    }
    return $sum;
}

echo sumRange(1, 5);
?>
