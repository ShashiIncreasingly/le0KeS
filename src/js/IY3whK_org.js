
(function () {
    "use strict";
    let pdp_html =
        '<div class="inc_pdp_title_block"><div class="inc_pdp_title_text_block"><div class="inc_pdp_title_text">Frequently bought together</div></div></div><div class="inc_pdp_bundle_block"><div class="inc_pdp_product-main_block"><div class="mainprodtitletext">This item</div></div><div class="inc_pdp_icon-add_block"><div class="inc_pdp_icon-add_img_block"><div class="inc_pdp_icon-add_img"></div></div></div><div class="inc_pdp_bundle_product_block"><div class="inc_pdp_bundle_product_header_block"><div class="inc_pdp_bundle_product_header_text">Frequently bought with</div></div><div class="inc_pdp_bundle_product_left-btn_block"><div class="inc_pdp_bundle_product_left-btn_img_block"><div class="inc_pdp_bundle_product_left-btn_img" title="Scroll left"></div></div></div><div class="inc_pdp_bundle_product_list_block"><div class="inc_pdp_bundle_product_list_main_block"></div><div class="inc_pdp_bundle_product_list_left_block"><div class="inc_pdp_bundle_product_list_left_btn_block"><div class="inc_pdp_bundle_product_list_left_btn_img_block"><div class="inc_pdp_bundle_product_list_left_btn_img"></div></div></div></div><div class="inc_pdp_bundle_product_list_items_show_more_less_block"><div class="inc_pdp_bundle_product_list_items_show_more_less_text down_wrrow">Show more products</div></div><div class="inc_pdp_bundle_product_list_wrapper_items_block"><div class="inc_pdp_bundle_product_list_wrapper_header_block"><div class="inc_pdp_bundle_product_list_wrapper_header_text_block"></div><div class="inc_pdp_bundle_product_list_wrapper_header_close_block"></div></div><div class="inc_pdp_bundle_product_list_items_block"></div></div><div class="inc_pdp_bundle_product_list_right_block"><div class="inc_pdp_bundle_product_list_right_btn_block"><div class="inc_pdp_bundle_product_list_right_btn_img_block"><div class="inc_pdp_bundle_product_list_right_btn_img"></div></div></div></div></div><div class="inc_pdp_bundle_product_right-btn_block"><div class="inc_pdp_bundle_product_right-btn_img_block"><div class="inc_pdp_bundle_product_right-btn_img" title="Scroll right"></div></div></div></div><div class="inc_pdp_bundle_cart_overlay_block"></div><div class="inc_pdp_bundle_cart_block"><div class="inc_pdp_bundle_cart_title_block"><div class="inc_pdp_bundle_cart_title_text_block"><div class="inc_pdp_bundle_cart_title_text">Price summary</div></div></div><div class="inc_pdp_bundle-cart_ecirp_block"><div class="inc_pdp_bundle-cart_ecirp_main"><div class="inc_pdp_bundle-cart_ecirp_main_title_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text">Main Product Price </div></div></div><div class="inc_pdp_bundle-cart_ecirp_main_figure_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text">£00.00</div></div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text">Add-on(s) Selected </div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_figure_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text">£0.00</div></div></div></div></div><div class="inc_pdp_bundle_cart_added_block"></div><div class="inc_pdp_bundle_cart_summary_block"><div class="inc_pdp_bundle_cart_summary_main_prd"><div class="inc_pdp_bundle_cart_summary_main_prd_txt">Main product </div><div class="inc_pdp_bundle_cart_summary_main_prd_prc"></div></div><div class="inc_pdp_bundle_cart_summary_addon_prd"><div class="inc_pdp_bundle_cart_summary_addon_prd_txt">1 addon product selected </div><div class="inc_pdp_bundle_cart_summary_addon_prd_prc"></div></div><div class="inc_pdp_bundle_cart_summary_title_block"><div class="inc_pdp_bundle_cart_summary_title_text_block"><div class="inc_pdp_bundle_cart_summary_count_text"></div><div class="inc_pdp_bundle_cart_summary_title_text">Total bundle price</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text">£60.00</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_regular_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text"></div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_save_block"><div class="inc_pdp_bundle_cart_summary_ecirp_save_text"></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_rrp_block"><div class="inc_pdp_bundle_cart_summary_ecirp_rrp_text"></div></div></div><div class="inc_pdp_bundle_cart_summary_view_block"><div class="inc_pdp_bundle_cart_summary_view_btn_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img"></div></div><div class="inc_pdp_bundle_cart_summary_view_btn_text_block"><div class="inc_pdp_bundle_cart_summary_view_btn_text">Added items</div></div><div class="inc_pdp_bundle_cart_summary_view_btn_count_block"><div class="inc_pdp_bundle_cart_summary_view_btn_count"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_add_block"><div class="inc_pdp_bundle_cart_summary_add_btn_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text">Add To Cart</div><div class="inc_pdp_bundle_cart_summary_add_btn_span"></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_img_block"><div class="inc_pdp_bundle_cart_summary_add_btn_img"></div></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_collection_block" style="pointer-events: auto;opacity: 1;"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text" style="text-transform: none;"></div></div></div></div></div></div></div>';
    let sidebar_html =
        '<span class="close_modal_inc"></span><div class="inc_sidebar_modal_block"><div class="inc_sidebar_modal_cart_and_title_block"><div class="inc_header_title_block"><div class="inc_header_title_text_block"><div class="inc_header_title_text">Just added to your basket</div></div></div><div class="inc_sidebar_cart_added_block"><div class="inc_cart_added_list_block"></div><div class="inc_cart_product_count_block"></div></div><div class="inc_sidebar_header_block"><div class="inc_header_continue_block"><div class="inc_header_continue_img_block"><div class="inc_header_continue_img"></div></div><div class="inc_header_continue_text_block"><div class="inc_header_continue_text">Back</div></div></div><div class="inc_header_item_block"><div class="inc_header_item_count_block"><div class="inc_header_item_count_title_block"><div class="inc_header_item_count_title_text_block"><div class="inc_header_item_count_title_text">Subtotal (0 item)</div></div></div><div class="inc_header_item_count_figure_block"><div class="inc_header_item_count_figure_text_block"><div class="inc_header_item_count_figure_text"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text" subtotalactiveprice="0.00">£0.00</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text" subtotalregularprice="0.00"></div></div></div><div class="inc_just_added_save_pr"></div><div class="inc_cart_added_product_desc_subtotal_ecirp_rrp_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_rrp_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_rrp_text"></div></div></div></div></div></div></div></div><div class="inc_sidebar_checkout_block"><div class="inc_checkout_continue_block"><div class="inc_checkout_continue_btn_block"><div class="inc_checkout_continue_btn_img_block"><div class="inc_checkout_continue_btn_img"></div></div><div class="inc_checkout_continue_btn_text_block"><div class="inc_checkout_continue_btn_text">Continue Shopping</div><div class="inc_checkout_continue_btn_span"></div></div></div></div><div class="inc_checkout_basket_block"><div class="inc_checkout_basket_btn_block"><div class="inc_checkout_basket_btn_img_block"><div class="inc_checkout_basket_btn_img"></div></div><div class="inc_checkout_basket_btn_text_block"><div class="inc_checkout_basket_btn_span"></div><div class="inc_checkout_basket_btn_text"><a class="view_basket_checkout"><div draggable="false">View Basket</div></a></div></div></div></div></div><div class="inc_sidebar_recommended_block"><div class="inc_recommended_title_block"><div class="inc_recommended_title_text_block"><div class="inc_recommended_title_text">Customers also bought</div></div></div><div class="inc_recommended_tabs_block"><div class="inc_recommended_tabs_list_block" tabindex="0"></div></div><div class="inc_recommended_products_block"><div class="inc_recommended_products_left_block"><div class="inc_recommended_products_left_btn_block"><div class="inc_recommended_products_left_btn_img_block"><div class="inc_recommended_products_left_btn_img" title="Scroll left"></div></div></div></div><div class="inc_recommended_products_list_main_block"><div class="inc_recommended_products_list_block"></div></div><div class="inc_recommended_products_item_thumb_block"><div class="inc_recommended_products_list_item_thumb_block"></div></div><div class="inc_recommended_products_right_block"><div class="inc_recommeded_products_right_btn_block"><div class="inc_recommended_products_right_btn_img_block"><div class="inc_recommended_products_right_btn_img" title="Scroll right"></div></div></div></div></div></div></div>';
    let cart_html =
        '<div class="inc_af_title_block" style="clear: both;"><div class="inc_af_title_text_block"><div class="inc_af_title_text"></div><div class="inc_af_modal_close"></div></div></div><div class="inc_af_bundles_block"><div class="inc_af_left_block"><div class="inc_af_left_btn_block"><div class="inc_af_left_btn_img_block"><div class="inc_af_left_btn_img"></div></div></div></div><div class="inc_af_product-list-main_block"><div class="inc_af_product-list_block"></div></div><div class="inc_af_right_block"><div class="inc_af_right_btn_block"><div class="inc_af_right_btn_img_block"><div class="inc_af_right_btn_img"></div></div></div></div></div>';
    let showcase_productcard =
        '<div class="inc_product_block"><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text"></div></div></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_extension_block"></div><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="pc_promo_div"></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block"></div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div><div class="inc_product_desc_ecirp_rrp_block"><div class="inc_product_desc_ecirp_rrp_text_block"><div class="inc_product_desc_ecirp_rrp_text"></div><div class="inc_product_desc_ecirp_rrp_text_msg"></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_variant_error_text"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"><span>Add To Cart</span></div></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected" ></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected" ></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected" ></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected" ></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected" ></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block"><label>qty</label><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"><span class="inc_add_text"></span></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text">Add To Cart</div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add To Cart</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>';
    var modal_productcard =
        '<div class="inc_product_block"><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_extension_block"></div><div class="inc_product_header_main_rating_block"><div class="inc_product_desc_ratings_block"></div><span class="product_modal_sku">#</span></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text">Overview</div></div></div><div class="inc_product_header_title_block_1"><div class="inc_product_header_title_text_block_1"><div class="inc_product_header_title_text_1">Description</div></div></div><div class="inc_product_header_new_page"><a class="inc_product_header_new_page_text" href="" >Open in a new tab</a ></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block" title="Scroll left"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block" title="Scroll right"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_size_guide_block"></div><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block"></div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div><div class="inc_product_desc_ecirp_rrp_block"><div class="inc_product_desc_ecirp_rrp_text_block"><div class="inc_product_desc_ecirp_rrp_text"></div><div class="inc_product_desc_ecirp_rrp_text_msg"></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"><span></span></div></div><div class="pc_promo_div"></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected" ></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected" ></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected" ></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected" ></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected" ></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block"><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text"></div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add To Cart</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>';
    let INC = {};
    INC.bundles = true;
    INC.ENV = "prod";
    INC.debug = 0;
    INC.initStatus = "";
    INC.initStatusCP = "";
    let onloadpdp = false;
    let crypto = window.crypto || window.msCrypto;

    function generateRandomString(bits1) {
        return (
            (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15) + (crypto.getRandomValues(new Uint32Array(1))[
                0] / 4294967295).toString(bits1).substring(2, 15));
    }

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    function titleCase(str) {
        let splitStr = str.split(" ");
        for (let i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(" ");
    }
    let trueflag = true;
    let falseflag = false;
    let onloadpdp_delete = false;
    let incallowedKeys = [46, 8, 9, 27, 110, 190];
    let inc_scroll_height = 100;
    INC.clientConfig = {};
    INC.clientConfig.statusVAT = "";
    INC.clientConfig.offset = 0;
    INC.clientConfig.offset_rec = 0;
    INC.clientConfig.slidevalue = 0;
    INC.clientConfig.slidevalue_rec = 0;
    INC.config = {};
    INC.config.deviceType = "";
    INC.config.clientToken = "IY3whK";
    INC.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
    INC.config.addToBasketURL = "https://www.leekes.co.uk/checkout/cart/add/uenc/";
    INC.clientConfig.checkoutLink = "https://www.leekes.co.uk/checkout/cart/";
    INC.config.affiliateURL = "";
    INC.config.pageType = "";
    INC.config.ivid = "";
    INC.config.pdpaddedProductList = [];
    INC.config.inc_slideIndex = 1;
    INC.config.bundle_tracking = [];
    INC.config.Product_id = null;
    INC.config.dupBasket = [];
    INC.config.dupDataObjectProducts = [];
    INC.config.onloadam = false
    INC.clientConfig.OOS = [];
    INC.config.disablebtn = true;
    INC.config.sidebarremovedprod = [];
    INC.config.cartproductids = [];
    INC.config.bundle_skuPushed = [];
    INC.config.recommendationProduct = [];
    INC.config.FBTTitle = "Frequently bought together";
    INC.config.AddedText = "Added";
    INC.config.addedtoBagText = "Added"
    INC.config.BeforeYouChecktext = "Customers also bought";
    INC.config.ajaxerr = "I'm sorry we've experienced an error. Please try again.";
    INC.config.UpdateText = "UPDATE";
    INC.config.sidebarFirstLoad = false;
    // UPDATE ON PRODUCTION
    INC.config.noimage = "https://www.increasingly.co/Implementation/le0KeS/prod/images/no-image.png";
    // ------------------------
    INC.config.recommendation = false;
    INC.config.bundledid = [];
    INC.config.cldomain = "";
    INC.config.checkoutpath = '/checkout/cart/';
    INC.config.fabrictext = "Select Fabric";
    INC.config.styleft = "left:0 !important;position: relative;";
    INC.config.ctl_names = [];
    INC.config.ctl_img_srcs = [];
    INC.config.ctl_prices = [];
    INC.config.qtyscross = [];
    INC.config.datastoreprod = [];
    INC.config.ddFlag = false;
    INC.config.catFlag = [];
    let fabricprod = [];
    INC.config.singleProd = false;
    INC.config.VariantProduct = false;
    INC.config.saveBadgeText = "Save "

    if (window.location.pathname == '/checkout/cart/') {
        INC.config.addToBasketURL = "https://www.leekes.co.uk/cartpopup/cart/showPopup/";
    }

    INC.checkProdUserCookie = function () {
        setTimeout(function () {
            INC.init();
        }, 500);
    };
    INC.checkProdUserCookie();

    function readCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(";");
        for (let s in ca) {
            if (Object.prototype.hasOwnProperty.call(ca, s)) {
                let c = ca[s];
                while (c.charAt(0) == " ") {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) == 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
        }
        return null;
    }

    function generate_html_tag(element, className) {
        let generateEl = document.createElement(element);
        if (className != undefined) {
            generateEl.classList.add(className);
        }
        return generateEl;
    }

    let formatter = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    });
    INC.init = function () {
        INC.config.datastoreprod = [];
        INC.config.dupDataObjectProducts = [];
        INC.methods.addVisitorID();
        INC.config.pageType = INC.methods.detectPageType();
        INC.methods.clear();
        INC.config.deviceType = window.innerWidth <= 768 ? "mobile" : "desktop";
        switch (INC.config.pageType) {
            case "pdp":
                let productId = INC.methods.getProductIdFromWebPage();
                if (document.querySelector('.stock.unavailable.outstock') != null) {
                    oosproduct(productId)
                    INC.methods.irbReq(productId, 5, "catalog_product_view");
                } else {
                    INC.methods.irbReq(productId, 5, "catalog_product_view");
                }
                break;
            case "cartPage":
                if (cartpageprodids().length > 0) {
                    setTimeout(() => {
                        INC.methods.irbReq(INC.config.cartproductids, 12, "checkout_cart_index");
                    }, 1000);
                }
                break;
            case "productList":
                break;
        }
    };

    function cartpageprodids() {
        if (window.checkoutConfig != null) {
            if (window.checkoutConfig.quoteItemData != undefined) {
                for (var j = 0; j < window.checkoutConfig.quoteItemData.length; j++) {
                    if (window.checkoutConfig.quoteItemData.length > 0) {
                        INC.config.cartproductids.push(window.checkoutConfig.quoteItemData[j].product_id)
                    }
                }
            }
        }
        return INC.config.cartproductids;
    }
    INC.dataStore = {};
    INC.dataStore.methods = function () {
        let incDataStore = INC.dataStore;

        function buildDataStoreObj(bundleResponse) {
            INC.config.dupDataObjectProducts = [];
            INC.dataStore.clientProductDealsCategory = "";
            let bundles = [];
            if (INC.config.recommendation == trueflag) {
                bundles = bundleResponse.CategoryRecommendations;
            } else {
                bundles = bundleResponse.Bundles;
            }
            if (bundleResponse.ProductDeals != null) {
                bundleResponse.ProductDeals.forEach(function (productDealObj) {
                    bundles.push({
                        BundleId: bundles[0]["BundleId"],
                        Products: [bundles[0].Products[0], productDealObj],
                    });
                    INC.dataStore.clientProductDealsCategory = productDealObj.CategoryId;
                });
            }
            let dataStoreObj = {};
            let bundleproductarray = {};
            let bundleProductsArray = [];
            if (bundleResponse.ProductsDetail != null) {
                for (let pr in bundleResponse.ProductsDetail) {
                    if (Object.prototype.hasOwnProperty.call(bundleResponse.ProductsDetail, pr)) {
                        bundleproductarray[bundleResponse.ProductsDetail[pr].ProductId] = bundleResponse.ProductsDetail[pr];
                    }
                }
            } else if (bundleResponse.CategoryRecommendations != null) {
                for (let ct in bundleResponse.CategoryRecommendations) {
                    if (Object.prototype.hasOwnProperty.call(bundleResponse.CategoryRecommendations, ct)) {
                        bundleproductarray[bundleResponse.CategoryRecommendations[ct].ProductId] = bundleResponse.CategoryRecommendations[ct];
                    }
                }
            }
            let pdpProductId = "";
            for (let i in bundles) {
                if (Object.prototype.hasOwnProperty.call(bundles, i)) {
                    if (INC.config.dupDataObjectProducts.indexOf(bundles[i].BundleId) == -1) {
                        if (INC.config.recommendation == falseflag) {
                            INC.config.dupDataObjectProducts.push(bundles[i].BundleId);
                        }
                        INC.config.bundledid.push({
                            bundleids: bundles[i].BundleId,
                            productids: bundles[i].ProductIds,
                        });
                        let irbBundleObj = bundles[i];
                        let bundleObj = {};
                        if (INC.config.recommendation == falseflag) {
                            bundleObj.id = irbBundleObj["BundleId"];
                        }
                        if (INC.config.recommendation == falseflag) {
                            bundleObj.id = irbBundleObj["BundleId"];
                            bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                            bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                            bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                            bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                            bundleObj.productCount = irbBundleObj["ProductCount"];
                        }
                        let irbProductsArray = "";
                        if (INC.config.recommendation == trueflag) {
                            irbProductsArray = bundles;
                        } else {
                            irbProductsArray = irbBundleObj["ProductIds"];
                        }
                        if (INC.config.recommendation == falseflag) {
                            if (irbProductsArray) {
                                if (window.location.pathname == INC.config.checkoutpath || INC.config.recommendation) {
                                    if (INC.config.cartproductids.indexOf(irbProductsArray[0]) >= 0) {
                                        pdpProductId = irbProductsArray[0];
                                        bundleProductsArray.push(irbProductsArray[1]);
                                    } else if (INC.config.cartproductids.indexOf(irbProductsArray[1]) >= 0) {
                                        pdpProductId = irbProductsArray[1];
                                        bundleProductsArray.push(irbProductsArray[0]);
                                    }
                                } else {
                                    pdpProductId = irbProductsArray[0];
                                    bundleProductsArray.push(irbProductsArray[1]);
                                    if (INC.config.pageType == "cartPage") {
                                        bundleProductsArray.push(irbProductsArray[0]);
                                    }
                                }
                            }
                        }
                        if (INC.config.recommendation == trueflag) {
                            bundleProductsArray.push(bundles[i]["ProductId"]);
                        }
                        for (let ir in irbProductsArray) {
                            if (Object.prototype.hasOwnProperty.call(irbProductsArray, ir)) {
                                let product = bundleproductarray[irbProductsArray[ir]] || irbProductsArray[ir];
                                if (INC.config.datastoreprod.indexOf(product.ProductId) == -1) {
                                    INC.config.datastoreprod.push(product.ProductId);
                                    if (INC.config.recommendation == trueflag) {
                                        INC.config.recommendationProduct.push(product.ProductId);
                                    }
                                    let pAttributes = product["Attributes"] || "";
                                    if (pAttributes != "" && pAttributes != null) {
                                        for (let p of pAttributes) {
                                            if (p.attributeCode == "color" || p.attributeCode == "Choose a Colour" || p.attributeCode == "COLOUR" || p.attributeCode == "Choose a Flavour") {
                                                p.attributeCode = "Color";
                                            }
                                            if (p.attributeCode == "SIZE") {
                                                p.attributeCode = "Size";
                                            }
                                            if (p.attributeCode == "size" || p.attributeCode == "Choose a Size") {
                                                p.attributeCode = "Size";
                                            }
                                            if (p.attributeCode == "Choose a Finish" || p.attributeCode == "RETICULE" || p.attributeCode == "CALF" || p.attributeCode == "Choose a Weight" || p.attributeCode == "Choose a Pack Size") {
                                                p.attributeCode = "Size_";
                                            }
                                            if (pAttributes.length == 1) {
                                                if (p.attributeCode == "color" || p.attributeCode == "Color" || p.attributeCode == "COLOUR") {
                                                    p.attributeCode = "Color";
                                                } else {
                                                    p.attributeCode = "Size";
                                                }
                                            }
                                        }
                                        pAttributes = attribute_listing(pAttributes);
                                    }
                                    let pAttObj = {};
                                    let attr_values = "";
                                    let c_t = 0;
                                    for (let t of pAttributes) {
                                        if (pAttributes.length == 1) {
                                            if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") {
                                                pAttributes[0].attributeIdAd = 0;
                                                attr_values = t.attributeValues;
                                                for (let v of attr_values) {
                                                    v["opId"] = 0;
                                                    v.optionId = 0;
                                                }
                                            } else {
                                                pAttributes[0].attributeIdAd = 1;
                                                attr_values = t.attributeValues;
                                                for (let vb of attr_values) {
                                                    vb["opId"] = 1;
                                                    vb.optionId = 1;
                                                }
                                            }
                                        } else {
                                            if (pAttributes[1] != undefined) {
                                                if (pAttributes[0].attributeCode != "Color" && pAttributes[1].attributeCode != "Color") {
                                                    if (c_t == 0) {
                                                        c_t++;
                                                    }
                                                }
                                            }
                                            t.attributeIdAd = c_t;
                                            attr_values = t.attributeValues;
                                            for (let va of attr_values) {
                                                va["opId"] = va.optionId;
                                                va.optionId = c_t;
                                            }
                                        }
                                        c_t++;
                                    }
                                    let productObj = "";
                                    if (pAttributes.length) {
                                        for (let pattv in pAttributes) {
                                            if (Object.prototype.hasOwnProperty.call(pAttributes, pattv)) {
                                                let pAttributesObj = pAttributes[pattv];
                                                let pAttributesValues = pAttributesObj["attributeValues"];
                                                for (let ptr in pAttributesValues) {
                                                    if (Object.prototype.hasOwnProperty.call(pAttributesValues, ptr)) {
                                                        let childProduct = pAttributesValues[ptr];
                                                        if (childProduct["childProductId"] == null) {
                                                            childProduct["childProductId"] = product["ProductId"];
                                                            childProduct["childProductSku"] = product["ProductSku"];
                                                            childProduct["childProductName"] = product["ProductName"];
                                                            childProduct["childProductImageUrl"] = product["ImageURL"];
                                                            childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                                            childProduct["childProductUrl"] = product["ProductUrl"];
                                                            childProduct["childProductPrice"] = product["Price"];
                                                            childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                                            childProduct["childProductDescription"] = product["Description"];
                                                            childProduct["childInternalProductId"] = product["ProductId"];
                                                        }
                                                        childProduct["ProductType"] = product["ProductType"];
                                                        childProduct["mainSKU"] = product["ProductSku"];
                                                        childProduct["childProductIdmain"] = product["ProductId"];
                                                        childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                                        childProduct["childProductPriceMain"] = product["Price"];
                                                        childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                                        childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                                                        childProduct["childProductNameMain"] = product["ProductName"];
                                                        childProduct["childProductUrlMain"] = product["ProductUrl"];
                                                        childProduct["childreviewsCount"] = product["RatingCount"];
                                                        childProduct["childRating"] = product["Rating"];
                                                        childProduct["childCategoryName"] = product["CategoryName"];
                                                        childProduct["childCategoryId"] = product["CategoryId"];
                                                        childProduct["childProductDescription"] = product["Description"];
                                                        childProduct["Manufacturer"] = product["Manufacturer"];
                                                        productObj = new INC.classes.ProductAttObj(childProduct);
                                                        productObj["bundledProductId"] = pdpProductId;
                                                        productObj.mainId = product["ProductId"];
                                                        productObj.bundleId = bundleObj.id;
                                                        productObj.sku = productObj.id;
                                                        productObj.shortDescription = product["ShortDescription"];
                                                        productObj.option[pAttributesObj["attributeIdAd"]].id = pAttributesObj["attributeId"];
                                                        productObj.option[pAttributesObj["attributeIdAd"]].label = pAttributesObj["frontEndLabel"];
                                                        productObj.option[pAttributesObj["attributeIdAd"]].code = pAttributesObj["attributeCode"];
                                                        productObj.option[pAttributesObj["attributeIdAd"]].att_id = pAttributesObj.attributeId;
                                                        if (!Object.prototype.hasOwnProperty.call(dataStoreObj, product["ProductId"])) {
                                                            dataStoreObj[product["ProductId"]] = {};
                                                        }
                                                        if (!Object.prototype.hasOwnProperty.call(dataStoreObj[product["ProductId"]], productObj[
                                                            "id"])) {
                                                            dataStoreObj[product["ProductId"]][
                                                                productObj["id"]
                                                            ] = {};
                                                        }
                                                        pAttObj = dataStoreObj[product["ProductId"]][productObj["id"]];
                                                        for (let pAtt in productObj) {
                                                            if (Object.prototype.hasOwnProperty.call(productObj, pAtt)) {
                                                                if (pAtt == "option") {
                                                                    if (!Object.prototype.hasOwnProperty.call(pAttObj, "option")) {
                                                                        pAttObj["option"] = {};
                                                                    }
                                                                    Object.keys(productObj[pAtt]).forEach(function (key) {
                                                                        pAttObj[pAtt][
                                                                            key
                                                                        ] = productObj[pAtt][
                                                                            key
                                                                            ];
                                                                    });
                                                                } else {
                                                                    pAttObj[pAtt] = productObj[pAtt];
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (pAttributes.length == 0) {
                                        productObj = new INC.classes.ProductObj(product);
                                        productObj["bundleId"] = irbBundleObj["BundleId"];
                                        if (INC.config.recommendation == falseflag) {
                                            productObj["bundledProductId"] = pdpProductId;
                                        }
                                        productObj.sku = productObj.id;
                                        productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                                        if (!Object.prototype.hasOwnProperty.call(dataStoreObj, productObj["mainId"])) {
                                            dataStoreObj[productObj["mainId"]] = {};
                                        }
                                        dataStoreObj[productObj["mainId"]][
                                            productObj["id"]
                                        ] = {};
                                        if (!!window.MSInputMethodContext && !!document.documentMode) {
                                            dataStoreObj[productObj["mainId"]][
                                                productObj["id"]
                                            ] = JSON.parse(JSON.stringify(productObj));
                                        } else {
                                            dataStoreObj[productObj["mainId"]][
                                                productObj["id"]
                                            ] = Object.assign({}, productObj);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            incDataStore.dataStoreObj = dataStoreObj;
            incDataStore.bundleProductsArray = bundleProductsArray;
            if (INC.config.recommendation == falseflag) {
                incDataStore.pdpProductId = pdpProductId;
            }
            incDataStore.bundleCartProducts = {};
        }

        function getFirstProductObjByMainId(findObj) {
            let childProductObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            try {
                if (productListObj != undefined && productListObj[findObj["mainId"]] != undefined) {
                    childProductObj = productListObj[findObj["mainId"]][
                        Object.keys(productListObj[findObj["mainId"]])[0]
                    ];
                }
            } catch (e) {
                console.error("e", e.stack);
                throw e;
            }
            return childProductObj;
        }

        function getProductById(findObj) {
            let childProductObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                for (let mainProductId in productListObj) {
                    for (let childProductId in productListObj[mainProductId]) {
                        if (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") != null) {
                            if (productListObj[mainProductId][childProductId]["id"] == findObj["id"] && productListObj[mainProductId][childProductId][
                                "bundleId"
                            ] != undefined) {
                                childProductObj = productListObj[mainProductId][
                                    childProductId
                                ];
                                break;
                            }
                        } else {
                            if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                                childProductObj = productListObj[mainProductId][
                                    childProductId
                                ];
                                break;
                            }
                        }
                    }
                }
            }
            if (Object.keys(childProductObj).length == 0) {
                if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                    for (let mainProductIds in productListObj) {
                        for (let childProductIds in productListObj[mainProductIds]) {
                            if (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") != null) {
                                if (productListObj[mainProductIds][
                                    childProductIds
                                ]["id"] == findObj["id"] && productListObj[mainProductIds][
                                childProductIds
                                ]["bundleId"] != undefined) {
                                    if (productListObj[mainProductIds][
                                        childProductIds
                                    ]["id"] == findObj["id"]) {
                                        childProductObj = productListObj[mainProductIds][
                                            childProductIds
                                        ];
                                        break;
                                    }
                                }
                            } else {
                                if (productListObj[mainProductIds][
                                    childProductIds
                                ]["id"] == findObj["id"]) {
                                    childProductObj = productListObj[mainProductIds][
                                        childProductIds
                                    ];
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            return childProductObj;
        }

        function getProductBySKU(findObj, sidebar) {
            let childProductObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            if (Object.prototype.hasOwnProperty.call(findObj, "sku")) {
                for (let mainProductId in productListObj) {
                    for (let childProductId in productListObj[mainProductId]) {
                        if (sidebar == "sidebar") {
                            if (productListObj[mainProductId][childProductId]["sku"] == findObj["sku"] && productListObj[mainProductId][childProductId][
                                "bundleId"
                            ] != undefined) {
                                if (productListObj[mainProductId][
                                    childProductId
                                ]["sku"] == findObj["sku"]) {
                                    childProductObj = productListObj[mainProductId][
                                        childProductId
                                    ];
                                    break;
                                }
                            }
                        } else {
                            if (productListObj[mainProductId][childProductId]["sku"] == findObj["sku"]) {
                                childProductObj = productListObj[mainProductId][
                                    childProductId
                                ];
                                break;
                            }
                        }
                    }
                }
            }
            return childProductObj;
        }

        function getUniqueCatergories() {
            let catergoriesArray = [];
            let productListObj = INC.dataStore.dataStoreObj;
            let bundleProductsArray = INC.dataStore.bundleProductsArray;
            if (bundleProductsArray != undefined) {
                bundleProductsArray.forEach(function (productId) {
                    for (let childProductId in productListObj[productId]) {
                        if (productListObj[productId][childProductId].bundleId != undefined) {
                            let indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                            if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC.dataStore
                                .clientProductDealsCategory) {
                                catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                            }
                        }
                    }
                });
            }
            return catergoriesArray;
        }

        function sortByKey(array, key) {
            return array.sort(function (a, b) {
                let x = a[key],
                    y = b[key];
                if (typeof x === "string") {
                    x = x.toLowerCase();
                    y = y.toLowerCase();
                    if (!isNaN(x) && !isNaN(y)) {
                        x = parseInt(x, 10);
                        y = parseInt(y, 10);
                    }
                }
                return x < y ? -1 : sortdata_(x, y);
            });

            function sortdata_(x, y) {
                return x > y ? 1 : 0;
            }
        }

        function getProductColorsObj(findObj, type_of) {
            let productColorObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            let productColorArrayObj = {};
            let productColorObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (let mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (let childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                if (productListObj[mainProductId][
                                    childProductId
                                ]["option"]["0"].code == "Color") {
                                    if (productListObj[mainProductId][
                                        childProductId
                                    ]["option"] != null && productListObj[mainProductId][
                                    childProductId
                                    ]["option"] != undefined && productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["0"] != null && productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["0"] != undefined) {
                                        if (type_of != undefined) {
                                            let attr_block = null;
                                            if (type_of.parentNode.parentNode.parentNode.classList.contains("inc_product_desc_att_block") ==
                                                falseflag) {
                                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode;
                                            } else {
                                                attr_block = type_of.parentNode.parentNode.parentNode;
                                            }
                                            let opt_text = "";
                                            let opt_size_text = "";
                                            if (type_of.parentNode != null) {
                                                opt_text = attr_block.getAttribute("data-zero");
                                                if (attr_block.getAttribute("data-size") != undefined) {
                                                    opt_size_text = attr_block.getAttribute("data-size");
                                                }
                                            } else {
                                                opt_text = type_of.innerText;
                                            }
                                            if (opt_text != "" && opt_size_text != "" && productListObj[mainProductId][
                                                childProductId
                                            ].option[1] != undefined && productListObj[mainProductId][
                                                childProductId
                                            ].option[2] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[
                                                    mainProductId][childProductId].option[2].text == opt_size_text) {
                                                    colordata(productColorArrayObj, productListObj, mainProductId, childProductId);
                                                }
                                            } else if (opt_text != "" && productListObj[mainProductId][
                                                childProductId
                                            ].option[1] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
                                                    colordata(productColorArrayObj, productListObj, mainProductId, childProductId);
                                                }
                                            } else {
                                                colordata(productColorArrayObj, productListObj, mainProductId, childProductId);
                                            }
                                        } else {
                                            colordata(productColorArrayObj, productListObj, mainProductId, childProductId);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            Object.keys(productColorArrayObj).forEach(function (colorText) {
                let colorObj = {};
                colorObj["text"] = colorText;
                colorObj["colorCode"] = productColorArrayObj[colorText]["colorCode"];
                colorObj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
                colorObj["titleText"] = productColorArrayObj[colorText]["titleText"];
                colorObj["code"] = productColorArrayObj[colorText]["code"];
                colorObj["cpid"] = productColorArrayObj[colorText]["cpid"];
                colorObj["attLebel"] = productColorArrayObj[colorText]["attLebel"];
                colorObj["label"] = productColorArrayObj[colorText]["label"];
                colorObj["attrLength"] = productColorArrayObj[colorText]["attrLength"];
                colorObj["opttext"] = productColorArrayObj[colorText]["opttext"];
                colorObj["field1"] = productColorArrayObj[colorText]["field1"];
                colorObj["att_id"] = productColorArrayObj[colorText]["att_id"];
                colorObj["opt_id"] = productColorArrayObj[colorText]["opt_id"];
                colorObj["prc"] = productColorArrayObj[colorText]["prc"];
                productColorObjArray.push(colorObj);
            });
            if (type_of == "size") {
                productColorObj["sizeArray"] = sortByKey(productColorObjArray, "colorText");
            } else if (type_of == "zero") {
                productColorObj["att0Array"] = sortByKey(productColorObjArray, "colorText");
            } else if (type_of == "third") {
                productColorObj["att3Array"] = sortByKey(productColorObjArray, "colorText");
            } else {
                productColorObj["colorArray"] = sortByKey(productColorObjArray, "colorText");
            }
            return productColorObj;
        }

        function colordata(productColorArrayObj, productListObj, mainProductId, childProductId) {
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["titleText"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["colorCode"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["imgSrc"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["code"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["cpid"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["attLebel"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["att_lebel"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["label"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["label"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["attrLength"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["attrLength"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["opttext"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["opttext"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["field1"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["field1"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["att_id"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["att_id"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["opt_id"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["opt_id"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["prc"] = productListObj[mainProductId][
                childProductId
            ]["option"]["0"]["activePriceChild"];
            return productColorArrayObj;
        }

        function getProductSizesObj(findObj, type_of) {
            let productSizeObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            let productSizesArrayObj = {};
            let productSizesObjArray = [];
            let attr_code = "";
            let c_pid = "";
            let prc = "";
            let label = "";
            let attid = "";
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (let mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (let childProductId in productListObj[mainProductId]) {
                            let attr_flag = "";
                            if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId][
                                "option"
                            ]["2"] != undefined) {
                                if (type_of != undefined) {
                                    let attr_block = null;
                                    if (type_of.parentNode.parentNode.parentNode.classList.contains("inc_product_desc_att_block") == falseflag) {
                                        attr_block = type_of.parentNode.parentNode.parentNode.parentNode;
                                    } else {
                                        attr_block = type_of.parentNode.parentNode.parentNode;
                                    }
                                    let opt_text = attr_block.getAttribute("data-zero");
                                    let opt_size_text = attr_block.getAttribute("data-color");
                                    if (opt_size_text == undefined) {
                                        opt_size_text = "";
                                    }
                                    if (opt_text == undefined) {
                                        opt_text = "";
                                    }
                                    if (opt_text != "" && productListObj[mainProductId][
                                        childProductId
                                    ].option[1] != undefined) {
                                        if (opt_text != "" && opt_size_text != "" && productListObj[mainProductId][
                                            childProductId
                                        ].option[0]) {
                                            if (productListObj[mainProductId][
                                                childProductId
                                            ].option[1].text == opt_text && productListObj[mainProductId][
                                                childProductId
                                            ].option[0].text == opt_size_text) {
                                                attr_flag = "fir_block";
                                            }
                                        } else {
                                            if (productListObj[mainProductId][
                                                childProductId
                                            ].option[1].text == opt_text) {
                                                attr_flag = "sec_block";
                                                if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][
                                                    childProductId
                                                ]["option"]["2"] != null) {
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = {};
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]][
                                                        "titleText"
                                                    ] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                                    attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                                    c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                                    prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
                                                    label = productListObj[mainProductId][childProductId]["option"]["2"]["label"];
                                                    attid = productListObj[mainProductId][childProductId]["option"]["2"]["att_id"];
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]][
                                                        "opt_id"] = productListObj[mainProductId][childProductId]["option"]["2"]["opt_id"];
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]][
                                                        "colorCode"
                                                    ] = productListObj[mainProductId][childProductId]["option"]["2"]["colorCode"];
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]][
                                                        "imgSrc"] = productListObj[mainProductId][childProductId]["option"]["2"]["imgSrc"];
                                                }
                                            }
                                        }
                                    } else if (productListObj[mainProductId][
                                        childProductId
                                    ]["option"] != null && productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["2"] != null) {
                                        attr_flag = "empty_";
                                    }
                                } else if (productListObj[mainProductId][
                                    childProductId
                                ]["option"] != null && productListObj[mainProductId][
                                childProductId
                                ]["option"]["2"] != null) {
                                    attr_flag = "empty";
                                }
                                if (attr_flag == "fir_block" || attr_flag == "sec_block" || attr_flag == "empty" || attr_flag == "empty_") {
                                    if (productListObj[mainProductId][
                                        childProductId
                                    ]["option"] != null && productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["2"] != null) {
                                        productSizesArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["2"]["text"]] = {};
                                        productSizesArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["2"]["text"]]["titleText"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["2"]["text"];
                                        attr_code = productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["2"]["code"];
                                        c_pid = productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["2"]["cpid"];
                                        prc = productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["2"]["activePriceChild"];
                                        label = productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["2"]["label"];
                                        attid = productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["2"]["att_id"];
                                        productSizesArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["2"]["text"]]["opt_id"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["2"]["opt_id"];
                                        productSizesArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["2"]["text"]]["colorCode"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["2"]["colorCode"];
                                        productSizesArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["2"]["text"]]["imgSrc"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["2"]["imgSrc"];
                                    }
                                }
                            }
                        }
                    }
                }
            }
            Object.keys(productSizesArrayObj).forEach(function (sizeText) {
                let sizeObj = {};
                sizeObj["text"] = productSizesArrayObj[sizeText]["titleText"];
                sizeObj["code"] = attr_code;
                sizeObj["cpid"] = c_pid;
                sizeObj["prc"] = prc;
                sizeObj["label"] = label;
                sizeObj["opt_id"] = productSizesArrayObj[sizeText]["opt_id"];
                sizeObj["colorCode"] = productSizesArrayObj[sizeText]["colorCode"];
                sizeObj["imgSrc"] = productSizesArrayObj[sizeText]["imgSrc"];
                sizeObj["att_id"] = attid;
                productSizesObjArray.push(sizeObj);
            });
            productSizeObj["sizeArray"] = productSizesObjArray;
            return productSizeObj;
        }

        function getProductopt0Obj(findObj) {
            let product0Obj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            let product0ArrayObj = {};
            let product0ObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (let mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (let childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId][
                                "option"
                            ] != undefined && productListObj[mainProductId][childProductId]["option"]["1"] != null && productListObj[mainProductId][
                            childProductId
                            ]["option"]["1"] != undefined) {
                                let attr_main = true;
                                let first_attr_acodec = ["Connectivity", "Number of SIM", "Device",];
                                if (productListObj[mainProductId][
                                    childProductId
                                ]["option"][0] != undefined || productListObj[mainProductId][
                                    childProductId
                                ]["option"][1].code != undefined) {
                                    if (first_attr_acodec.indexOf(productListObj[mainProductId][
                                        childProductId
                                    ]["option"][0]) == -1 && first_attr_acodec.indexOf(productListObj[mainProductId][
                                        childProductId
                                    ]["option"][1].code) == -1) {
                                        attr_main = false;
                                    }
                                }
                                if (attr_main == trueflag) {
                                    zerodata(product0ArrayObj, productListObj, mainProductId, childProductId);
                                } else {
                                    if (findObj.colorText != undefined) {
                                        if (productListObj[mainProductId][
                                            childProductId
                                        ].option[0] != undefined) {
                                            if (productListObj[mainProductId][
                                                childProductId
                                            ].option["0"].text.trim().toLocaleLowerCase() == findObj.colorText.trim().toLocaleLowerCase()) {
                                                zerodata(product0ArrayObj, productListObj, mainProductId, childProductId);
                                            }
                                        } else {
                                            if (productListObj[mainProductId][
                                                childProductId
                                            ].option["1"].text.trim().toLocaleLowerCase() == findObj.colorText.trim().toLocaleLowerCase()) {
                                                zerodata(product0ArrayObj, productListObj, mainProductId, childProductId);
                                            }
                                        }
                                    } else {
                                        zerodata(product0ArrayObj, productListObj, mainProductId, childProductId);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            Object.keys(product0ArrayObj).forEach(function (colorText) {
                let attr0Obj = {};
                attr0Obj["text"] = colorText;
                attr0Obj["text1"] = colorText.replace("g", "").replace("l", "").replace("k", "");
                attr0Obj["imgSrc"] = product0ArrayObj[colorText]["imgSrc"];
                attr0Obj["titleText"] = product0ArrayObj[colorText]["titleText"];
                attr0Obj["code"] = product0ArrayObj[colorText]["code"];
                attr0Obj["cpid"] = product0ArrayObj[colorText]["cpid"];
                attr0Obj["prc"] = product0ArrayObj[colorText]["prc"];
                attr0Obj["label"] = product0ArrayObj[colorText]["label"];
                attr0Obj["colorCode"] = product0ArrayObj[colorText]["colorCode"];
                attr0Obj["opt_id"] = product0ArrayObj[colorText]["opt_id"];
                attr0Obj["att_id"] = product0ArrayObj[colorText]["att_id"];
                product0ObjArray.push(attr0Obj);
            });
            product0Obj["att0Array"] = sortByKey(product0ObjArray, "colorText");
            return product0Obj;
        }

        function zerodata(product0ArrayObj, productListObj, mainProductId, childProductId) {
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][
                childProductId
            ]["option"]["1"]["titleText"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][
                childProductId
            ]["option"]["1"]["imgSrc"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][
                childProductId
            ]["option"]["1"]["code"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][
                childProductId
            ]["option"]["1"]["cpid"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][
                childProductId]["option"]["1"]["activePriceChild"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["label"] = productListObj[mainProductId][
                childProductId
            ]["option"]["1"]["label"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = productListObj[mainProductId][
                childProductId
            ]["option"]["1"]["colorCode"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["opt_id"] = productListObj[mainProductId][
                childProductId
            ]["option"]["1"]["opt_id"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["att_id"] = productListObj[mainProductId][
                childProductId
            ]["option"]["1"]["att_id"];
            return product0ArrayObj;
        }

        function getProductopt3Obj(findObj, type_of) {
            let product3Obj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            let productColorArrayObj = {};
            let product3ObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (let mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (let childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId][
                                "option"
                            ] != undefined && productListObj[mainProductId][childProductId]["option"]["3"] != null && productListObj[mainProductId][
                            childProductId
                            ]["option"]["3"] != undefined) {
                                if (type_of != undefined) {
                                    let attr_block = null;
                                    if (type_of.parentNode.parentNode != null) {
                                        if (type_of.parentNode.parentNode.parentNode.classList.contains("inc_product_desc_att_block") == falseflag) {
                                            attr_block = type_of.parentNode.parentNode.parentNode.parentNode;
                                        } else {
                                            attr_block = type_of.parentNode.parentNode.parentNode;
                                        }
                                    } else {
                                        attr_block = type_of.parentNode.parentNode;
                                    }
                                    if (type_of.parentNode.parentNode.parentNode.classList.contains("inc_product_desc_att_block") == trueflag) {
                                        attr_block = type_of.parentNode.parentNode.parentNode;
                                    }
                                    if (type_of.parentNode.parentNode.parentNode.parentNode.classList.contains("inc_product_desc_att_block") ==
                                        trueflag) {
                                        attr_block = type_of.parentNode.parentNode.parentNode.parentNode;
                                    }
                                    let opt_text = attr_block.getAttribute("data-zero");
                                    let opt_size_text = attr_block.getAttribute("data-size");
                                    let opt_color_text = attr_block.getAttribute("data-color");
                                    if (opt_size_text == undefined) {
                                        opt_size_text = "";
                                    }
                                    if (opt_color_text == undefined) {
                                        opt_color_text = "";
                                    }
                                    if (opt_text != "" && opt_size_text != "" && opt_color_text != "") {
                                        if (productListObj[mainProductId][
                                            childProductId
                                        ].option[1] != undefined && productListObj[mainProductId][
                                            childProductId
                                        ].option[2] != undefined && productListObj[mainProductId][
                                            childProductId
                                        ].option[0] != undefined) {
                                            if (productListObj[mainProductId][
                                                childProductId
                                            ].option[1].text == opt_text && productListObj[mainProductId][
                                                childProductId
                                            ].option[2].text == opt_size_text && productListObj[mainProductId][
                                                childProductId
                                            ].option[0].text == opt_color_text) {
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]][
                                                    "colorCode"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]][
                                                    "titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] =
                                                    productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] =
                                                    productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] =
                                                    productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] =
                                                    productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["label"] =
                                                    productListObj[mainProductId][childProductId]["option"]["3"]["label"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["opt_id"] =
                                                    productListObj[mainProductId][childProductId]["option"]["3"]["opt_id"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["att_id"] =
                                                    productListObj[mainProductId][childProductId]["option"]["3"]["att_id"];
                                            }
                                        }
                                    } else {
                                        productColorArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["3"]["text"]] = {};
                                        productColorArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["3"]["text"]]["colorCode"] = "";
                                        productColorArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["3"]["titleText"];
                                        productColorArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["3"]["imgSrc"];
                                        productColorArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["3"]["code"];
                                        productColorArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["3"]["cpid"];
                                        productColorArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["3"]["activePriceChild"];
                                        productColorArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["3"]["text"]]["label"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["3"]["label"];
                                        productColorArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["3"]["text"]]["opt_id"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["3"]["opt_id"];
                                        productColorArrayObj[productListObj[mainProductId][
                                            childProductId
                                        ]["option"]["3"]["text"]]["att_id"] = productListObj[mainProductId][
                                        childProductId
                                        ]["option"]["3"]["att_id"];
                                    }
                                } else {
                                    productColorArrayObj[productListObj[mainProductId][
                                        childProductId
                                    ]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][
                                        childProductId
                                    ]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][
                                        childProductId
                                    ]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["3"]["titleText"];
                                    productColorArrayObj[productListObj[mainProductId][
                                        childProductId
                                    ]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][
                                        childProductId
                                    ]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["3"]["code"];
                                    productColorArrayObj[productListObj[mainProductId][
                                        childProductId
                                    ]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["3"]["cpid"];
                                    productColorArrayObj[productListObj[mainProductId][
                                        childProductId
                                    ]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["3"]["activePriceChild"];
                                    productColorArrayObj[productListObj[mainProductId][
                                        childProductId
                                    ]["option"]["3"]["text"]]["label"] = productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["3"]["label"];
                                    productColorArrayObj[productListObj[mainProductId][
                                        childProductId
                                    ]["option"]["3"]["text"]]["opt_id"] = productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["3"]["opt_id"];
                                    productColorArrayObj[productListObj[mainProductId][
                                        childProductId
                                    ]["option"]["3"]["text"]]["att_id"] = productListObj[mainProductId][
                                    childProductId
                                    ]["option"]["3"]["att_id"];
                                }
                            }
                        }
                    }
                }
            }
            Object.keys(productColorArrayObj).forEach(function (colorText) {
                let attr3Obj = {};
                attr3Obj["text"] = colorText;
                attr3Obj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
                attr3Obj["titleText"] = productColorArrayObj[colorText]["titleText"];
                attr3Obj["code"] = productColorArrayObj[colorText]["code"];
                attr3Obj["cpid"] = productColorArrayObj[colorText]["cpid"];
                attr3Obj["prc"] = productColorArrayObj[colorText]["prc"];
                attr3Obj["label"] = productColorArrayObj[colorText]["label"];
                attr3Obj["opt_id"] = productColorArrayObj[colorText]["opt_id"];
                attr3Obj["att_id"] = productColorArrayObj[colorText]["att_id"];
                product3ObjArray.push(attr3Obj);
            });
            product3Obj["att3Array"] = product3ObjArray;
            return product3Obj;
        }

        function getProductByAtt(findObj) {
            let childProductObj = {};
            let mainProductListObj = "";
            let productListObj = INC.dataStore.dataStoreObj;
            if (findObj.mainId != undefined && productListObj != undefined) {
                mainProductListObj = productListObj[findObj.mainId];
            }
            for (let childProductId in mainProductListObj) {
                if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && findObj.thirdText != "" && mainProductListObj[
                    childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined &&
                    mainProductListObj[childProductId]["option"]["2"] != undefined && mainProductListObj[childProductId]["option"]["3"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[
                        childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text && findObj
                            .thirdText == mainProductListObj[childProductId]["option"]["3"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText != "" && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined) {
                    if (findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined &&
                    mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[
                        childProductId]["option"]["1"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText == "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText != "" && mainProductListObj[
                    childProductId]["option"]["0"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText == "" && mainProductListObj[
                    childProductId]["option"]["1"] != undefined) {
                    if (findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (
                    (mainProductListObj[childProductId]["option"] != null && mainProductListObj[childProductId]["option"] != undefined &&
                        mainProductListObj[childProductId]["option"]["0"] != null && mainProductListObj[childProductId]["option"]["0"] != undefined &&
                        findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text) || (mainProductListObj[childProductId]["option"] !=
                            null && mainProductListObj[childProductId]["option"] != undefined && mainProductListObj[childProductId]["option"]["1"] !=
                            null && mainProductListObj[childProductId]["option"]["1"] != undefined && findObj.sizeText == mainProductListObj[childProductId]
                            ["option"]["1"].text)) {
                    childProductObj = mainProductListObj[childProductId];
                    return childProductObj;
                }
            }
            return childProductObj;
        }
        return {
            buildDataStoreObj: buildDataStoreObj,
            getFirstProductObjByMainId: getFirstProductObjByMainId,
            getProductById: getProductById,
            getProductBySKU: getProductBySKU,
            getUniqueCatergories: getUniqueCatergories,
            getProductColorsObj: getProductColorsObj,
            getProductSizesObj: getProductSizesObj,
            getProductopt3Obj: getProductopt3Obj,
            getProductopt0Obj: getProductopt0Obj,
            getProductByAtt: getProductByAtt,
        };
    };
    INC.classes = {};
    INC.classes.ProductObj = function (product) {
        this.bundleId = "";
        this.id = product != null && product != undefined ? product["ProductId"] : "";
        this.sku = product != null && product != undefined ? product["ProductSku"] : "";
        this.mainsku = product != null && product != undefined ? product["ProductSku"] : "";
        this.childsku = product != null && product != undefined ? product["ProductSku"] : "";
        this.name = product != null && product != undefined ? product["ProductName"] : "";
        this.url = product["ProductUrl"];
        this.imageURL = product["ImageURL"];
        this.regularPrice = product["Price"];
        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {
            if (parseFloat(product["SpecialPrice"]) > parseFloat(product["Price"])) {
                this.regularPrice = product["SpecialPrice"];
                this.activePrice = product["Price"];
            } else {
                this.activePrice = product["SpecialPrice"];
            }
        } else {
            this.activePrice = product["Price"];
        }
        if (product["OtherImageList"] != null && product["OtherImageList"] != undefined) {
            this.otherImageList = product["OtherImageList"];
        } else {
            this.otherImageList = [];
        }
        if (product["Size"] != null && product["Size"] != undefined) {
            this.size = product["Size"];
        } else {
            this.size = "";
        }
        this.option = {};
        this.mainId = product != null && product != undefined ? product["ProductId"] : "";
        this.categoryName = product != null && product != undefined ? product["CategoryName"] : "";
        this.categoryId = product != null && product != undefined ? product["CategoryId"] : "";
        this.description = product != null && product != undefined ? product["Description"] : "";
        this.shortDescription = product != null && product != undefined ? product["ShortDescription"] : "";
        this.ratingsCount = product != null && product != undefined ? product["Rating"] : "";
        this.reviewsCount = product != null && product != undefined ? product["RatingCount"] : "";
        if (product["PromotionalMessage"] != null) {
            this.PromotionalMessage = product["PromotionalMessage"];
        } else {
            this.PromotionalMessage = "";
        }
        if (product["ProductLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"];
        } else {
            this.ProductLevelDiscountMessage = "";
        }
        this.manufacturer = product != null && product != undefined ? product["Manufacturer"] : "";
        this.skinType = product != null && product != undefined ? product["Field3"] : "";
        this.wasPrice = product != null && product != undefined ? product["Field3"] : "";
        this.rrpPrice = product != null && product != undefined ? product["Field4"] : "";
        this.savePrice = product != null && product != undefined ? product["Field5"] : "";
        this.coverage = product != null && product != undefined ? product["Field6"] : "";
        this.ProductType = "";
        if (product["ProductType"] != null && product["ProductType"] != undefined) {
            this.ProductType = product["ProductType"];
        }
        this.regularPriceMain = product["Price"];
        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {
            if (parseFloat(product["SpecialPrice"]) > parseFloat(product["Price"])) {
                this.regularPriceMain = product["SpecialPrice"];
                this.activePriceMain = product["Price"];
            } else {
                this.activePriceMain = product["SpecialPrice"];
            }
        } else {
            this.activePriceMain = product["Price"];
        }
        if (product["ProductName"] != null) {
            this.nameMain = product["ProductName"];
        } else {
            this.nameMain = "";
        }
        if (product["ImageURL"] != null) {
            this.imageURLMain = product["ImageURL"];
        } else {
            this.imageURLMain = "";
        }
        this.urlMain = product["ProductUrl"];
    };
    INC.classes.ProductAttObj = function (product) {
        this.bundleId = "";
        this.id = product != null && product != undefined ? product["childProductId"] : "";
        this.sku = product != null && product != undefined ? product["childProductSku"] : "";
        this.mainsku = product != null && product != undefined ? product["mainSKU"] : "";
        this.childsku = product != null && product != undefined ? product["childProductSku"] : "";
        if (product["childProductName"] != null) {
            this.name = product["childProductName"];
        } else {
            this.name = "";
        }
        this.url = product["childProductUrl"];
        this.imageURL = product["childProductImageUrl"].replace("pngg", "png");
        this.regularPrice = product != null && product != undefined ? product["childProductPrice"] : "";

        if (product["childProductSpecialPrice"] != null && product["childProductSpecialPrice"] != product["childProductPrice"]) {
            if (parseFloat(product["childProductSpecialPrice"]) > parseFloat(product["childProductPrice"])) {
                this.regularPrice = product["childProductSpecialPrice"];
                this.activePrice = product["childProductPrice"];
            } else {
                this.activePrice = product["childProductSpecialPrice"];
            }
        } else {
            this.activePrice = product["childProductPrice"];
        }
        if (product["PromotionalMessage"] != null) {
            this.PromotionalMessage = product["PromotionalMessage"];
        } else {
            this.PromotionalMessage = "";
        }
        if (product["productLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage = product["productLevelDiscountMessage"];
        } else {
            this.ProductLevelDiscountMessage = "";
        }
        this.otherImageList = product != null && product != undefined ? product["childProductOtherImageUrl"] : [];

        this.size = "";
        this.option = {};
        this.pricingObj = product["childProductField2"] != null ? product["childProductField2"] : "";
        if (product != null && product != undefined) {
            this.option[product["optionId"]] = {};
            this.option[product["optionId"]].text = product["optionText"];
            this.option[product["optionId"]].titleText = product["childProductField2"] != null ? product["childProductField2"] : "";
            this.option[product["optionId"]].imgSrc = product["optionImageUrl"] != null ? product["optionImageUrl"] : "";
            this.option[product["optionId"]].colorCode = product["colorCode"] != null ? product["colorCode"] : "";
            this.option[product["optionId"]].cpid = product["childProductId"] != null ? product["childProductId"] : "";
            this.option[product["optionId"]].opt_id = product["opId"] != null ? product["opId"] : "";
            this.option[product["optionId"]].opttext = product["optionText1"];
            this.option[product["optionId"]].att_lebel = product.att_lebel;
            this.option[product["optionId"]].field1 = product.childProductField1;
            this.option[product["optionId"]].attrLength = product.attrLength;
            this.option[product["optionId"]].activePriceChild = product.attrLength;
            if (product["childProductSpecialPrice"] != null && product["childProductSpecialPrice"] != product["childProductPrice"]) {
                if (parseFloat(product["childProductSpecialPrice"]) > parseFloat(product["childProductPrice"])) {
                    this.option[product["optionId"]].activePriceChild = product["childProductSpecialPrice"];
                    this.option[product["optionId"]].activePriceChild = product["childProductPrice"];
                } else {
                    this.option[product["optionId"]].activePriceChild = product["childProductSpecialPrice"];
                }
            } else {
                this.option[product["optionId"]].activePriceChild = product["childProductPrice"];
            }
        }
        this.categoryName = product != null && product != undefined ? product["childCategoryName"] : "";
        this.categoryId = product != null && product != undefined ? product["childCategoryId"] : "";
        this.description = product != null && product != undefined ? product["childProductDescription"] : "";
        if (product["ShortDescription"] != null) {
            this.shortDescription = product["ShortDescription"];
        } else if (product["Field1"] != null) {
            this.shortDescription = product["Field1"];
        } else {
            this.shortDescription = "";
        }
        this.manufacturer = product != null && product != undefined ? product["Manufacturer"] : "";
        this.ratingsCount = product != null && product != undefined ? product["childRating"] : "";
        this.reviewsCount = product != null && product != undefined ? product["childreviewsCount"] : "";
        this.skinType = product != null && product != undefined ? product["childProductField3"] : "";
        this.wasPrice = product != null && product != undefined ? product["childProductField3"] : "";
        this.rrpPrice = product != null && product != undefined ? product["childProductField4"] : "";
        this.savePrice = product != null && product != undefined ? product["childProductField5"] : "";
        this.coverage = product != null && product != undefined ? product["childProductField6"] : "";
        this.ProductType = product != null && product != undefined ? product["ProductType"] : "";
        this.regularPriceMain = product["childProductPriceMain"];
        this.activePriceMain = product["childProductPriceMain"];
        if (product["childProductSpecialPriceMain"] != null && product["childProductSpecialPriceMain"] != product["childProductPriceMain"]) {
            if (parseFloat(product["childProductSpecialPriceMain"]) > parseFloat(product["childProductPriceMain"])) {
                this.regularPriceMain = product["childProductSpecialPriceMain"];
                this.activePriceMain = product["childProductPrice"];
            } else {
                this.activePriceMain = product["childProductSpecialPriceMain"];
            }
        }
        this.nameMain = "";
        if (product["childProductNameMain"] != null) {
            this.nameMain = product["childProductNameMain"];
        }
        this.imageURLMain = "";
        if (product["childProductImageUrlMain"] != null) {
            this.imageURLMain = product["childProductImageUrlMain"];
        }
        this.urlMain = product["childProductUrlMain"];
    };
    INC.classes.FindObj = function (findObj) {
        this.id = findObj != null && findObj != undefined ? findObj.id : "";
        this.sku = findObj != null && findObj != undefined ? findObj.sku : "";
        this.mainId = findObj != null && findObj != undefined ? findObj.mainId : "";
        this.colorText = findObj != null && findObj != undefined ? findObj.colorText : "";
        this.sizeText = findObj != null && findObj != undefined ? findObj.sizeText : "";
    };
    INC.classes.NWConfig = function (nwConfigObj) {
        this.url = nwConfigObj != null && nwConfigObj != undefined ? nwConfigObj.url : "";
        this.method = nwConfigObj != null && nwConfigObj != undefined ? nwConfigObj.method : "GET";
        this.params = nwConfigObj != null && nwConfigObj != undefined ? nwConfigObj.params : "";
    };
    INC.methods = {};
    INC.methods.networkReq = function (nwConfigObj, cb) {
        let nwConfigObject = new INC.classes.NWConfig(nwConfigObj);
        let xhr = new XMLHttpRequest();
        xhr.open(nwConfigObject.method, nwConfigObject.url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    cb(xhr.response);
                    if (INC.config.pageType == "pdp") {
                        let p_ids = INC.methods.getProductIdFromWebPage();
                        let repd = JSON.parse(xhr.response);
                        INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view");
                    }
                } else {
                    if (INC.config.pageType == "productList") {
                        INC.config.modal_called = true;
                    } else {
                        if (INC.config.VariantProduct) return;
                        INC.config.VariantProduct = true;
                        if (INC.methods.detectPageType() == "cartPage") return;
                        // INC.init();
                    }
                }
            }
        };
        xhr.send(JSON.stringify(nwConfigObject.params));
    };
    INC.methods.irbReq = function (productId, bundleCount, elementName) {

        let elmname = elementName || "";
        let productIdReq = productId;
        let apiKey = INC.config.clientToken;
        let bundleReqCount = bundleCount || 5;
        let irbReqParams = "";
        let irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        irbReqParams = "product_ids=" + productIdReq + "&category_id=" + "&api_key=" + apiKey + "&page_type=" + elmname + "&fr=" + "1" +
            "&client_visitor_id=" + INC.config.ivid;
        if (INC.config.pageType != "pdp" && INC.config.pageType != "cartPage") {
            irbReqParams = irbReqParams + "&is_tc=" + "1" + "&no_of_bundles=" + bundleReqCount;
        }
        if ((window.location.href == 'https://www.leekes.co.uk/fine-bedding-company-luna-pillow' || window.location.href == "https://www.leekes.co.uk/the-fine-bedding-company-perfect-pair-pillows-white" || window.location.href == "https://www.leekes.co.uk/fine-bedding-company-spundown-firm-support-pillow" || window.location.href == "https://www.leekes.co.uk/lsa-metropolitan-wine-glass-set-of-4") && INC.config.pageType != "productList" && INC.config.pageType != "cartPage") {
            irbReqParams = "product_ids=&category_id=UGlsbG93cw==" + "&api_key=" + apiKey + "&page_type=" + elmname + "&set=1&npb=2&client_id=" +
                "&client_visitor_id=" + INC.config.ivid;
        }
        let irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
        let networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL;
        return this.refreshBundles(networkConfigObj);
    };
    INC.methods.refreshBundles = function (nwConfigObj) {
        let incDataStore = INC.dataStore;
        INC.methods.networkReq(nwConfigObj, function (response) {
            if (response.length == 0) {
                return;
            }
            let responseJSON = "";
            if (typeof response != "object") {
                responseJSON = JSON.parse(response);
            } else {
                responseJSON = response;
            }
            let bundleResponse = responseJSON;
            if (Object.prototype.hasOwnProperty.call(responseJSON, "Bundles") && responseJSON.Bundles != null) {
                INC.config.recommendation = false;
                responseJSON.timeStamp = Date.now();
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                if (incDataStore.dataStoreObj == null || incDataStore.dataStoreObj == undefined) {
                    return;
                }
                switch (INC.config.pageType) {
                    case "pdp":
                        INC.methods.createPDPBlock();
                        break;
                    case "cartPage":
                        INC.methods.createAMBlock();
                        break;
                    case "productList":
                        INC.config.dupDataObjectProducts = [];
                        INC.methods.createSidebarBlock();
                        let findObj = new INC.classes.FindObj();
                        findObj["id"] = INC.config.plpProductId;
                        let sbBlock = document.querySelector(".inc_sidebar_modal_block");
                        sbBlock.querySelector(".inc_sidebar_cart_added_block").style.visibilty = "hidden";
                        document.querySelector(".inc_sidebar_modal_block .inc_sidebar_cart_added_block").style.borderBottom = "0px";
                        sbBlock.querySelector(".inc_header_item_count_figure_text").innerText = ""; //"|";
                        sbBlock.querySelector(".inc_cart_added_list_block").innerHTML = "";
                        if (INC.dataStore.plpProductQty == 0) {
                            INC.dataStore.plpProductQty = 1;
                        }
                        INC.methods.addProductToSidebarCart(findObj, "client_add_btn", INC.dataStore.plpProductQty, null, null);
                        if (document.querySelector(".ic_popup_module_wrapper.active .inc_popup_close") != null) {
                            document.querySelector(".ic_popup_module_wrapper.active .inc_popup_close").click();
                        }
                        INC.methods.showSidebar();
                        let img_elem = setInterval(function () {
                            let circle_img = document.querySelector(".inc_cart_added_product_img img");
                            if (circle_img != null) {
                                clearInterval(img_elem);
                                let subtotalinc_active = document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
                                let subtotalinc_regular = document.querySelector(
                                    ".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
                                let label = document.querySelector(".inc_just_added_save_pr");
                                if (INC.config.empty_prod_details[0] != undefined) {
                                    if (INC.config.empty_prod_details[0].p_activePrice != undefined) {
                                        if (subtotalinc_active != null) {
                                            let subt = +INC.config.empty_prod_details[0].p_activePrice * INC.dataStore.plpProductQty;
                                            let subr = +INC.config.empty_prod_details[0].regularPrice * INC.dataStore.plpProductQty;
                                            if (INC.config.empty_prod_details[0].regularPrice != undefined) {
                                                subtotalinc_active.setAttribute("subtotalactiveprice", subt);
                                                subtotalinc_regular.setAttribute("subtotalregularprice", subr);
                                                let totalsaveprc = get_discount_price(subt, subr);
                                                subtotalinc_active.innerHTML = formatter.format(subt).replace('.00', '');
                                                subtotalinc_regular.innerHTML = formatter.format(subr).replace('.00', '');
                                                if (totalsaveprc != 0) {
                                                    label.innerHTML = "Save " + formatter.format(totalsaveprc).replace('.00', '');
                                                }
                                            } else {
                                                subtotalinc_active.innerHTML = formatter.format(subt).replace('.00', '');
                                                subtotalinc_active.setAttribute("subtotalactiveprice", subt);
                                                subtotalinc_active.setAttribute("subtotalactiveprice", subt);
                                                let subtotalregular = document.querySelector(
                                                    ".inc_cart_added_product_desc_subtotal_ecirp_regular_text_block");
                                                subtotalregular.setAttribute("subtotalregularprice", 0);
                                            }
                                        }
                                        let prd_names = document.querySelector(".inc_cart_added_product_desc_title_text");
                                        if (INC.config.empty_prod_details[0].p_name != undefined) {
                                            prd_names.innerHTML = INC.config.empty_prod_details[0].p_name;
                                        }
                                        if (INC.config.empty_prod_details[0].p_name != undefined) {
                                            circle_img.src = INC.config.empty_prod_details[0].p_img;
                                        }
                                        let prd_price = document.querySelector(".inc_cart_added_product_desc_ecirp_active_text");
                                        if (prd_price != null && INC.config.empty_prod_details[0].p_activePrice != null) {
                                            prd_price.innerHTML = formatter.format(INC.config.empty_prod_details[0].p_activePrice);
                                        }
                                        let szeClrTxt = document.querySelector(".inc_cart_added_product_desc_att_size_text");
                                        if (INC.config.empty_prod_details[0].size != "undefined" && INC.config.empty_prod_details[0]
                                            .color != "undefined") {
                                            szeClrTxt.innerHTML = "colour: " + INC.config.empty_prod_details[0].color.toLowerCase() +
                                                " , " + "size: " + INC.config.empty_prod_details[0].size.toLowerCase();
                                        } else {
                                            szeClrTxt.innerHTML = "size: " + INC.config.empty_prod_details[0].size.toLowerCase();
                                        }
                                    }
                                }
                            }
                        }, 100);
                        break;
                }
            } else if(responseJSON.CategoryRecommendations != null){
                if (Object.prototype.hasOwnProperty.call(responseJSON, "CategoryRecommendations") && responseJSON.CategoryRecommendations
                .length > 0) {
                responseJSON.timeStamp = Date.now();
                INC.config.recommendation = true;
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                if (incDataStore.dataStoreObj == null || incDataStore.dataStoreObj == undefined) {
                    return;
                }
                if (INC.config.pageType == "pdp") {
                    INC.methods.createAMBlock("PDP");
                }
            }
            }
        });
    };
    INC.methods.irbReq_is_tc = function (productIds, bundleCount, elementNameel) {
        let elementName = elementNameel || "";
        let productId = productIds;
        let apiKey = INC.config.clientToken;
        let bundleReqCount = bundleCount || 5;
        let irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        let vi = INC.config.ivid;
        let irbparam = "product_ids=" + productId + "&api_key=" + apiKey + "&page_type=" + elementName + "&fr=" + "1" + "&client_visitor_id=" + vi +
            "&is_tc=" + "1" + "&no_of_bundles=" + bundleReqCount;
        let irbReqURL1 = decodeURI(irbPATH + btoa(irbparam));
        let networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL1;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", networkConfigObj["url"], true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    if (INC.config.pageType == "pdp") {
                        cb_tc(JSON.parse(xhr.response));
                    }
                }
            }
        };
        xhr.send(JSON.stringify(networkConfigObj["params"]));
    };
    INC.methods.get_product_ratings = function (filed3, field2, rating_containers) {
        let count = document.createElement("span");
        count.classList.add("rating_count");
        rating_containers.appendChild(count);
        let avg = document.createElement("span");
        avg.classList.add("rating_avg");
        if (field2 == undefined) {
            count.textContent = "0 reviews";
            rating_containers.classList.add("inc_hide");
        } else {
            if (field2 == 1) {
                count.textContent = "(" + field2 + " Customer Review)";
            } else {
                count.textContent = "(" + field2 + " Customer Reviews)";
            }
        }
        let stars = document.createElement("span");
        if (filed3 != undefined && filed3 != "") {
            let rating = filed3;
            if (rating == "" || rating == undefined || rating == "NaN" || rating == "norating") {
                rating = 0;
            }
            rating = parseFloat(rating).toFixed(1);
            rating = rating.toString();
            let rating_m = null;
            if (rating != 0 && rating != 1 && rating != 2 && rating != 3 && rating != 4 && rating != 5) {
                rating_m = rating.replace(".", "-");
            }
            if (rating == 0) {
                rating = "0-0";
            }
            if (rating == 1) {
                rating = "1-0";
            }
            if (rating == 2) {
                rating = "2-0";
            }
            if (rating == 3) {
                rating = "3-0";
            }
            if (rating == 4) {
                rating = "4-0";
            }
            if (rating == 5) {
                rating = "5-0";
            }
            if (rating == "") {
                rating = 0;
            }
            if (rating_m != null && rating_m != "NaN") {
                rating_containers.classList.add("rating_" + rating_m);
            } else if (isNaN(rating_m)) {
                rating_containers.classList.add("rating_" + rating);
            } else {
                rating_containers.classList.add("rating_" + rating);
            }
            stars.classList.add("rating_stars");
            rating_containers.appendChild(stars);
        } else {
            stars.innerText = ".";
            stars.style.color = "#fff";
            stars.classList.add("rating_stars");
            stars.classList.add("noratings");
            rating_containers.appendChild(stars);
        }
    };
    INC.methods.getProductIdFromWebPage = function () {
        var product_id = '';
        if (document.querySelector('.product-add-form') != null) {
            if (document.querySelector('.product-add-form form') != null) {
                if (document.querySelector('.product-add-form form input[name=product]') != null) {
                    product_id = document.querySelector('.product-add-form form input[name=product]').value;
                }
            }
        }else if(document.querySelector('.product-info-main .product-info-price .price-box')){
            product_id = document.querySelector('.product-info-main .product-info-price .price-box').getAttribute("data-product-id");
        }

        INC.config.Product_id = product_id
        return product_id;
    };
    INC.methods.detectPageType = function () {
        if (document.querySelector(".catalog-product-view") != null) return "pdp";
        if (document.querySelector(".checkout-cart-index") != null) return "cartPage";
    };
    INC.methods.showSidebar = function () {
        let sidebarel = document.querySelector(".inc_sidebar_modal_block");
        if (sidebarel != null) {
            if (document.querySelector(".inc_recommended_tabs_list_item_block") == null || INC.config.sidebarFirstLoad == falseflag) {
                setTimeout(() => {
                    window.location.replace("https://www.leekes.co.uk/checkout/cart/");
                }, 1000);
                return;
            }
            let tabList = document.querySelectorAll('.inc_recommended_tabs_list_item_block');
            for (let i = 0; i < tabList.length; i++) {
                if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                    tabList[i].click()
                    if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null) {
                        let remcateg = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')
                        if (remcateg != null) {
                            remcateg.parentNode.removeChild(remcateg)
                        }
                    }
                }
                if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                    document.querySelector('.inc_recommended_tabs_list_item_block').click()
                }

            }
            if (document.querySelector(".inc_recommended_tabs_list_item_block") != null) {
                let sidebarouter = document.querySelector(".sidebar_outer");
                if (sidebarouter != null) {
                    document.querySelector("html").classList.add("inc_overlay");
                    let elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
                    if (elSidebarOverlay != null) {
                        elSidebarOverlay.style.display = "block";
                    }
                    sidebarouter.style.display = "block";
                    sidebarel.style.display = "block";
                    sidebarel.classList.add("inc_active");
                    sidebarouter.classList.add("sidebar_outer_active");
                }
            }
        }
        if (document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_block") != null) {
            document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_block").classList.remove("inc_loading");
        }
    };
    INC.methods.hideSidebar = function () {
        let sidebarelhide = document.querySelector(".inc_sidebar_modal_block");
        INC.config.sidebarremovedprod = [];
        INC.bundles = true;
        document.querySelector("html").style = "";
        document.querySelector("html").classList.remove("inc_overlay");
        document.querySelector("body").classList.remove("inc_popup_open");
        let sidebarouterH = document.querySelector(".sidebar_outer");
        if (sidebarouterH != null) {
            document.querySelector(".inc_sidebar_overlay_block").style.display = "none";
            sidebarelhide.style.display = "none";
            sidebarouterH.style.display = "none";
            sidebarouterH.classList.remove("sidebar_outer_active");
            sidebarelhide.classList.remove("inc_active");
        }
        setTimeout(function () {
            if (document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block") != null) {
                document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block").classList.remove("is_special_ecirp");
            }
            let pdp_product = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').length
            if (pdp_product > 2 && pdp_product != undefined) {
                INC.clientConfig.offset = 0;
                INC.clientConfig.slidevalue = 0;
                if (document.querySelector(".inc_pdp_bundle_product_left-btn_img") != null) {
                    document.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("style", "opacity:0.5");
                }
                if (document.querySelector(".inc_pdp_bundle_product_left-btn_block") != null) {
                    document.querySelector(".inc_pdp_bundle_product_left-btn_block").setAttribute("style", "pointer-events: none;opacity:0.5");
                }
                if (document.querySelector(".inc_pdp_bundle_product_list_main_block") != null) {
                    document.querySelector(".inc_pdp_bundle_product_list_main_block").setAttribute("style", "margin-left: 0");
                }

                if (document.querySelector(".inc_pdp_bundle_product_right-btn_img") != null) {
                    document.querySelector(".inc_pdp_bundle_product_right-btn_img").setAttribute("style", "opacity:0.5");
                }
                if (document.querySelector(".inc_pdp_bundle_product_right-btn_block") != null) {
                    document.querySelector(".inc_pdp_bundle_product_right-btn_block").setAttribute("style", "pointer-events: auto;opacity:1");
                }
            }
        }, 30);
        
        if(document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_rrp_text') != null){
            document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_rrp_text").setAttribute("subtotalrrpprice", 0);
            document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_rrp_text").innerHTML = ""
        }
        if(document.querySelector('.inc_just_added_save_pr') != null){
            document.querySelector(".inc_just_added_save_pr").innerText = ""
        }
    };
    INC.methods.createAMBlock = function (PDP_type) {
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            INC.config.onloadam = true
            document.querySelector("html").classList.add("inc-prevent-hor-scroll");
            let amBlock = generate_html_tag("div", "inc_af_block");
            amBlock.classList.add("af_cart_page");
            amBlock.innerHTML = cart_html;
            amBlock.querySelector(".inc_af_product-list_block").innerHTML = "";
            let elAmTitleText = amBlock.querySelector(".inc_af_title_text_block");
            let amProductListBlock = amBlock.querySelector(".inc_af_product-list_block");
            let bundleProductsArray = INC.dataStore.bundleProductsArray;
            if (INC.config.pageType == "pdp") {
                if (INC.dataStore.bundleProductsArray.indexOf(INC.config.Product_id) == -1) {
                    //INC.dataStore.bundleProductsArray.push(INC.config.Product_id)
                }
                INC.config.cartproductids = [];
            }
            let duplamid = [];
            if (PDP_type == "PDP") {
                let countBlockAdded = 0;
                //bundleProductsArray = INC.config.recommendationProduct;
                bundleProductsArray.forEach(function (mainProductId) {
                    if (duplamid.indexOf(mainProductId) == -1) {
                        duplamid.push(mainProductId);
                        let firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                            mainId: mainProductId,
                        });
                        let prd_modulerec = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock, null, true);
                        countBlockAdded = countBlockAdded + 1;
                        if (prd_modulerec.getAttribute("data-id") != "undefined") {
                            amProductListBlock.appendChild(prd_modulerec);
                        }
                        elAmTitleText.innerText = "Best selling similar products";
                    }
                });
                let productListBlock = amBlock.querySelector(".inc_af_product-list_block");
                if (window.innerWidth < 769) {
                    if (window.innerWidth > 600) {
                        if (countBlockAdded <= 2) {
                            productListBlock.classList.add("less_product");
                        }
                    }
                } else if (countBlockAdded == 1) {
                    productListBlock.classList.add("inc_one_product");
                } else if (countBlockAdded <= 3) {
                    productListBlock.classList.add("less_product");
                } else if (countBlockAdded == 3) {
                    productListBlock.classList.add("inc_three_products");
                }
                if (countBlockAdded == 1) {
                    productListBlock.classList.add("inc_one_product");
                }
            } else {
                let countBlockAdded = 0;
                if (bundleProductsArray.length > 0) {
                    bundleProductsArray.forEach(function (mainProductId) {
                        if (duplamid.indexOf(mainProductId) == -1) {
                            duplamid.push(mainProductId);
                            if (INC.config.cartproductids.indexOf(mainProductId) == -1) {
                                let firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                                    mainId: mainProductId,
                                });
                                let prd_module = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock);
                                countBlockAdded = countBlockAdded + 1;
                                if (prd_module.getAttribute("data-id") != "undefined") {
                                    //elAmTitleText.innerText = "Best Sellers";
                                    amProductListBlock.appendChild(prd_module);
                                    elAmTitleText.innerText = "Best Sellers";
                                }
                            }
                        }
                    });
                }
                let productListBlock = amBlock.querySelector(".inc_af_product-list_block");
                if (window.innerWidth < 769) {
                    if (window.innerWidth > 600) {
                        if (countBlockAdded <= 2) {
                            productListBlock.classList.add("less_product");
                        }
                    } else {
                        if (countBlockAdded <= 3) {
                            productListBlock.classList.add("less_product");
                        }
                    }
                } else {
                    if (countBlockAdded == 1) {
                        productListBlock.classList.add("inc_one_product");
                    } else if (countBlockAdded <= 3) {
                        productListBlock.classList.add("less_product");
                    } else if (countBlockAdded == 3) {
                        productListBlock.classList.add("inc_three_products");
                    }
                }
            }
            amProductListBlock.setAttribute("style", "left:0px;transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;");

            let amProductBlocks = amBlock.querySelectorAll(".inc_product_block");
            Array.prototype.forEach.call(amProductBlocks, function (productBlock) {
                productBlock.querySelector(".inc_product_desc_add_block").addEventListener("click", function () {
                    let el = this.parentNode.parentNode.querySelector('.inc_product_variant_simple_text')
                    addprodsingle(this, el);
                });
            });
            let prod_sl_c = 1;
            if (amBlock != null) {
                Array.prototype.forEach.call(document.querySelectorAll(".inc_af_block"), function (el) {
                    el.parentNode.removeChild(el);
                });
            }
            if (amBlock.querySelector(".inc_af_block .inc_product_showcase_block") == null) {
                return;
            }
            if (amBlock.querySelectorAll(".inc_af_product-list_block .inc_product_module_block").length == 1) {
                amBlock.querySelector(".inc_af_product-list_block").classList.add("inc_one_product");
            }
            
            if (PDP_type == "PDP" && INC.methods.detectPageType() !== "cartPage") {
                let pdpBlockSibling = document.querySelector(".product.info.detailed");
                if(pdpBlockSibling != null){
                    pdpBlockSibling = pdpBlockSibling.nextElementSibling
                }
                pdpBlockSibling.parentNode.insertBefore(amBlock, pdpBlockSibling)

            } else {
                if (bundleProductsArray.length > 0) {
                    let CartPos = document.querySelector(".cart-container")
                    if (CartPos) {
                        insertAfter(amBlock, CartPos);
                    }

                }
            }
            let all_list_el = amBlock.querySelectorAll('.inc_af_product-list_block .inc_product_modal_block')
            for (let all_list in all_list_el) {
                if (Object.prototype.hasOwnProperty.call(all_list_el, all_list)) {
                    let prd_moduleb = all_list_el[all_list].parentNode
                    let main_idsd = ""
                    if (prd_moduleb != null) {
                        main_idsd = prd_moduleb.getAttribute('data-main_id')
                    }
                    if (all_list_el[all_list].querySelector('.inc_product_desc_att_zero_block.inc_active') != null) {
                        if (prd_moduleb.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                            if (prd_moduleb.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block') != null) {
                                prd_moduleb.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block').click()
                            } else if (all_list_el[all_list].querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block') != null) {
                                all_list_el[all_list].querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block').click()
                            }
                        } else if (all_list_el[all_list].querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block') != null) {
                            all_list_el[all_list].querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block').click()
                        }
                    }

                    if (all_list_el[all_list].querySelector('.inc_product_desc_att_color_block.inc_active') != null) {
                        if (prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                            if (prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                                prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"]').click()
                            }
                        } else if (all_list_el[all_list].querySelector('.inc_product_desc_att_color_list_item_img_block') != null) {
                            all_list_el[all_list].querySelector('.inc_product_desc_att_color_list_item_img_block').click()
                        }
                    } else if (all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                        all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                    }
                }
            }
            amBlock.querySelector(".inc_af_right_btn_block").style.visibility = "hidden";
            amBlock.querySelector(".inc_af_right_btn_img").style.visibility = "hidden";
            amBlock.querySelector(".inc_af_left_btn_block").style.visibility = "hidden";
            amBlock.querySelector(".inc_af_left_btn_img").style.visibility = "hidden";
            let productBlocks = amProductListBlock.querySelectorAll(".inc_product_module_block");
            let sliderBtnCounter_rec = 0;
            if (productBlocks.length > prod_sl_c) {
                amBlock.querySelector(".inc_af_right_btn_block").style.visibility = "visible";
                amBlock.querySelector(".inc_af_left_btn_block").style.visibility = "visible";
                amBlock.querySelector(".inc_af_left_btn_block").setAttribute("style", "pointer-events: none;opacity:0.5");
                amBlock.querySelector(".inc_af_right_btn_img").style.visibility = "visible";
                amBlock.querySelector(".inc_af_left_btn_img").style.visibility = "visible";
                amBlock.querySelector(".inc_af_left_btn_img").setAttribute("style", "pointer-events: none;opacity:0.5");
            }
            let cc_ount = 0;
            if (window.innerWidth < 800) {
                cc_ount = 2;
            } else if (window.innerWidth < 1200) {
                cc_ount = 3;
            } else {
                cc_ount = 5;
            }
            if (productBlocks.length <= cc_ount) {
                amBlock.querySelector(".inc_af_right_btn_block").style.visibility = "hidden";
                amBlock.querySelector(".inc_af_right_btn_img").style.visibility = "hidden";
                amBlock.querySelector(".inc_af_left_btn_block").style.visibility = "hidden";
                amBlock.querySelector(".inc_af_left_btn_img").style.visibility = "hidden";
            }
            
            amBlock.querySelector(".inc_af_right_btn_block").addEventListener("click", function () {
                sliderBtnCounter_rec++;
                if (sliderBtnCounter_rec > productBlocks.length - 1) {
                    sliderBtnCounter_rec--;
                }
                let all_p_length = document.querySelectorAll(".inc_af_product-list_block .inc_product_module_block").length;
                let cc_ounts = 0;
                if (window.innerWidth < 800) {
                    cc_ounts = 2;
                } else if (window.innerWidth < 1200) {
                    cc_ounts = 3;
                } else {
                    cc_ounts = 5;
                }
                let width_slide = "";
                let wid_sld = document.querySelector(".inc_af_block .inc_product_module_block").clientWidth;

                width_slide = wid_sld;

                if (INC.clientConfig.slidevalue_rec + cc_ounts < all_p_length) {
                    amBlock.parentNode.parentNode.querySelector(".inc_af_left_btn_block").setAttribute("style",
                        "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector(".inc_af_left_btn_img").setAttribute("style", "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue_rec++;
                    let menu = null;
                    INC.clientConfig.offset_rec = parseInt(INC.clientConfig.offset_rec) - width_slide + "px";
                    menu = amBlock.parentNode.parentNode.querySelector(".inc_af_product-list_block");
                    menu.setAttribute("style", "left:" + INC.clientConfig.offset_rec +
                        ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                    );
                    if (document.querySelector(".inc_af_product-list-dots-main_block .inc_dots.inc_active") != null) {
                        document.querySelector(".inc_af_product-list-dots-main_block .inc_dots.inc_active").classList.remove("inc_active");
                    }
                    if (document.querySelectorAll(".inc_af_product-list-dots-main_block .inc_dots")[+INC.clientConfig.slidevalue_rec] != null) {
                        document.querySelectorAll(".inc_af_product-list-dots-main_block .inc_dots")[+INC.clientConfig.slidevalue_rec].classList
                            .add("inc_active");
                    }
                }
                if (+INC.clientConfig.slidevalue_rec + +cc_ounts == all_p_length) {
                    amBlock.parentNode.parentNode.querySelector(".inc_af_right_btn_block").setAttribute("style",
                        "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector(".inc_af_right_btn_img").setAttribute("style",
                        "pointer-events: none;opacity:0.5");
                }
            });
            amBlock.querySelector(".inc_af_left_btn_block").addEventListener("click", function () {
                sliderBtnCounter_rec--;
                if (sliderBtnCounter_rec == -1) {
                    sliderBtnCounter_rec = 0;
                }
                if (INC.clientConfig.slidevalue_rec == -1) {
                    INC.clientConfig.slidevalue_rec = 0;
                }
                let wid_sld = document.querySelector(".inc_af_block .inc_product_module_block").clientWidth;
                let width_slide = "";

                width_slide = wid_sld;

                if (INC.clientConfig.slidevalue_rec > 0) {
                    amBlock.parentNode.parentNode.querySelector(".inc_af_right_btn_block").setAttribute("style",
                        "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector(".inc_af_right_btn_img").setAttribute("style",
                        "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue_rec--;
                    INC.clientConfig.offset_rec = parseInt(INC.clientConfig.offset_rec) + width_slide + "px";
                    let menu = null;

                    menu = amBlock.parentNode.parentNode.querySelector(".inc_af_product-list_block");
                    menu.setAttribute("style", "left:" + INC.clientConfig.offset_rec +
                        ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                    );

                    if (document.querySelector(".inc_af_product-list-dots-main_block .inc_dots.inc_active") != null) {
                        document.querySelector(".inc_af_product-list-dots-main_block .inc_dots.inc_active").classList.remove("inc_active");
                    }
                    if (document.querySelectorAll(".inc_af_product-list-dots-main_block .inc_dots")[+INC.clientConfig.slidevalue_rec] != null) {
                        document.querySelectorAll(".inc_af_product-list-dots-main_block .inc_dots")[+INC.clientConfig.slidevalue_rec].classList
                            .add("inc_active");
                    }
                }
                if (INC.clientConfig.slidevalue_rec == 0) {
                    amBlock.parentNode.parentNode.querySelector(".inc_af_left_btn_block").setAttribute("style",
                        "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector(".inc_af_left_btn_img").setAttribute("style",
                        "pointer-events: none;opacity:0.5");
                }
            });
            setTimeout(function () {
                let inc_prod_img = document.querySelectorAll(".inc_product_img_main_img img");
                for (let i_prd_image in inc_prod_img) {
                    if (inc_prod_img[i_prd_image] != null && Object.prototype.hasOwnProperty.call(inc_prod_img, i_prd_image)) {
                        inc_prod_img[i_prd_image].setAttribute("style", INC.config.styleft);
                    }
                }
            }, 2000);
        }

        let all_added_products = document.querySelectorAll('.checkout-button--remove')
        let lastActiveIDS = cartpageprodids().length
        if (all_added_products) {
            for (let i = 0; i < all_added_products.length; i++) {
                all_added_products[i].addEventListener('click', function () {
                    setTimeout(() => {
                        if (cartpageprodids().length !== lastActiveIDS) {
                            INC.init()
                        }
                    }, 1500);
                })
            }
        }
        if (document.querySelector(".inc_af_block") != null) {
            if (INC.config.pageType == "cartPage") {
                document.querySelector(".inc_af_block").classList.add("af_cart_page");
            } else if (INC.config.pageType == "pdp") {
                document.querySelector(".inc_af_block").classList.add("inc_recommendations");
            }
        }
        setTimeout(() => {
            INC.config.onloadam = false
        }, 2000);
    };

    function addprodsingle(element, elrec) {
        let productBlockNode = element.parentNode.parentNode;
        let flag_check = INC.methods.checkVariantSelection(productBlockNode);
        if (element.parentNode.parentNode.className == "inc_product_desc_block") {
            productBlockNode = element.parentNode.parentNode.parentNode.parentNode;
        }
        if (productBlockNode.classList.contains("inc_product_block") == trueflag) {
            productBlockNode = productBlockNode.parentNode.parentNode;
        }

        let sku = productBlockNode.getAttribute("data-sku");
        if (!sku) {
            sku = productBlockNode.parentElement.parentElement.getAttribute("data-sku");
        }

        let findObj = new INC.classes.FindObj({
            id: sku,
        });
        let add_btn = productBlockNode.querySelector(".inc_product_add_text");
        let add_btn_click = productBlockNode.querySelector(".inc_product_add_text");
        let add_prod_im = productBlockNode.querySelectorAll(".inc_product_desc_add_img");
        if (flag_check == 1) {
            if (INC.config.disablebtn == trueflag) {
                INC.config.disablebtn = false;
                if (element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("inc_product_showcase_block") == trueflag || element
                    .parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("inc_product_modal_block") == trueflag) {
                    let popbtn = productBlockNode.querySelector(".inc_product_modal_block .inc_product_desc_add_text");
                    popbtn.innerText = "Adding...";
                    productBlockNode.querySelector(".inc_product_add_text").innerText = "Adding...";
                    let rec = false;
                    if (INC.config.pageType == "pdp" && document.querySelector(".inc_af_block") != null) {
                        if (document.querySelector(".sidebar_outer.sidebar_outer_active") == null) {
                            rec = true;
                        }
                    }
                    if (elrec != null) {
                        elrec.innerText = "Adding...";
                        add_btn_click = elrec;
                    }
                    INC.methods.addProductToCart(findObj, productBlockNode, add_btn_click, add_prod_im, add_btn, popbtn, rec);
                }
            }
        }
    }

    INC.methods.createPDPBlock = function (sidebar) {
        document.querySelector("html").classList.add("inc_bundles");
        document.querySelector("html").classList.add("inc-prevent-hor-scroll");
        let empty_sidebarflag = false;
        if (INC.dataStore.dataStoreObj[INC.config.Product_id] != undefined) {
            if (INC.dataStore.dataStoreObj[INC.config.Product_id][
                INC.config.Product_id
            ] != undefined) {
                if (INC.dataStore.dataStoreObj[INC.config.Product_id][
                    INC.config.Product_id
                ].bundleId == "12345679") {
                    empty_sidebarflag = true;
                }
            }
        }
        if (INC.bundles == falseflag && sidebar != "sidebar" && sidebar != "hidesidebar") {
            return;
        }
        if (sidebar != "sidebar" && sidebar != "hidesidebar") {
            if (INC.dataStore.dataStoreObj.undefined != undefined || empty_sidebarflag == falseflag) {
                let pdpBlock = generate_html_tag("div", "inc_pdp_block");
                pdpBlock.innerHTML = pdp_html;
                pdpBlock.querySelector(".inc_pdp_bundle_cart_summary_title_text").innerText = "Total bundle price ";
                pdpBlock.setAttribute("style", "clear: both;");
                let modalTitle = pdpBlock.querySelector(".inc_pdp_title_text");
                modalTitle.innerText = INC.config.FBTTitle;
                let pdpProductId = INC.dataStore.methods().getFirstProductObjByMainId({
                    mainId: INC.dataStore.pdpProductId,
                }).id;
                let firstProductObjByMainId = "";
                let pdpBundleProductListMainBlock = null;
                let mainProductBlock = this.createProductModuleBlock(pdpProductId, "pdp", false, pdpBlock, "mainprod");
                let bundleProductsArray = INC.dataStore.bundleProductsArray;
                let elPdpMainProductBlock = pdpBlock.querySelector(".inc_pdp_product-main_block");
                elPdpMainProductBlock.appendChild(mainProductBlock);
                pdpBundleProductListMainBlock = pdpBlock.querySelector(".inc_pdp_bundle_product_list_main_block");
                pdpBundleProductListMainBlock.innerHTML = "";
                let pdpBundleProductListItemsBlock = pdpBlock.querySelector(".inc_pdp_bundle_product_list_items_block");
                pdpBundleProductListItemsBlock.innerHTML = "";
                let productVisibleCount = "";
                if (window.innerWidth > 820) {
                    productVisibleCount = bundleProductsArray.length > 5 ? 5 : bundleProductsArray.length;
                } else {
                    productVisibleCount = bundleProductsArray.length > 4 ? 4 : bundleProductsArray.length
                }

                for (let iq = 0; iq < productVisibleCount; iq++) {
                    firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                        mainId: bundleProductsArray[iq],
                    });
                    let productBlock = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true, pdpBlock);
                    productBlock.setAttribute("b-index", iq + 1);
                    pdpBundleProductListMainBlock.appendChild(productBlock);
                    if (productVisibleCount > 1) {
                        let productListItemBlock = this.createProductListItemBlock(firstProductObjByMainId, "pdp");
                        pdpBundleProductListItemsBlock.appendChild(productListItemBlock);
                    }
                }

                if (productVisibleCount == 1) {
                    INC.config.singleProd = true;
                }
                let header = pdpBlock.querySelector(".inc_pdp_bundle_product_header_text");
                if (header != null) {
                    header.innerText = "Frequently bought with";
                    header.style.textTransform = "none";
                }

                let pdpbundleel = document.querySelector(".product-slice.slice-large.slice-medium.slice-small.slice-tabs ");
                if (window.innerWidth < 769) {
                    pdpbundleel = document.querySelector(".product-slice.slice-large.slice-medium.slice-small.slice-tabs ");
                }
                INC.methods.clear();
                if (productVisibleCount > 1) {
                    pdpBlock.querySelector(".inc_pdp_bundle_product_list_items_block").classList.add("inc_active");
                }

                let pdpBundleCartBlock = this.createPDPBundleCartBlock(pdpBlock);
                let rpdpBundleCartBlock = pdpBlock.querySelector(".inc_pdp_bundle_cart_block");
                rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
                pdpBlock.querySelector(".inc_pdp_bundle_block").appendChild(pdpBundleCartBlock);
                

                setTimeout(() => {
                    let allModalBlock = document.querySelectorAll('.inc_product_modal_block')
                    for (let i = 0; i < allModalBlock.length; i++) {
                        if (i == 6) break;
                        let zero = allModalBlock[i].querySelector('.inc_product_desc_att_zero_list_block')
                        let first = allModalBlock[i].querySelector('.inc_product_desc_att_size_list_block')
                        let third = allModalBlock[i].querySelector('.inc_product_desc_att_third_list_block')
                        let color = allModalBlock[i].querySelector('.inc_product_desc_att_color_list_block')

                        if (color.innerHTML !== "") {
                            color.querySelector('.inc_product_desc_att_color_list_item_img_block').click()
                        }

                        if (zero.innerHTML !== "") {
                            zero.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }

                        if (first.innerHTML !== "") {
                            first.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }

                        if (third.innerHTML !== "") {
                            third.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }
                    }
                }, 0);
                let pdpBlockSibling = "";
                pdpBlockSibling = document.querySelector(".product.info.detailed");
                
                if(pdpBlockSibling != null){
                    pdpBlockSibling = pdpBlockSibling.nextElementSibling
                }
                //
                if (pdpBlockSibling != null) {
                    pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling);
                }
                if (window.innerWidth < 820) {
                    if (document.querySelector('.inc_pdp_bundle_product_list_item_block') != null) {
                        document.querySelector('.inc_pdp_bundle_product_list_item_block').click()
                    }
                }

                let elProductAddBlock = pdpBlock.querySelectorAll(".inc_product_desc_add_block");
                let productBlocks = pdpBlock.querySelector(".inc_pdp_bundle_product_list_block").querySelectorAll(".inc_product_module_block");
                if (document.querySelector(".inc_pdp_product-main_block .inc_product_desc_title_text_header") != null) {
                    document.querySelector(".inc_pdp_product-main_block .inc_product_desc_title_text_header").innerHTML = "Selected Product";
                    document.querySelector(".inc_pdp_product-main_block .inc_product_desc_title_text_header").style.textTransform = "none";
                }
                pdpBlock.querySelector(".inc_pdp_bundle_product_left-btn_block").setAttribute("style", "pointer-events: none;opacity:0.5");
                pdpBlock.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("style", "opacity:0.5");
                pdpBlock.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("title", "Scroll left");
                pdpBlock.querySelector(".inc_pdp_bundle_product_right-btn_img").setAttribute("title", "Scroll right");
                let sliderBtnCounter = 0;
                let lengthCount = productBlocks.length + 1;
                let prd_length = 1;
                if (window.innerWidth > 834) {
                    prd_length = 2;
                }
                if (productBlocks.length > prd_length) {
                    pdpBlock.querySelector(".inc_pdp_bundle_product_right-btn_block").addEventListener("click", function () {
                        let prod_c = 1;
                        let width_prod = "";
                        if (window.innerWidth <= 820) {
                            width_prod = 254;
                        } else if (window.innerWidth >= 1024) {
                            if (window.innerWidth > 1024) {
                                width_prod = 280;
                                prod_c = 2
                            } else {
                                width_prod = 300;
                            }
                        } else {
                            width_prod = 254;
                        }
                        if (INC.clientConfig.slidevalue + prod_c < productBlocks.length) {
                            pdpBlock.querySelector(".inc_pdp_bundle_product_left-btn_block").setAttribute("style",
                                "pointer-events: auto;opacity:1");
                            pdpBlock.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("style", "opacity:1");
                            INC.clientConfig.slidevalue++;
                            INC.clientConfig.offset = parseInt(INC.clientConfig.offset) - width_prod + "px";
                            let menu = pdpBlock.querySelector(".inc_pdp_bundle_product_list_main_block");
                            menu.setAttribute("style", "margin-left:" + INC.clientConfig.offset +
                                ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                            );
                        }
                        if (INC.clientConfig.slidevalue + prod_c == productBlocks.length) {
                            pdpBlock.querySelector(".inc_pdp_bundle_product_right-btn_block").setAttribute("style",
                                "pointer-events: none;opacity:0.5");
                            pdpBlock.querySelector(".inc_pdp_bundle_product_right-btn_img").setAttribute("style", "opacity:0.5");
                        }
                        sliderBtnCounter++;
                        if (sliderBtnCounter > lengthCount - 3) {
                            sliderBtnCounter--;
                        }
                    });
                    pdpBlock.querySelector(".inc_pdp_bundle_product_left-btn_block").addEventListener("click", function () {
                        let width_prod = "";
                        if (window.innerWidth <= 820) {
                            width_prod = 254;
                        } else if (window.innerWidth >= 1024) {
                            if (window.innerWidth > 1024) {
                                width_prod = 280;
                            } else {
                                width_prod = 300;
                            }
                        } else {
                            width_prod = 254;
                        }
                        if (INC.clientConfig.slidevalue == -1) {
                            INC.clientConfig.slidevalue = 0;
                        }
                        if (INC.clientConfig.slidevalue > 0) {
                            pdpBlock.querySelector(".inc_pdp_bundle_product_right-btn_block").setAttribute("style",
                                "pointer-events: auto;opacity:1");
                            pdpBlock.querySelector(".inc_pdp_bundle_product_right-btn_img").setAttribute("style", "opacity:1");
                            INC.clientConfig.slidevalue--;
                            INC.clientConfig.offset = parseInt(INC.clientConfig.offset) + width_prod + "px";
                            let menu = pdpBlock.querySelector(".inc_pdp_bundle_product_list_main_block");
                            menu.setAttribute("style", "margin-left:" + INC.clientConfig.offset +
                                ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                            );
                        }
                        if (INC.clientConfig.slidevalue == 0) {
                            pdpBlock.querySelector(".inc_pdp_bundle_product_left-btn_block").setAttribute("style",
                                "pointer-events: none;opacity:0.5");
                            pdpBlock.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("style", "opacity:0.5");
                        }
                        sliderBtnCounter--;
                        if (sliderBtnCounter == -1) {
                            sliderBtnCounter = 0;
                        }
                    });
                }
                if (productBlocks.length <= prd_length) {
                    pdpBlock.querySelector(".inc_pdp_bundle_product_right-btn_block").style.visibility = "hidden";
                    pdpBlock.querySelector(".inc_pdp_bundle_product_left-btn_block").style.visibility = "hidden";
                }
                setTimeout(function () {
                    for (let iw = 0; iw < 8; iw++) {
                        if (typeof elProductAddBlock[iw] != "undefined" && iw % 2 != 0) {
                            if (iw == 1 || iw == 3 || iw == 5) {
                                elProductAddBlock[iw].click();
                            }
                        }
                    }

                }, 100);
                setTimeout(function () {
                    if (pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_desc_ecirp_active_text') != null) {
                        let ourVariantActive = pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_desc_ecirp_active_text').innerText.replace('£', '').replace(',', '.').trim()
                        let ourVariantRegular = pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_desc_ecirp_regular_text').innerText.replace('Was £', '').replace(',', '.').trim()

                        let ourActive = null
                        let ourSpecial = null

                        if (ourVariantRegular == "") {
                            ourActive = ourVariantActive
                        } else {
                            ourActive = ourVariantRegular
                            ourSpecial = ourVariantActive
                        }

                        let variantId = INC.methods.getProductIdFromWebPage();
                        let mismatch = incPriceMismatch(ourActive, ourSpecial, variantId)
                        if (mismatch) {
                            if (document.querySelector('.inc_pdp_block')) {
                                document.querySelector('.inc_pdp_block').style.display = "none"
                            }
                        }
                    }
                }, 500);
                setTimeout(function () {
                    onloadpdp = true;
                    onloadpdp_delete = true;

                    let inc_prod_img = document.querySelectorAll(".inc_product_img_main_img img");
                    for (let im in inc_prod_img) {
                        if (inc_prod_img[im] != undefined && Object.prototype.hasOwnProperty.call(inc_prod_img, im)) {
                            inc_prod_img[im].setAttribute("style", INC.config.styleft);
                        }
                    }
                }, 2000);
                if (INC.config.singleProd) {
                    document.querySelector(".inc_pdp_bundle_block").classList.add("inc_pdp_single_prod");
                }
                if (document.querySelector('.stock.unavailable.outstock') != null) {
                    document.querySelector('.inc_pdp_block').style.display = "none"
                }

            }
        }
        if (sidebar == "sidebar") {
            this.createSidebarBlock();
        }
    };
    INC.methods.createPDPBundleCartBlock = function (pdpBlock) {
        let pdpBundleCartBlock = pdpBlock.querySelector(".inc_pdp_bundle_cart_block");
        let elBundleCartTitleText = pdpBlock.querySelector(".inc_pdp_bundle_cart_title_text");
        let elBundleCartAddedBlock = pdpBlock.querySelector(".inc_pdp_bundle_cart_added_block");
        let elBundleCartSummaryViewBtnText = pdpBlock.querySelector(".inc_pdp_bundle_cart_summary_view_btn_text");
        let elBundleCartAddBtnBlock = pdpBlock.querySelector(".inc_pdp_bundle_cart_summary_add_btn_block");
        let elBundleCartAddBtncollectionBlock = pdpBlock.querySelector(".inc_pdp_bundle_cart_summary_add_btn_collection_block");
        elBundleCartTitleText.innerText = "Total bundle price ";
        elBundleCartAddedBlock.innerHTML = "";
        elBundleCartSummaryViewBtnText.innerText = "Added items";
        if (elBundleCartAddBtnBlock != null) {
            elBundleCartAddBtnBlock.addEventListener("click", function () {
                addbundlefn_(this);
            });
        }
        if (elBundleCartAddBtncollectionBlock != null) {
            elBundleCartAddBtncollectionBlock.addEventListener("click", function () {
                addbundlefn_(this);
            });
        }
        return pdpBundleCartBlock;
    };

    function addbundlefn_(elm) {
        checkAddedProductInJustAdded();
        elm.classList.add("inc_loading");
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        let prd_length = 2;
        if (window.innerWidth >= 820) {
            prd_length = 3;
        }
        document.querySelector(".inc_pdp_bundle_product_list_main_block").setAttribute("style", "margin-left: 0");
        if (document.querySelectorAll(".inc_pdp_block .inc_product_module_block").length > prd_length) {
            document.querySelector(".inc_pdp_bundle_product_left-btn_block").setAttribute("style", "pointer-events: none;opacity:0.5");
            document.querySelector(".inc_pdp_bundle_product_left-btn_img").setAttribute("style", "opacity:0.5");
            document.querySelector(".inc_pdp_bundle_product_right-btn_block").setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector(".inc_pdp_bundle_product_right-btn_img").setAttribute("style", "opacity:1");
        }
        if (INC.config.disablebtn == trueflag) {
            let btn_cart = elm;
            INC.config.disablebtn = false;
            btn_cart.classList.add("inc_loading");
            let recs_ = false;
            INC.methods.addBundleToCart(btn_cart, recs_);
        }
    }

    function remsidebarelm() {
        if (document.querySelector(".sidebar_outer") != null) {
            Array.prototype.forEach.call(document.querySelectorAll(".sidebar_outer"), function (el) {
                el.parentNode.removeChild(el);
            });
            Array.prototype.forEach.call(document.querySelectorAll(".sidebar_outer"), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        if (document.querySelector(".inc_sidebar_modal_block") != null) {
            Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_modal_block"), function (el) {
                el.parentNode.removeChild(el);
            });
            Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (el_) {
                el_.parentNode.removeChild(el_);
            });
        }
    }
    INC.methods.createSidebarBlock = function () {
        if (document.querySelector(".sidebar_outer") == null) {
            let dataStore = INC.dataStore;
            let sidebar_dialoge_block = document.createElement("div");
            sidebar_dialoge_block.classList.add("sidebar_outer");
            sidebar_dialoge_block.innerHTML = sidebar_html;
            let sbBlock = sidebar_dialoge_block.querySelector(".inc_sidebar_modal_block");
            sbBlock.querySelector(".inc_cart_added_list_block").innerHTML = "";
            let elHeaderContinueText = sbBlock.querySelector(".inc_header_continue_text");
            let elHeaderTitleText = sbBlock.querySelector(".inc_header_title_text");
            let elHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            let elRecommendedTitleText = sbBlock.querySelector(".inc_recommended_title_text");
            let elRecommendedTabsListBlock = sbBlock.querySelector(".inc_recommended_tabs_list_block");
            let elRecommendedProductsListBlock = sbBlock.querySelector(".inc_recommended_products_list_block");
            let elCheckoutContinueBtnText = sbBlock.querySelector(".inc_checkout_continue_btn_text");
            let elCheckoutBasketBtnText = sbBlock.querySelector(".inc_checkout_basket_btn_text");
            let elheaditemblock = sbBlock.querySelector(".inc_header_item_block");
            let elheadtitleblock = sbBlock.querySelector(".inc_header_title_block");
            let elclosesidebar = document.querySelector(".close_modal_inc");
            if (elclosesidebar != null) {
                elclosesidebar.addEventListener("click", function () {
                    closesidebar();
                });
            }
            elheaditemblock.addEventListener("click", function () {
                let cnt = document.querySelector(".inc_header_item_count_title_text").getAttribute("added_counts");
                if (cnt >= 1) {
                    if (document.querySelector(".inc_sidebar_cart_added_block").classList.contains("inc_active") == trueflag) {
                        document.querySelector(".inc_sidebar_cart_added_block").classList.remove("inc_active");
                        let alladdedprodlength = document.querySelectorAll(".inc_cart_added_product_block").length;
                        let morecount = 2;
                        if (window.innerWidth <= 769) {
                            morecount = 1;
                        }
                        if (alladdedprodlength > morecount) {
                            let tcount = alladdedprodlength - morecount + " more item(s)";
                            document.querySelector(".inc_header_item_count_title_text").innerText = "+" + tcount;
                            document.querySelector(".inc_header_item_count_title_text").setAttribute("added_counts", alladdedprodlength -
                                morecount);
                        } else {
                            document.querySelector(".inc_header_item_count_title_text").innerText = "";
                        }
                    } else {
                        document.querySelector(".inc_header_item_count_title_text").innerText = "";
                        document.querySelector(".inc_sidebar_cart_added_block").classList.add("inc_active");
                    }
                }
            });
            let close_sisebar_icon = generate_html_tag("span", "close_sisebar_icon");
            elheadtitleblock.appendChild(close_sisebar_icon);
            elRecommendedProductsListBlock.setAttribute("role", "contentinfo");
            elRecommendedProductsListBlock.setAttribute("tabindex", 0);
            elHeaderContinueText.innerText = "Back";
            elHeaderTitleText.innerText = "Just added to your basket";
            elHeaderTitleText.style.textTransform = "none";
            if (dataStore.bundleCartProducts != undefined) {
                elHeaderItemCountTitleText.innerText = "Subtotal :";
                elRecommendedTitleText.innerText = INC.config.BeforeYouChecktext;
                elRecommendedTitleText.style.textTransform = "none";
                elCheckoutContinueBtnText.innerText = "Continue Shopping";
                let elCheckoutLink = elCheckoutBasketBtnText.querySelector(".view_basket_checkout");
                elCheckoutLink.setAttribute("href", INC.clientConfig.checkoutLink);
                let productCategoriesArray = dataStore.methods().getUniqueCatergories();
                elRecommendedTabsListBlock.innerHTML = "";
                elRecommendedProductsListBlock.innerHTML = "";
                let category_count = 0;
                elRecommendedTabsListBlock.classList.add("inc_categ_" + Object.keys(productCategoriesArray).length);
                productCategoriesArray.forEach(function (productCategory) {
                    if (category_count < 5 && productCategory != undefined) {
                        category_count++;
                        let sidebarTabsListItemBlock = generate_html_tag("div", "inc_recommended_tabs_list_item_block");
                        let tablistitm =
                            '<div class="inc_recommended_tabs_list_item_text_block"><div class="inc_recommended_tabs_list_item_text"></div></div>';
                        sidebarTabsListItemBlock.innerHTML = tablistitm;
                        let sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector(".inc_recommended_tabs_list_item_text");
                        sidebarTabsListItemText.parentNode.parentNode.setAttribute("title", productCategory);
                        sidebarTabsListItemText.innerText = productCategory.toLocaleLowerCase();
                        sidebarTabsListItemText.setAttribute("style", "text-transform:capitalize;");
                        sidebarTabsListItemBlock.addEventListener("click", function () {
                            let elrecprdlistblk = sbBlock.querySelector(".inc_recommended_products_list_block");
                            if (elrecprdlistblk != null) {
                                elrecprdlistblk.innerHTML = "";
                            }
                            Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll(
                                ".inc_recommended_tabs_list_item_block"), function (elTabsItemBlock) {
                                    elTabsItemBlock.classList.remove("inc_active");
                                });
                            sidebarTabsListItemBlock.classList.add("inc_active");
                            INC.methods.updateSidebarProductsList(elrecprdlistblk, productCategory);
                        });
                        elRecommendedTabsListBlock.setAttribute("tabindex", 0);
                        elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
                    }
                });
                if (elRecommendedTabsListBlock.querySelector(".inc_recommended_tabs_list_item_block") != null) {
                    elRecommendedTabsListBlock.querySelector(".inc_recommended_tabs_list_item_block").click();
                } else {
                    elRecommendedTitleText.style.display = "none";
                }
                let sbcontinue = sbBlock.querySelector(".inc_header_continue_block");
                sbcontinue.addEventListener("click", function () {
                    closesidebar();
                });
                sbBlock.querySelector(".inc_checkout_continue_block").addEventListener("click", function () {
                    closesidebar();
                });
                close_sisebar_icon.addEventListener("click", function () {
                    closesidebar();
                });
                sbBlock.querySelector(".inc_checkout_basket_block").addEventListener("click", function () {
                    this.querySelector(".inc_checkout_basket_btn_block").classList.add("inc_loading");
                    window.location.replace("https://www.leekes.co.uk/checkout/cart/");
                });
                let body = document.querySelector("body");
                body.appendChild(sidebar_dialoge_block);
                let elSideBarOverlayBlock = document.createElement("div");
                elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
                elSideBarOverlayBlock.addEventListener("click", function () {
                    closesidebar();
                });
                elSideBarOverlayBlock.style.display = "none";
                body.appendChild(elSideBarOverlayBlock);
                if (INC.dataStore.dataStoreObj.undefined != undefined) {
                    if (document.querySelector(".inc_recommended_products_block") != null) {
                        document.querySelector(".inc_recommended_products_block").style.display = "none";
                    }
                }
            }
            setTimeout(function () {
                if (document.querySelector(".inc_recommended_products_list_block") != null) {
                    document.querySelector(".inc_recommended_products_list_block").setAttribute("role", "contentinfo");
                }
                let inc_prod_img = document.querySelectorAll(".inc_product_img_main_img img");
                for (let ig in inc_prod_img) {
                    if (inc_prod_img[ig] != null && Object.prototype.hasOwnProperty.call(inc_prod_img, ig)) {
                        inc_prod_img[ig].setAttribute("style", INC.config.styleft);
                    }
                }
            }, 100);
        }
    };

    function closesidebar() {
        document.querySelector("html").classList.remove("inc_overlay");
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = [];
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    }
    INC.methods.updateSidebarBlock = function (mainord, elprd) {
        let subtotalactiveprice = 0;
        let subtotalregukarprice = 0;
        let subtotalrrpprice = 0;
        let dataStore = INC.dataStore;
        let qty = "";
        let sbBlock = document.querySelector(".inc_sidebar_modal_block");
        if (sbBlock != null) {
            let sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            let elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
            let elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
            let elHeadersubtotalrrptext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_rrp_text");
            let sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
            let sidebarHeaderseelesstext = sbBlock.querySelector(".inc_header_item_count_figure_text");
            sidebarHeaderseelesstext.innerText = "";
            sbCartBlock.innerHTML = "";
            let bundleCartProductsArray = "";
            if (mainord != null && mainord != undefined) {
                INC.dataStore["bundleCartProducts"] = {};
                INC.dataStore["bundleCartProducts"][mainord] = 1;
                bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
            } else {
                bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
            }
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal :";
            let headerItemCountFigureText = 0;
            subtotalactiveprice = 0;
            subtotalregukarprice = 0;
            subtotalrrpprice = 0;
            let error_message = "";
            let oosname = [];
            let oosids = [];
            let remerrorjust = document.querySelectorAll(".inc_justerror");
            for (let r in remerrorjust) {
                if (remerrorjust[r] != null && Object.prototype.hasOwnProperty.call(remerrorjust, r)) {
                    remerrorjust[r].parentNode.removeChild(remerrorjust[r]);
                }
            }
            bundleCartProductsArray.forEach(function (productSKU) {
                if (dataStore.bundleCartProducts[productSKU] < 1) {
                    dataStore.bundleCartProducts[productSKU] = 1;
                }
                let findObj = new INC.classes.FindObj({
                    sku: productSKU,
                });

                if (mainord != null && mainord != undefined) {
                    qty = elprd.querySelector("input").value
                } else {
                    qty = dataStore.bundleCartProducts[productSKU];
                }
                let productObj = INC.dataStore.methods().getProductBySKU(findObj);

                if (INC.clientConfig.OOS.indexOf(productObj.id) >= 0) {
                    if (oosname.indexOf(productObj.name) == -1 && oosids.indexOf(productObj.id) == -1) {
                        error_message = "";
                        oosids.push(productObj.mainId);
                        oosname.push(productObj.name);
                        if (error_message == "") {
                            error_message = "<span>" + productObj.name + "</span>" + " - " +
                                "<span>The requested quantity is not available</span>";
                        } else {
                            error_message = error_message + " <br> " + "<span>" + productObj.name + "</span>" + " - " +
                                "<span>The requested quantity is not available</span>";
                        }
                        let headertitle = sbBlock.querySelector(".inc_sidebar_modal_cart_and_title_block");
                        let errormes = generate_html_tag("div", "inc_justerror");
                        let errorimg = generate_html_tag("img", "errorimg");
                        errorimg.src = productObj.imageURL;
                        errormes.appendChild(errorimg);
                        let errormestext = generate_html_tag("span", "inc_justerror_text");
                        errormestext.innerHTML = error_message;
                        errormes.appendChild(errormestext);
                        headertitle.parentNode.insertBefore(errormes, headertitle);
                        setTimeout(function () {
                            let remoerroblk = document.querySelectorAll(".inc_justerror");
                            for (let re in remoerroblk) {
                                if (remoerroblk[re] != null && Object.prototype.hasOwnProperty.call(remoerroblk, re)) {
                                    remoerroblk[re].parentNode.removeChild(remoerroblk[re]);
                                }
                            }
                        }, 5000);
                    }
                } else {
                    headerItemCountFigureText = headerItemCountFigureText + parseInt(dataStore.bundleCartProducts[productSKU]);
                    let color = "";
                    let size = "";
                    let sizeLabel = "";
                    let colorLabel = "";
                    let just_check_prod_block = null;
                    if (productObj.ProductType != "simple") {
                        just_check_prod_block = document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + productObj.sku +
                            '"]');
                    } else {
                        just_check_prod_block = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + productObj
                            .mainId + '"]');
                    }
                    if (mainord != null && mainord != undefined) {
                        just_check_prod_block = elprd;
                    }
                    if (just_check_prod_block != null) {
                        if (just_check_prod_block.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active div") != null) {
                            size = just_check_prod_block.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active div")
                                .innerText;
                            sizeLabel = just_check_prod_block.querySelector(".inc_product_desc_att_size_list_item_img_block").parentElement
                                .parentElement.querySelector(".inc_product_desc_att_zero_title_text").innerText;
                        }
                        if (just_check_prod_block.querySelector(
                            ".inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block") !=
                            null) {
                            color = just_check_prod_block.querySelector(
                                ".inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block")
                                .getAttribute("data-color");
                            colorLabel = just_check_prod_block.querySelector(".inc_product_desc_att_color_list_item_block").parentElement
                                .parentElement.querySelector(".inc_product_desc_att_color_title_text").innerText;
                        }
                    }

                    let sel_size = "";
                    if (color != "" && color != undefined && color != null) {
                        sel_size = colorLabel + ": " + + color;
                    }
                    if (size != "" && size != undefined && size != null) {
                        if (sel_size !== "") {
                            sel_size += " , " + sizeLabel + ": " + size;
                        } else {
                            sel_size += sizeLabel + ": " + size;
                        }
                    }

                    sel_size = ""
                    let english = /^[A-Za-z0-9]*$/;
                    for (let key in productObj.option) {
                        if (sel_size == "") {
                            if (english.test(productObj.option[key].label)) {

                                sel_size = capitalizeFirstLetter(productObj.option[key].label.split("Choose a ")[1]) + ": " + capitalizeFirstLetter(productObj.option[key].text)
                            } else {
                                sel_size = capitalizeFirstLetter(productObj.option[key].label.split("Choose a ")[1]) + ": " + capitalizeFirstLetter(productObj.option[key].text)
                            }

                        } else {
                            if (english.test(productObj.option[key].label)) {

                                sel_size += ", " + capitalizeFirstLetter(productObj.option[key].label.split("Choose a ")[1]) + ": " + capitalizeFirstLetter(productObj.option[key].text)
                            } else {
                                sel_size += ", " + capitalizeFirstLetter(productObj.option[key].label.split("Choose a ")[1]) + ": " + capitalizeFirstLetter(productObj.option[key].text)
                            }

                        }
                    }
                    
                    let activePrice = parseFloat(productObj.activePrice).toFixed(2);
                    subtotalactiveprice = +subtotalactiveprice + +productObj.activePrice * qty;
                    subtotalregukarprice = +subtotalregukarprice + +productObj.regularPrice * qty;

                    if(productObj.rrpPrice != 0 && productObj.rrpPrice != "" && productObj.rrpPrice != "0.00"){
                        subtotalrrpprice = +subtotalrrpprice + +productObj.rrpPrice * qty;
                    }else{
                        subtotalrrpprice = +subtotalrrpprice + +productObj.activePrice * qty;
                    }

                    let addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + productObj.imageURL + '" data-src="' + productObj.imageURL + '" alt="' + productObj.name + '"><div class="sidebar_product_quantity_label">' + qty + '</div></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">' + '<span>' + qty + 'x</span>' + productObj.name + '</div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + formatter.format(activePrice).replace('.00', ''); + ' </div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' + sel_size + '</div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div>';
                    let productBlock = generate_html_tag("div", "inc_cart_added_product_block");
                    productBlock.innerHTML = addedhtml;
                    productBlock.setAttribute("data-id", productObj.id);
                    productBlock.setAttribute("data-sku", productObj.sku);
                    productBlock.setAttribute("data-main_id", productObj.mainId);
                    productBlock.setAttribute("data-bundle_id", productObj.bundleId);
                    productBlock.setAttribute("data-childsku", productObj.childsku);
                    productBlock.setAttribute("data-mainsku", productObj.mainsku);
                    productBlock.querySelector(".inc_cart_added_product_img img").setAttribute("onerror", "this.src='" + INC.config.noimage +
                        "'");
                    sbCartBlock.appendChild(productBlock);
                }
            });
            let sidebarsaveprc = get_discount_price(subtotalregukarprice, subtotalactiveprice);

            if (+subtotalactiveprice != null && +subtotalactiveprice < +subtotalregukarprice) {
                elHeadersubtotalactivetext.setAttribute("subtotalActiveprice", subtotalactiveprice);
                elHeadersubtotalregulartext.setAttribute("subtotalRegularprice", subtotalregukarprice);
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice).replace('.00', '');
                elHeadersubtotalregulartext.innerHTML = "<span>RRP </span>" + formatter.format(subtotalregukarprice).replace('.00', '');
                if(subtotalrrpprice == 0){
                    elHeadersubtotalrrptext.setAttribute("subtotalrrpprice", subtotalactiveprice);
                }else{
                    elHeadersubtotalrrptext.setAttribute("subtotalrrpprice", subtotalrrpprice);
                }
                if (subtotalrrpprice != 0 && subtotalrrpprice != subtotalactiveprice) {
                    elHeadersubtotalrrptext.innerHTML = "<span>RRP </span>" + formatter.format(subtotalrrpprice).replace('.00', '');
                }
                if (document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block") != null) {
                    document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block").classList.add("is_special_ecirp");
                }
                if (sidebarsaveprc != 0) {
                    if (document.querySelector(".inc_just_added_save_pr") != null) {
                        document.querySelector(".inc_just_added_save_pr").innerText = "Save " + formatter.format(sidebarsaveprc).replace('.00', '');
                    } else {
                        document.querySelector(".inc_just_added_save_pr").innerText = "";
                    }
                }
                elHeadersubtotalactivetext.style.color = "#ee1c31";
            } else {
                elHeadersubtotalactivetext.setAttribute("subtotalActiveprice", subtotalactiveprice);
                elHeadersubtotalactivetext.style.color = "#000";
                elHeadersubtotalregulartext.setAttribute("subtotalRegularprice", subtotalregukarprice);
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalregukarprice).replace('.00', '');
                elHeadersubtotalregulartext.innerHTML = "";
                if (sidebarsaveprc != 0) {
                    if (document.querySelector(".inc_just_added_save_pr") != null) {
                        document.querySelector(".inc_just_added_save_pr").innerText = "Save " + formatter.format(sidebarsaveprc).replace('.00', '');
                    }
                }

                if(subtotalrrpprice == 0){
                    elHeadersubtotalrrptext.setAttribute("subtotalrrpprice", subtotalactiveprice);
                }else{
                    elHeadersubtotalrrptext.setAttribute("subtotalrrpprice", subtotalrrpprice);
                }
                if (subtotalrrpprice > 0  && subtotalrrpprice != subtotalactiveprice) {
                    elHeadersubtotalrrptext.innerHTML = "<span>RRP </span>" + formatter.format(subtotalrrpprice).replace('.00', '');
                }
            }
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal :";
            if (window.innerWidth > 767) {
                if (document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length > 5) {
                    document.querySelector(".inc_sidebar_cart_added_block").classList.add("flex-start");
                }
            } else {
                if (document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length > 3) {
                    document.querySelector(".inc_sidebar_cart_added_block").classList.add("flex-start");
                }
            }
            let addCount = document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length;
            document.querySelector(".inc_sidebar_cart_added_block").className.replace(/\binc_added_.+?/g, "");
            document.querySelector(".inc_sidebar_cart_added_block").classList.add("inc_added_" + addCount);
            if (sbBlock.querySelector(".inc_cart_added_product_block") == null) {
                sbBlock.classList.add("oos_prod_avail");
            }
        }
    };
    INC.methods.updateSidebarProductsList = function (elRecommendedProductsListBlock, productCategory) {
        let productListArray = INC.dataStore.bundleProductsArray;
        let dupl_sidebar_prod = [];
        let addCheck = INC.config.pdpaddedProductList;
        for (let pd in productListArray) {
            let firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                mainId: productListArray[pd],
            });
            if (firstProductObjByMainId["categoryId"] == productCategory) {
                if (INC.dataStore.dataStoreObj.undefined == undefined) {
                    if (addCheck.indexOf(productListArray[pd]) == -1) {
                        if (INC.config.sidebarremovedprod.indexOf(firstProductObjByMainId.id) == -1) {
                            if (dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1) {
                                dupl_sidebar_prod.push(firstProductObjByMainId.id);
                                let prdblck = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false,
                                    elRecommendedProductsListBlock);
                                prdblck.querySelector(".inc_product_desc_add_block").addEventListener("click", function () {
                                    sidebaraddprod(this);
                                });
                                prdblck.querySelector(".inc_product_add_collection_block").addEventListener("click", function () {
                                    sidebaraddprod(this);
                                });
                                if (prdblck.getAttribute("data-bundle_id") != "undefined") {
                                    elRecommendedProductsListBlock.appendChild(prdblck);
                                }
                            }
                        }
                    }
                }
            }
        }
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        elRecommendedProductsListBlock.setAttribute("style", "margin-left: 0");
        if (document.querySelector(".inc_recommended_tabs_list_item_block") == null && elRecommendedProductsListBlock.querySelector(
            ".inc_product_module_block") == null) {
            elRecommendedProductsListBlock.parentNode.parentNode.parentNode.parentNode.style.display = "none";
        }
        if (elRecommendedProductsListBlock.childNodes.length <= 2) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_right_block").style.visibility = "hidden";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").style.visibility = "hidden";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").setAttribute("style",
                "pointer-events: none;opacity:0.5;visibility: hidden;");
        }
        if (elRecommendedProductsListBlock.childNodes.length > 2) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_right_block").style.visibility = "visible";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").style.visibility = "visible";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").setAttribute("style",
                "pointer-events: none;opacity:0.5");
        }
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_img").setAttribute("style",
            "opacity:0.5");
        let sliderBtnCounter = 0;
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_img").setAttribute("title",
            "Scroll left");
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_right_btn_img").setAttribute("title",
            "Scroll right");
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommeded_products_right_btn_block").addEventListener("click",
            function () {
                let productBlocks = document.querySelectorAll(".inc_recommended_products_list_block .inc_product_module_block");
                if (INC.clientConfig.slidevalue + 1 < productBlocks.length) {
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_block").setAttribute(
                        "style", "pointer-events: auto;opacity:1");
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").setAttribute("style",
                        "pointer-events: auto;opacity:1");
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_img").setAttribute(
                        "style", "opacity:1");
                    INC.clientConfig.slidevalue++;
                    let slide_w = 274;
                    INC.clientConfig.offset = parseInt(INC.clientConfig.offset) - slide_w + "px";
                    let menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_list_block");
                    menu.setAttribute("style", "margin-left:" + INC.clientConfig.offset +
                        ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                    );
                }
                let cc_ount = 1;
                if (window.innerWidth > 820) {
                    cc_ount = 2;
                }
                if (+INC.clientConfig.slidevalue + +cc_ount == productBlocks.length) {
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommeded_products_right_btn_block").setAttribute(
                        "style", "pointer-events: none;opacity:0.5");
                    document.querySelector(".inc_recommended_products_right_btn_img").setAttribute("style", "pointer-events: none;opacity:0.5");
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_right_btn_img").setAttribute(
                        "style", "opacity:0.5");
                }
                sliderBtnCounter++;
                if (sliderBtnCounter > productBlocks.length - cc_ount) {
                    sliderBtnCounter--;
                }
            });
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_block").addEventListener("click",
            function () {
                if (INC.clientConfig.slidevalue == -1) {
                    INC.clientConfig.slidevalue = 0;
                }
                if (INC.clientConfig.slidevalue > 0) {
                    let slide_w = 274;
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommeded_products_right_btn_block").setAttribute(
                        "style", "pointer-events: auto;opacity:1");
                    document.querySelector(".inc_recommended_products_right_btn_img").setAttribute("style", "pointer-events: auto;opacity:1");
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_right_btn_img").setAttribute(
                        "style", "opacity:1");
                    INC.clientConfig.slidevalue--;
                    INC.clientConfig.offset = parseInt(INC.clientConfig.offset) + slide_w + "px";
                    let menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_list_block");
                    menu.setAttribute("style", "margin-left:" + INC.clientConfig.offset +
                        ";transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;"
                    );
                }
                if (INC.clientConfig.slidevalue == 0) {
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_block").setAttribute(
                        "style", "pointer-events: none;opacity:0.5");
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_block").setAttribute("style",
                        "pointer-events: none;opacity:0.5");
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(".inc_recommended_products_left_btn_img").setAttribute(
                        "style", "opacity:0.5");
                }
                sliderBtnCounter--;
                if (sliderBtnCounter == -1) {
                    sliderBtnCounter = 0;
                }
            });

        setTimeout(function () {
            let all_list_el = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_showcase_block')
            for (let le in all_list_el) {
                let prd_moduleb = all_list_el[le].parentNode
                let main_idsd = ""
                if (prd_moduleb != null) {
                    main_idsd = prd_moduleb.getAttribute('data-main_id')
                }
                if (all_list_el[le] != null && Object.prototype.hasOwnProperty.call(all_list_el, le)) {
                    if (all_list_el[le].querySelector('.inc_product_desc_att_zero_block.inc_active') != null) {
                        if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                            if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_size_list_item_img_block') != null) {
                                prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_size_list_item_img_block').click()
                            } else if (all_list_el[le].querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                                all_list_el[le].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                            }
                        } else if (all_list_el[le].querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                            all_list_el[le].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }
                    }
                    if (all_list_el[le].querySelector('.inc_product_desc_att_color_block.inc_active') != null) {
                        if (prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                            if (prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_color_list_item_img_block') != null) {
                                prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_color_list_item_img_block').click()
                            }
                        } else if (all_list_el[le].querySelector('.inc_product_desc_att_color_list_item_img_block') != null) {
                            all_list_el[le].querySelector('.inc_product_desc_att_color_list_item_img_block').click()
                        }
                    }
                }
            }
            setTimeout(function () {
                let inc_prod_img = document.querySelectorAll('.inc_product_img_main_img img')
                for (let prodimg in inc_prod_img) {
                    if (inc_prod_img[prodimg] != null && Object.prototype.hasOwnProperty.call(inc_prod_img, prodimg)) {
                        inc_prod_img[prodimg].setAttribute('style', INC.config.styleft)
                    }
                }
            }, 2000)
        }, 10)

        INC.config.sidebarFirstLoad = true;
    };

    function sidebaraddprod(element) {
        let productModuleBlock = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        if (productModuleBlock.classList.contains("inc_product_module_block") == falseflag) {
            productModuleBlock = element.parentNode.parentNode.parentNode.parentNode.parentNode;
        }
        let flag_check = INC.methods.checkVariantSelection(productModuleBlock);
        let sku = productModuleBlock.getAttribute("data-sku");
        let findObj = new INC.classes.FindObj({
            id: sku,
        });
        let add_prod_im = productModuleBlock.querySelector(".inc_product_desc_add_img");
        if (flag_check == 1) {
            if (element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("inc_product_showcase_block") == trueflag || element
                .parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("inc_product_modal_block") == trueflag) {
                if (INC.config.disablebtn == trueflag) {
                    INC.config.disablebtn = false;
                    let newbtntext = productModuleBlock.querySelector(".inc_product_modal_block .inc_product_desc_add_text");
                    let btnclick = productModuleBlock.querySelector(".inc_product_add_text");
                    if (INC.config.pageType == "pdp" && INC.config.recommendation == trueflag && document.querySelector(".inc_af_block") != null) {
                        if (document.querySelector(".sidebar_outer.sidebar_outer_active") == null) {
                            btnclick = productModuleBlock.querySelector(".inc_product_variant_simple_text span");
                        }
                    }

                    let rec_ = false;
                    newbtntext.innerText = "Adding...";
                    btnclick.innerText = "Adding...";
                    let selbtn = productModuleBlock.querySelector(".inc_product_variant_simple_text");
                    selbtn.innerText = "Adding...";
                    INC.methods.addProductToCart(findObj, productModuleBlock, btnclick, add_prod_im, selbtn, newbtntext, rec_);
                }
            }
        }
    }
    INC.methods.addProductToSidebarCart = function (findObj, client_add_btn, _productBlockel, btn_addtocart, elmparent) {
        let qty = 1;
        if (client_add_btn != "client_add_btn") {
            if (_productBlockel != null) {
                if (INC.config.pageType == "pdp" && INC.config.recommendation == trueflag) {
                    if (_productBlockel.querySelector(".inc_product_modal_block .inc_product_qty_block input") != null) {
                        qty = _productBlockel.querySelector(".inc_product_modal_block .inc_product_qty_block input").value;
                    }
                }
                if (_productBlockel.querySelector(".inc_product_modal_block .inc_product_qty_block input") != null) {
                    qty = _productBlockel.querySelector(".inc_product_modal_block .inc_product_qty_block input").value;
                }
            }
        }
        if (client_add_btn == "client_add_btn") {
            if (INC.config.pageType == "pdp") {
                if (document.querySelector(".product-add-form .qty input") != null) {
                    qty = document.querySelector(".product-add-form .qty input").value
                }
                if (qty == 0) {
                    qty = 1;
                }
            }
        }
        let dataStore = INC.dataStore;
        let sbBlock = document.querySelector(".inc_sidebar_modal_block");
        let subtotal_activeprice = 0;
        let subtotal_regular = 0;
        let subtotal_rrp = 0;
        if (document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text") !=
            null) {
            subtotal_activeprice = document.querySelector(
                ".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text").getAttribute(
                    "subtotalactiveprice");
        }
        if (document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text") !=
            null) {
            subtotal_regular = document.querySelector(
                ".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text").getAttribute(
                    "subtotalregularprice");
        }
        if (document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_rrp_text") !=
            null) {
            subtotal_rrp = document.querySelector(
                ".inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_rrp_text").getAttribute(
                    "subtotalrrpprice");
        }
        
        if (subtotal_activeprice == null) {
            subtotal_activeprice = 0;
        }
        if (subtotal_regular == null) {
            subtotal_regular = 0;
        }
        if (client_add_btn == "client_add_btn") {
            subtotal_activeprice = 0;
            subtotal_regular = 0;
        }

        if (subtotal_rrp == null) {
            subtotal_rrp = 0;
        }
        if (client_add_btn == "client_add_btn") {
            subtotal_activeprice = 0;
            subtotal_rrp = 0;
        }
        if (document.querySelector(".inc_sidebar_cart_added_block.inc_active") != null) {
            if (document.querySelector(".inc_header_item_count_title_block") != null) {
                document.querySelector(".inc_header_item_count_title_block").click();
            }
        }
        if (sbBlock != null) {
            let elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
            let elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
            let elHeadersubtotalrrptext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_rrp_text");
            let elHeaderItemCountFigureText = sbBlock.querySelector(".inc_header_item_count_figure_text");
            let sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            let sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
            if (client_add_btn == "client_add_btn") {
                sbCartBlock.innerHTML = "";
            }
            let productObj = dataStore.methods().getProductById(findObj);
            let productBlock = generate_html_tag("div", "inc_cart_added_product_block");

            if (INC.clientConfig.OOS.indexOf(productObj.id) >= 0) {
                productBlock.classList.add("cross");
                for (let e = 0; e < INC.clientConfig.OOS.length; e++) {
                    if (INC.clientConfig.OOS_MESG[e] != undefined) {
                        let remerrorjust = document.querySelector(".inc_justerror");
                        if (remerrorjust != null) {
                            remerrorjust.parentNode.removeChild(remerrorjust);
                        }
                        if (document.querySelector(".inc_justerror") == null) {
                            let headertitle = sbBlock.querySelector(".inc_sidebar_modal_cart_and_title_block");
                            let errormes = generate_html_tag("div", "inc_justerror");
                            let errormestext = generate_html_tag("span", "inc_justerror_text");
                            errormestext.innerHTML = "<span>" + productObj.name + "</span>" + " - " +
                                "<span>The requested quantity is not available</span>";
                            errormes.appendChild(errormestext);
                            headertitle.parentNode.insertBefore(errormes, headertitle);
                            setTimeout(function () {
                                let remel = document.querySelector(".inc_justerror");
                                if (remel != null) {
                                    remel.parentNode.removeChild(remel);
                                }
                            }, 2000);
                        }
                    }
                }
            } else {
                let color = "";
                let size = "";
                let sizeLabel = "";
                let just_check_prod_block = "";
                let colorLabel = "";
                if (document.querySelector(".inc_sidebar_modal_block.inc_active") != null) {
                    just_check_prod_block = document.querySelector('.inc_sidebar_modal_block .inc_product_module_block[data-sku="' + productObj.sku +
                        '"]');
                } else {
                    just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]');
                }
                if (just_check_prod_block != null) {
                    if (just_check_prod_block.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active div") != null) {
                        size = just_check_prod_block.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active div").innerText;
                        sizeLabel = just_check_prod_block.querySelector(".inc_product_desc_att_size_list_item_img_block").parentElement.parentElement
                            .querySelector(".inc_product_desc_att_zero_title_text").innerText;
                    }
                    if (just_check_prod_block.querySelector(
                        ".inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block") != null) {
                        color = just_check_prod_block.querySelector(
                            ".inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block").getAttribute(
                                "data-color");
                        colorLabel = just_check_prod_block.querySelector(".inc_product_desc_att_color_list_item_block").parentElement.parentElement
                            .querySelector(".inc_product_desc_att_color_title_text").innerText;
                    }
                }
                if (btn_addtocart != undefined) {
                    if (btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains(
                        "inc_product_module_block") == trueflag) {
                        let module_blk = btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                        if (module_blk.querySelector(".inc_product_modal_block .inc_product_desc_att_block") != null) {
                            let sel_attr = module_blk.querySelector(".inc_product_modal_block .inc_product_desc_att_block");
                            let zero_text = sel_attr.getAttribute("data-zero");
                            let size_text = sel_attr.getAttribute("data-size");
                            let color_text = sel_attr.getAttribute("data-color");
                            let third_text = sel_attr.getAttribute("data-third");
                            size = "";
                            color = "";
                            if (color_text != undefined) {
                                color = color_text;
                            }
                            if (zero_text != undefined) {
                                if (size == "") {
                                    size = zero_text;
                                } else {
                                    size = size + "|" + zero_text;
                                }
                            }
                            if (size_text != undefined) {
                                size = size + "|" + size_text;
                            }
                            if (third_text != undefined) {
                                size = size + "|" + third_text;
                            }
                        }
                    }
                }
                let sel_size = "";
                if (color != "" && color != undefined && color != null) {
                    sel_size = colorLabel + ": " + color.toLowerCase();
                }
                if (size != "" && size != undefined && size != null) {
                    if (sel_size !== "") {
                        sel_size += ", " + sizeLabel + ": " + size.toLowerCase();
                    } else {
                        sel_size += "," + sizeLabel + ": " + size;
                    }
                }

                if (client_add_btn == "client_add_btn") {
                    sel_size = ""
                    let allval = document.querySelectorAll('.attributes__value.attributes__value--selected')
                    for (let i = 0; i < allval.length; i++) {
                        if (sel_size == "") {
                            if (allval[i].innerText == "\n") {
                                sel_size = allval[i].parentNode.parentNode.querySelector('.attribute-name-text').innerText.split("Choose a ")[1].split(":")[0] + ": " + capitalizeFirstLetter(allval[i].querySelector('a').title)
                            } else {
                                sel_size = allval[i].parentNode.parentNode.querySelector('.attribute-name-text').innerText.split("Choose a ")[1].split(":")[0] + ": " + capitalizeFirstLetter(allval[i].innerText)
                            }

                        } else {
                            if (allval[i].innerText == "\n") {
                                sel_size = capitalizeFirstLetter(allval[i].querySelector('a').title)
                            } else {
                                sel_size += ", " + allval[i].parentNode.parentNode.querySelector('.attribute-name-text').innerText.split("Choose a ")[1].split(":")[0] + ": " + capitalizeFirstLetter(allval[i].innerText)
                            }
                        }
                    }
                } else {
                    sel_size = ""
                    for (let key in productObj.option) {
                        if (sel_size == "") {
                            sel_size = capitalizeFirstLetter(productObj.option[key].code) + ": " + capitalizeFirstLetter(productObj.option[key].text)
                        } else {
                            sel_size += ", " + capitalizeFirstLetter(productObj.option[key].code) + ": " + capitalizeFirstLetter(productObj.option[key].text)
                        }
                    }
                }

                let activePrice = 0;
                let regularPrice = "";
                let rrpPrice = "";
                let ClientSavePrice = 0;

                if (client_add_btn == "client_add_btn") {
                    if (document.querySelector('.product-info-price .normal-price') != null) {
                        activePrice = document.querySelector('.product-info-price .normal-price .price').innerText.replace('£', '').replace(',', '.').trim()
                    }else if(document.querySelector('.product-info-price .special-price')){
                        if(document.querySelector('.product-info-price .special-price .price')){
                            activePrice = document.querySelector('.product-info-price .special-price .price').innerText.replace('£', '').replace(',', '.').trim()
                        }
                    }
                    if (document.querySelector('.product-info-price .rrp-price #rrp-price') != null) {
                        rrpPrice = document.querySelector('.product-info-price .rrp-price #rrp-price').innerText.replace(/^\D+/g, '').replace(',', '.');
                    }

                } else {
                    activePrice = Number(productObj.activePrice.replace("£", "").replace("£", "")).toString();
                    regularPrice = Number(productObj.regularPrice.replace("£", "").replace("£", "")).toString();
                    rrpPrice = Number(productObj.rrpPrice.replace("£", "").replace("£", "")).toString();
                }

                let addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + productObj.imageURL + '" data-src="' + productObj.imageURL + '" alt="' + productObj.name + '"><div class="sidebar_product_quantity_label">' + qty + '</div></div></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">' + '<span>' + qty + ' x </span>' + productObj.name + '</div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + formatter.format(activePrice).replace('.00', ''); + '</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' + sel_size + '</div></div></div></div><div class="inc_cart_added_product_qty_block"></div>'; productBlock.innerHTML = addedhtml;
                productBlock.querySelector(".inc_cart_added_product_img img").setAttribute("onerror", "this.src='" + INC.config.noimage + "'");
                let subtotalactiveprice = 0;
                let subtotalregukarprice = 0;
                
                let subtotalrrpprice = 0;
                if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
                    subtotalactiveprice = +subtotal_activeprice + +activePrice * qty;
                    subtotalregukarprice = +subtotal_activeprice + +regularPrice * qty;
                } else {
                    subtotalactiveprice = +subtotal_activeprice + +activePrice * qty;
                    subtotalregukarprice = +subtotal_regular + +regularPrice * qty;
                }

                if (subtotal_rrp != "" && +rrpPrice != 0) {
                    subtotalactiveprice = +subtotal_activeprice + +activePrice * qty;
                    subtotalrrpprice = +subtotal_rrp + +rrpPrice * qty;
                } else {
                    subtotalactiveprice = +subtotal_activeprice + +activePrice * qty;
                    if(subtotal_rrp != 0){
                        subtotalrrpprice = +subtotal_rrp + +activePrice * qty;
                    }else{
                        if(rrpPrice != 0){
                            subtotalrrpprice = +subtotal_rrp + +rrpPrice * qty;
                        }else{
                            subtotalrrpprice = +subtotal_activeprice + +activePrice * qty;
                        }
                    }
                }

                if (sbCartBlock != null) {
                    sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(".inc_cart_added_product_block"));
                }
                if (elHeaderItemCountFigureText != null) {
                    elHeaderItemCountFigureText.style.display = "none";
                }
                sidebarHeaderItemCountTitleText.innerHTML = "Subtotal :";
                elHeadersubtotalactivetext.setAttribute("subtotalactiveprice", subtotalactiveprice);
                elHeadersubtotalregulartext.setAttribute("subtotalregularprice", subtotalregukarprice);
                if(subtotalrrpprice == 0){
                    elHeadersubtotalrrptext.setAttribute("subtotalrrpprice", subtotalactiveprice);
                }else{
                    elHeadersubtotalrrptext.setAttribute("subtotalrrpprice", subtotalrrpprice);
                }
                

                let sidebarsaveprcw = 0;
                sidebarsaveprcw = get_discount_price(subtotalregukarprice, subtotalactiveprice);

                if (+subtotalactiveprice != null && +subtotalactiveprice < +subtotalregukarprice) {
                    elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice).replace('.00', '');
                    elHeadersubtotalregulartext.innerHTML = "<span>RRP </span>" + formatter.format(subtotalregukarprice).replace('.00', '');
                    if (document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block") != null) document.querySelector(
                        ".inc_cart_added_product_desc_subtotal_ecirp_block").classList.add("is_special_ecirp");
                    elHeadersubtotalactivetext.style.color = "#ee1c31";
                    if (document.querySelector(".inc_just_added_save_pr") != null) {
                        if (client_add_btn == "client_add_btn") {
                            if (document.querySelector('#js-product-saved') != null) {
                                if (document.querySelector('#js-product-saved').style.display != "none") {
                                    document.querySelector(".inc_just_added_save_pr").innerText = "Save " + formatter.format(ClientSavePrice).replace('.00', '');
                                } else {
                                    document.querySelector(".inc_just_added_save_pr").innerText = "";
                                }
                            }
                        } else {
                            if (sidebarsaveprcw > 0 && subtotalregukarprice != 0) {
                                document.querySelector(".inc_just_added_save_pr").innerText = "Save " + formatter.format(sidebarsaveprcw).replace('.00', '');
                            } else {
                                document.querySelector(".inc_just_added_save_pr").innerText = "";
                            }
                        }
                    }
                } else {
                    elHeadersubtotalactivetext.style.color = "#000";
                    elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice).replace('.00', '');
                    elHeadersubtotalregulartext.innerHTML = "";
                    if (document.querySelector(".inc_just_added_save_pr") != null) {
                        document.querySelector(".inc_just_added_save_pr").innerHTML = "";
                    }
                    if (subtotalrrpprice != 0 && subtotalrrpprice != subtotalactiveprice) {
                        elHeadersubtotalrrptext.innerHTML = "<span>RRP </span>" + formatter.format(subtotalrrpprice).replace('.00', '');
                    }
                    if (sidebarsaveprcw > 0 && subtotalregukarprice != 0) {
                        document.querySelector(".inc_just_added_save_pr").innerText = "Save " + formatter.format(sidebarsaveprcw).replace('.00', '');
                    } else {
                        document.querySelector(".inc_just_added_save_pr").innerText = "";
                    }
                }
                if (window.innerWidth > 767) {
                    if (document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length > 5) {
                        document.querySelector(".inc_sidebar_cart_added_block").classList.add("flex-start");
                    }
                } else {
                    if (document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length > 3) {
                        document.querySelector(".inc_sidebar_cart_added_block").classList.add("flex-start");
                    }
                }
                if (document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length > 7) {
                    document.querySelector(".inc_sidebar_cart_added_block").classList.add("more_than_seven");
                }
                let addedCount = document.querySelectorAll(".inc_sidebar_cart_added_block .inc_cart_added_product_block").length;
                document.querySelector(".inc_sidebar_cart_added_block").classList.remove("inc_added_" + addedCount - 1);
                document.querySelector(".inc_sidebar_cart_added_block").classList.add("inc_added_" + addedCount);
            }
            if (INC.config.pageType == "pdp") {
                if (Object.keys(productObj).length == 0 || client_add_btn == "client_add_btn" || client_add_btn == "clientbtn") {
                    if (elmparent != null) {
                        let imgselp = "";
                        if (elmparent.querySelector('.product__image__main img') != null) {
                            if (elmparent.querySelector('.product__image__main img').src != null) {
                                imgselp = elmparent.querySelector('.product__image__main img').src
                            } else {
                                if (document.querySelector(".inc_pdp_product-main_block .inc_product_img_main_img img") != null) {
                                    if (document.querySelector(".inc_pdp_product-main_block .inc_product_img_main_img img") != null) {
                                        imgselp = document.querySelector(".inc_pdp_product-main_block .inc_product_img_main_img img").src;
                                    }
                                }
                            }
                        } else {
                            if (document.querySelector(".inc_pdp_product-main_block .inc_product_img_main_img img") != null) {
                                if (document.querySelector(".inc_pdp_product-main_block .inc_product_img_main_img img") != null) {
                                    imgselp = document.querySelector(".inc_pdp_product-main_block .inc_product_img_main_img img").src;
                                }
                            }
                        }

                        if (productBlock.querySelector(".inc_cart_added_product_img img") != null) {
                            if (imgselp != "" && imgselp != undefined) {
                                productBlock.querySelector(".inc_cart_added_product_img img").src = imgselp;
                            }
                        }
                    }
                }
            }
            if (document.querySelector(".inc_cart_added_product_block") != null) {
                sbBlock.classList.remove("oos_prod_avail");
            } else {
                sbBlock.classList.add("oos_prod_avail");
            }
        }
    };
    INC.methods.sendBundleClickTracking = function (productId, rec_type) {
        let pageType = "";
        switch (INC.config.pageType) {
            case "pdp":
                pageType = "107";
                break;
            case "productList":
                pageType = "101";
                break;
            case "cartPage":
                pageType = "103";
                break;
            case "ticket":
                pageType = "103";
                break;
            case "other":
                pageType = "101";
        }
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") == null && INC.config.pageType == "pdp") {
            pageType = "100";
        }
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") != null && INC.config.pageType != "productList") {
            pageType = "107";
        }
        let prdcore = INC.dataStore.pdpProductId;
        if (INC.config.pageType == "pdp") {
            prdcore = INC.config.Product_id;
        }
        INC.methods.trackingEvents("bundleProductClickTracking", {
            product_id: productId,
            core_product_id: prdcore.toString(),
        }, pageType, rec_type);
    };
    INC.methods.createProductModuleBlock = function (pdpProductId, blockType, bundleProductListCheck, pdpblockel, mainprod, rec_type) {
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            let productModuleBlock = generate_html_tag("div", "inc_product_module_block");
            let findObj = new INC.classes.FindObj({
                id: pdpProductId,
            });
            let productObj = INC.dataStore.methods().getProductById(findObj);
            productModuleBlock.style.userSelect = "none";
            setidstoelm(productModuleBlock, productObj);
            let elProductShowcaseBlock = generate_html_tag("div", "inc_product_showcase_block");
            elProductShowcaseBlock.innerHTML = showcase_productcard;
            let elProductModalBlock = generate_html_tag("div", "inc_product_modal_block");
            elProductModalBlock.innerHTML = modal_productcard;
            if (elProductShowcaseBlock != null) {
                elProductShowcaseBlock.setAttribute("role", "contentinfo");
            }
            if (elProductModalBlock != null) {
                elProductModalBlock.setAttribute("role", "contentinfo");
            }
            let productShowcaseBlock = INC.methods.createProductShowcaseBlock(pdpProductId, blockType, bundleProductListCheck, pdpblockel,
                elProductShowcaseBlock, mainprod, rec_type);
            let productModalBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck, pdpblockel,
                elProductModalBlock, mainprod, rec_type);
            elProductShowcaseBlock.appendChild(productShowcaseBlock);
            elProductModalBlock.appendChild(productModalBlock);
            productModuleBlock.appendChild(elProductShowcaseBlock);
            productModuleBlock.appendChild(elProductModalBlock);
            return productModuleBlock;
        }
    };

    function setidstoelm(productBlock, productObj) {
        productBlock.setAttribute("data-id", productObj.id);
        productBlock.setAttribute("data-sku", productObj.sku);
        productBlock.setAttribute("data-main_id", productObj.mainId);
        productBlock.setAttribute("data-bundle_id", productObj.bundleId);
        productBlock.setAttribute("data_main_variant", productObj.mainProdVariant);
        productBlock.setAttribute("data-category_name", productObj.categoryName);
        productBlock.setAttribute("product_type", productObj.ProductType);
        productBlock.classList.add(productObj.ProductType);
    }

    function prodtypedesc(productObj, producttypedetails, prodtypeflag) {
        if (productObj.finish != null && productObj.finish != "") {
            prodtypeflag = true;
            let inc_prod_finish_block = generate_html_tag("div", "inc_prod_finish_block");
            producttypedetails.appendChild(inc_prod_finish_block);
            let inc_prod_finish_title = generate_html_tag("div", "inc_prod_finish_title");
            inc_prod_finish_title.innerText = "Finish";
            inc_prod_finish_block.appendChild(inc_prod_finish_title);
            let inc_prod_finish_text = generate_html_tag("div", "inc_prod_finish_text");
            inc_prod_finish_text.innerText = productObj.finish;
            inc_prod_finish_block.appendChild(inc_prod_finish_text);
        }
        if (productObj.coverage != null && productObj.coverage != "") {
            prodtypeflag = true;
            let inc_prod_coverage_block = generate_html_tag("div", "inc_prod_coverage_block");
            producttypedetails.appendChild(inc_prod_coverage_block);
            let inc_prod_coverage_title = generate_html_tag("div", "inc_prod_coverage_title");
            inc_prod_coverage_title.innerText = "Coverage";
            inc_prod_coverage_block.appendChild(inc_prod_coverage_title);
            let inc_prod_coverage_text = generate_html_tag("div", "inc_prod_coverage_text");
            inc_prod_coverage_text.innerText = productObj.coverage;
            inc_prod_coverage_block.appendChild(inc_prod_coverage_text);
        }
        if (productObj.wasPrice != null && productObj.wasPrice != "") {
            prodtypeflag = true;
            let inc_prod_undertone_block = generate_html_tag("div", "inc_prod_undertone_block");
            producttypedetails.appendChild(inc_prod_undertone_block);
            let inc_prod_undertone_title = generate_html_tag("div", "inc_prod_undertone_title");
            inc_prod_undertone_title.innerText = "Undertone";
            inc_prod_undertone_block.appendChild(inc_prod_undertone_title);
            let inc_prod_undertone_text = generate_html_tag("div", "inc_prod_undertone_text");
            inc_prod_undertone_text.innerText = productObj.wasPrice;
            inc_prod_undertone_block.appendChild(inc_prod_undertone_text);
        }
        if (productObj.skinType != null && productObj.skinType != "") {
            prodtypeflag = true;
            let inc_prod_skinType_block = generate_html_tag("div", "inc_prod_skinType_block");
            producttypedetails.appendChild(inc_prod_skinType_block);
            let inc_prod_skinType_title = generate_html_tag("div", "inc_prod_skinType_title");
            inc_prod_skinType_title.innerText = "Skin Type";
            inc_prod_skinType_block.appendChild(inc_prod_skinType_title);
            let inc_prod_skinType_text = generate_html_tag("div", "inc_prod_skinType_text");
            inc_prod_skinType_text.innerText = productObj.skinType;
            inc_prod_skinType_block.appendChild(inc_prod_skinType_text);
        }
        return prodtypeflag;
    }

    function incscrollPgae(productBlock) {
        let doc = null;
        if (document.querySelector(".inc_pdp_block") != null) {
            doc = document.querySelector(".inc_pdp_block");
            inc_scroll_height = (window.scrollY || doc.scrollTop) - (doc.clientTop || 0);
        } else if (document.querySelector(".inc_af_block") != null) {
            doc = document.querySelector(".inc_af_block");
            inc_scroll_height = (window.scrollY || doc.scrollTop) - (doc.clientTop || 0);
        }
        if (productBlock != null) {
            if (productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_header_block") != null) {
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_header_block").click();
            }
            Array.prototype.forEach.call(document.querySelectorAll(".inc_product_modal_block"), function (el) {
                el.classList.remove("inc_active");
            });
        }
    }

    function prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock) {
        let otimg = 0;
        let otherImages = productObj.otherImageList.slice();

        //otherImages.unshift(productObj.imageURL)
        otherImages.forEach(function (otherImgURLs) {
            let otherImgURL = otherImgURLs;
            let elImgGalleryListItemBlock = generate_html_tag("div", "inc_product_img_gallery_list_item_block");
            let imglist =
                '<div class="inc_product_img_gallery_list_item_img_block"><div class="inc_product_img_gallery_list_item_img"><img class="inc_lazy" data-src="' +
                otherImgURL + '" src="' + otherImgURL + '" role="img" aria-label="Image"  alt="' + productObj.name +
                '"></div></div><div class="inc_product_img_gallery_list_item_text_block"><div class="inc_product_img_gallery_list_item_text"></div></div>';
            elImgGalleryListItemBlock.innerHTML = imglist;
            let elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(".inc_product_img_gallery_list_item_img");
            let elOtherImgTag = elImgGalleryListItemBlock.querySelector(".inc_product_img_gallery_list_item_img img");
            elOtherImgTag.src = otherImgURL;
            elOtherImgTag.setAttribute("alt", productObj.name);
            elOtherImgTag.setAttribute("role", "img");
            elOtherImgTag.setAttribute("aria-label", "Image");
            elOtherImgTag.setAttribute("onerror", "this.src='" + INC.config.noimage + "'");
            if (productObj.otherImageList.length > 4) {
                elImgGalleryListItemImg.classList.add("OthImg4");
            }
            elImgGalleryListItemBlock.setAttribute("index", otimg);
            elImgGalleryListItemBlock.addEventListener("click", function () {
                Array.prototype.forEach.call(productBlock.querySelectorAll(".inc_product_img_gallery_list_item_block"), function (
                    galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("inc_active");
                });
                elImgGalleryListItemBlock.classList.add("inc_active");
                let imgotherlist = this.querySelector("img").src;
                let elImgMainImg = productBlock.querySelector(".inc_product_img_main_img");
                elImgMainImg.querySelector("img").src = imgotherlist;
                elImgMainImg.querySelector("img").setAttribute("onerror", "this.src='" + INC.config.noimage + "'");
            });
            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add("inc_active");
            }
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start");
            }
            otimg++;
        });
    }

    function prepareqty(productBlock, blockType) {
        let elAddText = productBlock.querySelector(".inc_product_desc_add_text");
        let productDescQtyInputText = productBlock.querySelector(".inc_product_qty_input_text");
        let productDescQtyBlock = productBlock.querySelector(".inc_product_qty_block");
        let elQtyBlock = productBlock.querySelector(".inc_product_qty_block");
        let elQtyDownBlock = productBlock.querySelector(".inc_product_qty_down_block");
        let elQtyUpBlock = productBlock.querySelector(".inc_product_qty_up_block");
        let elQtyInput = generate_html_tag("input");
        elQtyInput.setAttribute("type", "number");
        elQtyInput.setAttribute("aria-label", "quantity");
        elQtyInput.setAttribute("min", 1);
        elQtyInput.setAttribute("max", 99);
        elQtyInput.setAttribute("maxlength", 99);
        elQtyInput.value = 1;
        elQtyInput.setAttribute("old_qty", "1");
        elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
        elQtyInput.setAttribute("onKeyPress", "if(this.value.length==3) return false;");
        elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
        elQtyInput.addEventListener("keydown", function (event) {

            let elmth = this;
            let keyCode = event.which || event.keyCode;
            if (keyCode === 13) {
                event.preventDefault();
            } else if (
                window.jQuery.inArray(event.keyCode, incallowedKeys) != -1 ||
                (keyCode === 65 && (event.ctrlKey || event.metaKey)) ||
                (keyCode >= 35 && keyCode <= 40)
            ) {
                return;
            }
            setTimeout(function () {
                qtyupdateInc(elmth, productBlock, elAddText);
            }, 50);
        });
        elQtyInput.addEventListener("focusout", function () {
            let elmt = this;
            setTimeout(function () {
                qtyupdateInc(elmt, productBlock, elAddText);
            }, 50);
        });

        function qtyupdateInc(_elm, prdblk, eladtext) {
            if (_elm.value.length == 0) {
                _elm.value = 1;
            }
            if (_elm.value == 0) {
                _elm.value = 1;
            }
            if (_elm.value > 99) {
                _elm.value = 99;
            }
            if (_elm.value == 99) {
                elQtyUpBlock.classList.add("maxqty");
                elQtyBlock.classList.remove("singleqty");
            }
            if (_elm.value < 99) {
                elQtyUpBlock.classList.remove("maxqty");
            }
            if (_elm.value > 1) {
                elQtyBlock.classList.remove("singleqty");
            }
            let productModuleBlock = prdblk.parentNode.parentNode;
            let showcaseProductBlock = productModuleBlock.querySelector(".inc_product_showcase_block").querySelector(".inc_product_block");
            let modalProductBlock = productModuleBlock.querySelector(".inc_product_modal_block").querySelector(".inc_product_block");
            showcaseProductBlock.querySelector(".inc_product_qty_block").querySelector("input").value = parseInt(_elm.value);
            modalProductBlock.querySelector(".inc_product_qty_input_text input").value = parseInt(_elm.value);
            let id = prdblk.getAttribute("data-id");
            let qty = parseInt(_elm.value);
            let main_id = prdblk.getAttribute("data-main_id");
            let bundle_id = prdblk.getAttribute("data-bundle_id");
            let pname = prdblk.querySelector(".inc_product_desc_title_text").textContent;
            let pprice = prdblk.querySelector(".inc_product_desc_ecirp_active_text").textContent.replace("£", "");
            if (eladtext.textContent == "Added" || eladtext.textContent == "Update") {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty,
                }, "add", main_id, bundle_id, pname, pprice);
            }
            if (_elm.value == 1) {
                elQtyBlock.classList.add("singleqty");
            }
        }
        productDescQtyInputText.appendChild(elQtyInput);
        let added_text = document.createElement("span");
        added_text.classList.add("inc_add_text");
        productDescQtyInputText.appendChild(added_text);
        elQtyDownBlock.addEventListener("click", function () {
            let elinput = this.parentNode.parentNode.parentNode.querySelector(".inc_product_qty_input_text input");
            let productModuleBlock = productBlock.parentNode.parentNode;
            let showcaseProductBlock = productModuleBlock.querySelector(".inc_product_showcase_block").querySelector(".inc_product_block");
            let modalProductBlock = productModuleBlock.querySelector(".inc_product_modal_block").querySelector(".inc_product_block");
            if (elinput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className !=
                "inc_product_modal_block inc_active") {
                if (elinput.value == 1) {
                    showcaseProductBlock.querySelector(".inc_product_desc_add_block").click();
                }
            }
            elinput.value = elinput.value - 1 < 1 ? 1 : elinput.value - 1;
            if (parseInt(elinput.value) <= 99) {
                elQtyUpBlock.classList.remove("maxqty");
            }
            showcaseProductBlock.querySelector(".inc_product_qty_block").querySelector("input").value = parseInt(elinput.value);
            modalProductBlock.querySelector(".inc_product_qty_input_text input").value = parseInt(elinput.value);
            let id = productBlock.getAttribute("data-id");
            let qty = parseInt(elinput.value);
            let bundle_id = productBlock.getAttribute("data-bundle_id");
            let main_id = productBlock.getAttribute("data-main_id");
            let pname = productBlock.querySelector(".inc_product_desc_title_text").innerText;
            let pprice = productBlock.querySelector(".inc_product_desc_ecirp_active_text").innerText.replace("£", "");
            if (parseInt(elinput.value) == 1 && productDescQtyBlock.classList.contains("singleqty") == trueflag) {
                if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText ||
                    elAddText.textContent == INC.config.UpdateText) {
                    if (INC.config.pageType == "pdp" && blockType == "pdp") {
                        INC.methods.updateBundleCart({
                            sku: id,
                            qty: qty,
                        }, "add", main_id, bundle_id, pname, pprice);
                    }
                }
            } else {
                if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText ||
                    elAddText.textContent == INC.config.UpdateText) {
                    INC.methods.updateBundleCart({
                        sku: id,
                        qty: qty,
                    }, "add", main_id, bundle_id, pname, pprice);
                }
            }
            if (elinput.value == 1) {
                elQtyBlock.classList.add("singleqty");
                productModuleBlock.querySelector(".inc_product_showcase_block .inc_product_qty_block").classList.add("singleqty");
                modalProductBlock.querySelector(".inc_product_qty_input_text input").parentNode.parentNode.parentNode.parentNode.classList.add(
                    "singleqty");
            }
        });
        elQtyUpBlock.addEventListener("click", function () {
            let elinpt = this.parentNode.parentNode.parentNode.querySelector(".inc_product_qty_input_text input");
            elinpt.value = parseInt(elinpt.value) + 1 > 99 ? 99 : parseInt(elinpt.value) + 1;
            if (parseInt(elinpt.value) == 99) {
                elQtyUpBlock.classList.add("maxqty");
            }
            let productModuleBlock = productBlock.parentNode.parentNode;
            let showcaseProductBlock = productModuleBlock.querySelector(".inc_product_showcase_block").querySelector(".inc_product_block");
            let modalProductBlock = productModuleBlock.querySelector(".inc_product_modal_block").querySelector(".inc_product_block");
            showcaseProductBlock.querySelector(".inc_product_qty_block").querySelector("input").value = parseInt(elinpt.value);
            modalProductBlock.querySelector(".inc_product_qty_input_text input").value = parseInt(elinpt.value);
            modalProductBlock.querySelector(".inc_product_qty_input_text input").parentNode.parentNode.parentNode.parentNode.classList.remove(
                "singleqty");
            productDescQtyBlock.classList.remove("singleqty");
            productModuleBlock.querySelector(".inc_product_showcase_block .inc_product_qty_block").classList.remove("singleqty");
            let id = productBlock.getAttribute("data-id");
            let qty = parseInt(elinpt.value);
            let bundle_id = productBlock.getAttribute("data-bundle_id");
            let main_id = productBlock.getAttribute("data-main_id");
            let pname = productBlock.querySelector(".inc_product_desc_title_text").innerText;
            let pprice = productBlock.querySelector(".inc_product_desc_ecirp_active_text").innerText.replace("£", "");
            if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText
                .textContent == INC.config.UpdateText) {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty,
                }, "add", main_id, bundle_id, pname, pprice);
            }
        });
    }
    INC.methods.createProductShowcaseBlock = function (pdpProductId, blockType, _bundleProductListCheck, _parentblock, elProductShowcaseBlock, mainprod,rec_type) {
        let productBlock = elProductShowcaseBlock.querySelector(".inc_product_block");
        let findObj = new INC.classes.FindObj({
            id: pdpProductId,
        });
        let productObj = INC.dataStore.methods().getProductById(findObj);
        setidstoelm(productBlock, productObj);
        let elHeaderInfoBlck = productBlock.querySelector(".inc_product_info_main_block");
        let elHeader = productBlock.querySelector(".inc_product_header_main_block");
        let elImgBlock = productBlock.querySelector(".inc_product_img_block");
        let elImgGalleryListBlock = productBlock.querySelector(".inc_product_img_gallery_list_block");
        let elTitleTextBlock = productBlock.querySelector(".inc_product_desc_title_text_block");
        let elTitleText = productBlock.querySelector(".inc_product_desc_title_text");
        let elPromo = productBlock.querySelector(".pc_promo_div");
        let elproductPriceLabel = productBlock.querySelector(".inc_product_ecirp_label_block");
        let elPriceActiveText = productBlock.querySelector(".inc_product_desc_ecirp_active_text");
        let elPriceRegularText = productBlock.querySelector(".inc_product_desc_ecirp_regular_text");
        let elPriceRrpText = productBlock.querySelector(".inc_product_desc_ecirp_rrp_text");
        let elAttBlock = productBlock.querySelector(".inc_product_desc_att_block");
        let elAttColorBlock = productBlock.querySelector(".inc_product_desc_att_color_block");
        let elAttColorTitleText = productBlock.querySelector(".inc_product_desc_att_color_title_text");
        let elAttColorListBlock = productBlock.querySelector(".inc_product_desc_att_color_list_block");
        let elAttSizeBlock = productBlock.querySelector(".inc_product_desc_att_size_block");
        let elAttSizeTitleText = productBlock.querySelector(".inc_product_desc_att_size_title_text");
        let elAttSizeTitleTextSelected = productBlock.querySelector(".inc_product_desc_att_size_title_text_selected");
        let elAttSizeListBlock = productBlock.querySelector(".inc_product_desc_att_size_list_block");
        let elAtt0ListBlock = productBlock.querySelector(".inc_product_desc_att_zero_list_block");
        let elAtt3ListBlock = productBlock.querySelector(".inc_product_desc_att_third_list_block");
        let elAtt0Block = productBlock.querySelector(".inc_product_desc_att_zero_block");
        let elAtt3Block = productBlock.querySelector(".inc_product_desc_att_third_block");
        let elAtt0TitleText = productBlock.querySelector(".inc_product_desc_att_zero_title_text");
        let elAtt3TitleTextSelected = productBlock.querySelector(".inc_product_desc_att_third_title_text_selected");
        let elAtt3TitleText = productBlock.querySelector(".inc_product_desc_att_third_title_text");
        let elAddBlock = productBlock.querySelector(".inc_product_desc_add_block");
        let elAddText = productBlock.querySelector(".inc_product_desc_add_text");
        let elAddImg = productBlock.querySelector(".inc_product_desc_add_img");
        let elratingsBlock = productBlock.querySelector(".inc_product_desc_ratings_block");
        let elworthPrice = productBlock.querySelector(".inc_product_desc_ecirp_worth_text");
        let eldetailsprodblock = productBlock.querySelector(".inc_product_desc_att_details_block");
        let eladdvarianttext = productBlock.querySelector(".inc_product_variant_simple_text");
        let elconfigtitle = productBlock.querySelector(".inc_product_desc_add_title_text_block");
        let elvariantaddbtn = productBlock.querySelector(".inc_product_desc_att_variant_add_block");
        let elvariantaddbtntext = productBlock.querySelector(".inc_product_desc_att_variant_text");
        let elvariantpopupclose = productBlock.querySelector(".inc_product_desc_variant_popup_close_block");
        let elselectoptaddbtn = productBlock.querySelector(".inc_product_variant_simple_block");
        let productDescAddText = productBlock.querySelector(".inc_product_add_text");
        let elQtyAddBtnBlock = productBlock.querySelector(".inc_product_desc_qty_add_btn_block");
        elQtyAddBtnBlock.classList.add(productObj.ProductType);
        if (INC.config.catFlag.length >= 2) {
            if (_parentblock.querySelector(".inc_pdp_title_text") != null) {
                _parentblock.querySelector(".inc_pdp_title_text").innerText = "Frequently bought together";
            }
        }
        if (window.innerWidth < 769) {
            let prodtypeflag = false;
            let producttypedetails_mobile_view = generate_html_tag("div", "inc_details_mobile_quick_view");
            let producttypedetails = generate_html_tag("div", "inc_producttype_details_block");
            let prod_quick_view_close = generate_html_tag("div", "prod_quick_view_close");
            producttypedetails_mobile_view.appendChild(prod_quick_view_close);
            prod_quick_view_close.addEventListener("click", function () {
                document.querySelector("html").classList.remove("inc_overlay");
                document.querySelector("body").classList.remove("quick_view_active_inc");
                if (document.querySelector(".inc_details_mobile_quick_view.quick_view_active") != null) {
                    document.querySelector(".inc_product_block.quick_view_open").classList.remove("quick_view_open");
                    document.querySelector(".inc_details_mobile_quick_view.quick_view_active").classList.remove("quick_view_active");
                }
            });
            producttypedetails_mobile_view.appendChild(producttypedetails);
            prodtypedesc(productObj, producttypedetails, prodtypeflag);
            if (prodtypeflag == trueflag) {
                let prod_quick_view_btn = generate_html_tag("div", "prod_quick_view_btn");
                prod_quick_view_btn.innerText = "More Info";
                prod_quick_view_btn.addEventListener("click", function () {
                    if (productBlock.querySelector(".inc_details_mobile_quick_view.quick_view_active") != null) {
                        document.querySelector("html").classList.remove("inc_overlay");
                        document.querySelector("body").classList.remove("quick_view_active_inc");
                        productBlock.classList.remove("quick_view_open");
                        productBlock.querySelector(".inc_details_mobile_quick_view.quick_view_active").classList.remove("quick_view_active");
                    } else {
                        document.querySelector("body").classList.add("quick_view_active_inc");
                        document.querySelector("html").classList.add("inc_overlay");
                        productBlock.classList.add("quick_view_open");
                        productBlock.querySelector(".inc_details_mobile_quick_view").classList.add("quick_view_active");
                    }
                });
                let prodplacement = productBlock.querySelector(".inc_product_desc_block");
                if (prodplacement != null) {
                    prodplacement.appendChild(prod_quick_view_btn);
                    prodplacement.appendChild(producttypedetails_mobile_view);
                }
            }
        }
        elvariantpopupclose.addEventListener("click", function () {
            if (document.querySelector(".inc_product_modal_block.inc_active") == null && document.querySelector(
                ".inc_sidebar_modal_block.inc_active") == null) {
                document.querySelector("html").classList.remove("inc_overlay");
                document.querySelector("body").style.position = "relative";
                document.querySelector("body").style.overflow = "auto";
            }
            this.parentNode.classList.remove("inc_active");
            productBlock.classList.remove("show_overlay");
        });
        elHeaderInfoBlck.setAttribute("data-id", productObj.id);
        elHeaderInfoBlck.setAttribute("data-sku", productObj.sku);
        elHeaderInfoBlck.setAttribute("data-main_id", productObj.mainId);
        elHeaderInfoBlck.setAttribute("data-bundle_id", productObj.bundleId);
        elHeader.querySelector(".inc_product_header_img_block").addEventListener("click", function () {
            productBlock.parentNode.classList.remove("inc_active");
        });
        let elImgMainImg = elImgBlock.querySelector(".inc_product_img_main_img");
        let elImgTag1 = generate_html_tag("img");
        if (productObj.imageURLMain != undefined) {
            elImgTag1.src = productObj.imageURLMain;
        }
        elImgTag1.setAttribute("data-src", productObj.imageURLMain);
        elImgTag1.setAttribute("onerror", "this.src='" + INC.config.noimage + "'");
        elImgTag1.setAttribute("role", "img");
        elImgTag1.setAttribute("aria-label", "Image");
        elImgTag1.setAttribute("alt", productObj.nameMain);
        elImgTag1.setAttribute("data-mouseover", productObj.imageURL + "," + productObj["otherImageList"]);
        elImgTag1.setAttribute("data-imageURL", productObj["imageURLMain"]);
        let productLink = document.createElement("a");
        productLink.setAttribute("rel", "noopener noreferrer");
        productLink.appendChild(elImgTag1);
        productLink.setAttribute("otherImageList", productObj.imageURL + "," + productObj["otherImageList"]);
        productLink.setAttribute("imageURL", productObj["imageURLMain"]);
        //add_swipe(productLink);
        elImgMainImg.appendChild(productLink);
        productLink.addEventListener("click", function (e) {
           // if(INC.config.recommendation == falseflag){
                e.preventDefault();
            //}
        });
        productLink.setAttribute("href", productObj.url);
        elImgMainImg.addEventListener("click", function (e) {
            e.preventDefault();
            if(INC.config.recommendation == falseflag){
                document.querySelector("html").classList.add("inc_overlay");
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add(
                    "inc_active");
                if (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") != null) {
                    document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible");
                    document.querySelector("body").classList.add("inc_popup_open");
                }
                let trucheck = true;
                if (productBlock.parentNode.parentNode.parentNode.classList.contains("inc_af_product-list_block") == trucheck) {
                    document.querySelector("html").classList.add("inc_overlay");
                }
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_info_main_block").classList.add(
                    "inc_active");
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_description_main_block").classList.remove(
                    "inc_active");
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.remove("mini_popup");
                let headerimage = productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block").querySelector('.inc_product_header_img_block')
                console.log("POPUP OPENS FROM IMAGE")
                if (window.innerWidth < 781) {
                    if (headerimage) {
                        productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block").querySelector('.inc_product_header_main_block').appendChild(headerimage)
                    }
                }
            }else{
                INC.methods.sendBundleClickTracking(productBlock.getAttribute("data-main_id"), rec_type);
                getTrackingPixel();
                let hrefm = productBlock.querySelector(".inc_product_img_main_img a").href;
                setTimeout(function () {
                    window.location.href = hrefm;
                }, 2000);
            }
            
        });
        elImgGalleryListBlock.innerHTML = "";
        if (productObj.otherImageList != null && productObj.otherImageList.length >= 1) {
            prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock);
        }
        elTitleTextBlock.addEventListener("click", function (e) {
            e.preventDefault();
            if(INC.config.recommendation == falseflag){
                document.querySelector("html").classList.add("inc_overlay");
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add(
                    "inc_active");
                if (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") != null) {
                    document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible");
                    document.querySelector("body").classList.add("inc_popup_open");
                }
                let trucheck = true;
                if (productBlock.parentNode.parentNode.parentNode.classList.contains("inc_af_product-list_block") == trucheck) {
                    document.querySelector("html").classList.add("inc_overlay");
                }
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_info_main_block").classList.add(
                    "inc_active");
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_description_main_block").classList.remove(
                    "inc_active");
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.remove("mini_popup");
            }else{
                INC.methods.sendBundleClickTracking(productBlock.getAttribute("data-main_id"), rec_type);
                getTrackingPixel();
                let hrefm = productBlock.querySelector(".inc_product_img_main_img a").href;
                setTimeout(function () {
                    window.location.href = hrefm;
                }, 2000);
            }
            
        });
        elPromo.classList.add("empty");
        let pTitleDiv = document.createElement("div");
        if (mainprod == "mainprod" && INC.config.pageType == "pdp") {
            if (productObj.nameMain != null) {
                pTitleDiv.innerHTML = "<strong>This Item: </strong>" + titleCase(productObj.nameMain);
            }
        } else {
            if (productObj.nameMain != null) {
                pTitleDiv.innerHTML = titleCase(productObj.nameMain);
            }
        }
        let field1 = productObj.ratingsCount;
        let field2 = productObj.reviewsCount;
        INC.methods.get_product_ratings(field1, field2, elratingsBlock);
        let pLink = document.createElement("a");
        pLink.setAttribute("style", "cursor: default;text-decoration: none;");
        pLink.href = productObj.url;
        pLink.addEventListener("click", function (ev) {
            //if(INC.config.recommendation == falseflag){
                ev.preventDefault();
            //}
        });
        pLink.setAttribute("style", "text-transform: unset;");
        if (productObj.nameMain != null) {
            pLink.setAttribute("title", productObj.nameMain);
        }
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);

        let activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
        let regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
        let rrpPrice = parseFloat(productObj.rrpPrice).toFixed(2).toString();
        let wasPrice = parseFloat(productObj.wasPrice).toFixed(2).toString();
        let savePrice = productObj.savePrice
        let totalsaveprc = get_discount_price(productObj.regularPrice, productObj.activePrice);

        elPriceRegularText.innerText = "";
        elPriceRrpText.innerText = "";

        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
            elPriceActiveText.innerHTML = formatter.format(activePrice).replace('.00', '');
            elPriceRegularText.innerHTML = "<span> RRP </span>" + formatter.format(regularPrice).replace('.00', '');
            if (rrpPrice > 0 && rrpPrice != "NaN") {
                elPriceRrpText.innerHTML = "<span> RRP </span>" + formatter.format(rrpPrice).replace('.00', '');
            }
            elproductPriceLabel.innerHTML = INC.config.saveBadgeText + formatter.format(totalsaveprc).replace('.00', '');
        } else {
            elPriceActiveText.innerHTML = formatter.format(activePrice).replace('.00', '');
            if (rrpPrice > 0 && rrpPrice != "NaN") {
                elPriceRrpText.innerHTML = "<span> RRP </span>" + formatter.format(rrpPrice).replace('.00', '');
            } else {
                elPriceRrpText.innerHTML = ""
            }

        }
        if (totalsaveprc > 0 && regularPrice > 0) {
            elworthPrice.innerHTML = INC.config.saveBadgeText + formatter.format(totalsaveprc).replace('.00', '');
        } else {
            elworthPrice.parentNode.parentNode.classList.add("empty")
            elworthPrice.innerHTML = "";
        }

        if (window.innerWidth < 769) {
            let inc_empty_popup = generate_html_tag("div", "inc_empty_popup");
            eldetailsprodblock.appendChild(inc_empty_popup);
        }
        if (blockType == "am") {
            productDescAddText.innerText = "Add to Basket";
        } else if (blockType == "sidebar") {
            productDescAddText.innerText = "Add to Basket";
        } else {
            productDescAddText.innerText = "Add to Bundle";
        }
        productDescAddText.addEventListener("click", function () {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").click();
        });
        prepareqty(productBlock, blockType);
        findObj = new INC.classes.FindObj({
            mainId: productObj.mainId,
        });
        let productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
        let product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
        let productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);
        let product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";
        if (product0Obj.att0Array.length > 0) {
            if (product0Obj["att0Array"][0].code != "Color") {
                findObj = new INC.classes.FindObj({
                    mainId: productObj.mainId,
                });
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(elAtt0TitleText, elAtt0Block, product0Obj, elAtt0ListBlock, blockType, productBlock);
                }
            }
        }
        productsizeatt(elAttSizeTitleText, elAttSizeBlock, productSizesObj, elAttSizeListBlock, elAttSizeTitleTextSelected, blockType, productBlock);
        productcoloratt(productColorsObj, productBlock, elAttColorListBlock, blockType, elAttColorBlock, elAttColorTitleText, elProductShowcaseBlock);
        productthirdatt(product3Obj, elAtt3TitleText, elAtt3Block, elAtt3ListBlock, blockType, elAtt3TitleTextSelected);
        if (productSizesObj.sizeArray.length > 0 && product0Obj["att0Array"].length > 0) {
            elAttBlock.classList.add("moreThanOne");
        }
        if (productColorsObj["colorArray"].length > 0 && product0Obj["att0Array"].length > 0) {
            elAttBlock.classList.add("moreThanOne");
        }
        let sizezero = INC.dataStore.methods().getProductopt0Obj(findObj);
        if (productColorsObj["colorArray"].length == 0 && sizezero["att0Array"].length == 0) {
            elAttBlock.classList.add("attributes_not_avail");
            eladdvarianttext.textContent = "Add";
            switch (blockType) {
                case "pdp":
                    eladdvarianttext.textContent = "Add to Bundle";
                    break;
                case "sidebar":
                    eladdvarianttext.textContent = "Add to Basket";
                    break;
                case "am":
                    eladdvarianttext.textContent = "Add to Basket";
                    break;
            }
            eladdvarianttext.classList.add("simple");
        } else if (productColorsObj["colorArray"].length > 0) {
            elAttBlock.classList.add("attributes_avail");
            elAttSizeTitleText.textContent = "View colours";
            eladdvarianttext.textContent = "Choose Size";
            if (productBlock.querySelector(".inc_product_add_block.added_inc") == null) {
                elselectoptaddbtn.classList.add('inc_select')
            }

            eladdvarianttext.classList.add("config");
            elconfigtitle.textContent = "Please select a Color";
            switch (blockType) {
                case "pdp":
                    elvariantaddbtntext.textContent = "Add to Bundle";
                    break;
                case "sidebar":
                    elvariantaddbtntext.textContent = "Add to Basket";
                    break;
                case "am":
                    elvariantaddbtntext.textContent = "Add to Basket";
                    break;
            }
            eladdvarianttext.classList.remove("simple");
        } else if (sizezero["att0Array"].length > 0) {
            eladdvarianttext.classList.remove("simple");
            eladdvarianttext.textContent = "Choose Size";
            elselectoptaddbtn.classList.add('inc_select')
            eladdvarianttext.classList.add("config");
            elAttBlock.classList.add("attributes_avail");
            if (elAttSizeTitleText.textContent == null) {
                elAttSizeTitleText.textContent = "View Sizes";
            }
            elconfigtitle.textContent = "Please select your Size";
            switch (blockType) {
                case "pdp":
                    elvariantaddbtntext.textContent = "Add to Bundle";
                    break;
                case "sidebar":
                    elvariantaddbtntext.textContent = "Add to Basket";
                    break;
                case "am":
                    elvariantaddbtntext.textContent = "Add to Basket";
                    break;
            }
        }

        if (productColorsObj["colorArray"].length > 0 && sizezero["att0Array"].length > 0) {
            elAttColorTitleText.innerText = productColorsObj["colorArray"][0].label + " & " + "SIZE";
        }
        if (productSizesObj["sizeArray"].length > 0 && sizezero["att0Array"].length > 0) {
            elAttSizeTitleText.innerText = sizezero["att0Array"][0].label + " & " + "SIZE";
            elAtt0TitleText.innerText = sizezero["att0Array"][0].label + " & " + "SIZE";

        }

        elvariantaddbtn.addEventListener("click", function () {
            let moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            let flag_check = INC.methods.checkVariantSelection(moduleblk);
            if (
                (this.textContent.trim() == "Update" || this.parentNode.classList.contains("config_avail") == trueflag) && this.innerText
                    .trim() != "Add to Basket") {
                if (flag_check == 1 || flag_check == 3) {
                    if (document.querySelector(".inc_product_modal_block.inc_active") == null && document.querySelector(
                        ".inc_sidebar_modal_block.inc_active") == null) {
                        document.querySelector("html").classList.remove("inc_overlay");
                    }
                    this.parentNode.parentNode.querySelector(".inc_product_desc_variant_popup_close_block").click();
                    this.parentNode.parentNode.querySelector(".inc_product_desc_variant_popup_close_block").click();
                    productBlock.classList.remove("show_overlay");
                    if (this.textContent.trim() == "Add") {
                        this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").click();
                    }
                } else {
                    if (flag_check == 2 || flag_check == 0) {
                        if (flag_check != 0) {
                            if (this.parentNode.parentNode.querySelector(".inc_variant_tag") != null) {
                                this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select a Color";
                                this.parentNode.parentNode.querySelector(".inc_variant_tag").setAttribute("style", "border:1px solid #E52B45;");
                            }
                        }
                        if (this.parentNode.querySelector(".inc_product_desc_add_title_text_block") != null) {
                            if (this.parentNode.getAttribute("data-color") == null && this.parentNode.getAttribute("data-zero") != null && this
                                .parentNode.getAttribute("data-size") != null) {
                                this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText =
                                    "Please select your Size and Color options";
                            } else if (this.parentNode.getAttribute("data-color") != null && this.parentNode.querySelectorAll(
                                "inc_product_desc_att_color_list_item_block.inc_active").length > 0) {
                                this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select your Size";
                            } else if (this.parentNode.getAttribute("data-zero") != null || this.parentNode.getAttribute("data-size") != null) {
                                this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select a Color";
                            }
                            this.parentNode.querySelector(".inc_product_desc_add_title_text_block").setAttribute("style", "display:block;");
                        }
                    }
                }
            } else {
                if (this.innerText.trim() == "Add to Basket" || this.innerText.trim() == "SELECT") {
                    if (flag_check == 1 || flag_check == 3) {
                        if (document.querySelector(".inc_product_modal_block.inc_active") == null && document.querySelector(
                            ".inc_sidebar_modal_block.inc_active") == null) {
                            document.querySelector("html").classList.remove("inc_overlay");
                        }
                        this.parentNode.parentNode.querySelector(".inc_product_desc_variant_popup_close_block").click();
                        this.parentNode.parentNode.querySelector(".inc_product_desc_variant_popup_close_block").click();
                        productBlock.classList.remove("show_overlay");
                        if (this.textContent.trim() == "Add to Basket" || this.textContent.trim() == "SELECT" || this.textContent.trim() ==
                            "Add") {
                            this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").click();
                        }
                    } else {
                        if (flag_check == 2 || flag_check == 0) {
                            if (this.parentNode.querySelector(".inc_product_desc_add_title_text_block") != null) {
                                if (this.parentNode.getAttribute("data-color") == null && this.parentNode.getAttribute("data-zero") == null &&
                                    this.parentNode.getAttribute("data-size") == null) {
                                    this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText =
                                        "Please select your Size and Color options";
                                } else if (this.parentNode.getAttribute("data-zero") == null) {
                                    this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText =
                                        "Please select your Size";
                                } else if (this.parentNode.getAttribute("data-zero") != null || this.parentNode.getAttribute("data-size") !=
                                    null) {
                                    this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select a Color";
                                }
                                this.parentNode.querySelector(".inc_product_desc_add_title_text_block").setAttribute("style", "display:block;");
                            }
                            if (flag_check == 0) {
                                if (this.parentNode.querySelector(".inc_product_desc_add_title_text_block") != null) {
                                    this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText =
                                        "Please select your size";
                                }
                            }
                        }
                    }
                } else {
                    if (flag_check == 1 || flag_check == 3) {
                        this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").click();
                        this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_variant_popup_close_block").click();
                    } else {
                        if (flag_check == 2 || flag_check == 0) {
                            if (flag_check != 0) {
                                if (this.parentNode.parentNode.querySelector(".inc_variant_tag") != null) {
                                    this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select a Color";
                                }
                            }
                            if (this.parentNode.querySelector(".inc_product_desc_add_title_text_block") != null) {
                                if (this.parentNode.getAttribute("data-color") == null && this.parentNode.getAttribute("data-zero") == null &&
                                    this.parentNode.getAttribute("data-size") == null) {
                                    this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText =
                                        "Please select your Size and Color options";
                                } else if (this.parentNode.getAttribute("data-color") != null) {
                                    this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText =
                                        "Please select your Size";
                                } else if (this.parentNode.getAttribute("data-zero") != null || this.parentNode.getAttribute("data-size")) {
                                    this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText = "Please select a Color";
                                }
                                this.parentNode.querySelector(".inc_product_desc_add_title_text_block").setAttribute("style", "display:block;");
                            }
                            if (flag_check == 0) {
                                if (this.parentNode.querySelector(".inc_product_desc_add_title_text_block") != null) {
                                    this.parentNode.querySelector(".inc_product_desc_add_title_text_block").innerText =
                                        "Please select your size";
                                }
                            }
                        }
                    }
                }
            }
        });
        elselectoptaddbtn.addEventListener("click", function () {
            if (INC.config.recommendation && productObj.ProductType != "simple") {
                document.querySelector("html").classList.add("inc_overlay");
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add(
                    "inc_active");
                if (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") != null) {
                    document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible");
                    document.querySelector("body").classList.add("inc_popup_open");
                }
                let trucheck = true;
                if (productBlock.parentNode.parentNode.parentNode.classList.contains("inc_af_product-list_block") == trucheck) {
                    document.querySelector("html").classList.add("inc_overlay");
                }
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_info_main_block").classList.add(
                    "inc_active");
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_description_main_block").classList
                    .remove("inc_active");
            } else if (blockType == "sidebar" && INC.config.pageType == "cartPage" && productObj.ProductType != "simple") {
                document.querySelector("html").classList.add("inc_overlay");
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add(
                    "inc_active");
                if (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") != null) {
                    document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible");
                    document.querySelector("body").classList.add("inc_popup_open");
                }
                if (productBlock.parentNode.parentNode.parentNode.classList.contains("inc_af_product-list_block") == trueflag) {
                    document.querySelector("html").classList.add("inc_overlay");
                }
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_info_main_block").classList.add(
                    "inc_active");
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_description_main_block").classList
                    .remove("inc_active");
            } else if (INC.config.recommendation && productObj.ProductType == "simple") {
                let el = this.parentNode.parentNode.querySelector('.inc_product_variant_simple_text')
                addprodsingle(this, el);
            }
            if (document.querySelector(".inc_product_desc_att_block.inc_active") != null) {
                document.querySelector(".inc_product_desc_att_block.inc_active").classList.remove("inc_active");
            }
            incscrollPgae(null);
            if (this.querySelector(".inc_product_variant_simple_text.simple") != null) {
                this.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").click();
            } else {
                document.querySelector("html").classList.add("inc_overlay");
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add(
                    "inc_active");
                if (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block") != null) {
                    document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible");
                    document.querySelector("body").classList.add("inc_popup_open");
                }
                if (productBlock.parentNode.parentNode.parentNode.classList.contains("inc_af_product-list_block") == trueflag) {
                    document.querySelector("html").classList.add("inc_overlay");
                }
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_info_main_block").classList.add(
                    "inc_active");
                productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_description_main_block").classList
                    .remove("inc_active");
                if (window.innerWidth < 781 && blockType != "sidebar" && blockType != "am") {

                    if (productBlock.parentElement.parentElement.parentElement.className != "inc_af_product-list_block") {
                        productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block").classList.add("mini_popup");
                    }
                }


                let headerimage = productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block").querySelector('.inc_product_header_img_block')
                if (window.innerWidth < 820) {
                    if (headerimage) {
                        var headerimgplacement = productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_header_main_block")
                        headerimgplacement.parentNode.insertBefore(headerimage, headerimgplacement)
                    }
                }

                console.log("POPUP OPEN FROM BUTTON")
            }
        });
        switch (blockType) {
            case "pdp":
                elAddText.textContent = "Add";
                break;
            case "sidebar":
                elAddText.textContent = "Add to Basket";
                break;
            case "am":
                elAddText.textContent = "Add to Basket";
                break;
        }
        elAddBlock.addEventListener("click", function () {
            let productModuleBlock = productBlock.parentNode.parentNode;
            let modalProductBlock = productModuleBlock.querySelector(".inc_product_modal_block").querySelector(".inc_product_block");
            let flag_check = INC.methods.checkVariantSelection(productModuleBlock);
            let sku = productBlock.getAttribute("data-sku");
            let mainId = productBlock.getAttribute("data-main_id");
            let main_id = productBlock.getAttribute("data-main_id");
            let bundle_id = productBlock.getAttribute("data-bundle_id");
            let pname = productBlock.querySelector(".inc_product_desc_title_text").textContent;
            let pprice = productBlock.querySelector(".inc_product_desc_ecirp_active_text").textContent.replace("£", "");
            let elqtyvalue = productModuleBlock.querySelector(".inc_product_showcase_block .inc_product_qty_block input");
            let qty = parseInt(elqtyvalue.value);
            if (qty < 1) {
                qty = 1;
            }

            let prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            let prodflag = false;
            if (document.querySelector(".inc_sidebar_modal_block.inc_active") == null) {
                if (flag_check == 1 || onloadpdp == falseflag || onloadpdp_delete == falseflag) {
                    prodflag = true;
                } else {
                    if (document.querySelector(".inc_product_modal_block.inc_active") == null) {
                        if (document.querySelector(".inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block") != null) {
                            document.querySelector(".inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block").click();
                        }
                        if (window.innerWidth < 769) {
                            productModuleBlock.querySelector(".inc_product_variant_simple_text").click();
                        } else {
                            productModuleBlock.querySelector(".inc_product_variant_simple_block").click();
                        }
                        if (elAddText.textContent == "Add") {
                            if (document.querySelector(".inc_product_modal_block.inc_active") == null) {
                                if (window.innerWidth < 769) {
                                    productModuleBlock.querySelector(".inc_product_variant_simple_text").click();
                                } else {
                                    productModuleBlock.querySelector(".inc_product_details_prod_block").click();
                                }
                            }
                            if (productModuleBlock.querySelector(".inc_product_variant_simple_text").getAttribute("title_") != null) {
                                productModuleBlock.querySelector(".inc_product_variant_simple_text").textContent = productModuleBlock
                                    .querySelector(".inc_product_variant_simple_text").getAttribute("title_");
                            }
                        }
                    }
                }
                if (elAddText.textContent == "Add") {
                    if (prodflag == trueflag) {
                        elAddText.textContent = "Added";
                        elAddText.classList.add("added");
                        productDescAddText.textContent = "Added";
                        elAddText.parentNode.parentNode.parentNode.querySelector(".inc_product_desc_add_block").classList.add("Inc_checked");
                        let pListItemBlock = document.querySelector(".inc_pdp_bundle_product_list_item_block" + '[data-main_id="' + mainId +
                            '"]');
                        modalProductBlock.querySelector(".inc_product_desc_add_text").textContent = "Update";
                        if (pListItemBlock != null) {
                            pListItemBlock.classList.add("product_added");
                            pListItemBlock.querySelector(".inc_pdp_bundle_product_list_item_added_btn_img").classList.add("checked");
                        }
                        elAddImg.classList.add("checked");
                        modalProductBlock.querySelector(".inc_product_desc_add_img").classList.add("checked");
                        if (INC.config.pageType == "pdp" && blockType == "pdp") {
                            INC.methods.updateBundleCart({
                                sku: sku,
                                qty: qty,
                            }, "add", main_id, bundle_id, pname, pprice);
                        }
                        if (prod_card != null) {
                            if (prod_card.querySelector(".inc_product_modal_block.inc_active") != null) {
                                if (inc_scroll_height > 100) {
                                    window.scrollTo(0, inc_scroll_height);
                                }
                                prod_card.querySelector(".inc_product_modal_block.inc_active").classList.remove("inc_active");
                            }
                        }
                        productModuleBlock.querySelector(".inc_product_variant_simple_block").classList.add("added_inc");
                        productModuleBlock.querySelector(".inc_product_desc_qty_add_btn_block").classList.add("added_inc");
                        if (productModuleBlock.querySelector(".inc_product_desc_qty_add_btn_block .inc_add_text") != null) {
                            productModuleBlock.querySelector(".inc_product_desc_qty_add_btn_block .inc_add_text").innerText = "Added to Bundle";
                        }
                        productModuleBlock.querySelector(".inc_product_add_block").classList.add("added_inc");
                        productModuleBlock.querySelector(".inc_product_modal_block .inc_product_add_block").classList.add("added_inc");
                        productModuleBlock.querySelector(".inc_product_desc_att_variant_text").textContent = "Update";
                        let titlesel = productModuleBlock.querySelector(".inc_product_variant_simple_text").getAttribute("title_");
                        productModuleBlock.querySelector(".inc_product_variant_simple_text").innerText = "";

                        if (prod_card.querySelector(".inc_product_modal_block .inc_product_desc_att_color_list_item_block.inc_active") != null) {
                            let ccode = ''
                            if (prod_card.querySelector(".inc_product_modal_block .inc_product_desc_att_color_list_item_block.inc_active div")) {
                                ccode = prod_card.querySelector(".inc_product_modal_block .inc_product_desc_att_color_list_item_block.inc_active div").getAttribute("data-colorcode");
                            }
                            let colorTitle1 = generate_html_tag("div", 'inc_colortile');
                            colorTitle1.addEventListener("click", function (e) {
                                e.preventDefault();
                            });
                            if (ccode) {
                                colorTitle1.style.backgroundColor = ccode;
                                productModuleBlock.querySelector(".inc_product_variant_simple_text").innerHTML = "";
                                productModuleBlock.querySelector(".inc_product_variant_simple_text").appendChild(colorTitle1);
                                productModuleBlock.querySelector(".inc_product_variant_simple_text").innerHTML = productModuleBlock.querySelector(".inc_product_variant_simple_text").innerHTML + "<span>" + titlesel + "</span>";
                                colorTitle1.classList.add("colorBox");
                                //inc_select
                                if (productModuleBlock.querySelector('.inc_product_variant_simple_block.inc_select') != null) {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_block.inc_select').classList.remove('inc_select')
                                }
                                productModuleBlock.querySelector(".inc_product_variant_simple_text").setAttribute('title', titlesel)
                            } else {
                                let variant_span = generate_html_tag("span", "variant_span");
                                variant_span.innerText = titlesel;

                                productModuleBlock.querySelector(".inc_product_variant_simple_text").appendChild(variant_span);
                                productModuleBlock.querySelector(".inc_product_variant_simple_text").setAttribute("title", titlesel);
                                //inc_select
                                if (productModuleBlock.querySelector('.inc_product_variant_simple_block.inc_select') != null) {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_block.inc_select').classList.remove('inc_select')
                                }
                                productModuleBlock.querySelector(".inc_product_variant_simple_text").setAttribute('title', titlesel)
                            }
                        } else {
                            let variant_span = generate_html_tag("span", "variant_span");
                            variant_span.innerText = titlesel;

                            productModuleBlock.querySelector(".inc_product_variant_simple_text").appendChild(variant_span);
                            productModuleBlock.querySelector(".inc_product_variant_simple_text").setAttribute("title", titlesel);
                            //inc_select
                            if (productModuleBlock.querySelector('.inc_product_variant_simple_block.inc_select') != null) {
                                productModuleBlock.querySelector('.inc_product_variant_simple_block.inc_select').classList.remove('inc_select')
                            }
                        }
                    }
                } else if (elAddText.textContent == "Added") {
                    if (modalProductBlock.querySelector(".inc_product_desc_add_text").textContent != "Update" && prod_card.querySelector(
                        ".inc_product_modal_block.inc_active") != null) {
                        elAddText.textContent = "Add";
                        productDescAddText.textContent = "Add to Bundle";
                        elAddText.classList.remove("added");
                        elAddText.parentNode.parentNode.classList.remove("Inc_checked");
                        modalProductBlock.querySelector(".inc_product_desc_add_text").textContent = "Add to Bundle";
                        let pListItemBlock1 = document.querySelector(".inc_pdp_bundle_product_list_item_block" + '[data-main_id="' + mainId +
                            '"]');
                        if (pListItemBlock1 != null) {
                            pListItemBlock1.classList.remove("product_added");
                            pListItemBlock1.querySelector(".inc_pdp_bundle_product_list_item_added_btn_img").classList.remove("checked");
                        }
                        elAddImg.classList.remove("checked");
                        modalProductBlock.querySelector(".inc_product_desc_add_img").classList.remove("checked");
                        eladdfn_(productModuleBlock);
                        if (INC.config.pageType == "pdp" && blockType == "pdp") {
                            INC.methods.updateBundleCart({
                                sku: sku,
                                qty: qty,
                            }, "sub", main_id, bundle_id, pname, pprice);
                        }
                    } else {
                        if (prod_card.querySelector(".inc_product_modal_block.inc_active") == null) {
                            elAddText.textContent = "Add";
                            productDescAddText.textContent = "Add to Bundle";
                            elAddText.classList.remove("added");
                            elAddText.parentNode.parentNode.classList.remove("Inc_checked");
                            modalProductBlock.querySelector(".inc_product_desc_add_text").textContent = "Add to Bundle";
                            let pListItemBlock2 = document.querySelector(".inc_pdp_bundle_product_list_item_block" + '[data-main_id="' +
                                mainId + '"]');
                            if (pListItemBlock2 != null) {
                                pListItemBlock2.classList.remove("product_added");
                                pListItemBlock2.querySelector(".inc_pdp_bundle_product_list_item_added_btn_img").classList.remove("checked");
                            }
                            eladdfn_(productModuleBlock);
                            elAddImg.classList.remove("checked");
                            modalProductBlock.querySelector(".inc_product_desc_add_img").classList.remove("checked");
                            if (INC.config.pageType == "pdp" && blockType == "pdp") {
                                INC.methods.updateBundleCart({
                                    sku: sku,
                                    qty: qty,
                                }, "sub", main_id, bundle_id, pname, pprice);
                            }
                        }
                    }
                    if (prod_card != null) {
                        if (prod_card.querySelector(".inc_product_modal_block.inc_active") != null) {
                            if (inc_scroll_height > 100) {
                                window.scrollTo(0, inc_scroll_height);
                            }
                            prod_card.querySelector(".inc_product_modal_block.inc_active").classList.remove("inc_active");
                        }
                    }
                }
            } else {
                if (flag_check == 1) {
                    elAddText.textContent = "Adding...";
                    elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                } else {
                    if (document.querySelector(".inc_product_modal_block.inc_active") == null) {
                        productModuleBlock.querySelector(".inc_product_details_prod_block").click();
                    }
                }
            }
        });
        return productBlock;
    };

    function eladdfn_(productModuleBlock) {
        if (productModuleBlock.querySelector(".inc_product_variant_simple_text.simple") != null) {
            productModuleBlock.querySelector(".inc_product_variant_simple_text.simple").textContent = "Add to Bundle";
            productModuleBlock.querySelector(".inc_product_variant_simple_text").setAttribute("title", "Add to Bundle");
        }
        if (productModuleBlock.querySelector(".inc_product_variant_simple_block") != null) {
            productModuleBlock.querySelector(".inc_product_variant_simple_block").classList.remove("added_inc");
        }
        productModuleBlock.querySelector(".inc_product_desc_qty_add_btn_block").classList.remove("added_inc");
        productModuleBlock.querySelector(".inc_product_add_block").classList.remove("added_inc");
        productModuleBlock.querySelector(".inc_product_modal_block .inc_product_add_block").classList.remove("added_inc");
        productModuleBlock.querySelector(".inc_product_desc_att_variant_text").textContent = "Add to Bundle";
    }
    INC.methods.createProductModalBlock = function (pdpProductId, blockType, _bundleProductListCheck, _parentblock, elmodalblock, mainprod, rec_type) {
        let productBlock = elmodalblock.querySelector(".inc_product_block");
        let prdmblock = productBlock;
        let findObj = new INC.classes.FindObj({
            id: pdpProductId,
        });
        let productObj = INC.dataStore.methods().getProductById(findObj);
        setidstoelm(productBlock, productObj);
        let elHeader = prdmblock.querySelector(".inc_product_header_main_block");
        let elImgBlock = prdmblock.querySelector(".inc_product_img_block");
        let elImgGalleryListBlock = prdmblock.querySelector(".inc_product_img_gallery_list_block");
        let elTitleBlock = prdmblock.querySelector(".inc_product_desc_title_block");
        let elTitleText = prdmblock.querySelector(".inc_product_desc_title_text");
        let elAttColorTitleText = prdmblock.querySelector(".inc_product_desc_att_color_title_text");
        let elPriceActiveText = prdmblock.querySelector(".inc_product_desc_ecirp_active_text");
        let elPriceRegularText = prdmblock.querySelector(".inc_product_desc_ecirp_regular_text");
        let elPriceRrpText = prdmblock.querySelector(".inc_product_desc_ecirp_rrp_text");
        let elAttColorBlock = prdmblock.querySelector(".inc_product_desc_att_color_block");
        let elAttColorListBlock = prdmblock.querySelector(".inc_product_desc_att_color_list_block");
        let elAttSizeBlock = prdmblock.querySelector(".inc_product_desc_att_size_block");
        let elAttSizeTitleText = prdmblock.querySelector(".inc_product_desc_att_size_title_text");
        let elAttSizeTitleTextSelected = prdmblock.querySelector(".inc_product_desc_att_size_title_text_selected");
        let elAttSizeListBlock = prdmblock.querySelector(".inc_product_desc_att_size_list_block");
        let elAtt0ListBlock = prdmblock.querySelector(".inc_product_desc_att_zero_list_block");
        let elAtt3ListBlock = prdmblock.querySelector(".inc_product_desc_att_third_list_block");
        let elAtt0Block = prdmblock.querySelector(".inc_product_desc_att_zero_block");
        let elAtt3Block = prdmblock.querySelector(".inc_product_desc_att_third_block");
        let elAtt0TitleText = prdmblock.querySelector(".inc_product_desc_att_zero_title_text");
        let elAtt3TitleTextSelected = prdmblock.querySelector(".inc_product_desc_att_third_title_text_selected");
        let elAtt3TitleText = prdmblock.querySelector(".inc_product_desc_att_third_title_text");
        let elAddBlock = prdmblock.querySelector(".inc_product_desc_add_block");
        let elAddText = prdmblock.querySelector(".inc_product_desc_add_text");
        let elratingsBlock = prdmblock.querySelectorAll(".inc_product_desc_ratings_block");
        let elGalleryRightArrow = prdmblock.querySelector(".inc_product_img_gallery_right_block");
        let elGallerylefttArrow = prdmblock.querySelector(".inc_product_img_gallery_left_block");
        let productDescriptionMainBlock = prdmblock.querySelector(".inc_product_description_main_block");
        let productHeaderMainBlockTitle = prdmblock.querySelector(".inc_product_header_main_title_block");
        let productHeaderMainBlockRating = prdmblock.querySelector(".inc_product_header_main_rating_block");
        let elproductPriceLabel = prdmblock.querySelector(".inc_product_ecirp_label_block");
        let elAttBlock = prdmblock.querySelector(".inc_product_desc_att_block");
        let elproductdescblock = prdmblock.querySelector(".inc_product_desc_block");
        let elManuBlock = prdmblock.querySelector(".inc_product_extension_block");
        let elworthPrice = prdmblock.querySelector(".inc_product_desc_ecirp_worth_text");
        if (window.innerWidth < 820) {
            let productFullDetailsBlock = generate_html_tag("div", "inc_product_mobile_full_deatils");
            productFullDetailsBlock.innerHTML = "<span></span>" + "VIEW FULL DETAILS";
            elproductdescblock.appendChild(productFullDetailsBlock);
            productFullDetailsBlock.addEventListener("click", function () {
                INC.methods.sendBundleClickTracking(productBlock.getAttribute("data-main_id"), rec_type);
                getTrackingPixel();
                let hrefm = productBlock.querySelector(".inc_product_img_main_img a").href;
                setTimeout(function () {
                    window.location.href = hrefm;
                }, 2000);
            });
        }
        if (productObj.manufacturer) {
            elManuBlock.innerText = productObj.manufacturer;
        } else {
            elManuBlock.remove();
        }
        elHeader.querySelector(".inc_product_header_img_block").addEventListener("click", function () {
            if (document.querySelector(".inc_sidebar_modal_block.inc_active") == null) {
                document.querySelector("html").classList.remove("inc_overlay");
                document.querySelector("body").classList.remove("inc_popup_open");
            }
            if (document.querySelector(".inc_sidebar_modal_block.inc_active") != null) {
                document.querySelector(".inc_sidebar_modal_block.inc_active").classList.remove("overflow_visible");
            }
            if (productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_desc_qty_input_text input") != null &&
                productBlock.parentNode.parentNode.querySelector(".inc_product_showcase_block .inc_product_desc_qty_input_text input") != null
            ) {
                if (productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_desc_qty_input_text input").value !=
                    productBlock.parentNode.parentNode.querySelector(".inc_product_showcase_block .inc_product_desc_qty_input_text input").value
                ) {
                    productBlock.parentNode.parentNode.querySelector(".inc_product_modal_block .inc_product_desc_qty_input_text input").value =
                        productBlock.parentNode.parentNode.querySelector(".inc_product_showcase_block .inc_product_desc_qty_input_text input")
                            .value;
                }
            }
            productBlock.parentNode.classList.remove("inc_active");
            productBlock.parentNode.classList.remove("mini_popup");
            productBlock.parentNode.querySelector(".inc_product_header_title_block").classList.add("inc_active");
            productBlock.parentNode.querySelector(".inc_product_header_title_block_1").classList.remove("inc_active");

            if (window.innerWidth < 768) {
                window.scrollTo(0, 1000);
            } else {
                if (inc_scroll_height > 100) {
                    window.scrollTo(0, inc_scroll_height);
                }
            }

        });

        if (window.innerWidth > 820) {
            let prodtypeflag = false;
            let producttypedetails = generate_html_tag("div", "inc_producttype_details_block");
            prodtypedesc(productObj, producttypedetails, prodtypeflag);
            if (prodtypeflag == trueflag) {
                let prodplacement = productBlock.querySelector(".inc_product_desc_att_details_block");
                if (prodplacement != null) {
                    prodplacement.parentNode.insertBefore(producttypedetails, prodplacement);
                }
            }
        }
        let elImgMainImg = elImgBlock.querySelector(".inc_product_img_main_img");
        let elImgTag1 = generate_html_tag("img");
        if (productObj.imageURLMain != undefined) {
            elImgTag1.src = productObj.imageURLMain;
            elImgTag1.setAttribute("data-src", productObj.imageURLMain);
            if (elImgTag1 == trueflag) {
                elImgTag1.src = productObj.imageURLMain;
            }
        }
        elImgTag1.setAttribute("onerror", "this.src='" + INC.config.noimage + "'");
        elImgTag1.setAttribute("role", "img");
        elImgTag1.setAttribute("aria-label", "Image");
        elImgTag1.setAttribute("alt", productObj.nameMain);
        if (window.innerWidth < 769) {
            if (productObj.otherImageList != null && productObj.otherImageList.length < 2) {
                elGalleryRightArrow.style.display = "none";
                elGallerylefttArrow.style.display = "none";
            }
        } else {
            if (productObj.otherImageList != null && productObj.otherImageList.length < 5) {
                elGalleryRightArrow.style.display = "none";
                elGallerylefttArrow.style.display = "none";
            }
        }
        let productLink = document.createElement("a");
        productLink.setAttribute("rel", "noopener noreferrer");
        if (mainprod != "mainprod") {
            productLink.href = productObj.url;
            productLink.style.cursor = "pointer";
        }
        productLink.appendChild(elImgTag1);
        
        productLink.setAttribute("otherImageList", productObj.imageURL + "," + productObj["otherImageList"]);
        productLink.setAttribute("imageURL", productObj["imageURLMain"]);
        //add_swipe(productLink);
        elImgMainImg.appendChild(productLink);
        if (mainprod != "mainprod") {
            elImgMainImg.addEventListener("click", function (e) {
                e.preventDefault();
                INC.methods.sendBundleClickTracking(productBlock.getAttribute("data-main_id"), rec_type);
                getTrackingPixel();
                let hrefm = productBlock.querySelector(".inc_product_img_main_img a").href;
                setTimeout(function () {
                    window.location.href = hrefm;
                }, 2000);
            });
        }
        elImgGalleryListBlock.innerHTML = "";
        if (productObj.otherImageList != null && productObj.otherImageList.length >= 1) {
            prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock);
        } else {
            productBlock.classList.add("inc_other_noimage");
        }
        if (mainprod != "mainprod") {
            elTitleBlock.addEventListener("click", function (ee) {
                ee.preventDefault();
                INC.methods.sendBundleClickTracking(productBlock.getAttribute("data-main_id"), rec_type);
                getTrackingPixel();
                let hrefm1 = productBlock.querySelector(".inc_product_img_main_img a").href;
                setTimeout(function () {
                    window.location.href = hrefm1;
                }, 2000);
            });
        }
        let pTitleDiv = document.createElement("div");
        if (productObj.nameMain != null) {
            pTitleDiv.innerText = titleCase(productObj.nameMain);
        }
        let pLinkModal = document.createElement("a");
        if (productObj.nameMain != null) {
            pLinkModal.setAttribute("title", productObj.nameMain);
        }
        if (mainprod != "mainprod") {
            pLinkModal.setAttribute("href", productObj.url);
        }
        pLinkModal.setAttribute("rel", "noopener noreferrer");
        if (productObj.nameMain != null) {
            pLinkModal.innerText = titleCase(productObj.nameMain);
        }
        productHeaderMainBlockTitle.appendChild(pLinkModal);
        if (mainprod != "mainprod") {
            pLinkModal.addEventListener("click", function (e) {
                e.preventDefault();
                INC.methods.sendBundleClickTracking(productBlock.getAttribute("data-main_id"), rec_type);
                getTrackingPixel();
                let hrefm2 = productBlock.querySelector(".inc_product_img_main_img a").href;
                if(window.innerWidth < 820){
                    setTimeout(function () {
                        window.location.href = hrefm2;
                    }, 3000);
                }else{
                    setTimeout(function () {
                        window.location.href = hrefm2;
                    }, 2000);
                }
               
            });
        }
        let field1 = productObj.ratingsCount;
        let field2 = productObj.reviewsCount;
        if (window.innerWidth < 781) {
            insertAfter(elratingsBlock[1], elTitleBlock);
            INC.methods.get_product_ratings(field1, field2, elratingsBlock[1]);
        } else {
            INC.methods.get_product_ratings(field1, field2, elratingsBlock[0]);
        }
        let pLinkModalSKU = document.createElement("span");
        pLinkModalSKU.classList.add("product_modal_sku");
        pLinkModalSKU.innerText = "#" + productObj.sku;
        productHeaderMainBlockRating.appendChild(pLinkModalSKU);
        let pLink = document.createElement("a");
        pLink.href = productObj.url;
        pLink.setAttribute("style", "text-transform: unset;");
        pLink.setAttribute("title", productObj.nameMain);
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        let activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
        let regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
        let rrpPrice = parseFloat(productObj.rrpPrice).toFixed(2).toString();
        let totalsaveprc = get_discount_price(productObj.regularPrice, productObj.activePrice);

        elPriceRegularText.innerText = "";
        elPriceRrpText.innerText = "";

        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
            elPriceActiveText.innerHTML = formatter.format(activePrice).replace('.00', '');
            elPriceRegularText.innerHTML = "<span> RRP </span>" +  formatter.format(regularPrice).replace('.00', '');
            elproductPriceLabel.innerHTML = INC.config.saveBadgeText + formatter.format(totalsaveprc).replace('.00', '');
            if (rrpPrice > 0 && rrpPrice != "NaN") {
                elPriceRrpText.innerHTML = "<span> RRP </span>" + formatter.format(rrpPrice).replace('.00', '');
            }
        } else {
            elPriceActiveText.innerText = formatter.format(activePrice).replace('.00', '');
            if (rrpPrice > 0 && rrpPrice != "NaN") {
                elPriceRrpText.innerHTML = "<span> RRP </span>" + formatter.format(rrpPrice).replace('.00', '');
            } else {
                elPriceRrpText.innerHTML = ""
            }
        }
        if (totalsaveprc > 0 && regularPrice > 0) {
            elworthPrice.innerHTML = INC.config.saveBadgeText + formatter.format(totalsaveprc).replace('.00', '');
        } else {
            elworthPrice.parentNode.parentNode.classList.add("empty")
            elworthPrice.innerHTML = "";
        }

        prepareqty(productBlock, blockType);
        findObj = new INC.classes.FindObj({
            mainId: productObj.mainId,
        });
        if (INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length == 0 && INC.dataStore.methods().getProductopt0Obj(findObj).att0Array
            .length == 0) {
            elHeader.querySelector(".inc_product_header_title_text").innerText = "Overview";
        } else {
            if (INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0 || INC.dataStore.methods().getProductColorsObj(findObj)
                .colorArray.length > 0) {
                elHeader.querySelector(".inc_product_header_title_text").innerText = "Overview";
            }
        }
        let inc_product_header_title_block_1 = productBlock.querySelector(".inc_product_header_title_block_1");
        let inc_product_header_title_text_1 = productBlock.querySelector(".inc_product_header_title_text_1");
        inc_product_header_title_text_1.innerText = "Description";
        if (window.innerWidth < 820) {
            productDescriptionMainBlock.innerHTML = "<span>Description</span>" + productObj.description;
        } else {
            productDescriptionMainBlock.innerHTML = productObj.description;
        }
        let inc_product_header_title_block = inc_product_header_title_block_1.parentNode.querySelector(".inc_product_header_title_block");
        let inc_product_header_new_page = productBlock.querySelector(".inc_product_header_new_page");
        let inc_product_header_new_page_text = productBlock.querySelector(".inc_product_header_new_page .inc_product_header_new_page_text");
        inc_product_header_new_page_text.innerText = "Open in a new tab";
        inc_product_header_new_page_text.setAttribute("href", productObj.url);
        inc_product_header_new_page_text.setAttribute("target", "_blank");
        inc_product_header_new_page_text.setAttribute("rel", "noopener noreferrer");
        inc_product_header_new_page.addEventListener("click", function () {
            INC.methods.sendBundleClickTracking(productObj.mainId, rec_type);
            getTrackingPixel();
        });
        inc_product_header_title_block_1.addEventListener("click", function () {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.add("inc_active");
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.remove("inc_active");
            this.parentNode.querySelector(".inc_product_header_title_block").classList.remove("inc_active");
            this.classList.add("inc_active");
        });
        inc_product_header_title_block.classList.add("inc_active");
        inc_product_header_title_block.addEventListener("click", function () {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.remove("inc_active");
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.add("inc_active");
            inc_product_header_title_block.classList.add("inc_active");
            inc_product_header_title_block_1.classList.remove("inc_active");
        });
        let product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
        let productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
        let productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);
        let product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);
        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";

        if (product0Obj.att0Array.length > 0) {
            if (product0Obj["att0Array"][0].code != "Color") {
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(elAtt0TitleText, elAtt0Block, product0Obj, elAtt0ListBlock, blockType, productBlock);

                }
            }
            elAttBlock.classList.add('attributes_avail')
        }
        if (productColorsObj["colorArray"].length > 0 || productSizesObj["sizeArray"].length > 0 || product3Obj["att3Array"].length > 0) {
            INC.config.ddFlag = true;
        }
        productcoloratt(productColorsObj, productBlock, elAttColorListBlock, blockType, elAttColorBlock, elAttColorTitleText, null);
        productsizeatt(elAttSizeTitleText, elAttSizeBlock, productSizesObj, elAttSizeListBlock, elAttSizeTitleTextSelected, blockType, productBlock);
        productthirdatt(product3Obj, elAtt3TitleText, elAtt3Block, elAtt3ListBlock, blockType, elAtt3TitleTextSelected);
        if (product0Obj["att0Array"].length > 0) {
            productBlock.querySelector(".inc_product_desc_att_zero_title_block").addEventListener("click", function () {
                if (document.querySelector(".inc_product_desc_att_color_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_color_block.show_dropdown").classList.remove("show_dropdown");
                }
                if (document.querySelector(".inc_product_desc_att_size_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_size_block.show_dropdown").classList.remove("show_dropdown");
                }
                if (document.querySelector(".inc_product_desc_att_third_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_third_block.show_dropdown").classList.remove("show_dropdown");
                }
                this.parentNode.classList.toggle("show_dropdown");
            });
        }
        if (productColorsObj["colorArray"].length > 0) {
            productBlock.querySelector(".inc_product_desc_att_color_title_block").addEventListener("click", function () {
                if (document.querySelector(".inc_product_desc_att_zero_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_zero_block.show_dropdown").classList.remove("show_dropdown");
                }
                if (document.querySelector(".inc_product_desc_att_size_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_size_block.show_dropdown").classList.remove("show_dropdown");
                }
                if (document.querySelector(".inc_product_desc_att_third_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_third_block.show_dropdown").classList.remove("show_dropdown");
                }
                this.parentNode.classList.toggle("show_dropdown");
            });
        }
        if (productSizesObj["sizeArray"].length > 0) {
            productBlock.querySelector(".inc_product_desc_att_size_title_block").addEventListener("click", function () {
                if (document.querySelector(".inc_product_desc_att_zero_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_zero_block.show_dropdown").classList.remove("show_dropdown");
                }
                if (document.querySelector(".inc_product_desc_att_third_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_third_block.show_dropdown").classList.remove("show_dropdown");
                }
                if (document.querySelector(".inc_product_desc_att_color_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_color_block.show_dropdown").classList.remove("show_dropdown");
                }
                this.parentNode.classList.toggle("show_dropdown");
            });
        }
        if (product3Obj["att3Array"].length > 0) {
            productBlock.querySelector(".inc_product_desc_att_third_title_block").addEventListener("click", function () {
                if (document.querySelector(".inc_product_desc_att_zero_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_zero_block.show_dropdown").classList.remove("show_dropdown");
                }
                if (document.querySelector(".inc_product_desc_att_size_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_size_block.show_dropdown").classList.remove("show_dropdown");
                }
                if (document.querySelector(".inc_product_desc_att_color_block.show_dropdown") != null) {
                    document.querySelector(".inc_product_desc_att_color_block.show_dropdown").classList.remove("show_dropdown");
                }
                this.parentNode.classList.toggle("show_dropdown");
            });
        }
        elGallerylefttArrow.setAttribute("title", "Scroll left");
        elGalleryRightArrow.setAttribute("title", "Scroll right");
        elGalleryRightArrow.addEventListener("click", function () {
            let prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            let pr_id = prod_card.getAttribute("data-main_id");
            slideTo(pr_id, 0, prod_card, "right", "arrow");
        });
        elGallerylefttArrow.addEventListener("click", function () {
            let prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            let pr_id = prod_card.getAttribute("data-main_id");
            slideTo(pr_id, 0, prod_card, "left", "arrow");
        });
        if (productObj.otherImageList == null || productObj.otherImageList.length < 2) {
            elGalleryRightArrow.style.display = "none";
            elGallerylefttArrow.style.display = "none";
        }
        switch (blockType) {
            case "pdp":
                elAddText.innerText = "Add to Bundle";
                break;
            case "sidebar":
                elAddText.innerText = "Add to Basket";
                break;
            case "am":
                elAddText.innerText = "Add to Basket";
                break;
        }
        elAddBlock.addEventListener("click", function () {
            productBlock.parentNode.querySelector(".inc_product_header_title_block").classList.add("inc_active");
            productBlock.parentNode.querySelector(".inc_product_header_title_block_1").classList.remove("inc_active");
            productBlock.parentNode.querySelector(".inc_product_description_main_block").classList.remove("inc_active");
            let productModuleBlock = productBlock.parentNode.parentNode;
            let flag_check = INC.methods.checkVariantSelection(productModuleBlock);
            if (document.querySelector(".sidebar_outer.sidebar_outer_active") == null) {
                document.querySelector("body").classList.remove("inc_popup_open");
                document.querySelector("html").classList.remove("inc_overlay");
            }
            let showcaseProductBlock = productModuleBlock.querySelector(".inc_product_showcase_block").querySelector(".inc_product_block");
            if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
                if (INC.config.pageType != "cartPage" && INC.config.pageType != "ticket" && productModuleBlock.parentNode.className.indexOf(
                    "inc_af_product-list_block") == -1) {
                    showcaseProductBlock.querySelector(".inc_product_desc_add_block").click();
                }
            } else {
                if (INC.config.pageType != "cartPage" && INC.config.recommendation && INC.config.pageType != "ticket" && productModuleBlock
                    .parentNode.className.indexOf("inc_af_product-list_block") == -1) {
                    showcaseProductBlock.querySelector(".inc_product_desc_add_block").click();
                }
            }
            if (productModuleBlock.classList.contains("configurable") == trueflag) {
                if (flag_check == 1) {
                    setTimeout(function () {
                        if (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active") != null) {
                            document.querySelector(".sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active").classList
                                .remove("inc_active");
                            document.querySelector("body").classList.remove("inc_popup_open");
                            if (window.innerWidth < 768) {
                                window.scrollTo(0, 1000);
                            } else {
                                if (inc_scroll_height > 100) {
                                    window.scrollTo(0, inc_scroll_height);
                                }
                            }
                            document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.remove(
                                "overflow_visible");
                        }
                    }, 200);
                } else {
                    productModuleBlock.querySelector(".inc_product_desc_add_title_text_block").setAttribute("style", "color:#E52B45");
                    let element = document.querySelector(
                        ".inc_product_modal_block.inc_active .inc_product_block .inc_product_desc_att_color_block");
                    if (element != null) {
                        document.querySelector("html").classList.add("inc_popup_open");
                        document.querySelector("html").classList.add("inc_overlay");
                    }
                }
            } else {
                setTimeout(function () {
                    if (document.querySelector(".inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active") != null) {
                        document.querySelector(".inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active").classList
                            .remove("inc_active");
                        document.querySelector("body").classList.remove("inc_popup_open");
                        if (window.innerWidth < 768) {
                            window.scrollTo(0, 1000);
                        } else {
                            if (inc_scroll_height > 100) {
                                window.scrollTo(0, inc_scroll_height);
                            }
                        }
                    }
                    let sidemodal = document.querySelector(".inc_sidebar_modal_block");
                    if (document.querySelector(".inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active") == null &&
                        sidemodal != null) {
                        sidemodal.classList.remove("overflow_visible");
                    }
                }, 100);
            }
            setTimeout(function () {
                if (document.querySelector(".sidebar_outer.sidebar_outer_active") != null && document.querySelector(
                    ".inc_product_modal_block.inc_active") == null) {
                    document.querySelector(".inc_sidebar_modal_block.inc_active").classList.remove("overflow_visible");
                }
            }, 200);
        });
        return productBlock;
    };

    function productzeroatt(elAtt0TitleText, elAtt0Block, product0Obj, elAtt0ListBlock, blockType, productBlock) {
        if (productBlock.parentNode.classList == 'inc_product_showcase_block') {
            elAtt0TitleText.innerText = product0Obj["att0Array"][0].label;
        } else {
            elAtt0TitleText.innerText = product0Obj["att0Array"][0].label + ": ";
        }

        elAtt0Block.classList.add("inc_active");
        elAtt0Block.classList.add("inc_total_" + product0Obj["att0Array"].length);
        product0Obj["att0Array"].forEach(function (sizeObj) {
            let attSizeImgBlock0 = generate_html_tag("div", "inc_product_desc_att_size_list_item_img_block");
            let attSizeImg0 = generate_html_tag("div", "inc_product_desc_att_size_list_item_img");
            attSizeImgBlock0.setAttribute("blocktype", blockType);
            attSizeImgBlock0.setAttribute("varianttypes", "zero");
            attSizeImgBlock0.addEventListener("click", function () {
                let elvariant = this;
                let elblktype = this.getAttribute("blocktype");
                let elvtype = this.getAttribute("varianttypes");
                INC.methods.mappvariants(elvariant, elblktype, elvtype);
            });
            attSizeImgBlock0.classList.add("avail");
            if (sizeObj.imgSrc.length > 0 || sizeObj["colorCode"] != "") {
                if (sizeObj["colorCode"] == "" || sizeObj["colorCode"] == undefined) {
                    let sizeimg = generate_html_tag("img");
                    sizeimg.setAttribute("alt", sizeObj["text"]);
                    sizeimg.src = sizeObj["imgSrc"];
                    attSizeImgBlock0.setAttribute("data-optionimge", sizeObj["imgSrc"]);
                    attSizeImgBlock0.appendChild(sizeimg);
                    elAtt0TitleText.classList.add("img_tag_avail");
                    elAtt0TitleText.style.display = "flex";
                    attSizeImgBlock0.classList.add("img_avail");
                } else {
                    let spancolorcode = generate_html_tag("span");
                    spancolorcode.classList.add("color_code");
                    spancolorcode.setAttribute("alt", sizeObj["text"]);
                    spancolorcode.style.backgroundColor = sizeObj["colorCode"];
                    elAtt0TitleText.classList.add("img_tag_avail");
                    attSizeImgBlock0.appendChild(spancolorcode);
                }
                elAtt0ListBlock.classList.add("img_tag_avail");
            }
            attSizeImg0.innerText = sizeObj["text"];
            attSizeImgBlock0.setAttribute("data-size", sizeObj["text"]);
            attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
            attSizeImgBlock0.setAttribute("data-option", "1");
            attSizeImgBlock0.setAttribute("data-cpid", sizeObj["cpid"]);
            attSizeImgBlock0.setAttribute("data-optid", sizeObj["opt_id"]);
            attSizeImgBlock0.setAttribute("data-attrid", sizeObj["att_id"]);
            attSizeImgBlock0.setAttribute("title", sizeObj["text"]);
            attSizeImgBlock0.setAttribute("data-child-price", sizeObj["prc"]);
            if (product0Obj["att0Array"][0].code == "size") {
                attSizeImgBlock0.setAttribute("title", sizeObj["text"].toUpperCase());
            } else if (product0Obj["att0Array"][0].code == "letter") {
                attSizeImgBlock0.setAttribute("title", "Letter" + " " + sizeObj["text"].toUpperCase());
            } else if (product0Obj["att0Array"][0].code == "choose") {
                attSizeImgBlock0.setAttribute("title", "Number " + sizeObj["text"].toUpperCase());
            } else {
                attSizeImgBlock0.setAttribute("title", sizeObj["text"].toUpperCase());
            }
            attSizeImgBlock0.appendChild(attSizeImg0);
            elAtt0ListBlock.appendChild(attSizeImgBlock0);
        });
    }

    function productcoloratt(productColorsObj, productBlock, elAttColorListBlock, blockType, elAttColorBlock, elAttColorTitleText, bType) {
        fabricprod = [];
        if (productColorsObj.colorArray.length > 0) {
            productColorsObj["colorArray"] = productColorsObj["colorArray"].sort(function (a, b) {
                if (a.attLebel < b.attLebel) {
                    return -1;
                }
                if (a.attLebel > b.attLebel) {
                    return 1;
                }
                return 0;
            });
            if (productColorsObj["colorArray"].length > 0) {
                elAttColorListBlock.innerHTML = "";
                elAttColorBlock.classList.add("inc_active");

                if (productBlock.parentNode.classList == 'inc_product_showcase_block') {
                    elAttColorTitleText.innerText = productColorsObj["colorArray"][0].label;
                } else {
                    elAttColorTitleText.innerText = productColorsObj["colorArray"][0].label + ": ";
                }

                let one_attr_flag = false;
                if (productColorsObj["colorArray"].length == 1) {
                    one_attr_flag = true;
                }
                if (productColorsObj["colorArray"].length > 6) {
                    elAttColorListBlock.classList.add("greater6");
                }
                let pushedfabric = [];
                let colorC = 0;
                elAttColorBlock.classList.add("inc_active");
                if (productColorsObj["colorArray"][0].label == "Select Fabric") {
                    for (let aL = 0; aL < productColorsObj["colorArray"][0].attrLength; aL++) {
                        productColorsObj["colorArray"].forEach(function (colorObj) {
                            if (pushedfabric.indexOf(colorObj.attLebel) == -1) {
                                pushedfabric.push(colorObj.attLebel);
                            }
                            if (pushedfabric[aL] == colorObj.attLebel) {
                                if (fabricprod.indexOf(colorObj.attLebel) == -1) {
                                    fabricprod.push(colorObj.attLebel);
                                }
                                colorelmOb(colorObj, elAttColorListBlock, colorC, blockType, productBlock, one_attr_flag, bType);
                                if (colorObj.label == "Select Fabric") {
                                    elAttColorTitleText.innerText = colorObj.label + ": ";
                                }
                                colorC++;
                            }
                        });
                    }
                } else {
                    productColorsObj["colorArray"].forEach(function (colorObj) {
                        colorelmOb(colorObj, elAttColorListBlock, colorC, blockType, productBlock, one_attr_flag, bType);
                        colorC++;
                    });
                }
            }
        }
    }

    function colorelmOb(colorObj, elAttColorListBlock, colorC, blockType, productBlock, one_attr_flag, bType) {
        let attColorBlock = generate_html_tag("div", "inc_product_desc_att_color_list_item_block");
        let attColorImgBlock = generate_html_tag("div", "inc_product_desc_att_color_list_item_img_block");
        let attColorImg = generate_html_tag("div", "inc_product_desc_att_color_list_item_img");
        attColorImgBlock.setAttribute("blocktype", blockType);
        attColorImgBlock.setAttribute("varianttypes", "color");
        attColorImgBlock.addEventListener("click", function () {
            if (this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                .parentElement != null) {
                if (this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement != null) {
                    if (this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                        .parentElement.parentElement.parentElement != null) {
                        if (this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                            .parentElement.parentElement.parentElement.parentElement != null) {
                            if (this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                                .parentElement.parentElement.parentElement.parentElement.className == "inc_af_bundles_block" && this.parentElement.parentElement
                                    .parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className ==
                                'inc_product_showcase_block') {
                                // console.log(onloadpdp)
                                if (INC.config.onloadam == falseflag) {
                                    this.parentElement.parentElement.parentElement.click()
                                }
                            } else {
                                let elvariantc = this;
                                let elblktypec = this.getAttribute("blocktype");
                                let elvtypec = this.getAttribute("varianttypes");
                                INC.methods.mappvariants(elvariantc, elblktypec, elvtypec);
                            }
                        }
                    }
                }
            }
            //}
        });

        imgcolorgen(colorObj, attColorImg);
        let colorTitle = generate_html_tag("a");
        colorTitle.innerText = colorObj["text"];
        colorTitle.title = colorObj["text"].toUpperCase();
        colorTitle.addEventListener("click", function (e) {
            e.preventDefault();
        });
        attColorImg.appendChild(colorTitle);
        attColorImgBlock.setAttribute("data-color", colorObj["text"]);
        attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
        if (colorObj["opttext"] != undefined) {
            if (colorObj["opttext"] != undefined) {
                attColorImgBlock.setAttribute("datacolorfabric", colorObj["opttext"].split("_")[0].toLocaleLowerCase());
            }
        }
        attColorImgBlock.setAttribute("data-option", "0");
        attColorImgBlock.setAttribute("data-cpid", colorObj["cpid"]);
        attColorImgBlock.setAttribute("title", colorObj["text"]);
        attColorImgBlock.setAttribute("data-colorcode", colorObj["colorCode"]);
        attColorImgBlock.setAttribute("data-optionimge", colorObj["imgSrc"]);
        attColorImgBlock.setAttribute("data-optid", colorObj["opt_id"]);
        attColorImgBlock.setAttribute("data-attrid", colorObj["att_id"]);
        attColorImgBlock.setAttribute("data-child-price", colorObj["prc"]);
        attColorImgBlock.style.backgroundColor = colorObj["colorCode"]
        if (bType != null && colorC > 5 && blockType != "pdp") {
            let inc_more_color = generate_html_tag("a", "inc_more_color");
            inc_more_color.innerText = "+";
            inc_more_color.addEventListener("click", function (e) {
                e.preventDefault();
                productBlock.querySelector(".inc_product_desc_title_text").click();
            });
            if (elAttColorListBlock.querySelector(".inc_more_color") == null) {
                elAttColorListBlock.appendChild(inc_more_color);
            }
            return;
        }
        attColorImgBlock.appendChild(attColorImg);
        attColorBlock.appendChild(attColorImgBlock);
        elAttColorListBlock.appendChild(attColorBlock);
        if (one_attr_flag == trueflag) {
            setTimeout(function () {
                attColorImgBlock.click();
            }, 0);
        }
    }

    function productsizeatt(elAttSizeTitleText, elAttSizeBlock, productSizesObj, elAttSizeListBlock, elAttSizeTitleTextSelected, blockType, productBlock) {
        if (productSizesObj.sizeArray.length > 0) {
            elAttSizeBlock.parentNode.parentNode.parentNode.classList.add("dropdownstyle");
            if (productSizesObj["sizeArray"][0].code != "Color") {
                elAttSizeListBlock.innerHTML = "";
                if (productBlock.parentNode.classList == 'inc_product_showcase_block') {
                    elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].label;
                } else {
                    elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].label + ": ";
                }

                elAttSizeBlock.classList.add("inc_active");
                productSizesObj["sizeArray"].forEach(function (sizeObj) {
                    let attSizeImgBlock = generate_html_tag("div", "inc_product_desc_att_size_list_item_img_block");
                    let attSizeImg = generate_html_tag("div", "inc_product_desc_att_size_list_item_img");
                    elAttSizeTitleTextSelected.innerText = "- Please Select -";
                    attSizeImgBlock.classList.add("avail");
                    attSizeImgBlock.setAttribute("blocktype", blockType);
                    attSizeImgBlock.setAttribute("varianttypes", "size");
                    attSizeImgBlock.setAttribute("title", sizeObj["text"]);
                    attSizeImgBlock.addEventListener("click", function () {
                        let elvariants = this;
                        let elblktypes = this.getAttribute("blocktype");
                        let elvtypes = this.getAttribute("varianttypes");
                        INC.methods.mappvariants(elvariants, elblktypes, elvtypes);
                    });
                    if (sizeObj.imgSrc.length > 0 || sizeObj["colorCode"] != "") {
                        if (sizeObj["colorCode"] == "" || sizeObj["colorCode"] == undefined) {
                            let sizeimg_ = generate_html_tag("img");
                            sizeimg_.setAttribute("alt", sizeObj["text"]);
                            sizeimg_.src = sizeObj["imgSrc"];
                            attSizeImgBlock.setAttribute("data-optionimge", sizeObj["imgSrc"]);
                            attSizeImgBlock.appendChild(sizeimg_);
                            elAttSizeTitleText.classList.add("img_tag_avail");
                            elAttSizeTitleText.style.display = "flex";
                            attSizeImgBlock.classList.add("img_avail");
                        } else {
                            let spancolorcode_ = generate_html_tag("span");
                            spancolorcode_.classList.add("color_code");
                            spancolorcode_.setAttribute("alt", sizeObj["text"]);
                            spancolorcode_.style.backgroundColor = sizeObj["colorCode"];
                            elAttSizeTitleText.classList.add("img_tag_avail");
                            attSizeImgBlock.appendChild(spancolorcode_);
                        }
                        elAttSizeListBlock.classList.add("img_tag_avail");
                    }
                    attSizeImg.innerText = sizeObj["text"];
                    attSizeImgBlock.setAttribute("data-size", sizeObj["text"]);
                    attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock.setAttribute("data-option", "2");

                    attSizeImgBlock.setAttribute("data-optid", sizeObj["opt_id"]);
                    attSizeImgBlock.setAttribute("data-attrid", sizeObj["att_id"]);
                    attSizeImgBlock.setAttribute("data-child-price", sizeObj["prc"]);
                    if (productSizesObj["sizeArray"][0].code == "size") {
                        attSizeImgBlock.setAttribute("title", sizeObj["text"].toUpperCase());
                    } else if (productSizesObj["sizeArray"][0].code == "letter") {
                        attSizeImgBlock.setAttribute("title", "Letter" + " " + sizeObj["text"].toUpperCase());
                    } else if (productSizesObj["sizeArray"][0].code == "choose") {
                        attSizeImgBlock.setAttribute("title", "Number " + sizeObj["text"].toUpperCase());
                    } else {
                        attSizeImgBlock.setAttribute("title", sizeObj["text"].toUpperCase());
                    }
                    attSizeImgBlock.appendChild(attSizeImg);
                    elAttSizeListBlock.appendChild(attSizeImgBlock);
                });
            }
        }
    }

    function productthirdatt(product3Obj, elAtt3TitleText, elAtt3Block, elAtt3ListBlock, blockType, elAtt3TitleTextSelected) {
        if (product3Obj.att3Array.length > 0) {
            if (product3Obj["att3Array"][0].code != "Color") {
                elAtt3ListBlock.innerHTML = "";
                elAtt3TitleTextSelected.innerText = "";
                product3Obj["att3Array"].forEach(function (sizeObj) {
                    elAtt3TitleText.innerText = product3Obj["att3Array"][0].label;
                    elAtt3Block.classList.add("inc_active");
                    let attSizeImgBlock3 = generate_html_tag("div", "inc_product_desc_att_third_list_item_img_block");
                    let attSizeImg3 = generate_html_tag("div", "inc_product_desc_att_third_list_item_img");
                    attSizeImgBlock3.setAttribute("blocktype", blockType);
                    attSizeImgBlock3.setAttribute("varianttypes", "third");
                    attSizeImgBlock3.addEventListener("click", function () {
                        let elvariantd = this;
                        let elblktyped = this.getAttribute("blocktype");
                        let elvtyped = this.getAttribute("varianttypes");
                        INC.methods.mappvariants(elvariantd, elblktyped, elvtyped);
                    });
                    attSizeImgBlock3.classList.add("avail");
                    attSizeImg3.innerText = sizeObj["text"];
                    attSizeImgBlock3.setAttribute("data-size", sizeObj["text"]);
                    attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock3.setAttribute("data-option", "3");
                    attSizeImgBlock3.setAttribute("data-optid", sizeObj["opt_id"]);
                    attSizeImgBlock3.setAttribute("data-attrid", sizeObj["att_id"]);
                    attSizeImgBlock3.setAttribute("data-child-price", sizeObj["prc"]);
                    attSizeImgBlock3.appendChild(attSizeImg3);
                    elAtt3ListBlock.appendChild(attSizeImgBlock3);
                });
            }
        }
    }
    INC.methods.mappvariants = function (obj, blocktype, type_of_variant) {
        if (obj.parentNode != undefined) {
            let productModuleBlck = obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if (productModuleBlck.classList.contains("inc_product_showcase_block") == trueflag || productModuleBlck.classList.contains(
                "inc_product_modal_block") == trueflag) {
                productModuleBlck = productModuleBlck.parentNode;
            }
            if (productModuleBlck.classList.contains("inc_product_block") == trueflag) {
                productModuleBlck = productModuleBlck.parentNode.parentNode;
            } else if (productModuleBlck.classList.contains("inc_product_info_main_block") == trueflag) {
                productModuleBlck = productModuleBlck.parentNode.parentNode.parentNode;
            }
            let productblockshow = productModuleBlck.querySelector(".inc_product_showcase_block .inc_product_block");
            let productblockmod = productModuleBlck.querySelector(".inc_product_modal_block .inc_product_block");
            let mainprdid = productblockshow.getAttribute("data-main_id");
            if (type_of_variant == "zero") {
                let sel_variantz = obj.getAttribute("data-size");
                productblockmod.querySelector(".inc_product_desc_att_block").setAttribute("data-zero", sel_variantz);
                productblockshow.querySelector(".inc_product_desc_att_block").setAttribute("data-zero", sel_variantz);
            } else if (type_of_variant == "color") {
                let sel_variantC = obj.getAttribute("data-color");
                productblockmod.querySelector(".inc_product_desc_att_block").setAttribute("data-color", sel_variantC);
                productblockshow.querySelector(".inc_product_desc_att_block").setAttribute("data-color", sel_variantC);
            } else if (type_of_variant == "size") {
                let sel_variantS = obj.getAttribute("data-size");
                productblockmod.querySelector(".inc_product_desc_att_block").setAttribute("data-size", sel_variantS);
                productblockshow.querySelector(".inc_product_desc_att_block").setAttribute("data-size", sel_variantS);
            } else if (type_of_variant == "third") {
                let sel_variantT = obj.getAttribute("data-size");
                productblockmod.querySelector(".inc_product_desc_att_block").setAttribute("data-third", sel_variantT);
                productblockshow.querySelector(".inc_product_desc_att_block").setAttribute("data-third", sel_variantT);
            }
            productblockmod.querySelector(".inc_product_desc_att_block").setAttribute("data-module-id", mainprdid);
            let main_p_id = INC.dataStore.methods().getFirstProductObjByMainId({
                mainId: mainprdid,
            }).id;
            let findobj = new INC.classes.FindObj({
                id: main_p_id,
            });
            let zero_text = productblockmod.querySelector(".inc_product_desc_att_block").getAttribute("data-zero");
            let size_text = productblockmod.querySelector(".inc_product_desc_att_block").getAttribute("data-size");
            let color_text = productblockmod.querySelector(".inc_product_desc_att_block").getAttribute("data-color");
            let third_text = productblockmod.querySelector(".inc_product_desc_att_block").getAttribute("data-third");
            findobj.mainId = mainprdid;
            findobj.colorText = "";
            if (color_text != undefined) {
                findobj.colorText = color_text;
                productblockmod.querySelector(".inc_product_desc_att_color_title_text_selected").setAttribute("style", 'color:"#4D4D4F";');
                productblockmod.querySelector(".inc_product_desc_att_color_title_text_selected").innerText = color_text;
                productblockshow.querySelector(".inc_product_desc_att_color_title_text_selected").setAttribute("style", 'color:"#4D4D4F";');
                productblockshow.querySelector(".inc_product_desc_att_color_title_text_selected").innerText = color_text;
            }
            if (zero_text != undefined) {
                findobj.zeroText = zero_text;
                productblockshow.querySelector(".inc_product_desc_att_zero_title_text_selected").innerText = zero_text;
                productblockshow.querySelector(".inc_product_desc_att_zero_title_text_selected").setAttribute("style", 'color:"#4D4D4F";');
                productblockmod.querySelector(".inc_product_desc_att_zero_title_text_selected").classList.add("inc_change_color");
                productblockmod.querySelector(".inc_product_desc_att_zero_title_text_selected").innerText = zero_text;
            }
            if (size_text != undefined) {
                findobj.sizeText = size_text;
                productblockshow.querySelector(".inc_product_desc_att_size_title_text_selected").innerText = size_text;
                productblockmod.querySelector(".inc_product_desc_att_size_title_text_selected").innerText = size_text;
                productblockshow.querySelector(".inc_product_desc_att_size_title_text_selected").setAttribute("style", 'color:"#4D4D4F";');
                productblockmod.querySelector(".inc_product_desc_att_size_title_text_selected").setAttribute("style", 'color:"#4D4D4F";');
            }
            if (third_text != undefined) {
                findobj.thirdText = third_text;
                productblockmod.querySelector(".inc_product_desc_att_third_title_text_selected").innerText = third_text;
                productblockshow.querySelector(".inc_product_desc_att_third_title_text_selected").innerText = third_text;
            }
            productblockmod.querySelector(".inc_product_desc_add_err_text_block").innerHTML = "";
            productblockshow.querySelector(".inc_variant_error_text").innerHTML = "";
            productblockshow.querySelector(".inc_product_variant_simple_text").setAttribute("style", "");
            productblockshow.querySelector(".inc_product_desc_add_title_text_block").setAttribute("style", "");
            let elselcolortextmodal = productblockmod.querySelector(".inc_product_desc_att_color_title_text_selected");
            let productSizesObj = INC.dataStore.methods().getProductSizesObj(findobj, obj);
            let productColorsObj = INC.dataStore.methods().getProductColorsObj(findobj, obj);
            let product3rdObj = INC.dataStore.methods().getProductopt3Obj(findobj, obj);
            let product0Obj = INC.dataStore.methods().getProductopt0Obj(findobj, obj);
            let elAttSizeBlock = productblockmod.querySelector(".inc_product_desc_att_size_block");
            let elAttColorBlock = productblockmod.querySelector(".inc_product_desc_att_color_block");
            let elAtt3rdBlock = productblockmod.querySelector(".inc_product_desc_att_third_block");
            let elAttSizeListBlock = productblockmod.querySelector(".inc_product_desc_att_size_list_block");
            let elAtt0ListBlock = productblockmod.querySelector(".inc_product_desc_att_zero_list_block");
            let elAttColorListBlock = productblockmod.querySelector(".inc_product_desc_att_color_list_block");
            let elAtt3ListBlock = productblockmod.querySelector(".inc_product_desc_att_third_list_block");
            let elcolortextmodal = productblockmod.querySelector(".inc_product_desc_att_color_title_text");
            let elAttSizeListBlockshow = productblockshow.querySelector(".inc_product_desc_att_size_list_block");
            let elAtt0ListBlockshow = productblockshow.querySelector(".inc_product_desc_att_zero_list_block");
            let elAttColorListBlockshow = productblockshow.querySelector(".inc_product_desc_att_color_list_block");
            let elAtt3ListBlockshow = productblockshow.querySelector(".inc_product_desc_att_third_list_block");
            let elselcolortextshow = productblockshow.querySelector(".inc_product_desc_att_color_title_text_selected");
            let elcolortextshow = productblockmod.querySelector(".inc_product_desc_att_color_title_text");
            let zerosel = false;
            if (productblockshow.querySelector(".inc_product_desc_att_color_block.inc_active") != null) {
                elAtt0ListBlock.innerHTML = "";
                elAtt0ListBlockshow.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    product0Obj["att0Array"].forEach(function (sizeObj) {
                        let attSizeImgBlock0 = generate_html_tag("div", "inc_product_desc_att_size_list_item_img_block");
                        let attSizeImg0 = generate_html_tag("div", "inc_product_desc_att_size_list_item_img");
                        attSizeImgBlock0.setAttribute("blocktype", blocktype);
                        attSizeImgBlock0.setAttribute("varianttypes", "zero");
                        attSizeImgBlock0.addEventListener("click", function () {
                            let elvariantss = this;
                            let elblktype__ = this.getAttribute("blocktype");
                            let elvtype__ = this.getAttribute("varianttypes");
                            INC.methods.mappvariants(elvariantss, elblktype__, elvtype__);
                        });
                        attSizeImgBlock0.classList.add("avail");
                        attSizeImg0.innerText = sizeObj["text"];
                        attSizeImgBlock0.setAttribute("data-size", sizeObj["text"]);
                        attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock0.setAttribute("data-option", "1");
                        attSizeImgBlock0.setAttribute("data-title", sizeObj["text"]);
                        attSizeImgBlock0.setAttribute("title", sizeObj["text"]);
                        attSizeImgBlock0.setAttribute("data-cpid", sizeObj["cpid"]);
                        attSizeImgBlock0.setAttribute("data-optid", sizeObj["opt_id"]);
                        attSizeImgBlock0.setAttribute("data-attrid", sizeObj["att_id"]);
                        attSizeImgBlock0.setAttribute("data-child-price", sizeObj["prc"]);
                        let attSizeImgBlockclone0 = attSizeImgBlock0.cloneNode(attSizeImgBlock0);
                        attSizeImgBlockclone0.addEventListener("click", function () {
                            let elvariants_1 = this;
                            let elblktypes__2 = this.getAttribute("blocktype");
                            let elvtypes__1 = this.getAttribute("varianttypes");
                            INC.methods.mappvariants(elvariants_1, elblktypes__2, elvtypes__1);
                        });
                        attSizeImgBlock0.appendChild(attSizeImg0);
                        elAtt0ListBlock.appendChild(attSizeImgBlock0);
                        elAtt0ListBlockshow.appendChild(attSizeImgBlockclone0);
                        if (zero_text != undefined) {
                            if (zero_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                zerosel = true;
                                attSizeImgBlock0.classList.add("inc_active");
                                attSizeImgBlockclone0.classList.add("inc_active");
                            }
                        }
                    });
                    if (zerosel == falseflag) {
                        let zerotxt_ = productblockmod.querySelector(".inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block")
                            .getAttribute("data-size");
                        productblockmod.querySelector(".inc_product_desc_att_block").setAttribute("data-zero", zerotxt_);
                        productblockshow.querySelector(".inc_product_desc_att_block").setAttribute("data-zero", zerotxt_);
                        elAtt0ListBlock.querySelector(".inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block").classList.add(
                            "inc_active");
                        elAtt0ListBlockshow.querySelector(".inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block").classList
                            .add("inc_active");
                    }
                }
            }
            if (type_of_variant == "zero" || type_of_variant == "third" || type_of_variant == "color") {
                elAttSizeListBlock.innerHTML = "";
                let sizesel = false;
                elAttSizeListBlockshow.innerHTML = "";
                if (productSizesObj["sizeArray"].length > 0) {
                    elAttSizeBlock.classList.add("inc_active");
                    productSizesObj["sizeArray"].forEach(function (sizeObj) {
                        let attSizeImgBlock = generate_html_tag("div", "inc_product_desc_att_size_list_item_img_block");
                        let attSizeImg = generate_html_tag("div", "inc_product_desc_att_size_list_item_img");
                        attSizeImgBlock.setAttribute("blocktype", blocktype);
                        attSizeImgBlock.setAttribute("varianttypes", "size");
                        attSizeImgBlock.addEventListener("click", function () {
                            let elvariants2 = this;
                            let elblktypes2 = this.getAttribute("blocktype");
                            let elvtypes2 = this.getAttribute("varianttypes");
                            INC.methods.mappvariants(elvariants2, elblktypes2, elvtypes2);
                        });
                        attSizeImgBlock.classList.add("avail");
                        attSizeImg.innerText = sizeObj["text"];
                        attSizeImgBlock.setAttribute("data-size", sizeObj["text"]);
                        attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock.setAttribute("title", sizeObj["text"]);
                        attSizeImgBlock.setAttribute("data-option", "2");
                        attSizeImgBlock.appendChild(attSizeImg);
                        let attSizeImgBlockclone = attSizeImgBlock.cloneNode(attSizeImgBlock);
                        attSizeImgBlockclone.addEventListener("click", function () {
                            let elvariants_ = this;
                            let elblktypes_ = this.getAttribute("blocktype");
                            let elvtypes_ = this.getAttribute("varianttypes");
                            INC.methods.mappvariants(elvariants_, elblktypes_, elvtypes_);
                        });
                        elAttSizeListBlock.appendChild(attSizeImgBlock);
                        elAttSizeListBlockshow.appendChild(attSizeImgBlockclone);
                        if (size_text != undefined) {
                            if (size_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                sizesel = true
                                attSizeImgBlock.classList.add("inc_active");
                                attSizeImgBlockclone.classList.add("inc_active");
                            }
                        }
                    });
                    if (sizesel == falseflag) {
                        let sizetxt_ = productblockmod.querySelector(".inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block")
                            .getAttribute("data-size");
                        productblockmod.querySelector(".inc_product_desc_att_block").setAttribute("data-size", sizetxt_);
                        productblockshow.querySelector(".inc_product_desc_att_block").setAttribute("data-size", sizetxt_);
                        productblockshow.querySelector(".inc_product_desc_att_size_title_text_selected").innerText = sizetxt_;
                        productblockmod.querySelector(".inc_product_desc_att_size_title_text_selected").innerText = sizetxt_;
                        elAttSizeListBlock.querySelector(".inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block").classList.add(
                            "inc_active");
                        elAttSizeListBlockshow.querySelector(".inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block").classList
                            .add("inc_active");
                    }
                }
            } else {
                let sizelowertext = size_text.toLocaleLowerCase();
                if (productblockmod.querySelector(".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") !=
                    null) {
                    productblockmod.querySelector(".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active")
                        .classList.remove("inc_active");
                }
                if (productblockshow.querySelector(".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") !=
                    null) {
                    productblockshow.querySelector(".inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active")
                        .classList.remove("inc_active");
                }
                if (productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' +
                    sizelowertext.replace(/["\\]/g, "\\$&") + '"]') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' +
                        sizelowertext.replace(/["\\]/g, "\\$&") + '"]').classList.add("inc_active");
                    productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' +
                        sizelowertext.replace(/["\\]/g, "\\$&") + '"]').classList.add("inc_active");
                }
                if (productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                    sizelowertext.replace(/["\\]/g, "\\$&") + '"]') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                        sizelowertext.replace(/["\\]/g, "\\$&") + '"]').classList.add("inc_active");
                    productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                        sizelowertext.replace(/["\\]/g, "\\$&") + '"]').classList.add("inc_active");
                }
            }
            //type_of_variant == "zero" ||
            if (type_of_variant == "size" || type_of_variant == "third") {
                elAttColorListBlock.innerHTML = "";
                elAttColorListBlockshow.innerHTML = "";
                if (productModuleBlck.querySelector(".inc_product_modal_block .inc_product_desc_att_color_title_text_selected").innerText == "" &&
                    productModuleBlck.querySelector(".inc_product_desc_att_color_title_text_selected").innerText == "") {
                    productModuleBlck.querySelector(".inc_product_modal_block .inc_product_desc_att_color_title_text_selected").innerText = "";
                    productModuleBlck.querySelector(".inc_product_desc_att_color_title_text_selected").innerText = "";
                }
                let selcol = findobj.colorText;
                if (productColorsObj["colorArray"].length > 0) {
                    elAttColorBlock.classList.add("inc_active");
                    let clrselflag = false;
                    let clrarrac = 0;
                    productColorsObj["colorArray"].forEach(function (colorObj) {
                        if (selcol == colorObj["text"]) {
                            findobj.colorText = colorObj["text"];
                            findobj.color_text = colorObj["text"];
                        } else {
                            findobj.colorText = "";
                            findobj.color_text = "";
                        }
                        let attColorBlock = generate_html_tag("div", "inc_product_desc_att_color_list_item_block");
                        let attColorImgBlock = generate_html_tag("div", "inc_product_desc_att_color_list_item_img_block");
                        let attColorImg = generate_html_tag("div", "inc_product_desc_att_color_list_item_img");
                        attColorImgBlock.setAttribute("blocktype", blocktype);
                        attColorImgBlock.setAttribute("varianttypes", "color");
                        attColorImgBlock.addEventListener("click", function () {
                            let elvariantc2 = this;
                            let elblktypec2 = this.getAttribute("blocktype");
                            let elvtypec2 = this.getAttribute("varianttypes");
                            INC.methods.mappvariants(elvariantc2, elblktypec2, elvtypec2);
                        });
                        imgcolorgen(colorObj, attColorImg);
                        let colorTitle = generate_html_tag("a");
                        colorTitle.innerText = colorObj["text"];
                        colorTitle.title = colorObj["text"];
                        colorTitle.addEventListener("click", function (e) {
                            e.preventDefault();
                        });
                        attColorImg.appendChild(colorTitle);
                        attColorImgBlock.setAttribute("data-color", colorObj["text"]);
                        attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                        attColorImgBlock.setAttribute("data-option", "0");
                        attColorImgBlock.setAttribute("data-cpid", colorObj["cpid"]);
                        attColorImgBlock.setAttribute("data-colorcode", colorObj["colorCode"]);
                        attColorImgBlock.setAttribute("data-optionimge", colorObj["imgSrc"]);
                        attColorImgBlock.appendChild(attColorImg);
                        attColorBlock.appendChild(attColorImgBlock);
                        let attColorBlockclone = attColorBlock.cloneNode(attColorBlock);
                        attColorBlockclone.querySelector(".inc_product_desc_att_color_list_item_img_block").addEventListener("click",
                            function () {
                                let elvariantc1s = this;
                                let elblktypec2s = this.getAttribute("blocktype");
                                let elvtypec2s = this.getAttribute("varianttypes");
                                INC.methods.mappvariants(elvariantc1s, elblktypec2s, elvtypec2s);
                            });
                        if (document.querySelector(".sidebar_outer.sidebar_outer_active") != null || INC.config.pageType == "cartPage") {
                            if (clrarrac > 5) {
                                let inc_more_color1 = generate_html_tag("a", "inc_more_color");
                                inc_more_color1.target = "_blank";
                                inc_more_color1.innerText = "+";
                                inc_more_color1.addEventListener("click", function (ee) {
                                    if (window.innerWidth < 821) {
                                        ee.preventDefault();
                                    }
                                    let hrefd2 = productblockshow.querySelector(".inc_product_img_main_img a").href;
                                    this.setAttribute("href", hrefd2);
                                    INC.methods.sendBundleClickTracking(productblockshow.getAttribute("data-main_id"));
                                    getTrackingPixel();
                                    if (window.innerWidth < 821) {
                                        setTimeout(function () {
                                            window.location.href = hrefd2;
                                        }, 2000);
                                    }
                                });
                                let inc_more_color1clone = inc_more_color1.cloneNode(inc_more_color1);
                                if (elAttColorListBlock.querySelector(".inc_more_color") == null) {
                                    elAttColorListBlock.appendChild(inc_more_color1);
                                    elAttColorListBlockshow.appendChild(inc_more_color1clone);
                                    let cloneelinc_more_color = elAttColorListBlockshow.querySelector(".inc_more_color");
                                    cloneelinc_more_color.addEventListener("click", function (ec) {
                                        if (window.innerWidth < 821) {
                                            ec.preventDefault();
                                        }
                                        let hrefd1 = productblockshow.querySelector(".inc_product_img_main_img a").href;
                                        this.setAttribute("href", hrefd1);
                                        INC.methods.sendBundleClickTracking(productblockshow.getAttribute("data-main_id"));
                                        getTrackingPixel();
                                        if (window.innerWidth < 821) {
                                            setTimeout(function () {
                                                window.location.href = hrefd1;
                                            }, 2000);
                                        }
                                    });
                                }
                                return;
                            }
                        }
                        clrarrac++;
                        elAttColorListBlock.appendChild(attColorBlock);
                        elAttColorListBlockshow.appendChild(attColorBlockclone);
                        if (color_text != null) {
                            if (color_text.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()) {
                                clrselflag = true;
                                attColorBlock.classList.add("inc_active");
                                attColorBlockclone.classList.add("inc_active");
                                elselcolortextshow.innerText = colorObj.text;
                                elselcolortextmodal.innerText = colorObj.text + ":";
                                if (window.innerWidth < 821) {
                                    elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                    elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                                }
                            } else if (productColorsObj["colorArray"].length == 1) {
                                clrselflag = true;
                                attColorBlock.classList.add("inc_active");
                                attColorBlockclone.classList.add("inc_active");
                                productblockmod.querySelector(".inc_product_desc_att_block").setAttribute("data-color", colorObj.text);
                                productblockshow.querySelector(".inc_product_desc_att_block").setAttribute("data-color", colorObj.text);
                                elselcolortextshow.innerText = colorObj.text;
                                elselcolortextmodal.innerText = colorObj.text + ":";
                                if (window.innerWidth < 821) {
                                    elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                    elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                                }
                            }
                        }
                    });
                    if (clrselflag == falseflag) {
                        let ctext = productblockmod.querySelector(
                            ".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block").getAttribute(
                                "data-color");
                        let color_colorcodesel = productblockmod.querySelector(
                            ".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block").getAttribute(
                                "data-colorcode");
                        productblockmod.querySelector(".inc_product_desc_att_block").setAttribute("data-color", ctext);
                        productblockshow.querySelector(".inc_product_desc_att_block").setAttribute("data-color", ctext);
                        elAttColorListBlock.querySelector(".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block")
                            .parentNode.classList.add("inc_active");
                        elAttColorListBlockshow.querySelector(
                            ".inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block").parentNode.classList.add(
                                "inc_active");
                        elselcolortextshow.innerText = ctext;
                        elselcolortextmodal.innerText = ctext;
                        if (window.innerWidth < 821) {
                            elcolortextmodal.style.backgroundColor = color_colorcodesel;
                            elcolortextshow.style.backgroundColor = color_colorcodesel;
                        }
                    }
                }
            } else {
                let colorlowertext = "";
                if (color_text != undefined) {
                    colorlowertext = color_text.toLocaleLowerCase();
                }
                if (productblockmod.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") != null) {
                    productblockmod.querySelector(".inc_product_desc_att_color_list_item_block.inc_active").classList.remove("inc_active");
                }
                if (productblockshow.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") != null) {
                    productblockshow.querySelector(".inc_product_desc_att_color_list_item_block.inc_active").classList.remove("inc_active");
                }
                if (productblockmod.querySelector(
                    '.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext +
                    '"]') != null) {
                    productblockmod.querySelector(
                        '.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext +
                        '"]').parentNode.classList.add("inc_active");
                    if (productblockshow.querySelector(
                        '.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext +
                        '"]') != null) {
                        productblockshow.querySelector(
                            '.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' +
                            colorlowertext + '"]').parentNode.classList.add("inc_active");
                    }
                    elselcolortextshow.innerText = colorlowertext;
                    elselcolortextmodal.innerText = colorlowertext;
                    if (productblockmod.querySelector(".inc_product_desc_att_color_list_item_block.inc_active div") != null) {
                        let color_colorcode = productblockmod.querySelector(".inc_product_desc_att_color_list_item_block.inc_active div").getAttribute(
                            "data-colorcode");
                        if (window.innerWidth < 821) {
                            elcolortextmodal.style.backgroundColor = color_colorcode;
                            elcolortextshow.style.backgroundColor = color_colorcode;
                        }
                    }
                }
            }
            if (type_of_variant == "zero" || type_of_variant == "size" || type_of_variant == "color") {
                elAtt3ListBlock.innerHTML = "";
                elAtt3ListBlockshow.innerHTML = "";
                if (product3rdObj["att3Array"].length > 0) {
                    elAtt3rdBlock.classList.add("inc_active");
                    product3rdObj["att3Array"].forEach(function (sizeObj) {
                        let attSizeImgBlock3 = generate_html_tag("div", "inc_product_desc_att_third_list_item_img_block");
                        let attSizeImg3 = generate_html_tag("div", "inc_product_desc_att_third_list_item_img");
                        attSizeImgBlock3.setAttribute("blocktype", blocktype);
                        attSizeImgBlock3.setAttribute("varianttypes", "third");
                        attSizeImgBlock3.addEventListener("click", function () {
                            let elvarianttd = this;
                            let elblktypetd = this.getAttribute("blocktype");
                            let elvtypetd = this.getAttribute("varianttypes");
                            INC.methods.mappvariants(elvarianttd, elblktypetd, elvtypetd);
                        });
                        attSizeImg3.innerText = sizeObj["text"];
                        attSizeImgBlock3.setAttribute("data-size", sizeObj["text"]);
                        attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock3.setAttribute("data-option", "3");
                        attSizeImgBlock3.appendChild(attSizeImg3);
                        let attSizeImgBlock3clone = attSizeImgBlock3.cloneNode(attSizeImgBlock3);
                        attSizeImgBlock3clone.querySelector(".inc_product_desc_att_third_list_item_img_block").addEventListener("click",
                            function () {
                                let elvarianttd_ = this;
                                let elblktypetd_ = this.getAttribute("blocktype");
                                let elvtypetd_ = this.getAttribute("varianttypes");
                                INC.methods.mappvariants(elvarianttd_, elblktypetd_, elvtypetd_);
                            });
                        elAtt3ListBlock.appendChild(attSizeImgBlock3);
                        elAtt3ListBlockshow.appendChild(attSizeImgBlock3clone);
                        if (third_text != undefined) {
                            if (third_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                attSizeImgBlock3.classList.add("inc_active");
                                attSizeImgBlock3clone.classList.add("inc_active");
                            }
                        }
                    });
                }
            } else {
                let thirdlowertext = third_text.toLocaleLowerCase();
                if (productblockmod.querySelector(".inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") !=
                    null) {
                    productblockmod.querySelector(".inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active")
                        .classList.remove("inc_active");
                }
                if (productblockshow.querySelector(
                    ".inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") != null) {
                    productblockshow.querySelector(".inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active")
                        .classList.remove("inc_active");
                }
                productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' +
                    thirdlowertext + '"]').classList.add("inc_active");
                productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' +
                    thirdlowertext + '"]').classList.add("inc_active");
            }
            let checkzeroselflag = false;
            if (productblockmod.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") ==
                null) {
                checkzeroselflag = true;
            }
            if (type_of_variant == "zero" || (checkzeroselflag == trueflag && type_of_variant != "color")) {
                let zerolowertext = "";
                zero_text = "";
                if (checkzeroselflag == trueflag) {
                    if (obj != null) {
                        zero_text = obj.getAttribute("data-size");
                        zerolowertext = zero_text.toLocaleLowerCase();
                    } else {
                        if (productblockmod.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block") !=
                            null) {
                            zero_text = productblockmod.querySelector(
                                ".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block").getAttribute("data-size");
                            zerolowertext = zero_text.toLocaleLowerCase();
                        }
                    }
                } else {
                    if (obj != null) {
                        zero_text = obj.getAttribute("data-size");
                        zerolowertext = zero_text.toLocaleLowerCase();
                    }
                }
                if (productblockmod.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") !=
                    null) {
                    productblockmod.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active")
                        .classList.remove("inc_active");
                }
                if (productblockshow.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active") !=
                    null) {
                    productblockshow.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active")
                        .classList.remove("inc_active");
                }
                try {
                    if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                        zerolowertext + '"]') != null) {
                        productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                            zerolowertext + '"]').classList.add("inc_active");
                        productblockshow.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' +
                            zerolowertext + '"]').classList.add("inc_active");
                    }
                } catch (error) {

                    if (productblockmod.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" +
                        zerolowertext + "']") != null) {
                        productblockmod.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" +
                            zerolowertext + "']").classList.add("inc_active");
                        productblockshow.querySelector(".inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize='" +
                            zerolowertext + "']").classList.add("inc_active");
                    }
                }

                if (productblockmod.querySelector(".inc_product_desc_att_zero_title_text_selected") != null) {
                    productblockmod.querySelector(".inc_product_desc_att_zero_title_text_selected").innerText = zero_text;
                }
                if (productblockshow.querySelector(".inc_product_desc_att_zero_title_text_selected") != null) {
                    productblockshow.querySelector(".inc_product_desc_att_zero_title_text_selected").innerText = zero_text;
                }
            }
            INC.methods.updateProductBlock(productblockshow, findobj, blocktype);
            INC.methods.updateProductBlock(productblockmod, findobj, blocktype);
            if (window.innerWidth < 821) {
                if (document.querySelector(".inc_product_block.show_overlay") != null) {
                    let allact = document.querySelectorAll(".inc_product_desc_att_block.inc_active");
                    if (document.querySelector(".inc_product_modal_block.inc_active") == null && document.querySelector(
                        ".inc_sidebar_modal_block.inc_active") == null) {
                        document.querySelector("html").classList.remove("inc_overlay");
                        document.querySelector("body").classList.remove("inc_popup_open");
                    }
                    for (let actelm in allact) {
                        if (allact[actelm] != null && Object.prototype.hasOwnProperty.call(allact, actelm)) {
                            allact[actelm].classList.remove("inc_active");
                        }
                    }
                    if (document.querySelector(".inc_product_block.show_overlay") != null) {
                        document.querySelector(".inc_product_block.show_overlay").classList.remove("show_overlay");
                    }
                }
            }
        }
    };
    INC.methods.checkVariantSelection = function (prod_module_block) {
        let attr_flag_color = false;
        let attr_flag_size = false;
        let attr__flag_zero = false;
        let attr__flag_third = false;
        let elSize = prod_module_block.querySelector(".inc_product_desc_att_size_block.inc_active");
        let elColor = prod_module_block.querySelector(".inc_product_modal_block .inc_product_desc_att_color_block.inc_active");
        let elattr0 = prod_module_block.querySelector(".inc_product_desc_att_zero_block.inc_active");
        let elthird3 = prod_module_block.querySelector(".inc_product_desc_att_third_block.inc_active");
        if (elColor != null && elattr0 != null && elthird3 != null && elSize != null) {
            if (elColor.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") != null && elattr0.querySelector(
                ".inc_product_desc_att_size_list_item_img_block.inc_active") != null && elthird3.querySelector(
                    ".inc_product_desc_att_size_list_item_img_block.inc_active") != null && elSize.querySelector(
                        ".inc_product_desc_att_size_list_item_img_block.inc_active") != null) {
                attr_flag_color = true;
                attr__flag_zero = true;
                attr__flag_third = true;
                attr_flag_size = true;
            }
        } else if (elColor != null && elattr0 != null && elSize != null) {
            if (elColor.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") != null && elattr0.querySelector(
                ".inc_product_desc_att_size_list_item_img_block.inc_active") != null && elSize.querySelector(
                    ".inc_product_desc_att_size_list_item_img_block.inc_active") != null) {
                attr_flag_color = true;
                attr__flag_zero = true;
                attr__flag_third = true;
                attr_flag_size = true;
            }
        } else if (elColor != null && elattr0 != null) {
            if (elColor.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") != null && elattr0.querySelector(
                ".inc_product_desc_att_size_list_item_img_block.inc_active") != null) {
                attr_flag_color = true;
                attr__flag_zero = true;
                attr_flag_size = true;
                attr__flag_third = true;
            }
        } else {
            if (elColor != null) {
                if (elColor.querySelector(".inc_product_desc_att_color_list_item_block.inc_active") != null) {
                    attr_flag_color = true;
                }
            } else {
                attr_flag_color = true;
            }
            if (elattr0 != null) {
                if (elattr0.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") != null) {
                    attr__flag_zero = true;
                }
            } else {
                attr__flag_zero = true;
            }
            if (elSize != null) {
                if (elSize.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") != null) {
                    attr_flag_size = true;
                }
            } else {
                attr_flag_size = true;
            }
            if (elthird3 != null) {
                if (elthird3.querySelector(".inc_product_desc_att_size_list_item_img_block.inc_active") != null) {
                    attr__flag_third = true;
                }
            } else {
                attr__flag_third = true;
            }
        }
        if (attr_flag_color == trueflag && attr__flag_zero == trueflag && attr__flag_third == trueflag) {
            return 1;
        } else {
            if (attr_flag_size == falseflag) {
                return 2;
            } else if (attr__flag_third == falseflag) {
                return 3;
            } else if (attr_flag_color == falseflag) {
                return 0;
            } else {
                return 0;
            }
        }
    };

    function imgcolorgen(colorObj, attColorImg) {
        let colrdcode = false;
        let imagecode = false;
        if (colorObj["colorCode"] != "" && colorObj["colorCode"] != undefined) {
            colrdcode = true;
        } else if (colorObj["imgSrc"].length > 0) {
            if (colorObj["colorCode"] == "" && colorObj["imgSrc"].charAt(0) != "#") {
                let colorImg = generate_html_tag("img");
                colorImg.setAttribute("alt", colorObj["text"]);
                colorImg.src = colorObj["imgSrc"];
                attColorImg.appendChild(colorImg);
            } else {
                imagecode = true;
            }
        }
        if (colrdcode == trueflag || imagecode == trueflag) {
            let spancolorcode = generate_html_tag("span");
            spancolorcode.setAttribute("alt", colorObj["text"]);
            if (imagecode == trueflag) {
                spancolorcode.style.backgroundColor = colorObj["imgSrc"];
            } else {
                spancolorcode.style.backgroundColor = colorObj["colorCode"];
            }
            attColorImg.appendChild(spancolorcode);
        }
    }
    INC.methods.updateProductBlock = function (productBlockel, findObj, blockType) {
        let dataStore = INC.dataStore;
        let productBlock = productBlockel;
        let productModuleBlock = productBlock.parentNode.parentNode;
        let modal_attr_block = productModuleBlock.querySelector(".inc_product_modal_block");
        let zero_text = modal_attr_block.querySelector(".inc_product_desc_att_block").getAttribute("data-zero");
        let size_text = modal_attr_block.querySelector(".inc_product_desc_att_block").getAttribute("data-size");
        let color_text = modal_attr_block.querySelector(".inc_product_desc_att_block").getAttribute("data-color");
        let third_text = modal_attr_block.querySelector(".inc_product_desc_att_block").getAttribute("data-third");
        let elproductPriceLabel = productBlock.querySelector(".inc_product_ecirp_label_block");
        let sel_attr_text = "";
        if (zero_text != undefined) {
            findObj.zero_text = zero_text;
            findObj.zeroText = zero_text;
            sel_attr_text = zero_text;
        } else {
            findObj.zeroText = "";
            findObj.zero_text = "";
        }
        if (color_text != undefined) {
            findObj.color_text = color_text;
            findObj.colorText = color_text;
            if (sel_attr_text == "") {
                sel_attr_text = color_text.split("_")[0];
            } else {
                sel_attr_text = color_text.split("_")[0] + " / " + sel_attr_text;
            }
        } else {
            findObj.color_text = "";
        }
        if (size_text != undefined) {
            findObj.sizeText = size_text;
            sel_attr_text = sel_attr_text + " / " + size_text;
        } else {
            findObj.sizeText = "";
        }
        if (third_text != undefined) {
            findObj.thirdText = third_text;
            sel_attr_text = sel_attr_text + " / " + third_text;
        } else {
            findObj.thirdText = "";
        }

        if (productBlock.querySelector(".inc_product_variant_simple_text") != null) {

            if (blockType == "sidebar" || blockType == "am") {
                productBlock.querySelector(".inc_product_variant_simple_text").innerText = "Choose Size";
                productBlock.querySelector(".inc_product_variant_simple_text").setAttribute("title", "Choose Size");
            } else {
                if (productBlock.querySelector(".inc_product_variant_simple_text").innerText.indexOf("Choose") >= 0) {
                    productBlock.querySelector(".inc_product_variant_simple_text").setAttribute("title", "Choose Size");
                    productBlock.querySelector(".inc_product_variant_simple_block").classList.add("inc_select")
                } else {
                    productBlock.querySelector(".inc_product_variant_simple_text").setAttribute("title", "Choose Size");
                }
                if (productBlock.querySelector('.Inc_checked')) {
                    productBlock.querySelector(".inc_product_variant_simple_text").setAttribute("title", sel_attr_text);
                }
                productBlock.querySelector(".inc_product_variant_simple_text").setAttribute("title_", sel_attr_text);
                productBlock.querySelector(".inc_product_variant_simple_block").classList.remove("inc_select")
                if (productModuleBlock.querySelector(".inc_product_block .inc_product_add_block.added_inc") != null) {
                    productBlock.querySelector(".inc_product_variant_simple_text").innerText = "";
                    let variant_span = generate_html_tag("span", "variant_span");
                    variant_span.innerText = sel_attr_text;

                    productBlock.querySelector(".inc_product_variant_simple_text").appendChild(variant_span);
                }

            }
            if (blockType != "sidebar" && blockType != "am") {
                if (color_text != null) {
                    let PrdVarSimTxt = productBlock.querySelector(".inc_product_variant_simple_text");

                    let ccode = ''
                    if (modal_attr_block.querySelector(".inc_product_desc_att_color_list_item_block.inc_active div")) {
                        ccode = modal_attr_block.querySelector(".inc_product_desc_att_color_list_item_block.inc_active div").getAttribute("data-colorcode");
                    }
                    let colorTitle1 = generate_html_tag("div", 'inc_colortile');
                    colorTitle1.addEventListener("click", function (e) {
                        e.preventDefault();
                    });
                    console.log(sel_attr_text)
                    if (ccode) {
                        colorTitle1.style.backgroundColor = ccode;
                        PrdVarSimTxt.innerHTML = "";
                        PrdVarSimTxt.appendChild(colorTitle1);
                        PrdVarSimTxt.innerHTML = PrdVarSimTxt.innerHTML + "<span>" + sel_attr_text + "</span>";
                        colorTitle1.classList.add("colorBox");
                        PrdVarSimTxt.setAttribute('title', sel_attr_text)
                    }
                }
                if (productBlock.querySelector('.Inc_checked') == null) {
                    productBlock.querySelector(".inc_product_variant_simple_text").innerHTML = "Choose Size"
                    productBlock.querySelector(".inc_product_variant_simple_text").parentElement.classList.add('inc_select')
                }
            }
        }
        let productObj = INC.dataStore.methods().getProductByAtt(findObj);
        if (Object.keys(productObj).length != 0) {
            let previousSKU = "";
            previousSKU = productBlock.getAttribute("data-sku");
            productBlock.setAttribute("data-id", productObj.id);
            productBlock.setAttribute("data-sku", productObj.sku);
            productBlock.setAttribute("data-main_id", productObj.mainId);
            productBlock.setAttribute("data-bundle_id", productObj.bundleId);
            productModuleBlock.setAttribute("data-id", productObj.id);
            productModuleBlock.setAttribute("data-sku", productObj.sku);
            productModuleBlock.setAttribute("data-main_id", productObj.mainId);
            productModuleBlock.setAttribute("data-bundle_id", productObj.bundleId);
            if (document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="' + productObj.mainId + '"]') != null && sel_attr_text !=
                "") {
                let added_sum_prod = document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="' + productObj.mainId + '"]');
                added_sum_prod.querySelector(".inc_pdp_bundle_cart_added_product_att_color_text_block").textContent = sel_attr_text;
                added_sum_prod.querySelector(".inc_pdp_bundle_cart_added_product_att_color_text_block").setAttribute("style", "");
                added_sum_prod.querySelector(".inc_pdp_bundle_cart_added_product_att_block").setAttribute("title", sel_attr_text);
            }
            if (productModuleBlock.querySelector(".inc_product_desc_att_size_title_text") != null && sel_attr_text != "") {
                productModuleBlock.querySelector(".inc_product_desc_att_size_title_text").setAttribute("title", sel_attr_text);

            }
            if (color_text != undefined) {
                let ccode = modal_attr_block.querySelector(".inc_product_desc_att_color_list_item_block.inc_active div").getAttribute("data-colorcode");
                productModuleBlock.querySelector(".inc_product_showcase_block .inc_product_desc_att_color_title_text").style.backgroundColor = ccode;
                if (window.innerWidth < 769) {
                    productModuleBlock.querySelector(".inc_product_modal_block .inc_product_desc_att_color_title_text").style.backgroundColor = ccode;
                }
            }
            let elImgBlock = productBlock.querySelector(".inc_product_img_block");
            let elImgGalleryListBlock = productBlock.querySelector(".inc_product_img_gallery_list_block");
            let elTitleText = productBlock.querySelector(".inc_product_desc_title_text");
            let elPriceActiveText = productBlock.querySelector(".inc_product_desc_ecirp_active_text");
            let elPriceRegularText = productBlock.querySelector(".inc_product_desc_ecirp_regular_text");
            let elPriceRrpText = productBlock.querySelector(".inc_product_desc_ecirp_rrp_text");
            let elAddText = productBlock.querySelector(".inc_product_desc_add_text");
            let elworthPrice = productBlock.querySelector(".inc_product_desc_ecirp_worth_text");
            let elGalleryRightArrow = productBlock.querySelector(".inc_product_img_gallery_right_block");
            let elGallerylefttArrow = productBlock.querySelector(".inc_product_img_gallery_left_block");
            let eladdbtnqtyblock = productBlock.querySelector(".inc_product_desc_qty_add_btn_block");
            if (productBlockel.parentNode.classList.contains("inc_product_modal_block") || productBlockel.parentNode.className ==
                "inc_product_modal_block inc_active") {
                if (productBlock.querySelector(".inc_product_header_main_title_block") != null) {
                    var elModalTitle = productBlock.querySelector(".inc_product_header_main_title_block");
                }
            }
            if (productBlock.parentNode.className.indexOf("inc_product_showcase_block") >= 0) {
                if (blockType != "pdp") {
                    eladdbtnqtyblock.classList.add("inc_active");
                }
            }
            let elImgMainImg = elImgBlock.querySelector(".inc_product_img_main_img");
            elImgMainImg.querySelectorAll("img")[0].setAttribute("src", productObj["imageURL"]);
            elImgMainImg.querySelector("a").setAttribute("otherImageList", productObj.imageURL + "," + productObj["otherImageList"]);
            elImgMainImg.querySelector("a").setAttribute("imageURL", productObj["imageURL"]);
            elImgMainImg.querySelectorAll("img")[0].setAttribute("data-mouseover", productObj.imageURL + "," + productObj["otherImageList"]);
            elImgMainImg.querySelectorAll("img")[0].setAttribute("data-imageURL", productObj["imageURL"]);
            elImgMainImg.querySelector("a").setAttribute("otherImageList", productObj.imageURL + "," + productObj["otherImageList"]);
            elImgMainImg.querySelector("a").setAttribute("imageURL", productObj["imageURL"]);
            elImgMainImg.querySelectorAll("img")[0].setAttribute("data-mouseover", productObj.imageURL + "," + productObj["otherImageList"]);
            elImgMainImg.querySelectorAll("img")[0].setAttribute("data-imageURL", productObj["imageURL"]);
            let prod_ids = productModuleBlock.getAttribute("data-main_id");
            if (document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' + prod_ids +
                '"]') != null) {
                let tab_img = document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' +
                    prod_ids + '"]');
                if (tab_img.querySelector("img") != null) {
                    tab_img.querySelector("img").src = productObj["imageURL"];
                }
            }
            elImgGalleryListBlock.innerHTML = "";
            if (productObj.otherImageList != null && productObj.otherImageList.length >= 1) {
                prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock);
            } else {
                productBlock.classList.add("inc_other_noimage");
            }

            if (window.innerWidth > 820) {
                if (productObj.otherImageList == null || productObj.otherImageList.length < 2 || productObj.otherImageList.length == 1 || productObj
                    .otherImageList == "") {
                    elGalleryRightArrow.style.display = "none";
                    elGallerylefttArrow.style.display = "none";
                } else {
                    elGalleryRightArrow.style.display = "block";
                    elGallerylefttArrow.style.display = "block";
                }
            } else {
                if (productObj.otherImageList == null || productObj.otherImageList.length < 1 || productObj.otherImageList.length == 1 || productObj
                    .otherImageList == "") {
                    elGalleryRightArrow.style.display = "none";
                    elGallerylefttArrow.style.display = "none";
                } else {
                    elGalleryRightArrow.style.display = "block";
                    elGallerylefttArrow.style.display = "block";
                }
            }
            if (elTitleText.querySelector("strong") != null && INC.config.pageType == "pdp") {
                elTitleText.querySelector("div").innerHTML = "<strong>This Item: </strong>" + titleCase(productObj.name);
            } else {
                elTitleText.querySelector("div").textContent = titleCase(productObj.name);
            }
            elTitleText.querySelector("a").setAttribute("title", productObj.name);
            if (elModalTitle != null) {
                elModalTitle.querySelector("a").textContent = titleCase(productObj.name);
                elModalTitle.querySelector("a").setAttribute("title", titleCase(productObj.name));
            }
            let activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
            let regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
            let rrpPrice = parseFloat(productObj.rrpPrice).toFixed(2).toString();
            let wasPrice = parseFloat(productObj.wasPrice).toFixed(2).toString();
            let savePrice = productObj.savePrice
            let totalsaveprc = get_discount_price(productObj.regularPrice, productObj.activePrice);

            elPriceActiveText.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            elPriceRegularText.textContent = "";
            elPriceRrpText.textContent = "";

            if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elPriceActiveText.innerHTML = formatter.format(activePrice).replace('.00', '');
                elPriceRegularText.innerHTML = "<span> RRP </span>" +  formatter.format(regularPrice).replace('.00', '');
                if (rrpPrice > 0 && rrpPrice != "NaN") {
                    elPriceRrpText.innerHTML = "<span> RRP </span>" + formatter.format(rrpPrice).replace('.00', '');
                }
                //elworthPrice.innerHTML = INC.config.saveBadgeText + formatter.format(totalsaveprc);
                //elproductPriceLabel.innerHTML = INC.config.saveBadgeText + formatter.format(totalsaveprc);
            } else {
                elworthPrice.innerHTML = "";
                elPriceActiveText.innerHTML = formatter.format(activePrice).replace('.00', '');
                elproductPriceLabel.innerHTML = ""

                if (rrpPrice > 0 && rrpPrice != "NaN") {
                    elPriceRrpText.innerHTML = "<span> RRP </span>" + formatter.format(rrpPrice).replace('.00', '');
                } else {
                    elPriceRrpText.innerHTML = ""
                }
            }

            if (totalsaveprc > 0 && regularPrice > 0) {
                elworthPrice.innerHTML = INC.config.saveBadgeText + formatter.format(totalsaveprc).replace('.00', '');
            } else {
                elworthPrice.parentNode.parentNode.classList.add("empty")
                elworthPrice.innerHTML = "";
            }

            if (productBlock.querySelector(".inc_product_desc_add_text").textContent == "Added" || productBlock.querySelector(
                ".inc_product_desc_add_text").textContent == INC.config.AddedText || productBlock.parentNode.parentNode.querySelector(
                    ".inc_product_desc_add_text").textContent == INC.config.AddedText) {
                if (!Object.prototype.hasOwnProperty.call(dataStore, "bundleCartProducts")) {
                    dataStore["bundleCartProducts"] = {};
                    INC.config.pdpaddedProductList = [];
                    INC.config.bundle_tracking = [];
                    INC.config.bundle_skuPushed = [];
                    INC.config.dupBasket = [];
                }
                dataStore["bundleCartProducts"][productObj["sku"]] = dataStore["bundleCartProducts"][previousSKU];
                if (productObj["sku"] != previousSKU) {
                    delete dataStore["bundleCartProducts"][previousSKU];
                }
            }
            let elQtyInput = productBlock.parentNode.parentNode.querySelector(
                ".inc_product_modal_block .inc_product_desc_qty_add_btn_block .inc_product_qty_block input");
            let sku = productBlock.getAttribute("data-sku");
            let bundle_id = productBlock.getAttribute("data-bundle_id");
            let main_id = productBlock.getAttribute("data-main_id");
            let qty = parseInt(elQtyInput.value);
            let pname = productBlock.querySelector(".inc_product_desc_title_text").textContent;
            let pprice = productBlock.querySelector(".inc_product_desc_ecirp_active_text").textContent.replace("£", "");
            if (elAddText.parentNode.parentNode.querySelector(".inc_product_desc_add_img.checked") != null) {
                INC.methods.updateBundleCart({
                    sku: sku,
                    qty: qty,
                }, "add", main_id, bundle_id, pname, pprice);
            }
            setTimeout(function () {
                if (elImgMainImg.querySelectorAll("img")[0].naturalWidth == 360) {
                    elImgMainImg.querySelectorAll("img")[0].setAttribute("src", productObj["imageURLMain"]);
                }
            }, 200);
        }
        if (blockType == "pdp" && productModuleBlock.querySelector(".inc_product_add_block.added_inc") != null) {
            productModuleBlock.querySelector(".inc_product_variant_simple_block").classList.add("added_inc");
        }
    };
    INC.methods.createProductListItemBlock = function (productObjs) {
        let productListItemBlock = generate_html_tag("div", "inc_pdp_bundle_product_list_item_block");
        let findObj = new INC.classes.FindObj({
            id: productObjs.id,
            mainId: productObjs.mainId,
        });
        let productObj = INC.dataStore.methods().getProductById(findObj);
        productListItemBlock.style.userSelect = "none";
        productListItemBlock.setAttribute("data-id", productObj.id);
        productListItemBlock.setAttribute("data-sku", productObj.sku);
        productListItemBlock.setAttribute("data-main_id", productObj.mainId);
        productListItemBlock.setAttribute("data-bundle_id", productObj.bundleId);
        let seemoreprodhtml =
            '<div class="inc_pdp_bundle_product_list_item_added_block"><div class="inc_pdp_bundle_product_list_item_added_btn_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img"></div></div><div class="inc_pdp_bundle_product_list_item_added_btn_text_block"><div class="inc_pdp_bundle_product_list_item_added_btn_text"></div></div></div></div><div class="inc_pdp_bundle_product_list_item_img_block"><div class="inc_pdp_bundle_product_list_item_img"><img class="inc_lazy" data-src="' +
            productObj.imageURL + '" src="' + productObj.imageURL +
            '"></div></div><div class="inc_pdp_bundle_product_list_item_title_block"><div class="inc_pdp_bundle_product_list_item_title_text_block"><div class="inc_pdp_bundle_product_list_item_title_text"></div></div></div><div class="inc_pdp_bundle_product_list_item_ecirp_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text"></div></div></div></div>';
        productListItemBlock.innerHTML = seemoreprodhtml;
        productListItemBlock.querySelector(".inc_pdp_bundle_product_list_item_img img").setAttribute("onerror", "this.src='" + INC.config.noimage +
            "'");
        productListItemBlock.addEventListener("click", function () {
            Array.prototype.forEach.call(document.querySelectorAll(".inc_product_desc_att_size_list_block"), function (attSizeListBlock) {
                attSizeListBlock.classList.remove("inc_active");
            });
            let elListMainBlock = document.querySelector(".inc_pdp_bundle_product_list_main_block");
            Array.prototype.forEach.call(elListMainBlock.querySelectorAll(".inc_product_module_block"), function (productBlock) {
                productBlock.setAttribute("style", "display: none!important");
            });
            elListMainBlock.querySelector(".inc_product_module_block" + '[data-main_id="' + productObj.mainId + '"]').style.display = "block";
            Array.prototype.forEach.call(productListItemBlock.parentNode.querySelectorAll(".inc_pdp_bundle_product_list_item_block"), function (
                pListItemBlock) {
                pListItemBlock.classList.remove("inc_active");
            });
            productListItemBlock.classList.add("inc_active");
        });
        return productListItemBlock;
    };
    INC.methods.updateBundleCart = function (bundleCartObj, type, main_id, bundle_id, pname, pprice) {
        let dataStore = INC.dataStore;
        let listToDelete = [];
        if (!Object.prototype.hasOwnProperty.call(dataStore, "bundleCartProducts")) {
            dataStore["bundleCartProducts"] = {};
            INC.config.pdpaddedProductList = [];
            INC.config.bundle_tracking = [];
            INC.config.bundle_skuPushed = [];
            INC.config.dupBasket = [];
        }
        switch (type) {
            case "add":
                dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];
                if (INC.config.bundle_skuPushed.indexOf(bundleCartObj["sku"]) == -1) {
                    INC.config.bundle_skuPushed.push(bundleCartObj["sku"]);
                }
                if (INC.config.pdpaddedProductList.indexOf(main_id) == -1) {
                    INC.config.pdpaddedProductList.push(main_id);
                    INC.config.bundle_tracking.push({
                        id: main_id,
                        bid: bundle_id,
                        pname: pname,
                        prc: pprice,
                        qty: bundleCartObj["qty"],
                    });
                }
                break;
            case "sub":
                delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
                INC.config.pdpaddedProductList.remove_prod_list = function () {
                    let what,
                        a = arguments,
                        L = a.length,
                        ax;
                    while (L && this.length) {
                        what = a[--L];
                        while ((ax = this.indexOf(what)) != -1) {
                            this.splice(ax, 1);
                        }
                    }
                    return this;
                };
                listToDelete[0] = main_id;
                for (let i = 0; i < INC.config.bundle_tracking.length; i++) {
                    let obj = INC.config.bundle_tracking[i];
                    if (obj != undefined) {
                        if (listToDelete.indexOf(obj.id) != -1) {
                            INC.config.bundle_tracking.splice(i, 1);
                        }
                    }
                }
                INC.config.bundle_skuPushed.remove_prod_list = function () {
                    let what1,
                        a1 = arguments,
                        L1 = a1.length,
                        ax1;
                    while (L1 && this.length) {
                        what1 = a1[--L1];
                        while ((ax1 = this.indexOf(what1)) != -1) {
                            this.splice(ax1, 1);
                        }
                    }
                    return this;
                };
                INC.config.pdpaddedProductList.remove_prod_list(main_id);
                INC.config.bundle_skuPushed.remove_prod_list(bundleCartObj["sku"]);
                break;
        }
        if (INC.config.pageType == "pdp") {
            this.calculateBundleTotal();
        }
    };
    INC.methods.calculateBundleTotal = function () {
        let dataStore = INC.dataStore;
        let bundleCartProducts = dataStore["bundleCartProducts"];
        let productListObj = dataStore.dataStoreObj;
        let duplicate_check_produ = [];
        let totalRegularPrice = 0;
        let totalActivePrice = 0;
        let totalrrpPrice = 0;
        let totalMainProduct = 0;
        let totalAddonProducts = 0;
        let totalAddonProductsCount = 0;
        let totalProductCount = 0;
        let total_qty = 0;
        let total_collect_point = 0;
        let mainId = INC.methods.getProductIdFromWebPage();
        if (bundleCartProducts != null && bundleCartProducts != undefined) {
            Object.keys(bundleCartProducts).forEach(function (sku) {
                for (let mainProductId in productListObj) {
                    for (let childProductId in productListObj[mainProductId]) {
                        if (sku == productListObj[mainProductId][childProductId]["sku"]) {
                            if (duplicate_check_produ.indexOf(productListObj[mainProductId][
                                childProductId
                            ]["sku"]) == -1) {
                                duplicate_check_produ.push(productListObj[mainProductId][
                                    childProductId
                                ]["sku"]);
                                let regularPrice = productListObj[mainProductId][
                                    childProductId
                                ]["regularPrice"];
                                let activePrice = productListObj[mainProductId][
                                    childProductId
                                ]["activePrice"];
                                if (productListObj[mainProductId][childProductId]["rrpPrice"] != null) {
                                    let rrpPrice = productListObj[mainProductId][childProductId]["rrpPrice"].replace('RRP|', '').replace('TVP|', '').trim();
                                    if(rrpPrice == "0.00" || rrpPrice == "" || rrpPrice == null){
                                        rrpPrice = activePrice
                                    }
                                    totalrrpPrice = totalrrpPrice + (parseFloat(bundleCartProducts[sku])) * rrpPrice;
                                }
                                totalRegularPrice = totalRegularPrice + parseFloat(bundleCartProducts[sku]) * regularPrice;
                                totalActivePrice = totalActivePrice + parseFloat(bundleCartProducts[sku]) * activePrice;
                                total_qty = total_qty + parseInt(bundleCartProducts[sku]);
                                if (productListObj[mainProductId][
                                    childProductId
                                ]["worthPrice"] != "" && productListObj[mainProductId][
                                childProductId
                                ]["worthPrice"] != null) {
                                    total_collect_point = total_collect_point + +(productListObj[mainProductId][
                                        childProductId
                                    ]["worthPrice"] * parseInt(bundleCartProducts[sku]));
                                }
                                if (productListObj[mainProductId][
                                    childProductId
                                ].mainId == mainId) {
                                    totalProductCount++;
                                    totalMainProduct = totalMainProduct + parseInt(bundleCartProducts[sku]) * activePrice;
                                }
                                if (productListObj[mainProductId][
                                    childProductId
                                ].mainId != mainId) {
                                    totalProductCount++;
                                    totalAddonProductsCount++;
                                    totalAddonProducts = totalAddonProducts + parseInt(bundleCartProducts[sku]) * activePrice;
                                }
                            }
                        }
                    }
                }
            });
        }

        let priceObj = {
            totalActivePrice: parseFloat(totalActivePrice).toFixed(2),
            totalRegularPrice: parseFloat(totalRegularPrice).toFixed(2),
            totalMainProduct: totalMainProduct,
            totalAddonProducts: totalAddonProducts,
            totalrrpPrice: parseFloat(totalrrpPrice).toFixed(2),
            totalAddonProductsCount: totalAddonProductsCount,
            totalProductCount: totalProductCount,
            total_qty: total_qty,
            total_collect_point: total_collect_point,
        };
        this.updateBundleCartBlock(priceObj);
    };
    INC.methods.updateBundleCartBlock = function (priceObj) {
        let dataStore = INC.dataStore;
        let bundleCartProducts = dataStore["bundleCartProducts"];
        let totalRegularPrice = priceObj.totalRegularPrice;
        let totalActivePrice = priceObj.totalActivePrice;
        let totalMainProduct = priceObj.totalMainProduct;
        let totalAddonProducts = priceObj.totalAddonProducts;
        let totalrrpPrice = priceObj.totalrrpPrice;
        let totalAddonProductsCount = priceObj.totalAddonProductsCount;
        let totalProductCount = priceObj.totalProductCount;
        let elPdpBundleCartBlock = document.querySelector(".inc_pdp_bundle_cart_block");
        if (elPdpBundleCartBlock != null) {
            let elBundleCartAddedBlock = document.querySelector(".inc_pdp_bundle_cart_added_block");
            let elBundleCartSummaryViewBtnCount = document.querySelector(".inc_pdp_bundle_cart_summary_view_btn_count");
            let elBundleCartPriceRegularText = document.querySelector(".inc_pdp_bundle_cart_summary_ecirp_regular_text");
            let elBundleCartPriceActiveText = document.querySelector(".inc_pdp_bundle_cart_summary_ecirp_active_text");
            let elBundleCartTitleTextcount = document.querySelector(".inc_pdp_bundle_cart_title_text");
            let elbundlesavetext = document.querySelector(".inc_pdp_bundle_cart_summary_ecirp_save_text");
            let elBundleCartAddBtnCount = document.querySelector(".inc_pdp_bundle_cart_summary_count_text");
            let elBundleCartAddBtnText = document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_text");
            var elCartsummaryMainPrdtxtBlock = document.querySelector(".inc_pdp_bundle_cart_summary_main_prd_txt");
            let elCartsummaryMainPrdPrcBlock = document.querySelector(".inc_pdp_bundle_cart_summary_main_prd_prc");
            var elCartsummaryAddonPrdtxtBlock = document.querySelector(".inc_pdp_bundle_cart_summary_addon_prd_txt");
            var elCartsummaryAddonPrdPrcBlock = document.querySelector(".inc_pdp_bundle_cart_summary_addon_prd_prc");
            let elBundleCartPricerrpText = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_rrp_text')
            elBundleCartAddedBlock.innerHTML = "";
            let bundleCartProductsArray = Object.keys(bundleCartProducts);
            elBundleCartSummaryViewBtnCount.textContent = bundleCartProductsArray.length;
            if (window.innerWidth < 769) {
                elBundleCartTitleTextcount.textContent = "Items you've added";
            }
            for (let skup in INC.config.bundle_skuPushed) {
                let elcont = INC.config.bundle_skuPushed[skup];
                for (let bundaray in bundleCartProductsArray) {
                    let findObj = new INC.classes.FindObj({
                        sku: bundleCartProductsArray[bundaray],
                    });
                    let productObj = INC.dataStore.methods().getProductBySKU(findObj);
                    if (elcont == productObj.id) {
                        let productId = productObj.id;
                        let prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[bundaray]],
                            "pdp");
                        if (prepen_elm != undefined) {
                            if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
                                elBundleCartAddedBlock.insertBefore(prepen_elm, elBundleCartAddedBlock.childNodes[0]);
                            }
                        }
                    }
                }
            }
            elBundleCartPriceRegularText.style.display = "none";
            if (totalActivePrice != totalRegularPrice) {
                elBundleCartPriceRegularText.style.display = "flex";
            }
            if (bundleCartProductsArray.length == 0) {
                setTimeout(function () {
                    onloadpdp_delete = false;
                    document.querySelectorAll(".inc_pdp_block .inc_product_desc_add_block")[1].click();
                    onloadpdp_delete = true;
                }, 5);
            }

            elBundleCartPriceActiveText.innerHTML = formatter.format(totalActivePrice);
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove("simple_ecirp");
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove("is_special_ecirp");
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove("simple_ecirp");
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove("is_special_ecirp");
            let totalsaveprcs = get_discount_price(totalRegularPrice, totalActivePrice);
            let totalrrpsaveprcs = get_discount_price(totalRegularPrice, totalActivePrice)
            if (totalRegularPrice != "0.00" && totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
                elBundleCartPriceRegularText.innerHTML =  "<span style='margin-right:5px;'> RRP </span>" + formatter.format(totalRegularPrice).replace('.00', '');
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add("is_special_ecirp");
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add("is_special_ecirp");
                elbundlesavetext.innerHTML = "Save " + formatter.format(totalsaveprcs).replace('.00', '');
            } else {
                //elbundlesavetext.innerHTML = "";
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add("simple_ecirp");
            }

            if (totalrrpsaveprcs > 0 && totalrrpPrice > 0) {
                elbundlesavetext.innerHTML = "Save " + formatter.format(totalrrpsaveprcs).replace('.00', '');
            } else {
                elbundlesavetext.innerHTML = ""
            }

            if (totalrrpPrice != "0.00" && totalrrpPrice != totalActivePrice && totalrrpPrice != null && totalrrpPrice != "") {
                elBundleCartPricerrpText.innerHTML = "<span> RRP </span>" + formatter.format(totalrrpPrice).replace('.00', '');
            } else {
                elBundleCartPricerrpText.innerHTML = ""
            }

            if (window.innerWidth < 820) {
                elCartsummaryMainPrdtxtBlock.innerHTML = "Main product ";
                elCartsummaryMainPrdPrcBlock.innerText = ""
                if (totalMainProduct != undefined) {
                    elCartsummaryMainPrdPrcBlock.innerText = formatter.format(totalMainProduct).replace('.00', '');
                }
                if (bundleCartProductsArray.length == 1) {

                    if (totalAddonProducts == 0 || totalAddonProducts == 0.00) {
                        elCartsummaryAddonPrdtxtBlock.innerText = "No add-on product selected ";
                        elCartsummaryAddonPrdPrcBlock.innerHTML = ""
                    } else {
                        elCartsummaryAddonPrdtxtBlock.innerText = "1 add-on product selected ";
                        elCartsummaryAddonPrdPrcBlock.innerHTML = elCartsummaryAddonPrdPrcBlock.innerText = formatter.format(totalAddonProducts).replace('.00', '');
                    }
                } else if (bundleCartProductsArray.length > 1) {
                    if (totalMainProduct == 0 || totalMainProduct == 0.00) {
                        elCartsummaryAddonPrdtxtBlock.innerText = bundleCartProductsArray.length + " " + "add-on products selected ";
                    } else {
                        if (bundleCartProductsArray.length == 2) {
                            elCartsummaryAddonPrdtxtBlock.innerText = bundleCartProductsArray.length - 1 + " " + "add-on product selected ";
                        } else {
                            elCartsummaryAddonPrdtxtBlock.innerText = bundleCartProductsArray.length - 1 + " " + "add-on products selected ";
                        }

                    }

                    elCartsummaryAddonPrdPrcBlock.innerText = formatter.format(totalAddonProducts).replace('.00', '');
                } else {
                    elCartsummaryAddonPrdtxtBlock.innerText = "No add-on product selected ";
                    elCartsummaryAddonPrdPrcBlock.innerHTML = "$0.00"
                }
            }
            if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
                let elBundleCartTitleText = document.querySelector(".inc_pdp_bundle_cart_title_text");
                let elBundleCartAddBtnTexts = document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_text");
                elBundleCartAddBtnTexts.style.textTransform = "none";
                elBundleCartTitleText.textContent = "Price summary";
                elBundleCartAddBtnTexts.textContent = "Add Bundle to Basket";
                if (totalProductCount <= 1) {
                    elBundleCartAddBtnTexts.textContent = "Add Bundle to Basket";
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " ITEM";
                } else if (totalProductCount == 2) {
                    elBundleCartAddBtnTexts.textContent = "Add Bundle to Basket";
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " ITEMS";
                } else if (totalProductCount == 3) {
                    elBundleCartAddBtnTexts.textContent = "Add Bundle to Basket";
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " ITEMS";
                } else if (totalProductCount == 4) {
                    elBundleCartAddBtnTexts.textContent = "Add Bundle to Basket";
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " ITEMS";
                } else if (totalProductCount == 5) {
                    elBundleCartAddBtnTexts.textContent = "Add Bundle to Basket";
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " ITEMS";
                } else if (totalProductCount == 6) {
                    elBundleCartAddBtnTexts.textContent = "Add Bundle to Basket";
                    elBundleCartAddBtnCount.innerHTML = Object.keys(INC.dataStore.bundleCartProducts).length + " ITEMS";
                }
            }
            let elPriceMainTitleText = elPdpBundleCartBlock.querySelector(".inc_pdp_bundle-cart_ecirp_main_title_text");
            let elPriceMainFigureText = elPdpBundleCartBlock.querySelector(".inc_pdp_bundle-cart_ecirp_main_figure_text");
            let elPriceAddonTitleText = elPdpBundleCartBlock.querySelector(".inc_pdp_bundle-cart_ecirp_addon_title_text");
            let elPriceAddonFigureText = elPdpBundleCartBlock.querySelector(".inc_pdp_bundle-cart_ecirp_addon_figure_text");
            let elPriceActiveText = elPdpBundleCartBlock.querySelector(".inc_pdp_bundle_cart_summary_ecirp_active_text");
            elPriceMainTitleText.textContent = "Main Product Price ";
            elPriceAddonTitleText.textContent = "Add-on(s) Selected  " + (totalAddonProductsCount > 0 ? totalAddonProductsCount : "");
            elPriceMainFigureText.innerHTML = formatter.format(totalMainProduct).replace('.00', '');
            elPriceAddonFigureText.innerHTML = formatter.format(totalAddonProducts).replace('.00', '');
            elPriceActiveText.innerHTML = formatter.format(totalActivePrice).replace('.00', '');
            setTimeout(function () {
                if (INC.dataStore.bundleCartProducts != null) {
                    if (Object.keys(INC.dataStore.bundleCartProducts).length == 0) {
                        elBundleCartAddBtnText.textContent = "Add to Basket";
                        elBundleCartAddBtnText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                    } else {
                        elBundleCartAddBtnText.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                    }
                }
            }, 100);
        }
    };
    INC.methods.createBundleCartAddedProductBlock = function (productId, qty) {
        let addedProductBlock = generate_html_tag("div", "inc_pdp_bundle_cart_added_product_block");
        let findObj = new INC.classes.FindObj({
            id: productId,
        });
        let productObj = INC.dataStore.methods().getProductById(findObj);
        addedProductBlock.setAttribute("data-id", productObj.id);
        addedProductBlock.setAttribute("data-sku", productObj.sku);
        addedProductBlock.setAttribute("data-main_id", productObj.mainId);
        addedProductBlock.setAttribute("data-bundle_id", productObj.bundleId);
        let prod_module_elm = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + productObj.mainId + '"]');
        if (prod_module_elm != null) {
            let modal_attr_block = prod_module_elm.querySelector(".inc_product_modal_block");
            let zero_text = modal_attr_block.querySelector(".inc_product_desc_att_block").getAttribute("data-zero");
            let size_text = modal_attr_block.querySelector(".inc_product_desc_att_block").getAttribute("data-size");
            let color_text = modal_attr_block.querySelector(".inc_product_desc_att_block").getAttribute("data-color");
            let third_text = modal_attr_block.querySelector(".inc_product_desc_att_block").getAttribute("data-third");
            let sel_attr_text = "";
            if (color_text != undefined) {
                sel_attr_text = color_text;
            }
            if (zero_text != undefined) {
                if (sel_attr_text == "") {
                    sel_attr_text = zero_text;
                } else {
                    sel_attr_text = sel_attr_text + " / " + zero_text;
                }
            }
            if (size_text != undefined) {
                sel_attr_text = sel_attr_text + " / " + size_text;
            }
            if (third_text != undefined) {
                sel_attr_text = sel_attr_text + " / " + third_text;
            }
            let addedsumprodhtml =
                '<div class="inc_pdp_bundle_cart_added_product_img_block"><div class="inc_pdp_bundle_cart_added_product_img"><img src="' + productObj
                    .imageURL + '" data-src="' + productObj.imageURL +
                '"></div></div><div class="inc_pdp_bundle_cart_added_product_title_block"><div class="inc_pdp_bundle_cart_added_product_title_text_block"><div class="inc_pdp_bundle_cart_added_product_title_text"><a title="' +
                productObj.name + '"><div style="text-transform: unset;">' + productObj.name +
                '</div></a></div></div></div><div class="inc_pdp_bundle_cart_added_product_qty_block"><div class="inc_pdp_bundle_cart_added_product_qty_text_block"><div class="inc_pdp_bundle_cart_addeed_product_qty_text">' +
                qty +
                '</div></div></div><div class="inc_pdp_bundle_cart_added_product_ecirp_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text">' +
                formatter.format(productObj.activePrice * qty).replace('.00', '') + '</div></div></div><div class="inc_pdp_bundle_cart_added_product_att_block" title="' +
                sel_attr_text +
                '"><div class="inc_pdp_bundle_cart_added_product_att_color_block"><div class="inc_pdp_bundle_cart_added_product_att_color_text_block" style="text-transform: none;">' +
                sel_attr_text +
                '</div></div><div class="inc_pdp_bundle_cart_added_product_att_size_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text"></div></div></div></div><div class="inc_pdp_bundle_cart_added_product_edit_block"><div class="inc_pdp_bundle_cart_added_product_edit_text_block"><div class="inc_pdp_bundle_cart_added_product_edit_text"></div></div><div class="inc_pdp_bundle_cart_added_product_edit_img_block"><div class="inc_pdp_bundle_cart_added_product_edit_img"></div></div></div>';
            addedProductBlock.innerHTML = addedsumprodhtml;
            addedProductBlock.querySelector(".inc_pdp_bundle_cart_added_product_img img").setAttribute("onerror", "this.src='" + INC.config.noimage +
                "'");
            let elEditTextBlock = addedProductBlock.querySelector(".inc_pdp_bundle_cart_added_product_edit_text_block");
            let elEditImgBlock = addedProductBlock.querySelector(".inc_pdp_bundle_cart_added_product_edit_img_block");
            elEditTextBlock.addEventListener("click", function () {
                if (INC.config.deviceType == "mobile") {
                    if (document.querySelector(".inc_pdp_bundle_product_list_item_block" + '[data-main_id="' + productObj.mainId + '"]') !=
                        null) document.querySelector(".inc_pdp_bundle_product_list_item_block" + '[data-main_id="' + productObj.mainId + '"]')
                            .click();
                }
                setTimeout(function () {
                    document.querySelector(".inc_product_block" + '[data-id="' + productObj.id + '"]').parentNode.parentNode
                        .querySelector(".inc_product_modal_block").classList.add("inc_active");
                    document.querySelector("html").classList.add("inc_overlay");
                }, 50);
            });
            elEditImgBlock.addEventListener("click", function () {
                document.querySelector(".inc_product_block" + '[data-id="' + productObj.id + '"]').querySelector(".inc_product_desc_add_block")
                    .click();
            });
            return addedProductBlock;
        }
    };
    INC.methods.clear = function () {
        remsidebarelm();
        if (document.querySelector(".inc_af_block") != null) {
            Array.prototype.forEach.call(document.querySelectorAll(".inc_af_block"), function (el) {
                el.parentNode.removeChild(el);
            });
        }

        if (document.querySelector(".inc_pdp_block") != null) {
            Array.prototype.forEach.call(document.querySelectorAll(".inc_pdp_block"), function (el) {
                el.parentNode.removeChild(el);
            });
        }
    };
    INC.methods.addProductToCart = function (findObjd, productBlock, add_btn_click, _add_prod_im, btn_addtocart, newbtntext, rec_type) {
        if (document.querySelector('.product-add-form form input[name=form_key]') != null) {
            var token = document.querySelector('.product-add-form form input[name=form_key]').value;
        }else if(document.querySelector('input[name=form_key]')){
            var token = document.querySelector('input[name=form_key]').value;
        }
        try {
            var findObj = new INC.classes.FindObj(findObjd);
            var productObj = INC.dataStore.methods().getProductById(findObj);
            var mainids = productBlock.getAttribute('data-main_id')
            var qty = productBlock.querySelector('input').value;
            var addProductURL = '/on/demandware.store/Sites-ganni-Site/en_GB/Cart-AddProduct'
            var params = ""

            setTimeout(function () {
                if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                    document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                    document.querySelector('html').classList.remove('inc_overlay')
                }
            }, 1500)
            if (productObj.ProductType == "configurable") {
                params = "pid=" + productObj.mainId + "&quantity=" + qty + "&options=%5B%5D"
            } else {
                params = "pid=" + productObj.mainId + "&quantity=" + qty + "&options=%5B%5D"
            }
            var data0 = {}

            if (window.location.pathname != '/checkout/cart/') {
                data0["product"] = productObj.mainId;
                data0["selected_configurable_option"] = '';
                data0["related_product"] = '';
                data0["item"] = productObj.mainId;
                data0["form_key"] = token;
                data0["qty"] = qty
            } else {
                token = document.querySelector('.form.form-cart input[name=form_key]').value;
                data0["product"] = productObj.mainId;
                data0["uenc"] = btoa('https://www.leekes.co.uk/checkout/cart/add/uenc/' + btoa(INC.clientConfig.checkoutLink) + "/product/" + productObj.mainId + "/in_cart/" + qty + "/");
                data0["form_key"] = token;
            }

            if (rec_type == trueflag) {
                INC.config.pdpaddedProductList = []
                INC.config.pdpaddedProductList.push(INC.config.Product_id.toString())
                INC.config.pdpaddedProductList.push(productObj.mainId.toString())
                checkAddedProductInJustAdded()
            }
            var addurl = ""
            if (window.location.pathname != '/checkout/cart/') {
                addurl = 'https://www.leekes.co.uk/checkout/cart/add/uenc/' + btoa(productObj.url) + "/product/" + productObj.mainId + "/";
            } else {
                addurl = INC.config.addToBasketURL;
            }
            getTrackingPixel()
            window.jQuery.ajax({
                type: "POST",
                url: addurl,
                data: data0,
                dataType: 'json',
                success: function (e) {
                    INC.config.pdpaddedProductList.push(productObj.mainId)
                    INC.config.sidebarremovedprod.push(mainids)
                    INC.config.disablebtn = true
                    addsuccess_(btn_addtocart, add_btn_click, productBlock, newbtntext, e)
                },
                error: function (res) {
                    add_btn_click.innerText = "Not Added";
                    btn_addtocart.innerText = "Not Added";
                    if (newbtntext != undefined) {
                        newbtntext.innerHTML = "Not Added";
                    }
                    setTimeout(function () {
                        add_btn_click.innerText = INC.config.addtoBagText;
                        if (btn_addtocart != null) {
                            btn_addtocart.innerText = INC.config.addtoBagText;
                        }
                        if (newbtntext != null) {
                            newbtntext.innerText = INC.config.addtoBagText;
                        }
                        Array.prototype.forEach.call(btn_addtocart, function (el) {
                            el.innerText = "Add";
                        });
                        if (btn_addtocart != undefined) {
                            btn_addtocart.innerText = INC.config.addtoBagText;
                            if (btn_addtocart.parentNode.parentNode != null) {
                                btn_addtocart.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                            }
                        }
                    }, 1000)
                    if (INC.config.pageType == "cartPage") {
                        if (productBlock != null) {
                            if (productBlock.parentNode != null) {
                                productBlock.parentNode.removeChild(productBlock);
                            }
                        }
                    }
                    if (window.innerWidth < 769) {
                        if (productBlock != null) {
                            if (productBlock.parentNode != null) {
                                productBlock.parentNode.removeChild(productBlock);
                            }
                        }
                        if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                            document.querySelector('.inc_recommended_tabs_list_item_block').click()
                        }
                    }
                    if (INC.config.pageType != "cartPage") {
                        setTimeout(function () {
                            loadsidebarajax(null, rec_type)
                        }, 500)
                    }
                },
            });

            function addsuccess_(btn_t, addbtnt, addedprdblock, newbtn, e) {
                INC.config.disablebtn = true
                if (e.error == true) {
                    add_btn_click.innerText = "Not Added";
                    btn_addtocart.innerText = "Not Added";
                    if (newbtntext != undefined) {
                        newbtntext.innerHTML = "Not Added";
                    }
                } else {
                    if (addbtnt != null) {
                        addbtnt.innerText = INC.config.addedtoBagText;
                    }
                    if (newbtn != null) {
                        newbtn.innerText = INC.config.addedtoBagText;
                    }
                    btn_t.innerText = INC.config.addedtoBagText;
                    if (newbtntext != undefined) {
                        newbtntext.innerHTML = INC.config.addedtoBagText;
                    }
                }
                if (INC.config.pageType == "cartPage") {
                    if (document.querySelector('.cart-item.product') != null) {
                        INC.clientConfig.offset = 0;
                        INC.clientConfig.slidevalue = 0;
                        INC.init();
                    }
                }
                let call_addprodtosidebar = false;

                if (INC.config.pageType != "cartPage" && !INC.config.recommendation && !rec_type) {
                    call_addprodtosidebar = true
                } else {
                    if ((INC.config.pageType != "cartPage" && document.querySelector('.sidebar_outer.sidebar_outer_active') != null)) {
                        call_addprodtosidebar = true
                    }
                }
                if (call_addprodtosidebar == trueflag) {
                    INC.methods.addProductToSidebarCart(findObj, 1, productBlock, null, btn_addtocart);
                }

                if (INC.config.pageType == "cartPage") {
                    if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                        document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                    }
                    addedprdblock.querySelector('.inc_product_desc_add_text').innerText = "Added";
                    setTimeout(function () {
                        if (addedprdblock != null) {
                            addedprdblock.parentNode.removeChild(addedprdblock);
                        }
                    }, 500)
                    setTimeout(function () {
                        window.location.reload();
                    }, 2000);

                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
                    }
                    document.querySelector('html').classList.remove('inc_overlay')
                }
                setTimeout(function () {
                    addbtnt.innerText = INC.config.addToCartText
                    Array.prototype.forEach.call(addbtnt, function (el) {
                        el.innerText = "Add";
                    });
                    if (btn_t != undefined) {
                        if (btn_t.parentNode.parentNode != null) {
                            btn_t.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                        }
                    }
                    INC.config.disablebtn = true
                }, 2000);
                if (INC.config.pageType != "cartPage") {
                    setTimeout(function () {
                        loadsidebarajax(null, rec_type)
                        let allprd = addedprdblock.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length
                        if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null || allprd == 1 && document.querySelector('.sidebar_outer.sidebar_outer_active') != null) {
                            if (document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null) {
                                let remcat = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')

                                if (document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null) {
                                    document.querySelector('.inc_recommended_tabs_list_item_block.inc_active').parentNode.removeChild(remcat)
                                    if (document.querySelector('.inc_recommended_tabs_block').innerText == "") {
                                        document.querySelector('.inc_recommended_products_block').innerHTML = ""
                                        window.location.replace('https://www.leekes.co.uk/checkout/cart/');
                                        return
                                    }
                                    if (document.querySelectorAll('.inc_recommended_tabs_list_item_block').length > 1) {
                                        if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                                            document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                        }
                                        checkTabEmpty();
                                    } else {
                                        if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                                            document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                        }
                                        checkTabEmpty();
                                        document.querySelector('.inc_recommended_products_list_block').setAttribute('style', 'margin-left:0;')
                                    }
                                    if (window.innerWidth < 821) {
                                        document.querySelector('.inc_recommended_tabs_list_block').scroll({
                                            left: 0,
                                            top: 0,
                                            behavior: 'smooth'
                                        })
                                    }
                                }
                            }
                        } else {
                            if (addedprdblock.parentNode.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length == 1) {
                                let len = addedprdblock.parentNode.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length
                                checkTabEmpty(len);
                                if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                                    document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                }
                            } else {
                                checkTabEmpty();
                                if (addedprdblock != null) {
                                    addedprdblock.parentNode.removeChild(addedprdblock);
                                }
                            }

                            if (window.innerWidth < 821) {
                                document.querySelector('.inc_recommended_tabs_list_block').scroll({
                                    left: 0,
                                    top: 0,
                                    behavior: 'smooth'
                                })
                            }
                        }
                        if (INC.config.pageType == "pdp" && (INC.config.recommendation == trueflag || rec_type == trueflag)) {
                            if (document.querySelector('.inc_sidebar_modal_block') != null) {
                                if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                                    if (productObj.ProductType != "simple") {
                                        INC.methods.updateSidebarBlock(productObj.id, productBlock);
                                    } else {
                                        INC.methods.updateSidebarBlock(productObj.mainId, productBlock);
                                    }
                                    INC.methods.showSidebar();
                                }
                            } else {
                                if (document.querySelector('.inc_sidebar_modal_block') == null) {
                                    setTimeout(function () {
                                        if (addedprdblock != null) {
                                            addedprdblock.parentNode.removeChild(addedprdblock);
                                        }
                                    }, 300)
                                    setTimeout(() => {
                                        window.location.reload()
                                    }, 800);
                                }
                            }
                        }
                    }, 1000)
                }
            }
        }
        catch (er) {
            if (btn_addtocart != null) {
                btn_addtocart.innerText = INC.config.addtoBagText;
            }
            if (newbtntext != null) {
                newbtntext.innerText = INC.config.addtoBagText;
            }
            Array.prototype.forEach.call(btn_addtocart, function (el) {
                el.innerText = "Add";
            });
            if (btn_addtocart != undefined) {
                btn_addtocart.innerText = INC.config.addtoBagText;
                if (btn_addtocart.parentNode.parentNode != null) {
                    btn_addtocart.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }
            }
        }

        document.querySelector('body').classList.remove('inc_popup_open');
        var pageType = "";
        switch (INC.config.pageType) {
            case "pdp":
                pageType = "107";
                break;
            case "productList":
                pageType = "101";
                break;
            case "cartPage":
                pageType = "103";
                break;
            case "other":
                pageType = "101";
                break;
        }
        setTimeout(function () {
            if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.minicart-container.minicart-container--active') != null) {
                document.querySelector('html').classList.remove('inc_overlay')
            }
            if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                document.querySelector('html').classList.remove('inc_overlay')
            }
            if (INC.config.pageType == "cartPage") {
                if (btn_addtocart.innerText == 'Adding...' || btn_addtocart.innerText == 'Tilføjelse...') {
                    add_btn_click.innerText = INC.config.addedtoBagText;
                    btn_addtocart.innerText = INC.config.addedtoBagText;
                    if (newbtntext != undefined) {
                        newbtntext.innerHTML = INC.config.addedtoBagText;
                    }
                }
                if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                    document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                    document.querySelector('html').classList.remove('inc_overlay')
                }

                document.querySelector('html').classList.remove('inc_overlay')
                window.location.reload()
            }
        }, 3000)
        var eventDataObj = {};
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") == null && INC.config.pageType == "pdp") {
            pageType = "100";
        }
        if (document.querySelector(".minicart-container--active") != null && INC.config.pageType == "pdp") {
            pageType = "107";
        }
        if (document.querySelector('.minicart-container.minicart-container--active') != null && INC.config.pageType == "pdp") {
            pageType = "107";
        }
        if ((INC.config.recommendation == falseflag && rec_type != trueflag) && productObj.bundleId == 'undefined' || productObj.bundleId == undefined) {
            var eventdata__ = {
                "core_product_id": INC.config.Product_id,
                "product_id": productObj.mainId
            }
            let data__ = {};
            if (document.querySelector('.stock.unavailable.outstock') != null) {
                data__ = {
                    "eventData": btoa((JSON.stringify({
                        "event_data": eventdata__,
                        "page_type": pageType,
                        "event_type": 'bestseller_add_to_cart',
                        "method": "track",
                        "platform": "",
                        "rt": "8",
                        "rpt": "1",
                        "token": INC.config.clientToken
                    }))),
                    "vid": readCookie('ivid'),
                    "time": getCurrentFormattedTime(),
                    "uri": document.location.href
                };
            }else{
                data__ = {
                    "eventData": btoa((JSON.stringify({
                        "event_data": eventdata__,
                        "page_type": pageType,
                        "event_type": 'bestseller_add_to_cart',
                        "method": "track",
                        "platform": "",
                        "rt": "8",
                        "rpt": "2",
                        "token": INC.config.clientToken
                    }))),
                    "vid": readCookie('ivid'),
                    "time": getCurrentFormattedTime(),
                    "uri": document.location.href
                };
            }
            
            makeTrackingApiCall(JSON.stringify(data__));
        } else {
            if (INC.config.pageType == "cartPage") {
                eventDataObj["bundle_data"] = {
                    "id": productObj.bundleId,
                    "product_ids": [productObj.bundledProductId, productObj.mainId],
                    "product_id": productObj.mainId
                }
            } else {
                eventDataObj["bundle_data"] = {
                    "id": productObj.bundleId,
                    "product_ids": [productObj.bundledProductId, productObj.mainId],
                    "product_id": productObj.bundledProductId
                }
            }
            INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType);
        }
    };

    function checkTabEmpty(len_) {
        let allprd_ = document.querySelectorAll(".inc_recommended_products_list_block .inc_product_module_block").length;
        if (document.querySelector(".inc_recommended_products_list_block .inc_product_module_block") == null || (allprd_ == 1 && document.querySelector(
            ".sidebar_outer.sidebar_outer_active") != null) || len_ == 1) {
            if (document.querySelector(".inc_recommended_tabs_list_item_block.inc_active") != null) {
                let remcat_ = document.querySelector(".inc_recommended_tabs_list_item_block.inc_active");
                if (document.querySelector(".inc_recommended_tabs_list_item_block.inc_active") != null) {
                    document.querySelector(".inc_recommended_tabs_list_item_block.inc_active").parentNode.removeChild(remcat_);
                    if (document.querySelector(".inc_recommended_tabs_block").innerText == "") {
                        document.querySelector(".inc_recommended_products_block").innerHTML = "";
                        window.location.replace("https://www.leekes.co.uk/checkout/cart/");
                        return;
                    }
                    if (document.querySelector(".inc_recommended_tabs_list_item_block") != null) {
                        document.querySelector(".inc_recommended_tabs_list_item_block").click();
                    }
                }
            }
        }
    }

    INC.methods.addBundleToCart = function (btn_cart, recsType) {
        INC.clientConfig.OOS = []
        var dataStore = INC.dataStore;
        var mainProductId = document.querySelector('.inc_pdp_product-main_block .inc_product_module_block').getAttribute('data-main_id');
        var formData = []
        var url_add = []
        var count_pr_to_add = 0
        var data0 = {};
        var data1 = {};
        var data2 = {};
        var data3 = {};
        var data4 = {};
        var data5 = {};
        var formData = []
        var total_length = Object.keys(dataStore.bundleCartProducts);
        Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
            var findObj = new INC.classes.FindObj({
                id: bundleCartProduct
            });
            // addedProductIndex.push(document.querySelector('.inc_product_module_block[data-sku="' + bundleCartProduct + '"]').getAttribute('b-index'))
            if (document.querySelector('.product-add-form form input[name=form_key]') != null) {
                var token = document.querySelector('.product-add-form form input[name=form_key]').value;
            }else if(document.querySelector('input[name=form_key]')){
                var token = document.querySelector('input[name=form_key]').value;
            }
            if (count_pr_to_add == 0) {
                var productObj = INC.dataStore.methods().getProductById(findObj);
                var addProductURL = 'https://www.leekes.co.uk/checkout/cart/add/uenc/' + btoa(productObj.url) + "/product/" + productObj.mainId + "/";
                var params = "";
                console.log(productObj.option)
                if (productObj.ProductType == "configurable") {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                } else {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                }
                if (dataStore.bundleCartProducts[bundleCartProduct] == undefined) {
                    dataStore.bundleCartProducts[bundleCartProduct] = 1
                }
                data0["product"] = productObj.mainId;
                data0["selected_configurable_option"] = '';
                data0["related_product"] = '';
                data0["item"] = productObj.mainId;
                data0["form_key"] = token;
                data0["qty"] = dataStore.bundleCartProducts[bundleCartProduct];

                formData.push(data0)
                url_add.push(addProductURL)
            } else if (count_pr_to_add == 1) {
                var productObj = INC.dataStore.methods().getProductById(findObj);
                var addProductURL = 'https://www.leekes.co.uk/checkout/cart/add/uenc/' + btoa(productObj.url) + "/product/" + productObj.mainId + "/";
                var params = ""
                console.log(productObj.option)
                if (productObj.ProductType == "configurable") {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                } else {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                }
                if (dataStore.bundleCartProducts[bundleCartProduct] == undefined) {
                    dataStore.bundleCartProducts[bundleCartProduct] = 1
                }
                data1["product"] = productObj.mainId;
                data1["selected_configurable_option"] = '';
                data1["related_product"] = '';
                data1["item"] = productObj.mainId;
                data1["form_key"] = token;
                data1["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                formData.push(data1)
                url_add.push(addProductURL)
            } else if (count_pr_to_add == 2) {
                var productObj = INC.dataStore.methods().getProductById(findObj);
                var addProductURL = 'https://www.leekes.co.uk/checkout/cart/add/uenc/' + btoa(productObj.url) + "/product/" + productObj.mainId + "/";
                var params = ""
                console.log(productObj.option)
                if (productObj.ProductType == "configurable") {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                } else {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                }
                if (dataStore.bundleCartProducts[bundleCartProduct] == undefined) {
                    dataStore.bundleCartProducts[bundleCartProduct] = 1
                }
                data2["product"] = productObj.mainId;
                data2["selected_configurable_option"] = '';
                data2["related_product"] = '';
                data2["item"] = productObj.mainId;
                data2["form_key"] = token;
                data2["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                formData.push(data2)
                url_add.push(addProductURL)
            } else if (count_pr_to_add == 3) {
                var productObj = INC.dataStore.methods().getProductById(findObj);
                var addProductURL = 'https://www.leekes.co.uk/checkout/cart/add/uenc/' + btoa(productObj.url) + "/product/" + productObj.mainId + "/";
                var params = ""
                console.log(productObj.option)
                if (productObj.ProductType == "configurable") {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                } else {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                }
                if (dataStore.bundleCartProducts[bundleCartProduct] == undefined) {
                    dataStore.bundleCartProducts[bundleCartProduct] = 1
                }
                data3["product"] = productObj.mainId;
                data3["selected_configurable_option"] = '';
                data3["related_product"] = '';
                data3["item"] = productObj.mainId;
                data3["form_key"] = token;
                data3["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                formData.push(data3)
                url_add.push(addProductURL)
            } else if (count_pr_to_add == 4) {
                var productObj = INC.dataStore.methods().getProductById(findObj);
                var addProductURL = 'https://www.leekes.co.uk/checkout/cart/add/uenc/' + btoa(productObj.url) + "/product/" + productObj.mainId + "/";
                var params = ""
                console.log(productObj.option)
                if (productObj.ProductType == "configurable") {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                } else {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                }
                if (dataStore.bundleCartProducts[bundleCartProduct] == undefined) {
                    dataStore.bundleCartProducts[bundleCartProduct] = 1
                }
                data4["product"] = productObj.mainId;
                data4["selected_configurable_option"] = '';
                data4["related_product"] = '';
                data4["item"] = productObj.mainId;
                data4["form_key"] = token;
                data4["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                formData.push(data4)
                url_add.push(addProductURL)
            } else if (count_pr_to_add == 5) {
                var productObj = INC.dataStore.methods().getProductById(findObj);
                var addProductURL = 'https://www.leekes.co.uk/checkout/cart/add/uenc/' + btoa(productObj.url) + "/product/" + productObj.mainId + "/";
                var params = ""
                console.log(productObj.option)
                if (productObj.ProductType == "configurable") {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                } else {
                    params = "pid=" + productObj.mainId + "&quantity=" + dataStore.bundleCartProducts[bundleCartProduct] + "&options=%5B%5D"
                }
                if (dataStore.bundleCartProducts[bundleCartProduct] == undefined) {
                    dataStore.bundleCartProducts[bundleCartProduct] = 1
                }
                data5["product"] = productObj.mainId;
                data5["selected_configurable_option"] = '';
                data5["related_product"] = '';
                data5["item"] = productObj.mainId;
                data5["form_key"] = token;
                data5["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
                formData.push(data5)
                url_add.push(addProductURL)
            }
            count_pr_to_add++
            if (total_length.length == count_pr_to_add) {
                ajax_add_to_cart(formData, url_add, btn_cart, recsType)
            }
        });
        add_to_cart_tracking_multiple(mainProductId)
    }

    function ajax_add_to_cart(formData, url_add, btn_cart, recsType) {
        INC.clientConfig.OOS = []
        INC.clientConfig.OOS_MESG = []
        var addurl = url_add

        function suc1(btn_ca, re) {

            if (formData[1] == undefined) {
                loadsidebarajax(btn_ca, recsType)
            }
            if (formData[1] != undefined) {
                callprodB()
            }
        }
        function suc2(btn_ca, re) {

            if (formData[2] == undefined) {
                loadsidebarajax(btn_ca, recsType)
            }
            if (formData[2] != undefined) {
                callprodC()
            }
        }
        function suc3(btn_ca, re) {

            if (formData[3] == undefined) {
                loadsidebarajax(btn_ca, recsType)
            }
            if (formData[3] != undefined) {
                callprodD()
            }
        }
        function suc4(btn_ca, re) {

            if (formData[4] == undefined) {
                loadsidebarajax(btn_ca, recsType)
            }
            if (formData[4] != undefined) {
                callprodE()
            }
        }
        function suc5(btn_ca, re) {

            if (formData[5] == undefined) {
                loadsidebarajax(btn_ca, recsType)
            }
            if (formData[5] != undefined) {
                callprodF()
            }
        }
        callprodA()
        function callprodA() {
            window.jQuery.ajax({
                url: addurl[0],
                type: "POST",
                data: formData[0],
                dataType: 'json',
                success: function (e) {
                    if (e.backUrl != undefined) {
                        prod_qty_notinstock(formData[0])
                    }
                    suc1(btn_cart, e)

                },
                error: function (resp) {
                    suc1(btn_cart, resp)
                },
            });
        }
        function callprodB() {
            window.jQuery.ajax({
                url: addurl[1],
                type: "POST",
                data: formData[1],
                dataType: 'json',
                success: function (e) {
                    if (e.backUrl != undefined) {
                        prod_qty_notinstock(formData[1])
                    }
                    suc2(btn_cart, e)
                },
                error: function (resp2, res) {
                    suc2(btn_cart)
                },
            });
        }
        function callprodC() {
            window.jQuery.ajax({
                url: addurl[2],
                type: "POST",
                data: formData[2],
                dataType: 'json',
                success: function (e) {
                    if (e.backUrl != undefined) {
                        prod_qty_notinstock(formData[2])
                    }
                    suc3(btn_cart, e)
                },
                error: function (resp3) {
                    suc3(btn_cart, resp3)
                },
            });
        }
        function callprodD() {
            window.jQuery.ajax({
                url: addurl[3],
                type: "POST",
                data: formData[3],
                dataType: 'json',
                success: function (e) {
                    if (e.backUrl != undefined) {
                        prod_qty_notinstock(formData[3])
                    }
                    suc4(btn_cart, e)
                },
                error: function (resp4) {
                    suc4(btn_cart, resp4)
                },
            });
        }
        function callprodE() {
            window.jQuery.ajax({
                url: addurl[4],
                type: "POST",
                data: formData[4],
                dataType: 'json',
                success: function (e) {
                    if (e.backUrl != undefined) {
                        prod_qty_notinstock(formData[4])
                    }
                    suc5(btn_cart, e)
                },
                error: function (resp5) {
                    suc5(btn_cart, resp5)
                },
            });
        }
        function callprodF() {
            window.jQuery.ajax({
                url: addurl[5],
                type: "POST",
                data: formData[5],
                dataType: 'json',
                success: function (e) {
                    if (e.backUrl != undefined) {
                        prod_qty_notinstock(formData[5])
                    }
                    var pids = formData[5].pid
                    loadsidebarajax(btn_cart, recsType)

                },
                error: function (resp6) {
                    loadsidebarajax(btn_cart)
                },
            });
        }
    }

    function prod_qty_notinstock(formd, formData) {
        INC.clientConfig.OOS = [];
        INC.clientConfig.OOS_MESG = [];
        let ajaxmainid = formData;
        INC.clientConfig.OOS.push(ajaxmainid);
        INC.clientConfig.OOS_MESG.push(formd);
    }

    function loadsidebarajax(btn_cart, rec_type) {
        INC.config.disablebtn = true;
        if (btn_cart != undefined) {
            btn_cart.classList.remove("inc_loading");
        }
        if (document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_block.inc_loading") != null) {
            document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_block.inc_loading").classList.remove("inc_loading");
        }
        if (INC.config.recommendation == falseflag && rec_type == falseflag) {
            if (document.querySelector(".sidebar_outer.sidebar_outer_active") == null) {
                checkAddedProductInJustAdded();
                INC.methods.showSidebar();
                INC.methods.updateSidebarBlock();
            }
        }
    }

    function checkAddedProductInJustAdded() {
        let addCheckCategory = INC.config.pdpaddedProductList;
        let productListArrayprod = INC.dataStore.bundleProductsArray;
        let categoryList = INC.dataStore.methods().getUniqueCatergories();
        for (let catlist in categoryList) {
            let count = 0;
            for (let prd in productListArrayprod) {
                let firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                    mainId: productListArrayprod[prd],
                });
                if (firstProductObjByMainId["categoryName"] == categoryList[catlist]) {
                    if (addCheckCategory.indexOf(productListArrayprod[prd]) == -1) {
                        count++;
                    }
                }
            }
            if (count == 0) {
                let titleel = categoryList[catlist];
                let eltablist = document.querySelectorAll(".inc_recommended_tabs_list_item_block");
                if (eltablist != null) {
                    for (const element of eltablist) {
                        let titleText = element.getAttribute("title");
                        if (titleText == titleel) {
                            if (element != null) {
                                element.parentNode.removeChild(element);
                            }
                        }
                    }
                }
            }
        }
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        if (productListArrayprod != undefined) {
            if (productListArrayprod.indexOf(addCheckCategory) > 0) {
                if (document.querySelector(".sidebar_outer .inc_recommended_tabs_list_item_block") != null) {
                    if (document.querySelector(".inc_recommended_products_list_block .inc_product_module_block") == null) {
                        let remcateg = document.querySelector(".sidebar_outer .inc_recommended_tabs_list_item_block.inc_active");
                        if (remcateg != null) {
                            remcateg.parentNode.removeChild(remcateg);
                        }
                    }
                    if (document.querySelector(".inc_recommended_tabs_list_item_block.inc_active") == null) {
                        if (document.querySelector(".inc_recommended_tabs_list_item_block") != null) {
                            document.querySelector(".inc_recommended_tabs_list_item_block").click();
                        }
                    }
                }
            }
        }

        if (document.querySelector(".inc_recommended_tabs_list_item_block.inc_active") == null) {
            if (document.querySelector(".inc_recommended_tabs_list_item_block") != null) {
                document.querySelector(".inc_recommended_tabs_list_item_block").click();
            }
        }
    }

    function add_to_cart_tracking_multiple(mainProductId) {
        let event_type = "bundle_add_to_cart";
        let core_prod_id = "";
        let productIdsforTracking = [];
        core_prod_id = mainProductId;
        getTrackingPixel()
        let pageType = "100";
        let all_data = [];
        let bundlpos = "";

        for (let tc = 0; tc < INC.config.bundle_tracking.length; tc++) {
            if (INC.config.bundle_tracking.length == 1) {
                productIdsforTracking.push(mainProductId);
                productIdsforTracking.push(INC.config.bundle_tracking[tc].id);
                if (document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + INC.config.bundle_tracking[tc].id + '"]') != null) {
                    bundlpos = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + INC.config.bundle_tracking[tc].id + '"]')
                        .getAttribute("b-index");
                } else if (document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + INC.config.bundle_tracking[tc].id + '"]') !=
                    null) {
                    bundlpos = document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + INC.config.bundle_tracking[tc].id + '"]')
                        .getAttribute("b-index");
                }
                all_data.push({
                    id: parseInt(INC.config.bundle_tracking[tc].bid),
                    product_ids: productIdsforTracking,
                    product_id: core_prod_id,
                    bundle_pos: bundlpos,
                });
                productIdsforTracking = [];
            } else {
                if (mainProductId != INC.config.bundle_tracking[tc].id) {
                    productIdsforTracking.push(mainProductId);
                    productIdsforTracking.push(INC.config.bundle_tracking[tc].id);
                    if (document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + INC.config.bundle_tracking[tc].id + '"]') !=
                        null) {
                        bundlpos = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + INC.config.bundle_tracking[tc].id +
                            '"]').getAttribute("b-index");
                    } else if (document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + INC.config.bundle_tracking[tc].id + '"]') !=
                        null) {
                        bundlpos = document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + INC.config.bundle_tracking[tc].id + '"]')
                            .getAttribute("b-index");
                    }
                    all_data.push({
                        id: parseInt(INC.config.bundle_tracking[tc].bid),
                        product_ids: productIdsforTracking,
                        product_id: core_prod_id,
                        bundle_pos: bundlpos,
                    });
                    productIdsforTracking = [];
                }
            }
        }
        let bundlec_1 = document.querySelectorAll(".inc_pdp_bundle_product_list_main_block .inc_product_module_block").length;
        let data = {
            eventData: btoa(JSON.stringify({
                event_data: {
                    bundle_data: all_data,
                },
                page_type: pageType.toString(),
                event_type: event_type,
                method: "track",
                platform: "",
                token: INC.config.clientToken,
                db: bundlec_1.toString(),
                mb: "1",
            })),
            vid: INC.config.ivid,
            time: getCurrentFormattedTime(),
            uri: document.location.href,
        };
        makeTrackingApiCall(JSON.stringify(data));
    }

    function makeTrackingApiCall(eventdata) {
        let p_url = "//optimizedby.increasingly.co/ImportData";
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    let resul = xhr.responseText;
                    console.log("track" + resul);
                }
            }
        };
        xhr.open("POST", p_url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(eventdata);
    }

    function getCurrentFormattedTime() {
        let d = new Date();
        return (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d
            .getMilliseconds());
    }
    INC.methods.trackingEvents = function (eventType, eventDataObj, pageType, rec_type) {
        let importEventDataObj = {};
        let importDataObj = {};
        importEventDataObj["event_data"] = eventDataObj;
        switch (eventType) {
            case "productPageVisit":
                importEventDataObj["event_type"] = "product_page_visit";
                importEventDataObj["method"] = "track";
                break;
            case "catalogProductView":
                importEventDataObj["event_type"] = "catalog_product_view";
                importEventDataObj["page_type"] = "catalog_product_view";
                importEventDataObj["method"] = "track";
                break;
            case "bundleProductClickTracking":
                importEventDataObj["event_type"] = "bundle_product_click_tracking";
                importEventDataObj["page_type"] = pageType;
                if (rec_type == trueflag && INC.config.pageType == "pdp") {
                    if (document.querySelector('.stock.unavailable.outstock') != null) {
                        importEventDataObj["rt"] = "8";
                        importEventDataObj["rpt"] = "1";
                    }else{
                        importEventDataObj["rt"] = "8";
                        importEventDataObj["rpt"] = "2";
                    }
                }
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                if (rec_type != trueflag) {
                    if (pageType == "100") {
                        if (document.querySelectorAll(".inc_pdp_block .inc_product_module_block")[0] != undefined) {
                            let bundlec = document.querySelectorAll(".inc_pdp_bundle_product_list_main_block .inc_product_module_block").length;
                            importEventDataObj["db"] = bundlec.toString();
                        }
                    }
                }
                break;
            case "bundleAddToCart":
                importEventDataObj["event_type"] = "bundle_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                if (pageType == "100") {
                    if (document.querySelectorAll(".inc_pdp_block .inc_product_module_block")[0] != undefined) {
                        let bundlec_ = document.querySelectorAll(".inc_pdp_bundle_product_list_main_block .inc_product_module_block").length;
                        let bundleShown = bundlec_.toString();
                        importEventDataObj["db"] = bundleShown;
                    }
                }
                break;
        }
        importEventDataObj["platform"] = "";
        importEventDataObj["token"] = INC.config.clientToken;
        importDataObj["eventData"] = btoa(JSON.stringify(importEventDataObj));
        importDataObj["uri"] = window.location.href;
        importDataObj["vid"] = INC.config.ivid;
        INC.methods.sendTrackingEvents(importDataObj);
    };
    INC.methods.sendTrackingEvents = function (importDataObj) {
        let xhr = new XMLHttpRequest();
        let method = "POST";
        let url = INC.config.trackingURL;
        xhr.onreadystatechange = handleStateChange;
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        function handleStateChange() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.readyState);
            }
        }
        xhr.send(JSON.stringify(importDataObj));
    };


    INC.methods.addVisitorID = function () {
        function generateUniqueINCVisitorId(len, bits) {
            let bits1 = bits || 36;
            let outStr = "";
            let newStr;
            while (outStr.length < len) {
                newStr = generateRandomString(bits1).toString().slice(2);
                outStr += newStr.slice(0, Math.min(newStr.length, len - outStr.length));
            }
            return outStr;
        }
        let ivid = "";
        if (readCookie("ivid") != undefined) {
            ivid = readCookie("ivid");
        }
        let clientdomain = window.location.host;
        let arr = clientdomain.split(".");
        let d = new Date();
        let expires = "expires=" + d.toUTCString();
        if (ivid.length == 0) {
            ivid = generateUniqueINCVisitorId(42, 16);
            arr.shift();
            clientdomain = arr.join(".");
            if (arr == "com") {
                clientdomain = window.location.host;
            }
            d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
            expires = "expires=" + d.toUTCString();
            document.cookie = "ivid=" + ivid + "; expires=" + expires + "; domain=" + clientdomain + "; path=/" + "; secure;";
        } else {
            arr.shift();
            clientdomain = arr.join(".");
            if (arr == "com") {
                clientdomain = window.location.host;
            }
            d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
            expires = "expires=" + d.toUTCString();
            document.cookie = "ivid=" + ivid + "; expires=" + expires + "; domain=" + clientdomain + "; path=/" + "; secure;";
        }
        INC.config.ivid = ivid;
        console.log(ivid);
        return ivid;
    };
    INC.methods.getSizeCategoryType = (productObj) => {
        let category = null;
        const categoryNames = ["leather", "trousers", "gloves", "jackets", "hats", "wellington", "outers-and-midlayers", "bug-clothing", "socks",];
        categoryNames.map((name) => {
            let categoryCheck = productObj.categoryName.toLocaleLowerCase().includes(name);
            let productNameCheck = null;
            if (categoryCheck) {
                category = name;
            }
            if (productNameCheck) {
                category = name;
            }
        });
        return category;
    };
    document.onclick = clickListener;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function clickListener(e) {
        let clickedElement = e.target;
        if (clickedElement != null) {
            try {
                if (clickedElement.className == "inc_product_modal_block inc_active") {
                    document.querySelector("body").classList.remove("inc_popup_open");
                    if (document.querySelector(".inc_sidebar_modal_block.inc_active") == null) {
                        document.querySelector("html").classList.remove("inc_overlay");
                        document.querySelector("html").classList.remove("inc_popup_open");
                    } else {
                        document.querySelector("html").classList.remove("inc_popup_open");
                    }
                    if (inc_scroll_height > 100) {
                        window.scrollTo(0, inc_scroll_height);
                    }
                    clickedElement.querySelector(".inc_product_header_title_block").classList.add("inc_active");
                    clickedElement.querySelector(".inc_product_header_title_block_1").classList.remove("inc_active");
                    clickedElement.classList.remove("inc_active");
                }
                //mini modal close
                if (clickedElement.className == "inc_product_modal_block inc_active mini_popup" || clickedElement.className == "inc_product_modal_block mini_popup inc_active") {
                    document.querySelector("body").classList.remove("inc_popup_open");
                    if (document.querySelector(".inc_sidebar_modal_block.inc_active") == null) {
                        document.querySelector("html").classList.remove("inc_overlay");
                        document.querySelector("html").classList.remove("inc_popup_open");
                    } else {
                        document.querySelector("html").classList.remove("inc_popup_open");
                    }
                    if (inc_scroll_height > 100) {
                        window.scrollTo(0, inc_scroll_height);
                    }
                    clickedElement.querySelector(".inc_product_header_title_block").classList.add("inc_active");
                    clickedElement.querySelector(".inc_product_header_title_block_1").classList.remove("inc_active");
                    clickedElement.classList.remove("inc_active");
                    clickedElement.classList.remove("mini_popup");
                }
                if (clickedElement.classList.contains("inc_product_desc_att_size_block") || clickedElement.classList.contains("inc_product_desc_att_size_title_block") || clickedElement.classList.contains("inc_product_desc_att_size_title_text_block") || clickedElement.classList.contains("inc_product_desc_att_size_title_text") || clickedElement.classList.contains("inc_product_desc_att_zero_block") || clickedElement.classList.contains(
                    "inc_product_desc_att_zero_title_block") || clickedElement.classList.contains("inc_product_desc_att_zero_title_text_block") ||
                    clickedElement.classList.contains("inc_product_desc_att_zero_title_text") || clickedElement.classList.contains(
                        "inc_product_desc_att_color_block") || clickedElement.classList.contains("inc_product_desc_att_color_title_block") || clickedElement
                            .classList.contains("inc_product_desc_att_color_title_text_block") || clickedElement.classList.contains(
                                "inc_product_desc_att_color_title_text")) {
                    if (clickedElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement) {
                        clickedElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                            ".inc_product_variant_simple_block").click();
                    }
                }
                if (clickedElement.classList.contains("quick_view_open") == trueflag) {
                    if (document.querySelector(".inc_details_mobile_quick_view.quick_view_active") != null) {
                        document.querySelector(".inc_details_mobile_quick_view.quick_view_active .prod_quick_view_close").click();
                    }
                }
                if (clickedElement.className == "inc_empty_popup") {
                    if (document.querySelector(".inc_product_modal_block.inc_active") == null && document.querySelector(
                        ".inc_sidebar_modal_block.inc_active") == null) {
                        document.querySelector("html").classList.remove("inc_overlay");
                        document.querySelector("html").classList.remove("inc_popup_open");
                    }
                    if (clickedElement.parentNode.querySelector(".inc_product_desc_att_block").classList.contains("inc_active")) {
                        clickedElement.parentNode.querySelector(".inc_product_desc_att_block").classList.remove("inc_active");
                    }
                }
                if (clickedElement.className == "inc_product_block configurable show_overlay" || clickedElement.className ==
                    "inc_product_block configurable inc_other_noimage show_overlay") {
                    if (clickedElement.parentNode.querySelector(".inc_product_desc_att_block").classList.contains("inc_active")) {
                        clickedElement.parentNode.querySelector(".inc_product_desc_att_block").classList.remove("inc_active");
                        document.querySelector("html").classList.remove("inc_overlay");
                        document.querySelector("body").style.position = "relative";
                        document.querySelector("body").style.overflow = "auto";
                        document.querySelector(".inc_product_block.configurable.show_overlay").classList.remove("show_overlay");
                    }
                }

                if (INC.config.pageType == "productList") {
                    if (clickedElement.parentNode.classList.contains("button--add-to-cart") == trueflag || clickedElement.classList.contains(
                        "button--add-to-cart") == trueflag) {
                        let prd_wrapplp = document.querySelector(".fancybox-container .js-quick-shop");
                        plp_modal_pr(prd_wrapplp);
                    }
                }

                //  Client ATC
                if (clickedElement !== null) {
                    if (clickedElement.parentNode != null) {
                        if (clickedElement.id === "product-addtocart-button" || clickedElement.parentNode.classList.contains("tocart") || clickedElement.classList.contains("tocart")) {
                            //if (clickedElement.classList.contains("button--add-basket--back-in-stock") == falseflag) {
                            console.log("CLICKED")
                            //let clientAlerts = document.querySelector('#js-product-alerts').innerHTML
                            //if (clientAlerts !== "") return
                            console.log("ACTIVATED")

                            let findObj = new INC.classes.FindObj();
                            let p_ids = INC.methods.getProductIdFromWebPage();
                            findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({
                                mainId: p_ids,
                            }).id;
                            let elPDP = document.querySelector(".product-info-main");
                            INC.config.pdpaddedProductList = [];
                            INC.config.pdpaddedProductList.push(INC.config.Product_id);
                            INC.clientConfig.OOS = [];
                            INC.clientConfig.OOS_MESG = [];
                            if (document.querySelector(".inc_sidebar_modal_block .inc_product_module_block") == null) {
                                if (document.querySelector(".inc_recommended_tabs_list_item_block") != null) {
                                    document.querySelector(".inc_recommended_tabs_list_item_block").click();
                                }
                            }
                            setTimeout(function () {
                                checkAddedProductInJustAdded();
                                INC.methods.addProductToSidebarCart(findObj, "client_add_btn", null, null, elPDP);
                                INC.methods.showSidebar("clientBtn");
                            }, 100);
                            //}
                        }
                    }
                }
                // Change Varint
                if (clickedElement.parentNode) {
                    if (clickedElement.parentNode.classList.contains("attributes__value")) {
                        updateClientToBundleSize(clickedElement, "label");
                    } else if (clickedElement.parentNode.parentNode != undefined) {
                        if (clickedElement.parentNode.parentNode.classList != undefined) {
                            if (clickedElement.parentNode.parentNode.classList.contains("attributes__value")) {
                                updateClientToBundleSize(clickedElement, "label");
                            }
                        }
                    }
                    if (clickedElement.classList == "attributes-select") {
                        updateClientToBundleSize(clickedElement, "label")
                    }

                }
                if (clickedElement != null) {
                    if (clickedElement.classList == "inc_product_desc_add_img" && document.querySelector(
                        ".inc_product_modal_block .inc_product_desc_att_block .show_dropdown") != null) {
                        if (window.innerWidth > 2000) {
                            document.querySelector(".inc_product_modal_block .inc_product_desc_att_block .show_dropdown").classList.remove("show_dropdown");
                        }
                    }
                    if (clickedElement.className == "inc_product_header_img") {
                        document.querySelector(".inc_product_header_title_block").classList.add("inc_active");
                        document.querySelector(".inc_product_header_title_block_1").classList.remove("inc_active");
                        document.querySelector("body").classList.remove("inc_popup_open");
                    }
                    if (clickedElement.className == "sidebar_outer sidebar_outer_active") {
                        if (document.querySelector(".inc_header_continue_img") != null) {
                            document.querySelector(".inc_header_continue_img").click();
                        }
                    }
                    if (clickedElement.className == "close_modal_inc") {
                        if (document.querySelector(".inc_header_continue_img") != null) {
                            document.querySelector(".inc_header_continue_img").click();
                        }
                    }
                    if (clickedElement.className == "inc_pdp_bundle_cart_overlay_block active") {
                        document.querySelector(".inc_pdp_bundle_cart_title_img_block").click();
                    }
                    if (clickedElement.className == "inc_promo_popup inc_active") {
                        document.querySelector("html").classList.remove("inc_overlay_promo");
                        clickedElement.classList.remove("inc_active");
                        if (document.querySelector(".inc_sidebar_modal_block.inc_active") != null) {
                            document.querySelector(".inc_sidebar_modal_block.inc_active").classList.remove("overflow_visible");
                        }
                    }
                    if (clickedElement.parentNode != null) {
                        if (clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className !=
                            "inc_product_desc_att_color_title_text_selected" && clickedElement.parentNode.className !=
                            "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_zero_title_text" &&
                            clickedElement.className != "inc_product_desc_add_block" && clickedElement.className != "inc_product_desc_add_text" &&
                            clickedElement.className != "img_color_swatch" && clickedElement.className != "inc_product_desc_att_zero_title_text_selected" &&
                            clickedElement.classList.contains("inc_product_desc_att_color_list_item_img") != trueflag && clickedElement.classList.contains(
                                "inc_product_desc_att_zero_title_text_selected") != trueflag && clickedElement.classList.contains(
                                    "inc_product_desc_att_size_title_text_selected") != trueflag && clickedElement.className !=
                            "inc_product_desc_att_third_title_text_selected" && clickedElement.className !=
                            "inc_product_desc_att_size_title_text_selected" && clickedElement.className != "inc_product_desc_att_third_title_text_selected"
                        ) {
                            if (document.querySelector(".inc_product_desc_att_block .show_dropdown") != null) {
                                document.querySelector(".inc_product_desc_att_block .show_dropdown").classList.remove("show_dropdown");
                            }
                        }
                        if (clickedElement.className == "inc_product_desc_color_list_mobile_overlay_block" || clickedElement.className ==
                            "inc_product_desc_color_list_header_img" || clickedElement.className == "inc_product_desc_colour_list_add_btn" || clickedElement
                                .className == "inc_product_desc_att_zero_list_mobile_overlay_block" || clickedElement.className ==
                            "inc_product_desc_att_zero_list_header_img" || clickedElement.className == "inc_product_desc_att_zero_list_add_btn") {
                            if (window.innerWidth < 769) {
                                document.querySelector(".inc_product_desc_att_block .show_dropdown").classList.remove("show_dropdown");
                                document.querySelector("html").classList.remove("inc_overlay");
                                document.querySelector("body").classList.remove("inc_popup_open");
                            }
                        }
                    }
                    if (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active") == null) {
                        if (document.querySelector(".inc_sidebar_modal_block.inc_active") != null) {
                            if (document.querySelector(".inc_cart_added_product_block.remove_product_conf_modal") == null) {
                                if (document.querySelector(".inc_promo_popup.inc_active") == null) {
                                    document.querySelector(".inc_sidebar_modal_block.inc_active").classList.remove("overflow_visible");
                                }
                            }
                        }
                    } else if (document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block .inc_product_modal_block.inc_active") !=
                        null) {
                        document.querySelector(".sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block").classList.add("overflow_visible");
                        document.querySelector("body").classList.add("inc_popup_open");
                    }
                    if (clickedElement.className != "inc_product_block configurable inc_other_noimage show_overlay" && clickedElement.className !=
                        "inc_product_desc_att_zero_title_text_block" && clickedElement.className != "inc_product_details_prod_block" && clickedElement
                            .className != "inc_product_variant_simple_block" && clickedElement.className != "inc_product_variant_simple_text config" &&
                        clickedElement.className != "inc_product_desc_variant_popup_close_block" && clickedElement.className !=
                        "inc_product_desc_add_title_text_block" && clickedElement.tagName != "SELECT" && clickedElement.className !=
                        "inc_product_header_block active" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block active" &&
                        clickedElement.className != "inc_product_desc_att_block attributes_avail active" && clickedElement.className !=
                        "inc_product_qty_block active" && clickedElement.tagName != "LABEL" && clickedElement.tagName != "INPUT" && clickedElement
                            .className != "inc_product_qty_block" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block" &&
                        clickedElement.className != "inc_product_header_block" && clickedElement.className != "select_option_inc_title" && clickedElement
                            .className != "inc_product_desc_att_color_list_item_img" && clickedElement.className != "inc_product_desc_att_color_title_text" &&
                        clickedElement.className != "inc_product_desc_att_color_list_block" && clickedElement.classList.contains(
                            "inc_product_desc_att_block") == falseflag && clickedElement.className != "select_option_inc_block" && clickedElement
                                .className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_variant_text" &&
                        clickedElement.className != "inc_product_desc_add_img" && clickedElement.className != "inc_product_qty_up_btn" && clickedElement
                            .className != "inc_product_qty_down_btn" && clickedElement.className != "variant_span") {
                        if (clickedElement.classList != undefined) {
                            if (clickedElement.classList.contains("variantoption") == falseflag && clickedElement.classList.contains(
                                "inc_product_desc_att_size_list_item_img_block") == falseflag && clickedElement.classList.contains(
                                    "inc_product_desc_att_color_list_block") == falseflag && clickedElement.className !=
                                "inc_product_desc_add_img checked" && clickedElement.classList.contains("inc_product_desc_add_block") == falseflag &&
                                clickedElement.classList.contains("inc_pdp_bundle_cart_added_product_edit_img") == falseflag && clickedElement.className !=
                                "inc_product_desc_att_color_title_block" && clickedElement.className != "inc_product_desc_qty_up_btn" && clickedElement
                                    .className != "inc_product_desc_qty_down_btn" && clickedElement.classList.contains("inc_product_desc_att_color_block") ==
                                falseflag && clickedElement.classList.contains("inc_product_desc_att_color_list_item_block") == falseflag && clickedElement
                                    .classList.contains("inc_product_desc_att_zero_title_text_selected") == falseflag && clickedElement.classList.contains(
                                        "inc_product_desc_att_zero_title_text") == falseflag && clickedElement.classList.contains(
                                            "inc_product_desc_att_size_list_item_img") == falseflag && clickedElement.classList.contains(
                                                "inc_product_desc_att_color_list_item_img") != trueflag && clickedElement.className !=
                                "inc_product_desc_att_size_title_text_selected" && clickedElement.className !=
                                "inc_product_desc_att_third_title_text_selected") {
                                if (document.querySelector(".inc_product_desc_att_block") != null) {
                                    if (document.querySelector(".inc_product_desc_att_block").classList.contains("moreThanOne") == falseflag) {
                                        let allact = document.querySelectorAll(".inc_product_desc_att_block.inc_active");
                                        if (document.querySelector(".inc_product_modal_block.inc_active") == null && document.querySelector(
                                            ".inc_sidebar_modal_block.inc_active") == null) {
                                            document.querySelector("html").classList.remove("inc_overlay");
                                            document.querySelector("body").classList.remove("inc_popup_open");
                                        }
                                        for (let actelm in allact) {
                                            if (allact[actelm] != null && Object.prototype.hasOwnProperty.call(allact, actelm)) {
                                                allact[actelm].classList.remove("inc_active");
                                            }
                                        }
                                        if (document.querySelector(".inc_product_block.show_overlay") != null) {
                                            document.querySelector(".inc_product_block.show_overlay").classList.remove("show_overlay");
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (INC.config.pageType == "pdp") {
                        /*autoselection*/
                        if (clickedElement.parentNode != null) {
                            if (clickedElement.parentNode.classList != undefined) {
                                if (clickedElement.parentNode.classList.contains("image-radio") == trueflag || clickedElement.classList.contains(
                                    "swatch-option") == trueflag || clickedElement.classList.contains("image") == trueflag || clickedElement.parentNode
                                        .classList.contains("image") == trueflag || clickedElement.classList.contains("product-custom-option") || clickedElement
                                            .parentNode.classList.contains("soldout") == trueflag || clickedElement.parentNode.classList.contains(
                                                "swatch-element") == trueflag) {
                                    let click_textsel = clickedElement.getAttribute("data-option-label");
                                    if (clickedElement.classList.contains("image") == trueflag || clickedElement.parentNode.classList.contains("image") ==
                                        trueflag) {
                                        click_textsel = clickedElement.parentNode.parentNode.innerText;
                                        if (clickedElement.getAttribute("data-option-label") != undefined) {
                                            click_textsel = clickedElement.getAttribute("data-option-label");
                                        }
                                    }
                                    if (clickedElement.parentNode.classList.contains("image-radio") == trueflag || clickedElement.classList.contains(
                                        "image-radio") == trueflag) {
                                        click_textsel = clickedElement.innerText;
                                    }
                                    if (clickedElement.classList.contains("single-option-selector") == trueflag && (click_textsel == null ||
                                        click_textsel == "")) {
                                        if (clickedElement.tagName == "INPUT") {
                                            click_textsel = clickedElement.value;
                                        }
                                    }
                                    if (click_textsel != undefined) {
                                        click_textsel = click_textsel.trim().toLocaleLowerCase();
                                    }
                                    autoselect_(click_textsel);
                                }
                            }
                        }
                    }
                    if (clickedElement.classList.contains("remove_link") == trueflag && INC.config.pageType == "cartPage") {
                        setTimeout(function () {
                            if (document.querySelector(".cart-item.product") != null) {
                                INC.clientConfig.offset = 0;
                                INC.clientConfig.slidevalue = 0;
                                INC.init();
                            }
                        }, 2000);
                    }
                }
                setTimeout(function () {
                    let inc_prod_img1 = document.querySelector(".inc_product_modal_block.inc_active .inc_product_img_main_img img");
                    if (inc_prod_img1) {
                        inc_prod_img1.setAttribute("style", INC.config.styleft);
                    }
                }, 2000);
            } catch (err) {
                let formData = new FormData();
                formData.append("EmailId", "shashi@increasingly.com");
                formData.append("Subject", "JS Error on Conranshop");
                formData.append("Message", err + "Error Stack" + err.stack);
                let xhr = new XMLHttpRequest();
                xhr.open("POST", "//api.increasingly.co/SendEmail", trueflag);
                xhr.send(formData);
                throw err;
            }
        }
    }

    function plp_modal_pr(product_wrapper) {
        let prd_name = "";
        let prd_price = 0;
        if (product_wrapper.querySelector(".quick-shop__title.js-product-title") != null) {
            prd_name = product_wrapper.querySelector(".quick-shop__title.js-product-title").textContent.trim();
        }
        if (product_wrapper.querySelector(".modal_price .current_price") != null) {
            prd_price = product_wrapper.querySelector(".modal_price .current_price").textContent.trim();
        }
        let prd_prc = prd_price.split("£")[1].split("/")[0].replace(" ", "").replace(",", "").trim();
        let prd_img_url = "";
        if (document.querySelector(".product-gallery__main .image__container img") != null) {
            prd_img_url = document.querySelector(".product-gallery__main .image__container img").src;
        }
        //image
        let old_prc = 0;
        let pr_id = "";
        if (document.querySelector(".fancybox-container").className.includes("product-")) {
            pr_id = document.querySelector(".fancybox-container").className.split("product-")[1].split(" ")[0].trim();
        }
        if (product_wrapper.querySelector(".modal_price .was-price").innerText != null) {
            old_prc = product_wrapper.querySelector(".modal_price .was-price").innerText.replace("£", "").replace(",", "");
        }
        let qty = 1;
        let swatch1;
        let swatch2;
        let size;
        let color;
        if (document.querySelectorAll(".js-quick-shop .swatch_options .swatch").length > 1) {
            swatch1 = document.querySelectorAll(".js-quick-shop .swatch_options .swatch .swatch__options")[0];
            swatch2 = document.querySelectorAll(".js-quick-shop .swatch_options .swatch .swatch__options")[1];
            let sizeSwatch = swatch1.querySelectorAll("input");
            for (let l = 0; l < sizeSwatch.length; l++) {
                if (sizeSwatch[l].checked) {
                    size = sizeSwatch[l].value;
                    break;
                }
            }
            let colorSwatch = swatch2.querySelectorAll("input");
            for (let z = 0; z < colorSwatch.length; z++) {
                if (colorSwatch[z].checked) {
                    color = colorSwatch[z].value;
                    break;
                }
            }
        } else {
            swatch1 = document.querySelectorAll(".js-quick-shop .swatch_options .swatch .swatch__options input");
            for (let m = 0; m < swatch1.length; m++) {
                if (swatch1[m].checked) {
                    size = swatch1[m].value;
                    break;
                }
            }
        }
        let size_c = size + " , " + color;
        if (product_wrapper.querySelector(".quantity-wrapper .quantity-input") != null) {
            qty = product_wrapper.querySelector(".quantity-wrapper .quantity-input").value;
        }
        if (isNaN(qty)) qty = 1;
        qty = Math.abs(qty);
        if (pr_id != undefined) {
            let prod_id = pr_id;
            setTimeout(function () {
                plp_listeners(prd_name, old_prc, prd_img_url, prd_prc, qty, prod_id, size_c);
            }, 200);
        }
    }

    function plp_listeners(prd_name_, old_prc_, prd_img_url_, prd_prc_, qty_shade_, prod_id, size_c_) {
        let productId = prod_id;
        let qty = 1;
        if (INC.config.deviceType == "desktop") {
            qty = qty_shade_;
        }
        if (INC.config.deviceType == "mobile") {
            qty = qty_shade_;
        }
        qty = Math.abs(qty);
        INC.dataStore.plpProductQty = qty;
        INC.methods.clear();
        let p_img = prd_img_url_;
        let p_name = prd_name_;
        let prc = prd_prc_;
        let s_prc = null;
        let p_activePrice = 0;
        let regularPrice = 0;
        if (old_prc_ != 0) {
            s_prc = prd_prc_;
            prc = old_prc_;
        }
        if (s_prc != null && s_prc != prc) {
            p_activePrice = s_prc;
            regularPrice = prc;
        } else {
            p_activePrice = prc;
            regularPrice = prc;
        }
        INC.config.empty_prod_details = [];
        INC.config.empty_prod_details.push({
            p_id: productId,
            p_name: p_name,
            p_img: p_img,
            p_activePrice: p_activePrice,
            regularPrice: regularPrice,
            size: size_c_.split(",")[0].trim(),
            color: size_c_.split(",")[1].trim(),
        });
        setTimeout(function () {
            INC.methods.irbReq(productId, 5, "catalog_product_view");
        }, 100);
    }

    function autoselect_(textsel) {
        setTimeout(function () {
            if (textsel == null) {
                if (document.querySelector('select[name="options[33]"]') != null) {
                    let selvar = document.querySelector('select[name="options[33]"]');
                    textsel = selvar.options[selvar.selectedIndex].innerText.trim().toLocaleLowerCase();
                }
            }
            let all_list_el = document.querySelectorAll(".inc_pdp_product-main_block .inc_product_showcase_block");
            for (let alistel in all_list_el) {
                if (all_list_el[alistel] != null && Object.prototype.hasOwnProperty.call(all_list_el, alistel)) {
                    if (all_list_el[alistel].querySelector(".inc_product_desc_att_zero_block.inc_active") != null) {
                        if (all_list_el[alistel].querySelector(
                            '.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + textsel +
                            '"] div') != undefined) {
                            all_list_el[alistel].querySelector(
                                '.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                textsel + '"] div').click();
                        } else if (all_list_el[alistel].querySelector(
                            '.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' + textsel +
                            '"]') != undefined) {
                            all_list_el[alistel].querySelector(
                                '.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                textsel + '"]').click();
                        }
                        if (all_list_el[alistel].querySelector(".inc_product_desc_att_color_block.inc_active") != null) {
                            if (all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel +
                                '"] div') != undefined) {
                                all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel + '"]')
                                    .click();
                            }
                        }
                    }
                    if (textsel != null) {
                        if (textsel.indexOf("sel_35") < 0) {
                            if (all_list_el[alistel].querySelector(".inc_product_desc_att_size_block.inc_active") != null) {
                                textsel = textsel.replace("sel_34", "").trim();
                                if (all_list_el[alistel].querySelector(
                                    '.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                    textsel + '"] div') != undefined) {
                                    all_list_el[alistel].querySelector(
                                        '.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="' +
                                        textsel + '"] div').click();
                                }
                                textsel = textsel + "sel_34";
                            }
                        }
                        if (textsel.indexOf("sel_34") < 0) {
                            if (all_list_el[alistel].querySelector(".inc_product_desc_att_third_block.inc_active") != null) {
                                textsel = textsel.replace("sel_35", "").trim();
                                if (all_list_el[alistel].querySelector(
                                    '.inc_product_desc_att_third_block.inc_active .inc_product_desc_att_third_list_item_img_block[datasize="' +
                                    textsel + '"] div') != undefined) {
                                    all_list_el[alistel].querySelector(
                                        '.inc_product_desc_att_third_block.inc_active .inc_product_desc_att_third_list_item_img_block[datasize="' +
                                        textsel + '"] div').click();
                                }
                            }
                        }
                    }
                    if (all_list_el[alistel].querySelector(
                        '.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="' + textsel +
                        '"] div') != null) {
                        all_list_el[alistel].querySelector(
                            '.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="' + textsel +
                            '"] div').click();
                    }
                    if (all_list_el[alistel].querySelector(".inc_product_desc_att_color_block.inc_active") != null) {
                        if (all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel +
                            '"] div') != undefined) {
                            all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel + '"]')
                                .click();
                        }
                    }
                }
            }
        }, 500);
    }
    setTimeout(function () {
        if (window.innerWidth < 769) {
            window.addEventListener("orientationchange", function () {
                if (window.matchMedia("(orientation: portrait)").matches) {
                    console.log("PORTRAIT");
                    INC.config.deviceMode = "PORTRAIT";
                    let inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
                    if (inc_pdp_block_rem != null) {
                        inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
                    }
                    onloadpdp = false;
                    let sidebar_rem = document.querySelector(".inc_sidebar_modal_block");
                    if (sidebar_rem != null) {
                        sidebar_rem.parentNode.removeChild(sidebar_rem);
                    }
                    let over_rem = document.querySelector(".inc_sidebar_overlay_block");
                    if (over_rem != null) {
                        over_rem.parentNode.removeChild(over_rem);
                    }
                    setTimeout(function () {
                        INC.init();
                    }, 0);
                }
                if (window.matchMedia("(orientation: landscape)").matches) {
                    console.log("LANSCAPE");
                    INC.config.deviceMode = "LANSCAPE";
                    onloadpdp = false;
                    let inc_pdp_block_remove = document.querySelector(".inc_pdp_block");
                    if (inc_pdp_block_remove != null) {
                        inc_pdp_block_remove.parentNode.removeChild(inc_pdp_block_remove);
                    }
                    let sidebar_remove = document.querySelector(".inc_sidebar_modal_block");
                    if (sidebar_remove != null) {
                        sidebar_remove.parentNode.removeChild(sidebar_remove);
                    }
                    let over_remove = document.querySelector(".inc_sidebar_overlay_block");
                    if (over_remove != null) {
                        over_remove.parentNode.removeChild(over_remove);
                    }
                    setTimeout(function () {
                        INC.init();
                    }, 10);
                }
            }, {
                passive: true,
            });
            document.addEventListener("touchmove", checkScrollDirection, false);
        }

        function checkScrollDirection() {
            if (document.querySelector(".inc_pdp_block") != null) {
                if (document.querySelectorAll(".elc-sticky-container.js-sticky-container")[1] != null) {
                    document.querySelectorAll(".elc-sticky-container.js-sticky-container")[1].style.display = "block";
                }
            }
        }
    }, 3000);

    function slideTo(_id, _n, elm, type_of, arrow) {
        if (elm.className == "left_arrow" || elm.className == "left_arrow inc_active" || type_of == "left") {
            let nn2 = -1;
            let indslid = (INC.config.inc_slideIndex += nn2);
            inc_showSlides(indslid, nn2, elm, type_of, arrow);
        } else {
            let nn1 = 1;
            let indslid1 = (INC.config.inc_slideIndex += nn1);
            inc_showSlides(indslid1, nn1, elm, type_of, arrow);
        }
    }

    function inc_showSlides(n, _ind, elm, _type_of, arrow) {
        let showcase_other_img_list = elm.querySelector(".inc_product_showcase_block .inc_product_img_main_img a");
        let showcase_dots = elm.querySelectorAll(
            ".inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block");
        let modal_dots = elm.querySelectorAll(".inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block");
        let showcase_other_img = elm.querySelector(".inc_product_showcase_block .inc_product_img_main_img a img");
        let modal_other_img = elm.querySelector(".inc_product_modal_block .inc_product_img_main_img a img");
        let otherImg_list = showcase_other_img_list.getAttribute("otherImageList");
        let additional_img = [];
        additional_img = otherImg_list.split(",");
        let get_org_img = showcase_other_img_list.getAttribute("imageURL");
        if (n > additional_img.length) {
            INC.config.inc_slideIndex = 1;
        }
        if (n < 1) {
            INC.config.inc_slideIndex = additional_img.length;
        }
        for (let im = 0; im < showcase_dots.length; im++) {
            showcase_dots[im].classList.remove("inc_active");
            if (modal_dots[im] != undefined) {
                modal_dots[im].classList.remove("inc_active");
            }
        }
        let img_src = additional_img[INC.config.inc_slideIndex - 1].replace("160x90", "2000x1500");
        if (img_src != "null") {
            showcase_other_img.setAttribute("src", img_src);
            modal_other_img.setAttribute("src", img_src);
            showcase_other_img.setAttribute("onerror", "this.src='" + get_org_img + "'");
            modal_other_img.setAttribute("onerror", "this.src='" + get_org_img + "'");
            for (let r = 0; r < showcase_dots.length; r++) {
                showcase_dots[r].classList.remove("inc_active");
                modal_dots[r].classList.remove("inc_active");
            }
            if (showcase_dots[INC.config.inc_slideIndex - 1] != null) {
                showcase_dots[INC.config.inc_slideIndex - 1].classList.add("inc_active");
            }
            if (modal_dots[INC.config.inc_slideIndex - 1] != null) {
                modal_dots[INC.config.inc_slideIndex - 1].classList.add("inc_active");
            }
            if (arrow == "arrow") {
                if (modal_dots.length > 5) {
                    let activedots = elm.querySelector(
                        ".inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block.inc_active");
                    if (activedots != null) {

                        let actind = activedots.getAttribute("index");
                        if (actind == 5) {
                            if (modal_dots.length >= 6) {
                                modal_dots[0].setAttribute("style", "display: none !important;");
                            }
                        } else if (actind == 6) {
                            if (modal_dots.length >= 7) {
                                modal_dots[0].setAttribute("style", "display: none !important;");
                                modal_dots[1].setAttribute("style", "display: none !important;");
                            }
                        } else if (actind == 7) {
                            if (modal_dots.length >= 8) {
                                modal_dots[0].setAttribute("style", "display: none !important;");
                                modal_dots[1].setAttribute("style", "display: none !important;");
                                modal_dots[2].setAttribute("style", "display: none !important;");
                            }
                        } else if (actind == 8) {
                            if (modal_dots.length >= 9) {
                                modal_dots[0].setAttribute("style", "display: none !important;");
                                modal_dots[1].setAttribute("style", "display: none !important;");
                                modal_dots[2].setAttribute("style", "display: none !important;");
                                modal_dots[3].setAttribute("style", "display: none !important;");
                            }
                        } else if (actind == 9) {
                            if (modal_dots.length >= 10) {
                                modal_dots[0].setAttribute("style", "display: none !important;");
                                modal_dots[1].setAttribute("style", "display: none !important;");
                                modal_dots[2].setAttribute("style", "display: none !important;");
                                modal_dots[3].setAttribute("style", "display: none !important;");
                                modal_dots[4].setAttribute("style", "display: none !important;");
                            }
                        } else if (actind == 10) {
                            if (modal_dots.length >= 11) {
                                modal_dots[0].setAttribute("style", "display: none !important;");
                                modal_dots[1].setAttribute("style", "display: none !important;");
                                modal_dots[2].setAttribute("style", "display: none !important;");
                                modal_dots[3].setAttribute("style", "display: none !important;");
                                modal_dots[4].setAttribute("style", "display: none !important;");
                                modal_dots[5].setAttribute("style", "display: none !important;");
                            }
                        } else if (actind == 11) {
                            if (modal_dots.length >= 12) {
                                modal_dots[0].setAttribute("style", "display: none !important;");
                                modal_dots[1].setAttribute("style", "display: none !important;");
                                modal_dots[2].setAttribute("style", "display: none !important;");
                                modal_dots[3].setAttribute("style", "display: none !important;");
                                modal_dots[4].setAttribute("style", "display: none !important;");
                                modal_dots[5].setAttribute("style", "display: none !important;");
                                modal_dots[6].setAttribute("style", "display: none !important;");
                            }
                        } else {
                            modal_dots[0].style.display = "flex";
                            modal_dots[1].style.display = "flex";
                            modal_dots[2].style.display = "flex";
                            modal_dots[3].style.display = "flex";
                            if (modal_dots[4] != undefined) {
                                modal_dots[4].style.display = "flex";
                            }
                            if (modal_dots[5] != undefined) {
                                modal_dots[5].style.display = "flex";
                            }
                            if (modal_dots[6] != undefined) {
                                modal_dots[6].style.display = "flex";
                            }
                        }
                        // }
                    }
                }
            }
        }
    }
    // SWIPE FEATURE
    let xDown = null;
    let yDown = null;

    function add_swipe(element) {
        element.addEventListener("touchstart", handleTouchStart, {
            passive: true,
        });
        element.addEventListener("touchmove", handleTouchMove, {
            passive: true,
        });
    }

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    }

    function handleTouchMove(evt) {
        let prod_card = null;
        if (!xDown || !yDown) {
            return;
        }
        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        if (Math.abs(xDiff) + Math.abs(yDiff) > 150 || Math.abs(xDiff) + Math.abs(yDiff) < 150) {
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                /*most significant*/
                if (xDiff > 0) {
                    prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    slideTo(null, 0, prod_card, "left");
                } else {
                    /* right swipe */
                    prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    slideTo(null, 0, prod_card, "right");
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }

    function attribute_listing(valueArray) {
        let items = valueArray;
        let sorting = ["Colour", "Color", "Size_", "Color_size", "Size", "Leather", "Length", "Size", "Leather_Size",];
        let result = [];
        sorting.forEach(function (key) {
            let found = false;
            items = items.filter(function (item) {
                if (!found && item.attributeCode == key) {
                    result.push(item);
                    found = true;
                    return false;
                } else {
                    return true;
                }
            });
        });
        return result;
    }
    let Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (e) {
            let t = "";
            let n, r, i, s, o, u, a;
            let f = 0;
            e = Base64._utf8_encode(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = ((n & 3) << 4) | (r >> 4);
                u = ((r & 15) << 2) | (i >> 6);
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64;
                } else if (isNaN(i)) {
                    a = 64;
                }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
            }
            return t;
        },
        decode: function (e) {
            let t = "";
            let n, r, i;
            let s, o, u, a;
            let f = 0;
            e = e.replace(/[^A-Za-z0-9+/=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = (s << 2) | (o >> 4);
                r = ((o & 15) << 4) | (u >> 2);
                i = ((u & 3) << 6) | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r);
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i);
                }
            }
            t = Base64._utf8_decode(t);
            return t;
        },
        _utf8_encode: function (e) {
            e = e.replace(/rn/g, "n");
            let t = "";
            for (let n = 0; n < e.length; n++) {
                let r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                } else if (r > 127 && r < 2048) {
                    t += String.fromCharCode((r >> 6) | 192);
                    t += String.fromCharCode((r & 63) | 128);
                } else {
                    t += String.fromCharCode((r >> 12) | 224);
                    t += String.fromCharCode(((r >> 6) & 63) | 128);
                    t += String.fromCharCode((r & 63) | 128);
                }
            }
            return t;
        },
        _utf8_decode: function (e) {
            let t = "";
            let n = 0;
            let r = 0;
            let c2 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                    n++;
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
                    n += 2;
                } else {
                    c2 = e.charCodeAt(n + 1);
                    let c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode(
                        ((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    n += 3;
                }
            }
            return t;
        },
    };

    function getTrackingPixel() {
        let url = "https://track.webgains.com/click.html?wgcampaignid=214459&wgprogramid=12491";
        /*-------------------Tracking with Image Pixel---------------------------*/
        if (url != "") {
            let oImg = document.createElement("img");
            oImg.setAttribute("id", "cstracking");
            oImg.setAttribute("src", url);
            oImg.setAttribute("height", "1px");
            oImg.setAttribute("width", "1px");
            oImg.setAttribute("style", "display:none");
            document.body.appendChild(oImg);
        }
        /* -----------------------------------------------------------------------*/
    }

    function get_discount_price(p_original_price, p_sale_price) {
        return parseFloat(Math.abs(+p_original_price - +p_sale_price));
    }

    function incPriceMismatch(active_price, special_price, product_id) {
        let data = {}
        let priceMismatchObj = {}
        priceMismatchObj.token = INC.config.clientToken;
        priceMismatchObj.product_id = product_id ? product_id : INC.methods.getProductIdFromWebPage()
        let elProductPrice = null
        let elSpecialPrice = null
        
        if (document.querySelector('.product-info-price .normal-price') != null) {
            elProductPrice = document.querySelector('.product-info-price .normal-price .price').innerText.replace('£', '').replace(',', '.').trim()
        }else if(document.querySelector('.product-info-price .special-price')){
            if(document.querySelector('.product-info-price .special-price .price')){
                elProductPrice = document.querySelector('.product-info-price .special-price .price').innerText.replace('£', '').replace(',', '.').trim()
            }
        }
        if (document.querySelector('.product-info-price .rrp-price #rrp-price') != null) {
            elSpecialPrice = document.querySelector('.product-info-price .rrp-price #rrp-price').innerText.replace(/^\D+/g, '').replace('\n', '').replace(',', '.').trim();
        }

        let clientSpecialPrice = null
        if (elSpecialPrice) {
            clientSpecialPrice = elSpecialPrice
        }
        let clientProductPrice = null
        if (elProductPrice != null) {
            clientProductPrice = elProductPrice
        }

        let final_product_price = parseFloat(clientProductPrice)
        let final_special_price = clientSpecialPrice
        let final_old_product_price = null;
        let final_old_client_special_price = null;

        if (special_price != null) {
            if (Number(active_price) > Number(special_price)) {
                final_old_product_price = parseFloat(active_price)
                final_old_client_special_price = parseFloat(special_price) == 0 ? null : parseFloat(special_price)
            } else {
                final_old_product_price = parseFloat(special_price) == 0 ? null : parseFloat(special_price)
                final_old_client_special_price = parseFloat(active_price)
            }
        } else {
            final_old_product_price = parseFloat(active_price)
            final_old_client_special_price = special_price == 0 ? null : special_price
        }
        //  
        if (final_product_price != null) {
            priceMismatchObj.product_price = final_product_price.toString()
        } else {
            priceMismatchObj.product_price = final_product_price
        }
        priceMismatchObj.special_price = final_special_price ? final_special_price.toString() : final_special_price

        priceMismatchObj.old_product_price = (final_old_product_price).toString()
        priceMismatchObj.old_special_price = final_old_client_special_price ? (final_old_client_special_price).toString() : null
        priceMismatchObj.price_type = "IncVAT"

        data = {
            "eventData": btoa(JSON.stringify(priceMismatchObj))
        }

        let mismatch = false
        if (final_product_price !== final_old_product_price) {
            mismatch = true
        }

        if (final_old_product_price === final_old_client_special_price && final_special_price == null) {
            mismatch = false
        }

        if (mismatch) {
            window.jQuery.ajax({
                type: "POST",
                url: "https://gather.increasingly.com/ProductPriceDetails",
                data: JSON.stringify(data),
                dataType: 'json',
                headers: {
                    "content-type": "application/json; charset=utf-8"
                },
                error: function (jqXHR) {
                    console.log('priceMismatched error - ' + jqXHR)
                },
                success: function (result) {
                    console.log('priceMismatched - ' + JSON.stringify(result))
                }
            });
            return true
        } else {
            return false
        }
    }

    function oosproduct(prdid) {

        let format_json_data;
        let product_id = prdid;
        let qty = 0
        format_json_data = JSON.stringify({
            "token": INC.config.clientToken,
            "product_id": product_id,
            "quantity": qty,
        });

        if (product_id != null) {
            let data = {
                "eventData": Base64.encode(format_json_data)
            };
            let p_url = 'https://gather.increasingly.com/ProductInventoryUpdate';
            let xhr = new XMLHttpRequest();
            xhr.open("POST", p_url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        // console.log(xhr.responseText)
                    }
                }
            };
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        }
    }

    function updateClientToBundleSize(element, type) {
        if (!document.querySelector(".inc_pdp_block")) return;
        let selectedValue = null;
        if (element.classList == "attributes-select") {
            selectedValue = element.options[element.selectedIndex].text.trim();
        } else {
            if (element.classList == "") {
                selectedValue = element.parentElement.getAttribute("title");
            } else {
                selectedValue = element.getAttribute("title");
            }
        }
        if (selectedValue == "") return;
        let pdpSizeBlock = document.querySelector(".inc_pdp_product-main_block").querySelector(".inc_product_desc_block").querySelectorAll(
            ".inc_product_desc_att_size_list_item_img_block.avail");
        let colorSizeBlock = document.querySelector(".inc_pdp_product-main_block").querySelector(".inc_product_desc_block").querySelectorAll(
            ".inc_product_desc_att_color_list_item_img_block");
        try {

            if (element.parentElement.parentElement.classList.contains("attributes__value--out-of-stock")) {
                if (document.querySelector('.inc_pdp_block') != null) {
                    document.querySelector('.inc_pdp_block').style.display = "none"
                }

            } else {
                if (document.querySelector('.inc_pdp_block') != null) {
                    document.querySelector('.inc_pdp_block').style.display = ""
                }

                pdpSizeBlock.forEach((button) => {
                    if (button.dataset.size !== undefined) {
                        if (button.dataset.size.toLocaleLowerCase() == selectedValue.toLocaleLowerCase()) {
                            button.click();
                        } else if (button.innerText.toLocaleLowerCase() == selectedValue.toLocaleLowerCase()) {
                            button.click();
                        }
                    }
                });
            }

        } catch {
            console.log("Catch");
        }
        try {
            if (element.parentElement.parentElement.classList.contains("attributes__value--out-of-stock")) {
                if (document.querySelector('.inc_pdp_block') != null) {
                    document.querySelector('.inc_pdp_block').style.display = "none"
                }

            } else {
                if (document.querySelector('.inc_pdp_block') != null) {
                    document.querySelector('.inc_pdp_block').style.display = ""
                }

                colorSizeBlock.forEach((button) => {
                    if (button.dataset.color !== undefined) {
                        console.log(button.innerText, selectedValue)
                        if (button.dataset.color.toLocaleLowerCase() == selectedValue.toLocaleLowerCase()) {
                            button.click();
                        } else if (button.innerText.toLocaleLowerCase() == selectedValue.toLocaleLowerCase()) {
                            button.click();
                        }
                    }
                });
            }

        } catch {
            console.log("Catch");
        }
    }

    function cb_tc(bundle_response, recommendation_) {

        let bundles_tc = "";
        let bundleproductarrayTC = {};
        let pdpProductId = "";
        if (bundle_response.ProductsDetail != null) {
            for (let prdetails in bundle_response.ProductsDetail) {
                bundleproductarrayTC[bundle_response.ProductsDetail[prdetails].ProductId] = bundle_response.ProductsDetail[prdetails];
            }
        } else if (bundle_response.ProductsDetail == null || bundle_response.ProductsDetail == "null") {
            for (let c in bundle_response.CategoryRecommendations) {
                bundleproductarrayTC[bundle_response.CategoryRecommendations[c].ProductId] = bundle_response.CategoryRecommendations[c];
            }
        }
        if (recommendation_ == "recommendation") {
            bundles_tc = bundle_response.CategoryRecommendations;
        } else {
            bundles_tc = bundle_response.Bundles;
        }
        for (let i in bundles_tc) {
            if (Object.prototype.hasOwnProperty.call(bundles_tc, i)) {
                if (INC.config.dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1) {
                    if (recommendation_ != "recommendation") {
                        INC.config.dupDataObjectProducts.push(bundles_tc[i].BundleId);
                    }
                    INC.config.bundledid.push({
                        bundleids: bundles_tc[i].BundleId,
                        productids: bundles_tc[i].ProductIds,
                    });
                    let irbBundleObj = bundles_tc[i];
                    let bundleObj = {};
                    if (recommendation_ != "recommendation") {
                        bundleObj.id = irbBundleObj["BundleId"];
                        bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                        bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                        bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                        bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                        bundleObj.productCount = irbBundleObj["ProductCount"];
                    }
                    let irbProductsArray = "";
                    if (recommendation_ == "recommendation") {
                        irbProductsArray = bundles_tc;
                    } else {
                        irbProductsArray = irbBundleObj["ProductIds"];
                    }
                    if (recommendation_ != "recommendation") {
                        if (irbProductsArray.length) {
                            if (INC.dataStore.bundleProductsArray != undefined) {
                                pdpProductId = irbProductsArray[0];
                                INC.dataStore.bundleProductsArray.push(irbProductsArray[1]);
                            }
                        }
                    }

                    for (let irbprdarray in irbProductsArray) {
                        if (Object.prototype.hasOwnProperty.call(irbProductsArray, irbprdarray)) {
                            let product = bundleproductarrayTC[irbProductsArray[irbprdarray]] || irbProductsArray[irbprdarray];
                            if (recommendation_ == "recommendation") {
                                INC.config.datastoreprod = []
                            }
                            if (INC.config.datastoreprod.indexOf(product.ProductId) == -1) {
                                if (recommendation_ == "recommendation") {
                                    INC.config.recommendationProduct.push(product.ProductId);
                                }

                                let pAttributes = product["Attributes"] || "";
                                if (pAttributes != "" && pAttributes != null) {
                                    for (let patt1 of pAttributes) {
                                        if (patt1.attributeCode == "color" || patt1.attributeCode == "Choose a Colour" || patt1.attributeCode == "COLOUR" || patt1.attributeCode == "Choose a Flavour") {
                                            patt1.attributeCode = "Color";
                                        }
                                        if (patt1.attributeCode == "size" || patt1.attributeCode == "Choose a Size") {
                                            patt1.attributeCode = "Size";
                                        }
                                        if (patt1.attributeCode == "SIZE") {
                                            patt1.attributeCode = "Size";
                                        }
                                        if (patt1.attributeCode == "Choose a Finish" || patt1.attributeCode == "RETICULE" || patt1.attributeCode ==
                                            "CALF" || patt1.attributeCode == "Choose a Weight" || patt1.attributeCode == "Choose a Pack Size") {
                                            patt1.attributeCode = "Size_";
                                        }
                                        if (pAttributes.length == 1) {
                                            if (patt1.attributeCode == "color" || patt1.attributeCode == "Color" || patt1.attributeCode == "COLOUR") {
                                                patt1.attributeCode = "Color";
                                            } else {
                                                patt1.attributeCode = "Size";
                                            }
                                        }
                                    }
                                    pAttributes = attribute_listing(pAttributes);
                                }
                                let pAttObj = {};
                                let attr_values = "";
                                let tcount = 0;
                                for (let p2 of pAttributes) {
                                    if (pAttributes.length == 1) {
                                        if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") {
                                            pAttributes[0].attributeIdAd = 0;
                                            attr_values = p2.attributeValues;
                                            for (let v of attr_values) {
                                                v["opId"] = 0;
                                                v.optionId = 0;
                                            }
                                        } else {
                                            pAttributes[0].attributeIdAd = 1;
                                            attr_values = p2.attributeValues;
                                            for (let v1 of attr_values) {
                                                v1["opId"] = 1;
                                                v1.optionId = 1;
                                            }
                                        }
                                    } else {
                                        if (pAttributes[1] != undefined) {
                                            if (pAttributes[0].attributeCode != "Color" && pAttributes[1].attributeCode != "Color") {
                                                if (tcount == 0) {
                                                    tcount++;
                                                }
                                            }
                                        }
                                        p2.attributeIdAd = tcount;
                                        attr_values = p2.attributeValues;
                                        for (let v2 of attr_values) {
                                            v2["opId"] = tcount;
                                            v2.optionId = tcount;
                                        }
                                    }
                                    tcount++;
                                }
                                if (pAttributes.length) {
                                    for (let k in pAttributes) {
                                        let pAttributesObj = pAttributes[k];
                                        let pAttributesValues = pAttributesObj["attributeValues"];
                                        for (let l in pAttributesValues) {
                                            let childProduct = pAttributesValues[l];
                                            if (childProduct["childProductId"] == null) {
                                                childProduct["childProductId"] = product["ProductId"];
                                                childProduct["childProductSku"] = product["ProductSku"];
                                                childProduct["childProductName"] = product["ProductName"];
                                                childProduct["childProductImageUrl"] = product["ImageURL"];
                                                childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                                childProduct["childProductUrl"] = product["ProductUrl"];
                                                childProduct["childProductPrice"] = product["Price"];
                                                childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                                childProduct["childProductDescription"] = product["Description"];
                                                childProduct["childInternalProductId"] = product["ProductId"];
                                            }
                                            childProduct["ProductType"] = product["ProductType"];
                                            childProduct["mainSKU"] = product["ProductSku"];
                                            childProduct["childProductIdmain"] = product["ProductId"];
                                            childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                            childProduct["childProductPriceMain"] = product["Price"];
                                            childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                            childProduct["childProductNameMain"] = product["ProductName"];
                                            childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                                            childProduct["childProductUrlMain"] = product["ProductUrl"];
                                            childProduct["Field1"] = product["Field1"];
                                            childProduct["Manufacturer"] = product["Manufacturer"];
                                            childProduct["childreviewsCount"] = product["RatingCount"];
                                            childProduct["childRating"] = product["Rating"];
                                            childProduct["childCategoryName"] = product["CategoryName"];
                                            childProduct["childCategoryId"] = product["CategoryId"];
                                            childProduct["childProductDescription"] = product["Description"];
                                            let productObj = new INC.classes.ProductAttObj(childProduct);
                                            productObj["bundledProductId"] = pdpProductId;
                                            productObj.mainId = product["ProductId"];
                                            productObj.bundleId = bundleObj.id;
                                            productObj.sku = productObj.id;
                                            productObj.option[pAttributesObj["attributeIdAd"]].id = pAttributesObj["attributeId"];
                                            productObj.option[pAttributesObj["attributeIdAd"]].label = pAttributesObj["frontEndLabel"];
                                            productObj.option[pAttributesObj["attributeIdAd"]].code = pAttributesObj["attributeCode"];
                                            productObj.option[pAttributesObj["attributeIdAd"]].att_id = pAttributesObj.attributeId;
                                            if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj, product["ProductId"])) {
                                                INC.dataStore.dataStoreObj[product["ProductId"]] = {};
                                            }
                                            if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj[product["ProductId"]], productObj["id"])) {
                                                INC.dataStore.dataStoreObj[product["ProductId"]][productObj["id"]] = {};
                                            }
                                            pAttObj = INC.dataStore.dataStoreObj[product["ProductId"]][productObj["id"]];
                                            for (let pAttcb in productObj) {
                                                if (pAttcb == "option") {
                                                    if (!Object.prototype.hasOwnProperty.call(pAttObj, "option")) {
                                                        pAttObj["option"] = {};
                                                    }
                                                    Object.keys(productObj[pAttcb]).forEach(function (key) {
                                                        pAttObj[pAttcb][key] = productObj[pAttcb][
                                                            key
                                                        ];
                                                    });
                                                } else {
                                                    pAttObj[pAttcb] = productObj[pAttcb];
                                                }
                                            }
                                        }
                                    }
                                }
                                if (pAttributes.length == 0) {
                                    let productObjS = new INC.classes.ProductObj(product);
                                    productObjS["bundleId"] = irbBundleObj["BundleId"];
                                    productObjS["bundledProductId"] = pdpProductId;
                                    productObjS.sku = productObjS.id;
                                    productObjS.Filed3 = product["Field3"] + " | " + product["Field4"];
                                    if (INC.dataStore.dataStoreObj != undefined && !Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj,
                                        productObjS["mainId"])) {
                                        INC.dataStore.dataStoreObj[productObjS["mainId"]] = {};
                                    }
                                    if (INC.dataStore.dataStoreObj != undefined) {
                                        INC.dataStore.dataStoreObj[productObjS["mainId"]][productObjS["id"]] = {};
                                        if (!!window.MSInputMethodContext && !!document.documentMode) {
                                            INC.dataStore.dataStoreObj[productObjS["mainId"]][productObjS["id"]] = JSON.parse(JSON.stringify(productObjS));
                                        } else {
                                            INC.dataStore.dataStoreObj[productObjS["mainId"]][productObjS["id"]] = Object.assign({}, productObjS);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        setTimeout(function () {
            if (recommendation_ == "recommendation") {
                INC.methods.createAMBlock("PDP");
            } else {
                INC.methods.createPDPBlock("sidebar");
            }
        }, 200);
    }
    setTimeout(function () {
        if (document.querySelector(".inc_pdp_block") != null) {
            if (document.querySelector(".inc_pdp_product-main_block .inc_product_module_block").classList.contains("simple") && document
                .querySelector(".inc_pdp_bundle_product_list_main_block .inc_product_module_block").classList.contains("simple")) {
                document.querySelector(".inc_pdp_block").classList.add("bothSimple");
            }
        }
    }, 2500);

    var is_visible_elem_counter = 0;
    if (window.innerWidth < 980) {
        var scrollableElement = document.body;
        scrollableElement.addEventListener('wheel', checkScrollDirection);
        document.addEventListener("touchmove", checkScrollDirection, false);
        function checkScrollDirection(event) {
            if (document.querySelector(".inc_pdp_block") != null) {
                var inc_div = document.querySelector(".inc_pdp_block");
                if (inc_isOnScreen_page(jQuery('.inc_pdp_block')) && is_visible_elem_counter < 1) {
                    var data = {
                        "eventData": String(btoa(JSON.stringify({ "event_data": { "product_id": INC.dataStore.pdpProductId }, "event_type": "catalog_product_view", "page_type": "catalog_product_view", "method": "track", "platform": "", "token": INC.config.clientToken }))),
                        "vid": readCookie('ivid'),
                        "time": getCurrentFormattedTime(),
                        "uri": document.location.href
                    };
                    makeTrackingApiCall(JSON.stringify(data));
                    is_visible_elem_counter++;
                }
            } else if (document.querySelector(".inc_af_block") != null && INC.config.pageType == "pdp") {
                var inc_div = document.querySelector(".inc_af_block");
                if (inc_isOnScreen_page(jQuery('.inc_af_block')) && is_visible_elem_counter < 1) {
                    var data = {
                        "eventData": String(btoa(JSON.stringify({ "event_data": { "product_id": INC.dataStore.pdpProductId }, "event_type": "catalog_product_view", "page_type": "catalog_product_view", "method": "track", "platform": "", "token": INC.config.clientToken }))),
                        "vid": readCookie('ivid'),
                        "time": getCurrentFormattedTime(),
                        "uri": document.location.href
                    };
                    makeTrackingApiCall(JSON.stringify(data));
                    is_visible_elem_counter++;
                }
            }
        }
    } else {
        window.onscroll = function () { execute_import_tracking(); };
    }
    function inc_isOnScreen_page(elem) {
        var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
            if (document.querySelector(".inc_pdp_block") != null) {
                var el = document.querySelector(".inc_pdp_block")
            } else if (document.querySelector(".inc_af_block") != null && INC.config.pageType == "pdp") {
                var el = document.querySelector(".inc_af_block");
            }
            if (el != null) {
                var top = el.offsetTop;
                var left = el.offsetLeft;
                var width = el.offsetWidth;
                var height = el.offsetHeight;
                while (el.offsetParent) {
                    el = el.offsetParent;
                    top += el.offsetTop;
                    left += el.offsetLeft;
                }
                return (top < (window.pageYOffset + window.innerHeight + 2000) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset);
            }
        } else {
            if (elem.length == 0) {
                return;
            }
            var $window = jQuery(window)
            var viewport_top = $window.scrollTop()
            var viewport_height = $window.height()
            var viewport_bottom = viewport_top + viewport_height
            var $elem = jQuery(elem)
            var top = $elem.offset().top
            var height = $elem.height()
            var bottom = top + height
            return (top >= viewport_top && top < viewport_bottom) ||
                (bottom > viewport_top && bottom <= viewport_bottom) ||
                (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
        }
    }
    function execute_import_tracking() {
        if (document.querySelector(".inc_pdp_block") != null || document.querySelector(".inc_pdp_block") != undefined) {
            var el = document.querySelector(".inc_pdp_block");
            var a = element_in_viewport(el);
        } else if (document.querySelector(".inc_af_block") != null && INC.config.pageType == "pdp") {
            var el = document.querySelector(".inc_af_block");
            var a = element_in_viewport(el);
        }
        if (a == true && is_visible_elem_counter < 1) {
            var data = {
                "eventData": String(btoa(JSON.stringify({ "event_data": { "product_id": INC.config.Product_id }, "event_type": "catalog_product_view", "page_type": "catalog_product_view", "method": "track", "platform": "", "token": INC.config.clientToken }))),
                "vid": readCookie('ivid'),
                "time": getCurrentFormattedTime(),
                "uri": document.location.href
            };
            makeTrackingApiCall(JSON.stringify(data));
            is_visible_elem_counter++;
        }
    }
    function element_in_viewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
        return (top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset);
    }
})();