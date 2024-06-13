<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'saeed' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



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
define( 'AUTH_KEY',         'btxcqVHYCXiWX3peBe6r9ix7ecfwU0IaFu0dwrb5CbAOLSrXyCf8vq3bnPgcZsmm' );
define( 'SECURE_AUTH_KEY',  'GpXL1G9twPSw1mFgyuqjd2KR9WLuM5j618o7Z8QwrS5bm6X7FavgWTISBGOVWEOQ' );
define( 'LOGGED_IN_KEY',    'P34e5NpEUQs0K5wInVfeB0ov40Q7J1XV3wKkFHI8sAjxYy5jw5ejYPekqRo1yzI6' );
define( 'NONCE_KEY',        'BI5Rm9xiFYjDg0AGMtqIdMYTYIzLfwB487EnB1hgs2j3zQG69LbE5puxjPxCVOYN' );
define( 'AUTH_SALT',        'S8Bmg8cAyBTArJVFYwKivr9Ad6NavNyAzVi0ciKuqIYovTgWKTKpzbJ5gTMAku4s' );
define( 'SECURE_AUTH_SALT', 'TqlyKE6VJYTP7yQCYjlJi6rPtKKsEVxxXoQki8RBr19triSFRoTyWFv87lTwcwqc' );
define( 'LOGGED_IN_SALT',   'TUJGOw93RHvu1ayXxIpOWQ9cygWakRQKVnaYZ1LBrVLYYVCh23neqNANHlnFnPoj' );
define( 'NONCE_SALT',       '93Rm6zVQpGgU5x8hHnSQLAyqYSmwEqvLbe9KRpdytIz3OGnQHu4HbObkgOO84Usr' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
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
