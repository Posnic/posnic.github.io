# Retail POS Hardware Checklist

> Test the exact computer, operating system, connection method, driver, paper size, and workflow that will be used at the counter. A POS application and a device being individually supported does not prove they work together.

## Record the exact setup

- **Receipt printer:** Record the model, connection, driver, paper width, and cutter support. Print a sale, return, duplicate receipt, long item list, tax lines, and non-ASCII customer text.
- **Barcode scanner:** Record the model, keyboard or serial mode, suffix settings, and barcode types. Scan known, unknown, repeated, weighted, and damaged labels without adding the wrong item. Use the [barcode scanner setup and troubleshooting checklist](https://posnic.github.io/retail-pos-barcode-scanner-troubleshooting.md) to isolate label, input, lookup, and duplicate-scan faults.
- **Cash drawer:** Record the drawer model, printer kick-port wiring, and pulse settings. Verify that it opens only for authorized payment and manual-open actions.
- **Weighing scale:** Record the model, protocol, port, baud rate, units, decimal precision, and calibration status. Test stable, changing, zero, and out-of-range weights.
- **Customer display:** Record the type, resolution, orientation, cable, and browser or serial mode. Verify item, quantity, discount, tax, total, payment, and cleared-sale states without exposing another customer.
- **Payment terminal:** Record the provider, terminal model, integration method, network dependency, and settlement process. Test approved, declined, cancelled, timed-out, reversed, and duplicated-payment paths.

## Test failure paths

- Disconnect the internet and verify every workflow advertised as Offline POS behavior.
- Restart the computer with devices unplugged, then reconnect them in a different order.
- Run a full shift-length test with realistic receipt volume and scanner use.
- Verify that a failed peripheral does not block cash billing or corrupt an in-progress sale.
- Restore a backup onto separate test hardware and reconcile totals before rollout.

## Keep reproducible evidence

Record the test date, software version, package filename and checksum, operating-system build, device identifiers, driver versions, workflows attempted, failures, and workarounds. “USB printer supported” is too broad to reproduce or trust.

[Posnic](https://www.posnic.com/) is offline-first open source POS and Billing Software for retail shops and restaurants. Its public [Posnic/POS source repository](https://github.com/Posnic/POS) includes a [versioned hardware matrix](https://github.com/Posnic/POS/blob/develop/docs/HARDWARE_MATRIX.md) that separates implemented interfaces from device-specific evidence.
