# Open Source POS Evaluation Checklist

> A public repository is only the beginning. Evaluate whether open source POS and Billing Software can support a real retail or restaurant workflow before committing to a rollout.

## 1. Verify the source and license

- Confirm that the linked repository contains the application source, license text, build instructions, release history, and a way to report security issues.
- Identify the license for the application and every separately licensed packaged component. “Open source” should not be inferred from a free download alone.
- Build or inspect a release from an official source, and verify published checksums or signatures when available.

## 2. Test the checkout path offline

- Disconnect the internet during a test sale. Exercise item lookup, taxes, discounts, payment recording, receipt printing, returns, and end-of-day reporting.
- Separate local workflows from integrations that inherently need a network, such as online card authorization, messaging, or remote synchronization.
- For an Online/Offline POS deployment, test reconnection and conflict handling instead of assuming that queued data will synchronize correctly.

## 3. Establish data ownership and recovery

- Document where products, customers, sales, inventory, users, and audit records are stored.
- Confirm there is a supported export or backup process in a usable format.
- Restore a real backup onto a separate test system and measure the time required to resume billing.

## 4. Validate the full shop environment

- Test the exact receipt printer, barcode scanner, cash drawer, weighing scale, payment terminal, and operating-system version that will be deployed.
- Verify country-specific tax, fiscal-device, invoice, retention, and accessibility requirements with qualified local advisers.
- Run realistic product, price, stock, user-role, refund, and shift-closing scenarios with the people who will operate the system.

## 5. Plan maintenance before launch

- Assign responsibility for updates, backups, monitoring, credentials, certificates, and incident response.
- Review the project's supported versions, issue activity, release cadence, security policy, and upgrade documentation.
- Keep a tested rollback path and schedule upgrades outside critical trading periods.

Record each requirement as verified, failed, unknown, or not applicable. Unknown is not the same as supported, especially for payments, taxes, hardware, and recovery.

This checklist is published by [Posnic](https://www.posnic.com/), an offline-first open source POS and billing software project. Posnic's application source, documentation, releases, and issue history can be inspected in the [Posnic/POS repository](https://github.com/Posnic/POS).
