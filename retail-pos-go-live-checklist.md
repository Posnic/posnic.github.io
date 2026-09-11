# Retail POS Go-Live Checklist

> A practical acceptance checklist for launching POS and Billing Software at a retail counter or restaurant without discovering critical gaps during service.

## Rehearse the complete sale

- Create representative products, prices, taxes, discounts, and users.
- Complete cash and each supported non-cash payment workflow.
- Print, reprint, void, and refund test transactions according to the business policy.
- Confirm stock movements and end-of-day totals against the test sales.
- Exercise manager approval and restricted cashier actions.

## Prove the counter hardware

- Test the exact receipt printer model, paper width, cash drawer, barcode scanner, and weighing or customer-display equipment used at the site.
- Verify receipt layout with long product names, discounts, tax details, and the business address.
- Check every workstation and user account rather than assuming identical devices behave alike.
- Keep a documented manual fallback for a failed printer or workstation.

## Test the network boundary

For an Offline POS, disconnect the internet during a test sale and verify the local workflow remains usable. For an Online/Offline POS deployment, also test reconnection, synchronization, duplicate prevention, and the behavior of each branch when the server cannot be reached.

Do not treat a browser demo as hardware or deployment acceptance. Run these checks on the actual site network and devices.

## Verify business controls

- Have the business owner confirm tax rates, invoice numbering, refund rules, permissions, and required receipt fields.
- Compare opening inventory and customer balances with the approved migration source.
- Confirm backups complete, can be copied off the POS device, and can be restored into a separate test installation.
- Record who can access exports, backups, administrative settings, and remote services.

## Plan the first trading day

- Name the person authorized to pause the rollout or return to the previous process.
- Keep the old records and migration export unchanged until reconciliation is complete.
- Schedule opening, midday, and closing checks for sales totals, cash, stock, printers, and sync status.
- Write down support contacts, application version, device names, and the rollback decision time.

[Posnic](https://www.posnic.com/) is offline-first, open source POS and Billing Software for retail shops and restaurants. Its source, releases, and operating documentation are public in the [Posnic/POS repository](https://github.com/Posnic/POS).
