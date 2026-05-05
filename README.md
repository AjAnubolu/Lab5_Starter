# Lab 5 - Starter

**Name:** Ajay Anubolu
**Partner:** none (solo)

## GitHub Pages
- Expose: https://ajanubolu.github.io/Lab5_Starter/expose.html
- Explore: https://ajanubolu.github.io/Lab5_Starter/explore.html

## Check Your Understanding

**1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not?**

No. The "message" feature spans many moving parts — composing text, hitting an API, server delivery, recipient receipt, UI updates. A unit test only covers one isolated function in memory, so it can't verify the end-to-end behavior of sending a message. This is better tested with an integration or end-to-end test that exercises the network and UI together. Unit tests would only be appropriate for the small helpers underneath (e.g. validating message text, formatting timestamps).

**2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?**

Yes. Enforcing an 80-character limit is a pure, self-contained piece of logic — given an input string, return a boolean (or truncate). It has no external dependencies, runs instantly, and the behavior is easy to enumerate (79 chars passes, 80 chars passes, 81 chars fails, empty string, non-string input). This is exactly what unit tests are designed for: small, deterministic functions with clear input/output.
