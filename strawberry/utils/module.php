<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <?php site('Module Preview — '.$GLOBALS['module']); ?>
        <style media="screen">
            .module-preview-wrapper--outer {
                display: flex;
                justify-content: center;
            }
            .module-preview-wrapper--inner {
                
            }
        </style>
    </head>
    <body>
        <app xscope="<?php echo $GLOBALS['scope']; ?>">
            <div class="module-preview-wrapper--outer">
                <div class="module-preview-wrapper--inner">
                    <?php module($GLOBALS['module']); ?>
                </div>
            </div>

        </app>
        <?php scope($GLOBALS['scope'].'.js') ?>
    </body>
</html>
