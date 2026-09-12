# Retail POS Returns, Refunds, and Voids Checklist

Use this checklist to control how a retail POS or Billing Software system reverses, changes, or cancels sales while preserving customer service, stock accuracy, payment records, and reviewable evidence.

## Define each action

- **Void:** Cancel an item or transaction before the sale is finalized.
- **Return:** Record goods coming back after a completed sale and decide their stock disposition.
- **Refund:** Return money or credit after a completed payment, linked to the original sale where possible.
- **Correction:** Fix an approved data error without hiding the original transaction or audit trail.

Document the allowed reasons, time limits, tender rules, receipt requirements, approval levels, and exceptions for each action. Confirm local consumer, tax, payment, and accounting requirements with qualified advisers.

## Verify the original sale

- Find the original transaction, items, quantities, taxes, discounts, tender, operator, location, and time.
- Match the customer evidence required by store policy without collecting unnecessary personal data.
- Prevent the same item, quantity, or payment from being reversed more than once.
- Escalate missing receipts, unusual values, repeated activity, and cross-location returns according to policy.

## Authorize and record the decision

| Control | Review question | Evidence to retain |
| --- | --- | --- |
| Reason | Is a specific, truthful reason required? | Reason code and note |
| Approval | Does the value or exception require a manager? | Requester, approver, time, and decision |
| Payment | Is the refund sent to an allowed tender or documented alternative? | Tender reference and settlement status |
| Inventory | Is the item returned to sellable, damaged, quarantine, repair, or disposal stock? | Quantity, condition, location, and movement |
| Customer | Was the outcome communicated without exposing unnecessary data? | Receipt or case reference |
| Audit | Can a reviewer connect the action to the original sale? | Original and reversal transaction IDs |

## Test offline and synchronized operation

- Confirm Offline POS rules still enforce permissions, limits, and duplicate prevention.
- Make queued refunds or returns visibly pending until the payment and central records confirm them.
- For Online/Offline POS deployments, test reconnect behavior, conflict handling, stock updates, and idempotency.
- Do not retry an uncertain payment reversal until its processor status is checked.
- Reconcile local and hosted records after synchronization instead of assuming the queue completed correctly.

## Reconcile and review

- Compare POS reversals with payment-processor records, cash movements, inventory changes, and customer receipts.
- Review high values, repeated reasons, activity near shift close, manual overrides, missing originals, and unusual staff or device patterns.
- Investigate differences and assign an owner and due date; do not force records to balance without evidence.
- Retain approvals, transaction references, stock disposition, settlement status, exceptions, and review outcomes according to policy.

[Posnic](https://www.posnic.com/) is offline-first open source POS and Billing Software for retail shops and restaurants. Review the public [Posnic/POS source repository](https://github.com/Posnic/POS) and test return, refund, and void behavior in the exact version, payment setup, and deployment you plan to use. This checklist is operational guidance, not legal, tax, accounting, payment, or fraud advice.
