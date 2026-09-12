# Retail POS Discount and Promotion Testing Checklist

Use this checklist to test discounts, coupons, price rules, bundles, loyalty rewards, and limited-time promotions in a retail POS or Billing Software system before they reach a live till.

## Define the rule precisely

For every promotion, record the intended products, locations, customers, dates, times, quantities, minimum spend, discount type, value, usage limit, and required approval. State which conditions must all be true and which are alternatives.

Document exclusions explicitly: sale items, gift cards, deposits, delivery fees, regulated products, employee purchases, returns, or other categories defined by store policy. Confirm local pricing, tax, advertising, and receipt requirements with qualified advisers.

## Build a test matrix

| Scenario | What to verify | Evidence to retain |
| --- | --- | --- |
| Exact match | Every required condition is met | Basket, rule, discount, tax, and total |
| Just below | Spend, quantity, date, or time misses the threshold | No unintended discount |
| Just above | Threshold is exceeded by the smallest practical amount | Expected discount and rounding |
| Mixed basket | Eligible and excluded items appear together | Discount applies only to intended lines |
| Multiple rules | Coupon, automatic offer, loyalty, and manual discount overlap | Documented priority, stacking, or rejection |
| Return or void | A discounted sale is partially or fully reversed | Correct refund, stock, tender, and audit trail |
| Expiry | Sale is attempted immediately before and after the cutoff | Consistent time-zone and expiry behavior |
| Duplicate use | The same code or entitlement is presented again | Usage limit enforced without blocking a valid customer |

Use boundary values rather than testing only obvious success cases. Include zero, one, maximum, and maximum-plus-one quantities where the rule has limits.

## Check calculations and receipts

- Confirm whether fixed and percentage discounts apply per item, per line, or to the whole basket.
- Verify rule order, rounding precision, tax basis, currency, and maximum discount behavior.
- Check that quantity changes, removed items, suspended sales, and reopened transactions recalculate correctly.
- Confirm the customer display, receipt, invoice, reports, and exported data show the same promotion name and amount.
- Prevent a manual price override from silently bypassing approval or hiding the original price.

## Test Offline POS and synchronization

- Disconnect the network and confirm which promotion rules remain available to the Offline POS.
- Record the rule version and validity period held by each till before the test.
- For Online/Offline POS deployments, update or expire a rule centrally, reconnect each till, and verify the new version arrives once.
- Test sales created during an outage for duplicate redemption, stale pricing, conflicting edits, and correct reconciliation after synchronization.
- Define a safe fallback when a till cannot verify a single-use coupon or customer entitlement.

## Control rollout and review

- Require a named owner and approver for each promotion and emergency change.
- Pilot on a limited till or location, then compare expected and actual redemptions, margin, tax, and tender totals.
- Monitor unusual manual discounts, repeated coupon failures, high-value overrides, rapid redemptions, and activity outside the intended period.
- Keep the approved rule, test evidence, deployment time, affected locations, rollback plan, and final reconciliation together.
- Remove or disable expired rules and verify they cannot be revived by an offline device or restored configuration.

[Posnic](https://www.posnic.com/) is offline-first open source POS and Billing Software for retail shops and restaurants. Review the public [Posnic/POS source repository](https://github.com/Posnic/POS) and test discount behavior in the exact version, tax setup, hardware, and Offline POS or Online/Offline POS deployment you plan to use. This checklist is operational guidance, not legal, tax, accounting, or pricing advice.
