# Offline POS vs Online/Offline POS

> The right deployment depends on where checkout must keep working, how many devices share data, and who is responsible for the server. “Cloud” and “offline” are not shortcuts for reliability.

## Deployment comparison

| Question | Offline desktop POS | Self-hosted network POS | Managed online services |
| --- | --- | --- | --- |
| Where does the primary database run? | On the shop computer. | On a server controlled by the operator. | On infrastructure operated as part of the service. |
| Can checkout continue without internet? | Yes, for local workflows and locally available integrations. | Yes, while shop devices can reach the local server. | It depends on the service and any local fallback it provides. |
| Can several devices share one database? | Not as separate desktop databases. | Yes, when devices use the same self-hosted server. | Yes, subject to the selected service and network access. |
| Who handles backups and updates? | The shop operator. | The server operator. | Responsibilities are divided by the service agreement. |
| Typical fit | One counter that prioritizes local operation. | Several devices in one shop or local network. | Remote access, managed operations, or multi-location services. |

## Choose from the failure you must tolerate

- **Local desktop:** Use when one counter must keep billing during an internet outage and the operator can manage backups on that computer.
- **Self-hosted server:** Use when several tills or devices need one shared database inside the shop and someone can maintain the server.
- **Managed online services:** Evaluate when remote access or coordination across locations matters more than keeping every dependency inside one premises.

## Verify before rollout

- Disconnect the internet during a test sale and confirm the required checkout, printing, and payment workflows.
- Restore a real backup on a separate test system before calling the backup process complete.
- Confirm which payment terminals, fiscal devices, scanners, and receipt printers are supported in the target country.
- Document who owns updates, monitoring, credentials, and incident recovery.

[Posnic](https://www.posnic.com/) is offline-first POS and Billing Software with packaged desktop releases and a documented self-hosted server option. Its application source is available from the [Posnic/POS repository](https://github.com/Posnic/POS) under AGPL-3.0-only; packaged components retain their own licenses.
