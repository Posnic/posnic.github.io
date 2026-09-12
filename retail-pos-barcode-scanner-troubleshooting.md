# Retail POS Barcode Scanner Setup and Troubleshooting

Use this checklist to configure and diagnose barcode scanners without corrupting item selection, quantities, prices, or completed sales in a retail POS or Billing Software system.

## Record the intended setup

- Identify the scanner model, connection type, firmware, configured symbologies, and programming guide.
- Record whether the scanner acts as a keyboard, serial device, camera, or vendor-specific interface.
- Confirm the POS terminal, operating system, keyboard layout, application version, and target input field.
- Keep one known-good barcode for each format the shop actually uses, including weighted or price-embedded labels where applicable.

## Test one layer at a time

| Test | Evidence to collect | What it isolates |
| --- | --- | --- |
| Visual inspection | Printed digits, check digit, contrast, damage, curvature, and label size | Label quality and supported symbology |
| Plain-text scan | Exact characters captured in a text editor, including prefix and suffix | Scanner decoding, keyboard layout, and terminator configuration |
| POS item lookup | Captured code, selected item, unit, quantity, and price | Product data and POS lookup behavior |
| Repeated scan | Count after slow, fast, and accidental double scans | Debounce, focus, and quantity rules |
| Offline test | Lookup and sale behavior with the network unavailable | Local catalog availability and Offline POS dependencies |

## Check common failure modes

- If no characters appear, verify power, pairing, cable, USB port, device permissions, and the selected operating mode.
- If characters are wrong, compare the scanner and operating-system keyboard layouts and disable unwanted prefixes or formatting rules.
- If the code appears but the POS does nothing, verify focus, the required Enter or Tab suffix, minimum length, and lookup configuration.
- If the wrong item appears, search for duplicate barcodes, leading-zero changes, check-digit handling, unit variants, and stale local catalog data.
- If one scan adds multiple units, test the scanner trigger, suffix timing, application debounce, and quantity-increment policy.
- If only some labels fail, confirm that their symbology is enabled and that price-embedded, weight-embedded, or GS1 data is parsed intentionally.
- If camera scanning fails, test lighting, focus, permissions, orientation, and supported formats separately from dedicated scanner hardware.

## Protect sales and inventory

- Test in a training transaction or isolated register before changing production scanner programming.
- Do not edit a product barcode merely to make one faulty scanner appear to work.
- Confirm item name, variant, unit, tax, price, and quantity on screen before payment.
- Preserve the original label and captured scan when investigating a mismatch.
- For Online/Offline POS deployments, confirm catalog updates synchronize before relying on a newly assigned barcode.
- Reconcile any transaction affected by a wrong or duplicate scan instead of silently adjusting stock later.

## Acceptance record

Record the scanner, terminal, connection, tested barcode formats, offline result, failure cases, configuration backup, tester, date, and approval. Retest after scanner resets, driver changes, operating-system updates, POS upgrades, or catalog migrations.

[Posnic](https://www.posnic.com/) is offline-first open source POS and Billing Software for retail shops and restaurants. Review the public [Posnic/POS source repository](https://github.com/Posnic/POS) and its hardware documentation before claiming compatibility with a specific scanner or barcode format.
