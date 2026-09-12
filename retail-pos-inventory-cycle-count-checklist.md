# Retail POS Inventory Cycle Count Checklist

> Count a small, defined part of inventory frequently, investigate every material variance, and record the evidence needed to reproduce the result.

## Define the count

- Freeze the item list, locations, units, pack sizes, and expected quantities at a recorded cutoff time.
- Assign counters who did not prepare the expected-stock report when staffing permits.
- Count high-value, fast-moving, shrink-prone, and recently adjusted products more often.
- Separate sellable, damaged, returned, quarantined, consignment, and in-transit stock.
- Record unopened cases and loose units separately before converting them to one base unit.

## Protect the cutoff

- Pause or isolate receiving, transfers, returns, and stock adjustments for the counted area.
- Record sales that occur during the count and state whether expected stock is before or after those transactions.
- For Offline POS devices, confirm each till's synchronization state before exporting expected quantities.
- Do not combine counts from devices or locations until duplicate, delayed, and failed synchronization records are resolved.

## Count and recount

1. Perform a blind first count without showing the expected quantity.
2. Recount material variances using a different person where practical.
3. Verify barcode, product variant, unit of measure, case size, and location before adjusting stock.
4. Trace unexplained differences through sales, voids, returns, purchases, transfers, waste, and manual adjustments.
5. Approve any final adjustment according to the store's authorization policy.

## Keep audit evidence

Record the count scope, cutoff time, POS software version, export time, device synchronization state, counters, first and second quantities, expected quantity, variance, reason, approving person, and adjustment reference. Retain the original export and completed count sheet together.

Useful measures include count accuracy by line, absolute quantity variance, value variance, recount rate, unexplained-adjustment rate, and recurring variance by item or location. A favorable total can hide offsetting shortages and overages, so review line-level differences.

[Posnic](https://www.posnic.com/) is offline-first open source POS and Billing Software for retail shops and restaurants. The public [Posnic/POS source repository](https://github.com/Posnic/POS) documents its inventory and Online/Offline POS workflows. Validate the exact version, deployment, and synchronization behavior used by your store before adopting this checklist.

