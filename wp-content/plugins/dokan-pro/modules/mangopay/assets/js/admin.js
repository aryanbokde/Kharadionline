!function(o){"use strict";const e={init:function(){e.switchMode(o("#woocommerce_dokan_mangopay_sandbox_mode").is(":checked")),e.toggleDelayPeriodField(o("#woocommerce_dokan_mangopay_disburse_mode").val()),e.toggleIntervalField(o("#woocommerce_dokan_mangopay_announcement_to_sellers").is(":checked")),o("#woocommerce_dokan_mangopay_sandbox_mode").on("change",(function(){e.switchMode(o(this).is(":checked"))})),o("#woocommerce_dokan_mangopay_disburse_mode").on("change",(function(){e.toggleDelayPeriodField(o(this).val())})),o("#woocommerce_dokan_mangopay_announcement_to_sellers").on("change",(function(){e.toggleIntervalField(o(this).is(":checked"))})),o("#woocommerce_dokan_mangopay_webhook_key").closest("tr").hide()},switchMode:function(e){e?(o("#woocommerce_dokan_mangopay_client_id").closest("tr").hide(),o("#woocommerce_dokan_mangopay_api_key").closest("tr").hide(),o("#woocommerce_dokan_mangopay_sandbox_client_id").closest("tr").show(),o("#woocommerce_dokan_mangopay_sandbox_api_key").closest("tr").show(),o("#woocommerce_dokan_mangopay_enable_3DS2").closest("tr").show()):(o("#woocommerce_dokan_mangopay_client_id").closest("tr").show(),o("#woocommerce_dokan_mangopay_api_key").closest("tr").show(),o("#woocommerce_dokan_mangopay_sandbox_client_id").closest("tr").hide(),o("#woocommerce_dokan_mangopay_sandbox_api_key").closest("tr").hide(),o("#woocommerce_dokan_mangopay_enable_3DS2").closest("tr").hide())},toggleDelayPeriodField:function(e){"DELAYED"===e?o("#woocommerce_dokan_mangopay_disbursement_delay_period").closest("tr").show():o("#woocommerce_dokan_mangopay_disbursement_delay_period").closest("tr").hide()},toggleIntervalField:function(e){e?o("#woocommerce_dokan_mangopay_notice_interval").closest("tr").show():o("#woocommerce_dokan_mangopay_notice_interval").closest("tr").hide()}};o(document).ready((function(){e.init()}))}(jQuery);