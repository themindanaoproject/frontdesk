<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <?php site('The Mindanao Project Library'); ?>
    </head>
    <body>
        <?php module('Loader'); ?>
        <app xscope="Main">
            <div xpatch="@PageView">
                <div xif="View.state=='default'">

                </div>
                <div xif="View.state=='dashboard'">
                    This is the dashboard
                </div>
                <div xif="View.state=='error'">
                    <?php module('ErrorPage'); ?>
                </div>
            </div>
        </app>
        <?php scope('Main.js') ?>
    </body>
</html>
