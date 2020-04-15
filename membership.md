---
layout: post
title: Join us
priority: 5
description: Sign up to support British unicycling
image: assets/images/100km.jpg
nav-menu: true
menu_bottom: true
show_tile: false
---

# Thank you for joining the UUU!

There's just one thing more to do. Click below to pay our £5 membership fee with PayPal or your credit or debit card.

<div id="paypal-button-container" style="background-color: #ced9f0; text-align: center; padding: 20px"></div>
<script src="https://www.paypal.com/sdk/js?client-id=AXsOPxGOsRnYVukKxUXxDxwrJA8C_x7ga2NylWMcfoND1uaBg9w7z-bcmERPTzGvNxiCv7u4z52jIXGc&currency=GBP" data-sdk-integration-source="button-factory"></script>
<script>
  paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'white',
          layout: 'vertical',
          label: 'pay',
          
      },
      createOrder: function(data, actions) {
          return actions.order.create({
              purchase_units: [{
                  amount: {
                      value: '5'
                  }
              }]
          });
      },
      onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
          });
      }
  }).render('#paypal-button-container');
</script>

