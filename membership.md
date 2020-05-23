---
layout: post
title: Join us
priority: 5
description: Sign up to support British unicycling
nav-menu: false
menu_bottom: false
show_tile: false
---

# Thank you for joining the UUU
<html>

<div id="wrapper" style="width: 100%; overflow: hidden;">
<div style="width: 30%; float: left;">
<h3>There's just one thing more to do. Use this form to pay our £5 membership fee with PayPal or your credit or debit card.</h3>
</div>
<div id="paypal-button-container" style="overflow: hidden; width: 60%; float: right; background-color: #a3a6b1; text-align: center;  padding: 20px;  border: thick solid whitesmoke;  border-radius: 10px;"></div>
</div>

<script src="https://www.paypal.com/sdk/js?currency=GBP&client-id=AXsOPxGOsRnYVukKxUXxDxwrJA8C_x7ga2NylWMcfoND1uaBg9w7z-bcmERPTzGvNxiCv7u4z52jIXGc"> </script>
<script>
  paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'white',
          layout: 'vertical',
          label: 'pay',
          size: 'responsive',              
      },
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '5.00'
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Transaction completed by ' + details.payer.name.given_name);
      });
    }
  }).render('#paypal-button-container'); // Display payment options on your web page
</script>
</html>
