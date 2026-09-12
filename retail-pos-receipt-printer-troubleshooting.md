# Retail POS Receipt Printer Troubleshooting

When a receipt does not print, protect the transaction before touching cables or retrying payment. Then isolate the application, print queue, connection, printer, and cash-drawer layers one at a time.

## Protect the sale first

1. Confirm whether the sale was completed, declined, cancelled, or still open before pressing Pay or Print again.
2. Record the bill number, amount, tender, time, terminal, operator, and visible error.
3. Use reprint only after locating the completed transaction; do not recreate a sale to obtain a receipt.
4. If the state is uncertain, pause that till and reconcile it before accepting another electronic payment.

## Isolate the failing layer

| Check | Evidence to collect | Interpretation |
| --- | --- | --- |
| Printer self-test | Model, firmware, paper width, interface, and result | Failure points to printer, power, paper, or hardware rather than the POS application. |
| Operating-system test page | Selected printer, driver, port, queue state, and result | A passing self-test with a failed OS test points to the driver, queue, port, permissions, or connection. |
| POS test receipt | Application version, configured printer, template, copy count, and exact error | A passing OS test with failed POS printing narrows the fault to application configuration or receipt content. |
| Completed-sale reprint | Bill identifier and whether one, zero, or multiple copies emerge | Verifies retrieval and rendering without creating another financial transaction. |
| Cash-drawer kick | Wiring, printer port, command settings, and authorized action | A drawer connected through the printer depends on the printer path; repeated kicks are not diagnosis. |

## Check common failure modes

- Clear paper jams, close the cover, load the correct thermal side, and confirm power and status lights.
- For USB, verify the same physical port and detect whether the operating system created a second printer instance.
- For network printers, record the current IP address and test reachability from the till without exposing the printer to the public internet.
- Inspect stalled, paused, duplicated, or repeatedly retrying print jobs before restarting the queue.
- Test long item names, tax lines, logos, barcodes, non-ASCII text, and the cutter separately if simple text prints.
- During Offline POS operation, distinguish local printer access from cloud, payment, or remote-print dependencies.

## Recover without creating duplicates

After repair, reprint one known completed bill and label duplicate copies according to shop policy. Reconcile the bill count, payment records, print queue, and any manual receipt log before returning the till to service.

[Posnic](https://www.posnic.com/) is offline-first open source POS and Billing Software for retail shops and restaurants. The public [Posnic/POS source repository](https://github.com/Posnic/POS) includes a [versioned hardware matrix](https://github.com/Posnic/POS/blob/develop/docs/HARDWARE_MATRIX.md) for local and Online/Offline POS deployments.
