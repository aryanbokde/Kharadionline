<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'khar_testing258' );

/** Database username */
define( 'DB_USER', 'khar_testing_admin258' );

/** Database password */
define( 'DB_PASSWORD', 'pc82O9Ggr98fs^dO' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'YHIxwoV6c>A#Uce.J?nN%PWzWOgTFWc*!VmYFM4Bf[|oYoY}N}{Wra]fBr8m2*^o' );
define( 'SECURE_AUTH_KEY',  'uKN^r@u!3NNYQQ+de1 u^O1PbnA+)?4UAPrq7U5mSOg^zb5Hx ajDu,2n@#V<;Q>' );
define( 'LOGGED_IN_KEY',    'W+&=73G{+sxa`[Aoh8UxaH=o!g SNaHd>W(?op=]mZ6;ZrBdl<DD.:2m+Jr< COj' );
define( 'NONCE_KEY',        'e(i;oW/u|saw2VS),/L1fX+0G(_lg)l0Xf^gt>i!u6%E2@`m*kiND,&NR|Xr vn4' );
define( 'AUTH_SALT',        'z{2cNK kbK0c1g6lZFaGEZ`|U7 i~~X:luUiUY: sfU|n:{&$}_,nY)?6sNK-d?V' );
define( 'SECURE_AUTH_SALT', '~YF7}DA6nB,bM9v0N(1l]j`_6ui}e&02<mH3S*VHWfXV5xtRD5_!l02dH:g&;b~A' );
define( 'LOGGED_IN_SALT',   '.73TF^4i&1wD$Jl# W3fVfRcZqk_ixd%vUq^tAl+4ZTj Dj27Foet4p.[l4y~&`d' );
define( 'NONCE_SALT',       'mw/BPO)lR1NOo&~]9gHe_-7(A+YYHu!ekQ~1^jrv@k[@d{D|A-O] =g:5${O75oh' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ko_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
