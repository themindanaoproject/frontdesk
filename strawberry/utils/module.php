<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <?php site('Module Preview — '.$GLOBALS['module']); ?>
        <style media="screen">
            .module-preview-wrapper--outer {
                display: flex;
                justify-content: center;
                height: 100vh;
                width: 100%;
                align-items: center;
            }
            .module-preview-wrapper--inner {

            }
        </style>
    </head>
    <body>
        <app xscope="<?php echo $GLOBALS['scope']; ?>">
            <div class="module-preview-wrapper--outer">
                <?php module($GLOBALS['module']); ?>
            </div>

        </app>
        <?php scope($GLOBALS['scope'].'.js') ?>
    </body>
</html>
