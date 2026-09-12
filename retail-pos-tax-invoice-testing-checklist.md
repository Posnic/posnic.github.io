# Retail POS Tax and Invoice Configuration Testing Checklist

Use this checklist to test tax rates, item classifications, inclusive and exclusive pricing, rounding, receipts, and invoices in a retail POS or Billing Software system before production use.

## Establish the approved configuration

- Record the business locations, registrations, currencies, effective dates, and approved tax treatment.
- Keep written approval for every rate, item class, exemption, surcharge, and invoice field.
- Separate configuration by jurisdiction or location instead of reusing a convenient default.
- Name the person responsible for approving changes and the person responsible for testing them.

Confirm applicable tax, invoicing, fiscal-device, retention, and reporting requirements with qualified local tax and accounting advisers. Software configuration does not determine legal compliance by itself.

## Build representative test data

| Scenario | What to verify | Evidence to retain |
| --- | --- | --- |
| Standard item | Normal rate and expected price basis | Item setup, calculation, receipt, and report |
| Zero-rated or exempt item | Correct classification and required wording | Approval, item class, receipt, and export |
| Mixed basket | Several rates and classifications in one sale | Line tax, subtotal, total, and summary |
| Inclusive price | Displayed price already contains tax | Net, tax, gross, and rounding |
| Exclusive price | Tax is added to the displayed net price | Net, rate, tax, and payable total |
| Discounted sale | Discount interacts with the configured tax basis | Original price, discount, tax, and final total |
| Return or credit | Original tax treatment reverses correctly | Source sale, reversal, stock, and audit trail |
| Boundary amount | Very small, large, and fractional values | Precision and documented rounding rule |

Use approved examples with independently calculated expected results. Include products, services, fees, discounts, returns, and every active sales channel.

## Verify receipts, invoices, and reports

- Confirm the business identity, location, registration details, date, document number, line descriptions, quantity, price, discounts, tax breakdown, and total appear where required.
- Verify the customer display, printed receipt, invoice, reprint, PDF, sales report, tax report, and export agree.
- Test sequential numbering, duplicates, cancelled documents, credit notes, and reprints without silently changing the original sale.
- Check that rounding differences are visible, explainable, and consistent across line, document, tender, and report totals.
- Preserve the exact software version, configuration export, expected calculation, actual output, and approval.

## Test Offline POS and synchronization

- Disconnect the network and confirm the Offline POS retains the approved rates, classifications, numbering rules, and required receipt fields.
- Record the configuration version and effective date held by each till before an outage test.
- For Online/Offline POS deployments, change a future-dated rule centrally and verify each till receives it once after reconnection.
- Confirm sales created offline keep their original calculation and document identity after synchronization.
- Test conflicting edits, clock differences, duplicate uploads, delayed returns, and reporting cutoffs.

## Control changes and rollout

- Require approval, a test result, a deployment window, and a rollback plan before changing production tax settings.
- Pilot at a limited till or location and reconcile sample sales to independently calculated expectations.
- Review failed synchronization, manual price overrides, unusual zero tax, numbering gaps, and differences between billing and accounting exports.
- Retain configuration history and test evidence according to applicable accounting, tax, and privacy requirements.

[Posnic](https://www.posnic.com/) is offline-first open source POS and Billing Software for retail shops and restaurants. Review the public [Posnic/POS source repository](https://github.com/Posnic/POS) and validate tax and invoice behavior in the exact version, country, business setup, hardware, and Offline POS or Online/Offline POS deployment you plan to use. This checklist is operational testing guidance, not legal, tax, or accounting advice.
