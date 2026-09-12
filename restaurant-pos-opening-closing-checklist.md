# Restaurant POS Opening and Closing Checklist

> A practical shift checklist for restaurant POS and Billing Software covering tills, menus, printers, offline operation, cash reconciliation, and handover.

## Before service

- Confirm the business date, shift, cashier accounts, tax settings, and opening cash float.
- Run a test order through each active service mode: dine-in, takeaway, delivery, or counter sale.
- Check menu availability, modifiers, prices, discounts, service charges, and kitchen-routing rules.
- Print a test receipt and kitchen ticket from every station used during service.
- Verify barcode scanners, cash drawers, customer displays, and payment terminals where applicable.

## Test the failure path

- Disconnect the internet and complete the workflow promised for Offline POS operation.
- For an Online/Offline POS setup, confirm queued work synchronizes once connectivity returns without duplicate orders or payments.
- Record the manual fallback for a failed printer, workstation, network link, or payment terminal.
- Keep support contacts, device names, application version, and recovery steps available away from the affected workstation.

## During service

- Require manager approval for voids, refunds, price overrides, and reopened checks according to policy.
- Investigate printer queues, unsent kitchen tickets, payment mismatches, and synchronization warnings promptly.
- Count cash when responsibility changes between staff and record the handover.
- Protect customer details and do not leave administrative sessions open on shared terminals.

## At closing

- Stop new orders at an agreed cutoff and resolve open, parked, or partially paid checks.
- Compare sales by payment type with cash, terminal settlement, refunds, discounts, tips, and service charges.
- Record cash overages or shortages with the responsible shift and approver.
- Confirm stock adjustments, waste, complimentary items, and cancelled orders have supporting reasons.
- Complete the end-of-day report, backup, synchronization check, and signed shift handover.

## Keep evidence

Retain the opening count, closing reconciliation, exception notes, terminal settlement, and backup result according to local accounting and privacy rules. Test restoration separately; a successful backup message alone does not prove recovery.

[Posnic](https://www.posnic.com/) is offline-first open source POS and Billing Software for retail shops and restaurants. Its application source, releases, and operating documentation are public in the [Posnic/POS repository](https://github.com/Posnic/POS).

