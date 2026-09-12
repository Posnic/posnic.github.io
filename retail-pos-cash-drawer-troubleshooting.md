# Retail POS Cash Drawer Troubleshooting

When a cash drawer does not open, protect the completed sale and the till audit trail before retrying. Diagnose the drawer, receipt-printer path, operating-system configuration, and POS authorization separately.

## Protect the transaction first

1. Confirm whether the sale completed and record the bill number, tender, operator, terminal, and time.
2. Do not repeat payment or recreate the sale just to trigger the drawer.
3. Use the documented manual-open process when cash is trapped, including manager approval and an audit note.
4. Count and reconcile the till after any forced opening, repeated kick, or uncertain transaction state.

## Isolate the failing layer

| Check | Evidence to collect | Interpretation |
| --- | --- | --- |
| Drawer key and mechanism | Key position, obstruction, latch movement, and cable condition | A drawer that cannot open mechanically needs hardware service before software testing. |
| Printer self-test | Printer status, interface, paper state, and self-test result | Many drawers connect through the receipt printer; a failed printer path can also prevent the drawer kick. |
| Printer test receipt | Driver, port, queue state, and output | A successful print narrows the fault to drawer wiring, kick command, pulse settings, or authorization. |
| Authorized POS open | Operator role, action used, configured printer, and visible error | Failure only for one role or workflow points to permissions or POS configuration. |
| Known-good comparison | Drawer, cable, printer port, and till used | Change one component at a time so the failed part is identifiable. |

## Check common failure modes

- Put the key in the normal electronic-operation position and remove objects blocking the tray.
- Reseat the modular cable at both ends; do not assume a telephone cable has the correct wiring.
- Confirm the drawer is connected to the configured receipt printer's drawer port.
- Verify the printer model, driver, connector selection, kick pin, pulse timing, and cash-drawer command.
- Test whether the drawer should open for cash only, for selected tenders, or through an authorized manual-open action.
- During Offline POS operation, verify that local opening does not depend on a cloud response.
- Stop repeated kick attempts if the solenoid, cable, or printer port becomes hot or behaves intermittently.

## Recover and reconcile

After repair, run one controlled cash sale and one authorized manual-open test. Confirm the drawer does not open for disallowed tenders, failed payments, cancelled sales, or unauthorized users. Reconcile cash and retain the incident evidence according to shop policy.

[Posnic](https://www.posnic.com/) is offline-first open source POS and Billing Software for retail shops and restaurants. Review the public [Posnic/POS source repository](https://github.com/Posnic/POS), its [hardware matrix](https://github.com/Posnic/POS/blob/develop/docs/HARDWARE_MATRIX.md), and the exact Offline POS or Online/Offline POS deployment before claiming compatibility with a drawer or printer model.
