<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'FORCE_SSL_ADMIN', true ); // Redirect All HTTP Page Requests to HTTPS - Security > Settings > Enforce SSL
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

define( 'ITSEC_ENCRYPTION_KEY', 'ZnglZ0lBUThjRig6NHFkZmN7K3YsWUQpYUdJeF1RfDRxd3VXZlo0PnY1QGZbKkA0IyUyfTZ9WFMwTHhZOzlKWQ==' );

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
define( 'DB_NAME', 'bns' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         'm!B1_,C4E Y*-raCuTg:[SmzTwo&}mP[AH5VSL.LDk^DbfCdh1.*|,.}AE[Va&*>' );
define( 'SECURE_AUTH_KEY',  'O#Hyn=2:(}tRtw]^P`h~Dw,zv#;NW:~IL{T`Vgtg7YS=e woPH[fLNtDRB&<&KcT' );
define( 'LOGGED_IN_KEY',    '2L3dB_^C@sbO3#ziF-Ni]at-c2P%}c0I): 3SadeLV9Q@Jq36mdnE;V~YLj(.OJt' );
define( 'NONCE_KEY',        'm-n``HZLf$.P%K}oQ;Xyjg=<&<3<0oIB%|lJnwpZ<rb/2D.C6{|{Dt*pf%B%=[AT' );
define( 'AUTH_SALT',        'zAI+v87Gx8h9Dz`/ZQ8 7UYC|*jJ$K{<K;=Z/q(2q**&63l3tO2uRtXvJ&4?9f/s' );
define( 'SECURE_AUTH_SALT', 'A)iF8h&1H}}$MV|LW&<mcA[{/~5UzjwklFtSn#9KK0H$P?qgUbf&/%JmOn,y[fu,' );
define( 'LOGGED_IN_SALT',   'P.LJpb$fwE}i0csu#Oh-(zO=<[7-+}hCPpwElPm ,?vGfs#z[6Ms%toad>7d7{^7' );
define( 'NONCE_SALT',       '}t3hS3rL^9nZ%AM?a}Xc,@~:/c1ZxkxH(d5Mly:[F% &+}d1fuTIl;wl*ob5{/YY' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'knbz0l_';

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
