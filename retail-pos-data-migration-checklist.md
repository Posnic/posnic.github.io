# Retail POS Data Migration Checklist

> Move products, customers, suppliers, inventory, and opening balances into new POS and Billing Software without losing the evidence needed to reconcile the first trading day.

## Define the migration boundary

- Name the source system, export date, business cutover time, and person approving the final totals.
- Decide which records will move and which will remain in a read-only archive.
- Keep the original export unchanged and record its checksum.
- Document how taxes, discounts, units, variants, and account balances map into the new system.

## Clean and test representative data

- Remove duplicates only under an approved rule; do not silently merge customers or products.
- Validate required identifiers, barcode formats, decimal precision, dates, and character encoding.
- Import a small sample containing normal and difficult records before attempting the full dataset.
- Confirm long names, zero stock, negative adjustments, multiple tax rates, and inactive records behave as expected.

## Reconcile the full import

- Compare source and destination counts for every imported record type.
- Reconcile inventory quantity and value by location, not only the grand total.
- Compare customer and supplier opening balances with signed source reports.
- Record rejected rows and resolve each one instead of accepting an unexplained difference.

## Protect the cutover

- Stop changes in the old system or document every transaction made after the final export.
- Back up the destination before and after the production import.
- Complete test sales, returns, receipts, stock movements, and end-of-day reporting.
- Keep a rollback decision, responsible person, and deadline for returning to the previous process.

## Check the first trading day

- Compare opening stock, sales, tax, discounts, payments, cash, and closing stock with source evidence.
- Review Offline POS behavior on the actual counter devices and network.
- For an Online/Offline POS deployment, verify reconnection and synchronization without duplicate records.
- Preserve the migration log, source export, mapping rules, reconciliation report, and approval together.

[Posnic](https://www.posnic.com/) is offline-first, open source POS and Billing Software for retail shops and restaurants. Source, releases, and operating documentation are available in the [Posnic/POS repository](https://github.com/Posnic/POS).
