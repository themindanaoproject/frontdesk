<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php site('The Mindanao Project Library'); ?>
    </head>
    <body>
        <?php module('Loader'); ?>
        <app class="app-body" xscope="Main" class="h-12">
            <div xpatch="@PageView">
                <div xif="View.state=='default'">

                </div>
                <div xif="View.state=='dashboard'">
                    This is the dashboard
                </div>
                <div xif="View.state=='index'">
                    <?php module('HomePage'); ?>
                </div>
                <div xif="View.state=='error'">
                    <?php module('ErrorPage'); ?>
                </div>
            </div>
        </app>
        <?php scope('Main.js') ?>
    </body>
</html>
