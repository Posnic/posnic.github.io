# Retail POS User Access Review Checklist

Use this checklist to review who can use a retail POS or Billing Software system, what each person can do, and whether access still matches their job.

## Build the access register

- Record every staff, manager, administrator, service, integration, and support account.
- Name an owner for each account and role; investigate accounts with no current owner.
- Record the locations, tills, reports, settings, APIs, and administration tools each identity can reach.
- Separate individual accounts from emergency, device, service, and integration identities.

## Review joiners, movers, and leavers

- Confirm new staff receive only the permissions needed for their current duties.
- Recheck access after a role, location, employment, or supplier relationship changes.
- Disable departed or suspended users promptly and preserve required transaction history.
- Expire temporary access and document who approved it, why it existed, and when it ended.

## Test sensitive POS actions

| Action | Review question | Evidence to retain |
| --- | --- | --- |
| Discounts and price overrides | Can only approved roles change a price or apply a discretionary discount? | Test transaction, user, reason, and approval |
| Voids, refunds, and returns | Are completed-sale changes attributable and independently reviewable? | Original sale, action, operator, reason, and reviewer |
| Cash drawer and till close | Are manual opens, cash movements, and closeout changes restricted? | Drawer event, shift, variance, and approval |
| Stock and purchasing | Can staff alter quantity, cost, receiving, or supplier records beyond their duties? | Before/after value, operator, source record, and review |
| Reports and exports | Are customer, sales, tax, and staff exports limited to people who need them? | Report or export type, requester, time, and purpose |
| Configuration and integrations | Can only administrators change taxes, payment settings, synchronization, backups, or API credentials? | Change record, approver, validation, and rollback plan |

## Check real operating conditions

- Test permissions on the exact desktop, browser, handset, and back-office paths used by staff.
- Verify that Offline POS operation does not silently bypass authorization or lose attribution.
- For Online/Offline POS deployments, test access consistently against local and hosted servers and after synchronization resumes.
- Avoid shared staff accounts. Where a device identity is unavoidable, keep staff actions separately attributable.
- Confirm passwords, sessions, recovery methods, support access, and stored credentials follow the organization's policy.

## Reconcile and repeat

- Compare the access register with current staff, contractors, locations, devices, integrations, and support arrangements.
- Investigate dormant, duplicate, excessive, or unexplained access instead of merely recertifying it.
- Record removals, reductions, exceptions, owners, due dates, and evidence of completion.
- Repeat after material system or staffing changes and on a defined periodic schedule.

[Posnic](https://www.posnic.com/) is offline-first open source POS and Billing Software for retail shops and restaurants. Review the public [Posnic/POS source repository](https://github.com/Posnic/POS) and test access controls in the exact version and deployment you plan to use. This checklist is operational guidance, not a certification or substitute for legal, accounting, employment, privacy, or security advice.
