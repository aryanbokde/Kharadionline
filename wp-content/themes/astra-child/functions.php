<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );


add_filter( 'woocommerce_return_to_shop_redirect', 'bbloomer_change_return_shop_url' ); 
function bbloomer_change_return_shop_url() {
   return home_url();
}
add_filter('woocommerce_register_post_type_product', function($post_type) {
    $post_type['has_archive'] = false;
    return $post_type;
});


//add_action( 'woocommerce_after_shop_loop_item', 'bbloomer_echo_stock_variations_loop' );
  
function bbloomer_echo_stock_variations_loop(){
    global $product;
    if ( $product->get_type() == 'variable' ) {
		$html = '<form action="' . esc_url( $product->add_to_cart_url() ) . '" class="cart variant-shop" method="post" enctype="multipart/form-data">';
		$html .= "<select class='qty-shop'>";
        foreach ( $product->get_available_variations() as $key ) {
            $variation = wc_get_product( $key['variation_id'] );
            $stock = $variation->get_availability();
            $stock_string = $stock['availability'] ? $stock['availability'] : __( 'In stock', 'woocommerce' );
			//print_r($key);
            $attr_string = array();
            foreach ( $key['attributes'] as $attr_name => $attr_value ) {
                $attr_string[] = $attr_value; 
 		
            }
			$html .= '<option value="' . implode( ', ', $attr_string ) . '">' . implode( ', ', $attr_string ) . '</option>';
            
        }
		$html .= '</select>';
		$html .= '<button type="submit" class="button alt">' . esc_html( $product->add_to_cart_text() ) . '</button>';
		$html .= '</form>';
    }
	echo $html;
}


//add_shortcode ( 'giveme_vendor_url_title', 'display_vendor_url_shortcode2', 20 );
function display_vendor_url_shortcode2() {
    // Get the author ID (the vendor ID)
    $vendor_id = get_post_field( 'post_author', get_the_id() );
    // Get the WP_User object (the vendor) from author ID
    $vendor = new WP_User($vendor_id);

    $store_info  = dokan_get_store_info( $vendor_id ); // Get the store data
    $store_name  = $store_info['store_name'];          // Get the store name
    $store_url   = dokan_get_store_url( $vendor_id );  // Get the store URL

    $vendor_name = $vendor->display_name;              // Get the vendor name
    $address     = $vendor->billing_address_1;           // Get the vendor address
    $postcode    = $vendor->billing_postcode;          // Get the vendor postcode
    $city        = $vendor->billing_city;              // Get the vendor city
    $state       = $vendor->billing_state;             // Get the vendor state
    $country     = $vendor->billing_country;           // Get the vendor country

    // Display the seller name linked to the store
    printf( '<h3>Alle Erlebnisse von <a href="%s">%s</a> entdecken</h3>', $store_url, $store_name );
}


function custom_menu_shortcode() {
    ob_start();
    $vendor_registration_url = dokan_get_page_url('myaccount', 'dokan');
    ?>
    <style>
        .top-header-right {
            text-align: right;
        }

        .top-header-right .menu-item {
            color: #fff !important;
            text-decoration: none;
            margin-left: 15px;
        }

        .menu-item i {
			margin-right: 5px;
			color: #95664E;
		}

        .menu-item:hover {
            color: #ECF0F1;
        }

        @media (max-width: 600px) {
	        .top-header-right .menu-item {
				display: block;
				margin: 5px 0;
            }
        }
    </style>
    <div class="top-header-right">
        <?php if (is_user_logged_in()) { ?>
            <a href="<?php echo esc_url(get_permalink(get_option('woocommerce_myaccount_page_id'))); ?>" class="menu-item">
                <i class="fas fa-user"></i> My Account
            </a>
        <?php }else{ ?>
            <!-- <a href="<?php echo esc_url($vendor_registration_url); ?>" class="menu-item">
                <i class="fas fa-map-marker-alt"></i> Become a Seller
            </a> -->
            <a href="<?php echo esc_url(get_permalink(get_option('woocommerce_myaccount_page_id'))); ?>" class="menu-item">
                <i class="fas fa-user"></i> Login / Register
            </a>            
        <?php } ?>        
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('custom_menu', 'custom_menu_shortcode');