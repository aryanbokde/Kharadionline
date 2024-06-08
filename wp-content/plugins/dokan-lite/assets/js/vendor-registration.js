(()=>{var e,r;e=jQuery,r={init:function(){var r=e("form.register");e(".user-role input[type=radio]",r).on("change",this.showSellerForm),e(document).on("dokan_event_seller_registration_form",this.showSellerForm),e(".tc_check_box",r).on("click",this.onTOC),e("#shop-phone",r).on("keydown",dokan_sanitize_phone_number),e("#company-name",r).on("focusout",this.generateSlugFromCompany),e("#seller-url",r).on("keydown",this.constrainSlug),e("#seller-url",r).on("keyup",this.renderUrl),e("#seller-url",r).on("focusout",this.checkSlugAvailability),this.validationLocalized(),this.handlePasswordStrengthObserver(),e(document).trigger("dokan_event_seller_registration_form")},validate:function(r){e("form.register").validate({errorPlacement:function(r,t){e(t).closest(".form-group").addClass("has-error").append(r)},success:function(r,t){e(t).closest(".form-group").removeClass("has-error")},submitHandler:function(e){e.submit()}})},showSellerForm:function(){let r=e(this).val();0===r.length&&(r=dokanRegistrationI18n.defaultRole),"seller"===r?(e(".show_if_seller").find("input, select").prop("disabled",!1),e(".show_if_seller").slideDown(),e(".tc_check_box").length>0&&e("button[name=register]").prop("disabled",!0),e(".user-role .dokan-role-seller").prop("checked",!0)):(e(".show_if_seller").find("input, select").prop("disabled",!0),e(".show_if_seller").slideUp(),e(".tc_check_box").length>0&&e("button[name=register]").prop("disabled",!1),e(".user-role .dokan-role-customer").prop("checked",!0))},onTOC:function(){e(this).val(),e(this).prop("checked")?(e("input[name=register]").removeAttr("disabled"),e("button[name=register]").removeAttr("disabled"),e("input[name=dokan_migration]").removeAttr("disabled")):(e("input[name=register]").attr("disabled","disabled"),e("button[name=register]").attr("disabled","disabled"),e("input[name=dokan_migration]").attr("disabled","disabled"))},generateSlugFromCompany:function(){var r=getSlug(e(this).val());e("#seller-url").val(r),e("#url-alart").text(r),e("#seller-url").focus()},constrainSlug:function(r){e(this).val(),-1!==e.inArray(r.keyCode,[46,8,9,27,13,91,109,110,173,189,190])||65==r.keyCode&&!0===r.ctrlKey||r.keyCode>=35&&r.keyCode<=39||(r.shiftKey||(r.keyCode<65||r.keyCode>90)&&(r.keyCode<48||r.keyCode>57))&&(r.keyCode<96||r.keyCode>105)&&r.preventDefault()},checkSlugAvailability:function(){var r=e(this),t={action:"shop_url",url_slug:r.val(),_nonce:dokan.nonce};if(""!==r.val()){var o=r.closest(".form-row");o.block({message:null,overlayCSS:{background:"#fff url("+dokan.ajax_loader+") no-repeat center",opacity:.6}}),e.post(dokan.ajaxurl,t,(function(r){!0===r.success?(e("#url-alart").removeClass("text-danger").addClass("text-success"),e("#url-alart-mgs").removeClass("text-danger").addClass("text-success").text(dokan.seller.available),e(".woocommerce-form-register__submit").prop("disabled",!1)):(e("#url-alart").removeClass("text-success").addClass("text-danger"),e("#url-alart-mgs").removeClass("text-success").addClass("text-danger").text(dokan.seller.notAvailable),e(".woocommerce-form-register__submit").prop("disabled",!0)),o.unblock()}))}},renderUrl:function(){e("#url-alart").text(e(this).val())},validationLocalized:function(){var r=DokanValidateMsg;r.maxlength=e.validator.format(r.maxlength_msg),r.minlength=e.validator.format(r.minlength_msg),r.rangelength=e.validator.format(r.rangelength_msg),r.range=e.validator.format(r.range_msg),r.max=e.validator.format(r.max_msg),r.min=e.validator.format(r.min_msg),e.validator.messages=r},handlePasswordStrengthObserver:function(){const e=document.querySelector(".woocommerce-form-register .password-input"),r=["good","strong"];e&&new MutationObserver(((e,t)=>{for(const t of e)r.some((e=>t.target.classList.contains(e)))&&this.ensureShopSlugAvailability()})).observe(e,{subtree:!0,childList:!0})},ensureShopSlugAvailability:function(){const r=e("#url-alart-mgs").hasClass("text-success"),t=e('.vendor-customer-registration input[name="role"]:checked'),o=e(".woocommerce-form-register__submit");"seller"===t.val()&&(r?o.prop("disabled",!1):o.prop("disabled",!0))}},e((function(){if(window.Dokan_Vendor_Registration=r,window.Dokan_Vendor_Registration.init(),e(".woocommerce ul").hasClass("woocommerce-error")&&!e(".show_if_seller").is(":hidden")){var t=e("form.register");e(".user-role input[type=radio]",t).trigger("change")}e(".tc_check_box").length>0&&(e("input[name=dokan_migration]").attr("disabled","disabled"),e("input[name=register]").attr("disabled","disabled"))}))})();