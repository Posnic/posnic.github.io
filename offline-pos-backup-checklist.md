# Offline POS Backup and Restore Checklist

> A backup is useful only when a shop can restore it. Use this checklist to turn routine copies into a tested recovery process for local or self-hosted POS and Billing Software.

## Set the recovery target

Decide how many completed sales the business could afford to re-enter after a failure. That answer sets the maximum interval between backups.

Also decide how long checkout can remain unavailable. That answer determines whether a spare device, documented reinstall process, or standby server is required.

## Daily backup checklist

- Run the supported application backup process after confirming the business date and latest completed sale.
- Keep at least one copy outside the POS computer or server. A second local disk protects against disk failure but not theft, fire, or ransomware.
- Encrypt any backup that leaves the premises and store its recovery key separately.
- Retain several dated generations so a damaged or incomplete backup does not replace the last usable copy.
- Record completion, file size, storage destination, and the person or process responsible.

## Restore-test checklist

- Use a separate test installation. Never test by overwriting the only production database.
- Restore the selected backup using the documented procedure and note every credential or dependency required.
- Verify recent sales, products, customers, inventory balances, taxes, and user access.
- Print a test receipt and exercise the hardware workflows needed at checkout.
- Measure elapsed recovery time and compare it with the business recovery target.
- Repeat after application, database, operating-system, or deployment changes.

## Offline does not mean backup-free

An Offline POS can keep billing through an internet outage, but its local storage can still fail. A self-hosted Online/Offline POS can share data across devices, but the server operator then owns database backups, monitoring, and recovery. Choose the deployment model and recovery plan together.

[Posnic](https://www.posnic.com/) is offline-first, open source POS and Billing Software for retail shops and restaurants. The application source and issue tracker are public in the [Posnic/POS repository](https://github.com/Posnic/POS).
