<?php
    include "lib/config.php";
    include "templates/header.php";
?>
<header class="header">
    <?php
        include "templates/navbar.php";
    ?>
</header>

<main id="wrapper">
    <?php
        include "templates/slider.php";
        include "templates/productos.php";
        include "templates/load.php";
    ?>
</main>

<?php
include "templates/footer.php";
include "templates/footer-end.php";
