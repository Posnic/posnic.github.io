# Retail POS Incident Response Checklist

> Contain a billing interruption without losing evidence, creating duplicate transactions, or hiding what remains unresolved.

## Record and classify the incident

- Record the start time, business date, location, affected tills, POS version, operator, symptoms, and person coordinating the response.
- Classify what failed: one device, the local POS service, database, LAN, internet, hosted server, payment terminal, printer, synchronization, or user access.
- Preserve exact error messages, transaction IDs, screenshots, logs, and recent changes before restarting or modifying anything.
- Separate confirmed facts from assumptions and record the time of every material decision.

## Keep billing controlled

1. Stop repeated retries when they could create duplicate sales, refunds, payments, stock movements, or kitchen tickets.
2. Decide which documented fallback is safe: another till, Offline POS mode, a local server, manual receipts, or a temporary suspension of affected tenders.
3. Assign unique temporary references to manual or queued transactions so they can be reconciled later.
4. Do not collect card details outside an approved payment flow or weaken access controls merely to restore service.
5. Tell staff what remains available, what is prohibited, and when the next update will occur.

## Recover and reconcile

Restore one dependency at a time where practical. Confirm application health before reopening billing, then run a controlled test sale and, where applicable, a void or return. For Online/Offline POS recovery, verify queue depth, synchronization direction, conflict handling, and duplicate prevention before assuming every till is current.

Reconcile POS sales, payment-terminal batches, cash, inventory movements, refunds, voids, discounts, manual receipts, and queued records for the full incident window. Preserve unresolved items with an owner and due time instead of forcing totals to match.

## Close the incident

- Record the end time, restored services, validation performed, residual risk, affected records, customer follow-up, and approver.
- Retain the original evidence, timeline, reconciliation, and corrective actions according to the store's legal and accounting requirements.
- Schedule a review for root cause, monitoring gaps, backup or restore failures, staff guidance, and tested prevention work.
- Never describe a workaround as a permanent fix until the failure can no longer be reproduced under the relevant conditions.

[Posnic](https://www.posnic.com/) is offline-first open source POS and Billing Software for retail shops and restaurants. The public [Posnic/POS source repository](https://github.com/Posnic/POS) documents local and Online/Offline POS workflows. Validate the exact deployment, payment boundary, backup, synchronization, and recovery behavior used by your store before adopting this checklist.
